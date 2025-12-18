import React, { useState } from 'react';
import { Shield, Lock, Unlock, Key, Eye, EyeOff } from 'lucide-react';

/**
 * SecurityDemo - Shows how the Passkey protection works
 * 
 * How it works:
 * 1. User visits your app
 * 2. SecurityGatekeeper shows lock screen
 * 3. User clicks "Unlock with Passkey"
 * 4. Browser prompts for biometrics (Face ID, Touch ID, Windows Hello, etc.)
 * 5. Once verified, your app unlocks and renders
 * 6. The credential.rawId is used to derive an AES-GCM key in memory
 * 7. You can use this key to encrypt/decrypt sensitive data in memory only
 * 
 * Important Notes:
 * - The key exists ONLY in memory (volatile)
 * - No data is stored in localStorage/sessionStorage
 * - The key is derived from your biometric hardware signature
 * - Each session requires re-authentication
 */
export default function SecurityDemo() {
  const [secretData, setSecretData] = useState('');
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <nav className="flex text-gray-600 text-sm mb-3">
            <span className="hover:text-gray-900 cursor-pointer transition">Dashboard</span>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-semibold">Security Demo</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900">🔐 Security Demo</h1>
          <p className="text-gray-600 mt-2">Your app is protected by hardware biometrics (Passkey)</p>
        </div>

        {/* Success Banner */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-green-400/20 to-green-600/5 border border-green-200/40 rounded-3xl shadow-xl shadow-black/5 p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-green-500 text-white">
              <Unlock size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">✅ Application Unlocked</h2>
              <p className="text-gray-600 text-sm">You successfully authenticated with your device biometrics</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Your Security Works</h2>
          
          <div className="space-y-4">
            {[
              {
                icon: Lock,
                title: '1. App Starts Locked',
                desc: 'When users visit your app, SecurityGatekeeper blocks all content',
                color: 'from-red-400 to-red-600'
              },
              {
                icon: Shield,
                title: '2. Biometric Challenge',
                desc: 'User clicks "Unlock with Passkey" → Browser requests Face ID / Touch ID / Windows Hello',
                color: 'from-blue-400 to-blue-600'
              },
              {
                icon: Key,
                title: '3. Key Derivation',
                desc: 'The credential.rawId from your hardware generates a unique AES-256-GCM key',
                color: 'from-purple-400 to-purple-600'
              },
              {
                icon: Unlock,
                title: '4. App Unlocks',
                desc: 'Your entire React app renders. The key stays in memory for encrypting sensitive data',
                color: 'from-green-400 to-green-600'
              }
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 border border-white/40">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} text-white flex-shrink-0`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Encryption Example */}
        <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">💾 In-Memory Encryption Example</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Sensitive Data (e.g., API keys, tokens, user secrets)
              </label>
              <input
                type={showSecret ? 'text' : 'password'}
                value={secretData}
                onChange={(e) => setSecretData(e.target.value)}
                placeholder="Enter sensitive data..."
                className="w-full px-4 py-3 rounded-2xl border border-white/60 bg-white/60 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowSecret(!showSecret)}
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold shadow-lg shadow-blue-500/20 flex items-center gap-2"
              >
                {showSecret ? <EyeOff size={20} /> : <Eye size={20} />}
                {showSecret ? 'Hide' : 'Show'}
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
              <p className="text-sm text-gray-700">
                <strong>🔑 How to use the encryption key:</strong>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                The <code className="px-2 py-1 bg-white/60 rounded">SecurityGatekeeper</code> component already derives 
                an AES-GCM key from your Passkey. To encrypt sensitive data in your app:
              </p>
              <pre className="mt-3 p-3 bg-white/60 rounded-xl text-xs overflow-x-auto">
{`// Import the crypto utilities
import { encryptJson, decryptJson } from './security/cryptoEngine';

// Inside your component (after Gatekeeper unlocked):
const encryptedData = await encryptJson(key, {
  apiKey: 'secret_key_123',
  userToken: 'xyz789'
});

// Later, decrypt it:
const decrypted = await decryptJson(key, encryptedData);
console.log(decrypted.apiKey); // 'secret_key_123'`}
              </pre>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: Shield,
              title: 'Hardware-Based',
              desc: 'Uses device biometrics (Face ID, Touch ID, Windows Hello)',
              color: 'blue'
            },
            {
              icon: Lock,
              title: 'Memory Only',
              desc: 'Keys never stored in localStorage or sessionStorage',
              color: 'purple'
            },
            {
              icon: Key,
              title: 'Session-Based',
              desc: 'Re-authentication required for each new session',
              color: 'green'
            }
          ].map((feature, idx) => {
            const Icon = feature.icon;
            const colorClass = {
              blue: 'from-blue-400/20 to-blue-600/5 border-blue-200/40',
              purple: 'from-purple-400/20 to-purple-600/5 border-purple-200/40',
              green: 'from-green-400/20 to-green-600/5 border-green-200/40'
            }[feature.color];

            return (
              <div key={idx} className={`backdrop-blur-2xl bg-gradient-to-br ${colorClass} border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-xl bg-gradient-to-br from-${feature.color}-400 to-${feature.color}-600 text-white`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Important Notes */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-red-400/20 to-red-600/5 border border-red-200/40 rounded-3xl shadow-xl shadow-black/5 p-6">
          <h3 className="font-bold text-gray-900 mb-3">⚠️ Important Limitations</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>This protects UI rendering and in-memory data, but the JavaScript bundle itself is still downloadable</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>For full security, server-side verification of WebAuthn is required (this is client-only demo)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span>The key is derived from credential.rawId (an identifier), suitable for session obfuscation only</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
