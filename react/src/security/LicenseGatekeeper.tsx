import React, { useState, useCallback, useEffect } from 'react';
import { Shield, Key, AlertCircle, CheckCircle } from 'lucide-react';
import { validateLicenseKey, deriveLicenseKey, type LicenseInfo } from './licenseEngine';

declare global {
  interface Window {
    __PTOS_LICENSE_GATEKEEPER_PRESENT__?: boolean;
    __PTOS_LICENSE_TAMPERED__?: boolean;
  }
}

// Module-level marker: if this module is removed/un-imported, the marker won't exist.
if (typeof window !== 'undefined') {
  window.__PTOS_LICENSE_GATEKEEPER_PRESENT__ = true;
}

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
   * Product ID for your application (example: APP01)
   *
   * Back-compat: if you pass a full license key here (example: APP01-XXXXX-YYYYMMDD-CCCC),
   * the gatekeeper will treat it as a pre-activated license and will not prompt.
   */
  productId: string;
  /**
   * Optional customer name to display on the badge.
   * Useful when you are using client-side validation (no server) because the simple
   * key format does not encode customer details.
   */
  customerName?: string;
  /**
   * Controls whether the "Licensed to:" badge is shown.
   * - true (default): show the badge when licensed
   * - false: hide the badge (license validation still runs)
   */
  visible?: boolean;
  /**
   * Controls whether the unlicensed UI is shown (watermark + activation card).
   * - true (default): show watermark/card when unlicensed
   * - false: hide watermark/card (license validation still runs)
   */
  uiVisible?: boolean;
};

type StoredLicense = {
  licenseKey: string;
  customerName?: string;
};

