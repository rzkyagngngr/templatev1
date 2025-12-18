export type EncryptResult = {
  ivB64: string;
  cipherB64: string;
};

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

function bytesToB64(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i += 1) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

function b64ToBytes(b64: string): Uint8Array {
  const binary = atob(b64);
  const out = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) out[i] = binary.charCodeAt(i);
  return out;
}

export function wipeBytes(bytes: Uint8Array): void {
  bytes.fill(0);
}

export async function sha256(data: Uint8Array): Promise<Uint8Array> {
  const hash = await crypto.subtle.digest('SHA-256', data);
  return new Uint8Array(hash);
}

/**
 * NOTE: `credentialRawId` is an identifier (not secret). This is suitable for
 * in-memory session encryption only (obfuscation against casual access), not as
 * a long-term cryptographic secret.
 */
export async function deriveAesGcmKeyFromCredentialRawId(
  credentialRawId: Uint8Array,
  context: string,
): Promise<CryptoKey> {
  const contextBytes = textEncoder.encode(context);
  const material = new Uint8Array(credentialRawId.length + contextBytes.length);
  material.set(credentialRawId, 0);
  material.set(contextBytes, credentialRawId.length);

  const digest = await sha256(material);

  // Import as raw AES-256 key material.
  const key = await crypto.subtle.importKey(
    'raw',
    digest,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt'],
  );

  wipeBytes(digest);
  wipeBytes(material);
  return key;
}

export async function encryptJson(key: CryptoKey, value: unknown): Promise<EncryptResult> {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const plaintext = textEncoder.encode(JSON.stringify(value));

  const cipher = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, plaintext);

  wipeBytes(plaintext);
  return {
    ivB64: bytesToB64(iv),
    cipherB64: bytesToB64(new Uint8Array(cipher)),
  };
}

export async function decryptJson<T>(key: CryptoKey, payload: EncryptResult): Promise<T> {
  const iv = b64ToBytes(payload.ivB64);
  const cipherBytes = b64ToBytes(payload.cipherB64);

  const plainBuf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, cipherBytes);
  const json = textDecoder.decode(plainBuf);

  wipeBytes(iv);
  wipeBytes(cipherBytes);

  return JSON.parse(json) as T;
}
