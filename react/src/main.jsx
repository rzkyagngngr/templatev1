import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.jsx'
import LicenseGatekeeper from './security/LicenseGatekeeper'
import './index.css'

// Use HashRouter for file:// protocol (standalone HTML files)
// Use BrowserRouter for HTTP/HTTPS (normal deployment)
const Router = window.location.protocol === 'file:' ? HashRouter : BrowserRouter;

// Skip license check for standalone files (file:// protocol)
const isStandalone = window.location.protocol === 'file:';

/**
 * LICENSE PROTECTION ACTIVE
 * 
 * Your application is now protected with license key validation.
 * 
 * HOW IT WORKS:
 * - Development (npm run dev): Shows license screen, validates format only
 * - Production (npm run build + encrypt): Bundle is encrypted, requires valid license to decrypt
 * - Standalone (npm run build:standalone): No license required, works offline
 * 
 * SETUP FOR PRODUCTION:
 * 1. npm run build
 * 2. node scripts/encrypt-bundle.js
 * 3. Deploy the dist-encrypted/ folder
 * 
 * SERVER-SIDE VALIDATION (Recommended):
 * Set licenseServerUrl prop to your API endpoint for real license verification
 */

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {isStandalone ? (
            <Router>
                <App />
            </Router>
        ) : (
            <LicenseGatekeeper 
                productId="APP01-F2K8G-99991231-BEAA" customerName='Glacia' visible={true}
            >
                <Router>
                    <App />
                </Router>
            </LicenseGatekeeper>
        )}
    </React.StrictMode>,
)