function looksLikeLicenseKey(value: string): boolean {
  // Expected format: XXXXX-XXXXX-XXXXXXXX-XXXX
  const pattern = /^[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{8}-[A-Z0-9]{4}$/;
  return pattern.test(String(value || '').trim().toUpperCase());
}

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
export default function LicenseGatekeeper({
  children,
  licenseServerUrl,
  productId,
  customerName,
  visible = true,
  uiVisible = true,
}: Props) {
  const bootstrapLicenseKey = looksLikeLicenseKey(productId) ? productId.trim().toUpperCase() : undefined;
  const effectiveProductId = bootstrapLicenseKey ? bootstrapLicenseKey.split('-')[0] : productId;

  const [state, setState] = useState<LicenseState>({ status: 'locked' });
  const [licenseInput, setLicenseInput] = useState('');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [bootstrapAttempted, setBootstrapAttempted] = useState(false);
  const [tampered, setTampered] = useState(false);

  // Check for bootstrap (hardcoded) license OR saved license on mount
  useEffect(() => {
    // 1) If a full license key was passed in `productId`, auto-validate it and skip prompting.
    if (bootstrapLicenseKey && !bootstrapAttempted) {
      setBootstrapAttempted(true);
      void validateSavedLicense({ licenseKey: bootstrapLicenseKey, customerName }, { persistOnSuccess: true });
      return;
    }

    // 2) Otherwise try session license (note: stored as a plain string)
    const saved = sessionStorage.getItem('app_license');
    if (saved) {
      // Back-compat: old format was a plain string.
      // New format is JSON: { licenseKey, customerName }.
      const trimmed = saved.trim();
      if (trimmed.startsWith('{')) {
        try {
          const parsed = JSON.parse(trimmed) as StoredLicense;
          if (parsed?.licenseKey) {
            void validateSavedLicense({ licenseKey: String(parsed.licenseKey), customerName: parsed.customerName });
            return;
          }
        } catch {
          // fall through to treating it as plain string
        }
      }
      void validateSavedLicense({ licenseKey: saved });
    }
  }, [bootstrapLicenseKey, bootstrapAttempted, customerName]);

  const validateSavedLicense = async (saved: StoredLicense, options?: { persistOnSuccess?: boolean }) => {
    setState({ status: 'validating' });
    
    const licenseKey = String(saved.licenseKey).trim().toUpperCase();
    const result = await validateLicenseKey(licenseKey, {
      productId: effectiveProductId,
      serverUrl: licenseServerUrl,
    });

    if (result.valid) {
      const nextInfo: LicenseInfo = {
        ...result.info!,
        customerName: result.info?.customerName || saved.customerName || customerName,
      };
      if (options?.persistOnSuccess) {
        const toStore: StoredLicense = {
          licenseKey,
          customerName: nextInfo.customerName,
        };
        sessionStorage.setItem('app_license', JSON.stringify(toStore));
      }
      setState({ status: 'unlocked', license: nextInfo });
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
      productId: effectiveProductId,
      serverUrl: licenseServerUrl,
    });

    if (result.valid) {
      // Save license for session
      const toStore: StoredLicense = { licenseKey: licenseInput.trim().toUpperCase(), customerName };
      sessionStorage.setItem('app_license', JSON.stringify(toStore));
      setState({
        status: 'unlocked',
        license: {
          ...result.info!,
          customerName: result.info?.customerName || customerName,
        },
      });
    } else {
      setState({ status: 'error', message: result.error || 'Invalid license key' });
      setTimeout(() => setState({ status: 'locked' }), 3000);
    }
  }, [licenseInput, effectiveProductId, licenseServerUrl, customerName]);

  // Best-effort tamper detection: if watermark/card is removed or hidden while unlicensed,
  // show an ILLEGAL ACTION overlay. This is not perfect security (JS injection can bypass),
  // but blocks casual removal.
  useEffect(() => {
    if (!uiVisible) return;
    if (state.status === 'unlocked') {
      setTampered(false);
      return;
    }

    const isElementVisible = (el: HTMLElement) => {
      const style = window.getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden') return false;
      const opacity = Number.parseFloat(style.opacity || '1');
      if (Number.isFinite(opacity) && opacity <= 0) return false;
      return true;
    };

    const checkTamper = () => {
      const watermark = document.getElementById('ptos-license-watermark');
      if (!watermark || !(watermark instanceof HTMLElement) || !isElementVisible(watermark)) return true;

      // Only require the activation card when unlicensed AND no bootstrap key was provided.
      if (!bootstrapLicenseKey) {
        const card = document.getElementById('ptos-license-activation-card');
        if (!card || !(card instanceof HTMLElement) || !isElementVisible(card)) return true;
      }

      return false;
    };

    const markTampered = () => {
      setTampered(true);
      if (typeof window !== 'undefined') window.__PTOS_LICENSE_TAMPERED__ = true;
    };

    // Initial check + continuous checks
    if (checkTamper()) markTampered();

    const interval = window.setInterval(() => {
      if (checkTamper()) markTampered();
    }, 1000);

    const observer = new MutationObserver(() => {
      if (checkTamper()) markTampered();
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class', 'hidden'],
    });

    return () => {
      window.clearInterval(interval);
      observer.disconnect();
    };
  }, [uiVisible, state.status, bootstrapLicenseKey]);

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'BUTTON') {
      return; // Don't start drag when clicking input or button
    }
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  // Render watermark for unlicensed users (non-blocking like Google Maps)
  const renderWatermark = () => {
    if (!uiVisible) return null;
    if (state.status === 'unlocked') return null;
    
    return (
      <>
        {/* Watermark layer (never blocks interaction) */}
        <div
          id="ptos-license-watermark"
          className="fixed inset-0 z-[9998] pointer-events-none select-none"
          style={{
            background:
              'repeating-linear-gradient(45deg, transparent, transparent 150px, rgba(0, 0, 0, 0.03) 150px, rgba(0, 0, 0, 0.03) 300px)',
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-gray-400 font-bold opacity-20 whitespace-nowrap"
                style={{
                  fontSize: '24px',
                  transform: 'rotate(-45deg)',
                  left: `${(i % 10) * 20}%`,
                  top: `${Math.floor(i / 10) * 20}%`,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                SAMPLE PURPOSE
              </div>
            ))}
          </div>
        </div>

        {/* Draggable activation card (interactive) */}
        {!bootstrapLicenseKey && (
          <div
            id="ptos-license-activation-card"
            onMouseDown={handleMouseDown}
            className="fixed z-[9999] pointer-events-auto"
            style={{
              top: position.y === 0 ? '1rem' : `${position.y}px`,
              right: position.x === 0 ? '1rem' : 'auto',
              left: position.x === 0 ? 'auto' : `${position.x}px`,
              cursor: isDragging ? 'grabbing' : 'grab',
              maxWidth: '320px',
            }}
          >
            <div
              className="rounded-3xl p-5 shadow-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow:
                  '0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.5), inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)',
              }}
            >
            <div className="flex items-start gap-3 mb-4">
              <div
                className="flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(168, 85, 247, 0.9))',
                  boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                }}
              >
                <Shield size={22} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className="text-sm font-bold text-gray-900"
                  style={{ textShadow: '0 1px 2px rgba(255,255,255,0.8)' }}
                >
                  Sample Mode Active
                </h3>
                <p
                  className="text-xs text-gray-700 mt-0.5 font-medium"
                  style={{ textShadow: '0 1px 1px rgba(255,255,255,0.6)' }}
                >
                  Drag to move • Enter license
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                value={licenseInput}
                onChange={(e) => setLicenseInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && void handleActivate()}
                placeholder="XXXX-XXXX-XXXX-XXXX"
                disabled={state.status === 'validating'}
                className="w-full px-4 py-2.5 text-sm rounded-xl font-medium text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 disabled:opacity-50 transition-all"
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.6)',
                  boxShadow:
                    'inset 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(255, 255, 255, 0.8)',
                }}
              />

              <button
                onClick={() => void handleActivate()}
                disabled={state.status === 'validating'}
                className="w-full px-4 py-2.5 text-sm rounded-xl font-semibold text-white transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(99, 102, 241, 0.95), rgba(168, 85, 247, 0.95))',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow:
                    '0 4px 16px rgba(99, 102, 241, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                }}
              >
                {state.status === 'validating' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Validating...</span>
                  </>
                ) : (
                  <>
                    <Key size={16} />
                    <span>Activate</span>
                  </>
                )}
              </button>

              {state.status === 'error' && (
                <div
                  className="p-3 rounded-xl flex items-start gap-2"
                  style={{
                    background: 'rgba(254, 202, 202, 0.4)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(248, 113, 113, 0.3)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <AlertCircle size={14} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-red-800 font-medium">{state.message}</p>
                </div>
              )}
            </div>
          </div>
          </div>
        )}
      </>
    );
  };

  // Always render children, with watermark overlay if not licensed
  return (
    <>
      {renderWatermark()}
      <div data-license-active={state.status === 'unlocked'} data-license-type={state.status === 'unlocked' ? state.license.type : undefined}>
        {children}
      </div>

      {/* Tamper overlay (blocks UI but keeps page intact) */}
      {tampered && state.status !== 'unlocked' && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-6"
          style={{
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          <div
            className="w-full max-w-lg rounded-3xl p-6"
            style={{
              background: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: '0 18px 60px rgba(0,0,0,0.25)',
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                }}
              >
                <AlertCircle size={22} className="text-red-600" />
              </div>
              <div className="min-w-0">
                <h2 className="text-base font-bold text-gray-900">ILLEGAL ACTION</h2>
                <p className="text-sm text-gray-700 mt-1">
                  License UI was removed or hidden. Please restore the original files or enter a valid license.
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  Ref: PTOS-TAMPER-DETECTED
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* License Badge for licensed users */}
      {visible && state.status === 'unlocked' && (
        <div className="fixed bottom-4 right-4 backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl px-4 py-2 shadow-lg z-50">
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle size={16} className="text-green-600" />
            <span className="text-gray-900/90 font-medium">
              Licensed to: {state.license.customerName || 'User'}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
