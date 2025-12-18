import React, { useCallback, useMemo, useState } from 'react';
import { startAuthentication } from '@simplewebauthn/browser';
import { deriveAesGcmKeyFromCredentialRawId, encryptJson, decryptJson, type EncryptResult } from './cryptoEngine';

type GatekeeperState =
  | { status: 'locked' }
  | { status: 'unlocking' }
  | { status: 'unlocked'; key: CryptoKey };

type Props = {
  /**
   * A stable RP ID (domain). In dev, localhost is typical.
   * If omitted, we attempt to infer from location.hostname.
   */
  rpId?: string;

  /**
   * Children render only after successful WebAuthn ceremony.
   */
  children: React.ReactNode;
};

/**
 * SecurityGatekeeper
 *
 * What this DOES:
 * - Requires a user-verifying WebAuthn ceremony before rendering children.
 * - Derives an in-memory AES-GCM key from the resulting credential rawId.
 * - Enables encrypting/decrypting sensitive in-memory state (no localStorage).
 *
 * What this CANNOT do (in a static/client-only app):
 * - It cannot prevent the JS bundle from being downloaded/viewed by an attacker.
 * - It cannot provide server-grade verification without a server.
 */
export default function SecurityGatekeeper({ rpId, children }: Props) {
  const [gate, setGate] = useState<GatekeeperState>({ status: 'locked' });
  const [encryptedState, setEncryptedState] = useState<EncryptResult | null>(null);

  const effectiveRpId = rpId ?? window.location.hostname;

  const toBase64Url = (bytes: Uint8Array) => {
    let binary = '';
    for (let i = 0; i < bytes.length; i += 1) binary += String.fromCharCode(bytes[i]);
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
  };

  const fromBase64Url = (b64url: string) => {
    const padded = b64url.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(b64url.length / 4) * 4, '=');
    const binary = atob(padded);
    return Uint8Array.from(binary, (c) => c.charCodeAt(0));
  };

  const unlock = useCallback(async () => {
    try {
      setGate({ status: 'unlocking' });

      // In a production system, `optionsJSON` must come from a server-generated challenge
      // and the response must be verified server-side. Here we generate a random challenge
      // purely to trigger the authenticator UX.
      const challengeBytes = crypto.getRandomValues(new Uint8Array(32));
      const challengeB64Url = toBase64Url(challengeBytes);

      const authResp = await startAuthentication({
        challenge: challengeB64Url,
        timeout: 60_000,
        rpId: effectiveRpId,
        userVerification: 'required',
      });

      // Derive key from credential rawId (identifier). Use for in-memory encryption only.
      const rawIdBytes = fromBase64Url(authResp.rawId);
      const key = await deriveAesGcmKeyFromCredentialRawId(rawIdBytes, `gatekeeper:${effectiveRpId}`);

      setGate({ status: 'unlocked', key });
    } catch (e) {
      setGate({ status: 'locked' });
      throw e;
    }
  }, [effectiveRpId]);

  // Example vault: keep app-level “sensitive state” encrypted in memory until unlocked.
  const vaultApi = useMemo(() => {
    if (gate.status !== 'unlocked') {
      return {
        isUnlocked: false as const,
        encryptInMemory: async (_value: unknown) => {
          throw new Error('Vault is locked');
        },
        decryptFromMemory: async <T,>() => {
          throw new Error('Vault is locked');
        },
      };
    }

    return {
      isUnlocked: true as const,
      encryptInMemory: async (value: unknown) => {
        const payload = await encryptJson(gate.key, value);
        setEncryptedState(payload);
        return payload;
      },
      decryptFromMemory: async <T,>() => {
        if (!encryptedState) return null;
        return decryptJson<T>(gate.key, encryptedState);
      },
    };
  }, [gate, encryptedState]);

  if (gate.status !== 'unlocked') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-6">
        <div className="max-w-lg w-full backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-8">
          <h1 className="text-2xl font-bold text-gray-900">Locked</h1>
          <p className="text-gray-600 mt-2">
            Use your device Passkey (biometrics) to unlock.
          </p>

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => void unlock().catch(() => {})}
              disabled={gate.status === 'unlocking'}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-lg shadow-blue-500/20 disabled:opacity-60"
            >
              {gate.status === 'unlocking' ? 'Unlocking…' : 'Unlock with Passkey'}
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-white/60 bg-white/40 p-4">
            <p className="text-sm text-gray-600">
              Note: In a purely static build, JavaScript must still be downloaded by the browser. This gatekeeper
              prevents the UI from rendering until user verification, and can keep sensitive *data* encrypted in
              memory.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Provide vault API via context if desired; for now render children when unlocked.
  return <>{children}</>;
}

// HOC requested by spec: holds render until Passkey is verified.
export function withVault<P>(Component: React.ComponentType<P>) {
  return function VaultWrapped(props: P) {
    return (
      <SecurityGatekeeper>
        <Component {...props} />
      </SecurityGatekeeper>
    );
  };
}
