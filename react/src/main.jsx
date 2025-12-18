import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import LicenseGatekeeper from './security/LicenseGatekeeper'
import './index.css'

/**
 * LICENSE PROTECTION ACTIVE
 * 
 * Your application is now protected with license key validation.
 * 
 * HOW IT WORKS:
 * - Development (npm run dev): Shows license screen, validates format only
 * - Production (npm run build + encrypt): Bundle is encrypted, requires valid license to decrypt
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
        <LicenseGatekeeper 
            productId="APP01"
            // licenseServerUrl="https://your-api.com/api/licenses"
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </LicenseGatekeeper>
    </React.StrictMode>,
)
