import React, { useState, useCallback, useEffect } from 'react';
import { Shield, Key, AlertCircle, CheckCircle } from 'lucide-react';
import { validateLicenseKey, deriveLicenseKey, type LicenseInfo } from './licenseEngine';

type LicenseState =
  | { status: 'locked' }
  | { status: 'validating' }
  | { status: 'unlocked'; license: LicenseInfo }
  | { status: 'error'; message: string };

type Props = {
  children: React.ReactNode;
  /**
   * Your license server API endpoint (recommended)
   * If not provided, uses client-side validation only (less secure)
   */
  licenseServerUrl?: string;
  /**
   * Product ID for your application
   */
  productId: string;
};

/**
 * LicenseGatekeeper - Protects your application with license key validation
 * 
 * SECURITY MODEL:
 * - Users must enter a valid license key to access the app
 * - License keys can be validated client-side (basic) or server-side (recommended)
 * - The decryption key for your source code is derived from the license key
 * - Invalid licenses cannot decrypt/run your application
 * 
 * RECOMMENDED SETUP:
 * 1. Generate license keys server-side with expiration dates
 * 2. Store license->user mappings in your database
 * 3. Verify licenses against your API endpoint
 * 4. Encrypt your built source using build script
 */
export default function LicenseGatekeeper({ children, licenseServerUrl, productId }: Props) {
  const [state, setState] = useState<LicenseState>({ status: 'locked' });
  const [licenseInput, setLicenseInput] = useState('');

  // Check for saved license on mount
  useEffect(() => {
    const saved = sessionStorage.getItem('app_license');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        void validateSavedLicense(parsed);
      } catch {
        sessionStorage.removeItem('app_license');
      }
    }
  }, []);

  const validateSavedLicense = async (savedLicense: string) => {
    setState({ status: 'validating' });
    
    const result = await validateLicenseKey(savedLicense, {
      productId,
      serverUrl: licenseServerUrl,
    });

    if (result.valid) {
      setState({ status: 'unlocked', license: result.info! });
    } else {
      sessionStorage.removeItem('app_license');
      setState({ status: 'error', message: result.error || 'Invalid license' });
      setTimeout(() => setState({ status: 'locked' }), 3000);
    }
  };

  const handleActivate = useCallback(async () => {
    if (!licenseInput.trim()) {
      setState({ status: 'error', message: 'Please enter a license key' });
      setTimeout(() => setState({ status: 'locked' }), 2000);
      return;
    }

    setState({ status: 'validating' });

    const result = await validateLicenseKey(licenseInput.trim(), {
      productId,
      serverUrl: licenseServerUrl,
    });

    if (result.valid) {
      // Save license for session
      sessionStorage.setItem('app_license', licenseInput.trim());
      setState({ status: 'unlocked', license: result.info! });
    } else {
      setState({ status: 'error', message: result.error || 'Invalid license key' });
      setTimeout(() => setState({ status: 'locked' }), 3000);
    }
  }, [licenseInput, productId, licenseServerUrl]);

  if (state.status !== 'unlocked') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-6">
        <div className="max-w-md w-full backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">
          {/* Logo/Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
              <Shield size={40} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Licensed Application</h1>
            <p className="text-blue-200 mt-2">Enter your license key to continue</p>
          </div>

          {/* License Input */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                License Key
              </label>
              <input
                type="text"
                value={licenseInput}
                onChange={(e) => setLicenseInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && void handleActivate()}
                placeholder="XXXX-XXXX-XXXX-XXXX"
                disabled={state.status === 'validating'}
                className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
              />
            </div>

            <button
              onClick={() => void handleActivate()}
              disabled={state.status === 'validating'}
              className="w-full px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {state.status === 'validating' ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Validating...
                </>
              ) : (
                <>
                  <Key size={20} />
                  Activate License
                </>
              )}
            </button>
          </div>

          {/* Status Messages */}
          {state.status === 'error' && (
            <div className="mt-4 p-4 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-start gap-3">
              <AlertCircle size={20} className="text-red-300 flex-shrink-0 mt-0.5" />
              <p className="text-red-200 text-sm">{state.message}</p>
            </div>
          )}

          {/* Info */}
          <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-xs text-blue-200">
              <strong>Protected Application</strong>
              <br />
              This application requires a valid license key to run. Contact your administrator or visit our website to purchase a license.
            </p>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-white/60">
              Product ID: {productId}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Unlocked - render children with license context
  return (
    <div data-license-active="true" data-license-type={state.license.type}>
      {children}
      
      {/* License Badge (optional) */}
      <div className="fixed bottom-4 right-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-4 py-2 shadow-lg">
        <div className="flex items-center gap-2 text-sm">
          <CheckCircle size={16} className="text-green-400" />
          <span className="text-white font-medium">
            Licensed to: {state.license.customerName || 'User'}
          </span>
        </div>
      </div>
    </div>
  );
}
