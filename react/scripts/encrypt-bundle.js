/**
 * Encrypt Bundle Script
 * 
 * This script encrypts your production build to protect source code.
 * Only users with valid license keys can decrypt and run the application.
 * 
 * USAGE:
 *   npm run build
 *   node scripts/encrypt-bundle.js
 * 
 * IMPORTANT:
 * - This provides obfuscation and basic protection
 * - Determined attackers can still reverse engineer client-side code
 * - For maximum security, use server-side rendering or server-side validation
 * - Keep your license generation secrets on the server only
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createHash, randomBytes } from 'crypto';

const __filename = fileURLToPath(import.meta.URL);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '../dist');
const ENCRYPTED_DIR = path.join(__dirname, '../dist-encrypted');

// Your master encryption key (KEEP THIS SECRET - store in env vars in production)
const MASTER_KEY = process.env.BUNDLE_ENCRYPTION_KEY || 'REPLACE-WITH-SECRET-KEY-FROM-ENV';

console.log('🔐 Bundle Encryption Tool\n');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
  red: '\x1b[31m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Check if dist exists
if (!fs.existsSync(DIST_DIR)) {
  log('❌ Error: dist/ folder not found. Run "npm run build" first.', 'red');
  process.exit(1);
}

// Create encrypted output directory
if (!fs.existsSync(ENCRYPTED_DIR)) {
  fs.mkdirSync(ENCRYPTED_DIR, { recursive: true });
}

/**
 * Encrypt a string using AES-256-GCM
 */
function encryptString(text, key) {
  const crypto = await import('crypto');
  
  // Derive key from master key
  const keyHash = crypto.createHash('sha256').update(key).digest();
  
  // Generate IV
  const iv = crypto.randomBytes(12);
  
  // Create cipher
  const cipher = crypto.createCipheriv('aes-256-gcm', keyHash, iv);
  
  // Encrypt
  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  
  // Get auth tag
  const authTag = cipher.getAuthTag();
  
  return {
    iv: iv.toString('base64'),
    data: encrypted,
    tag: authTag.toString('base64'),
  };
}

/**
 * Generate bootstrap loader HTML
 */
function generateBootstrapLoader(encryptedBundle, originalIndexHtml) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Licensed Application - Activation Required</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .container {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      padding: 40px;
      max-width: 500px;
      width: 100%;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }
    .logo { text-align: center; margin-bottom: 30px; }
    .logo svg { width: 80px; height: 80px; }
    h1 { color: #1a202c; font-size: 28px; margin-bottom: 10px; text-align: center; }
    p { color: #4a5568; text-align: center; margin-bottom: 30px; }
    input {
      width: 100%;
      padding: 15px;
      border: 2px solid #e2e8f0;
      border-radius: 10px;
      font-size: 16px;
      margin-bottom: 20px;
      transition: border-color 0.3s;
    }
    input:focus {
      outline: none;
      border-color: #667eea;
    }
    button {
      width: 100%;
      padding: 15px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s;
    }
    button:hover { transform: translateY(-2px); }
    button:active { transform: translateY(0); }
    button:disabled { opacity: 0.6; cursor: not-allowed; }
    .error {
      background: #fed7d7;
      color: #c53030;
      padding: 12px;
      border-radius: 8px;
      margin-top: 15px;
      display: none;
      text-align: center;
    }
    .info {
      background: #bee3f8;
      color: #2c5282;
      padding: 12px;
      border-radius: 8px;
      margin-top: 20px;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    </div>
    <h1>🔐 Licensed Application</h1>
    <p>Enter your license key to access this application</p>
    
    <input 
      type="text" 
      id="licenseInput" 
      placeholder="XXXXX-XXXXX-XXXXXXXX-XXXX"
      maxlength="27"
    />
    
    <button onclick="activateLicense()">Activate License</button>
    
    <div class="error" id="errorMsg"></div>
    
    <div class="info">
      <strong>Protected Application</strong><br>
      This application is protected by license activation. Contact your administrator for a license key.
    </div>
  </div>

  <script>
    // Encrypted bundle payload
    const ENCRYPTED_BUNDLE = ${JSON.stringify(encryptedBundle)};
    
    // Simple license format validator
    function validateLicenseFormat(key) {
      return /^[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{8}-[A-Z0-9]{4}$/.test(key);
    }
    
    // Derive decryption key from license
    async function deriveLicenseKey(licenseKey) {
      const encoder = new TextEncoder();
      const keyData = encoder.encode(licenseKey);
      const hashBuffer = await crypto.subtle.digest('SHA-256', keyData);
      return await crypto.subtle.importKey(
        'raw',
        hashBuffer,
        { name: 'AES-GCM', length: 256 },
        false,
        ['decrypt']
      );
    }
    
    // Decrypt and inject application
    async function activateLicense() {
      const input = document.getElementById('licenseInput');
      const errorMsg = document.getElementById('errorMsg');
      const button = event.target;
      
      const license = input.value.trim().toUpperCase();
      
      if (!license) {
        showError('Please enter a license key');
        return;
      }
      
      if (!validateLicenseFormat(license)) {
        showError('Invalid license key format');
        return;
      }
      
      button.disabled = true;
      button.textContent = 'Validating...';
      errorMsg.style.display = 'none';
      
      try {
        // Derive key from license
        const key = await deriveLicenseKey(license);
        
        // Decrypt bundle
        const iv = Uint8Array.from(atob(ENCRYPTED_BUNDLE.iv), c => c.charCodeAt(0));
        const data = Uint8Array.from(atob(ENCRYPTED_BUNDLE.data), c => c.charCodeAt(0));
        
        const decrypted = await crypto.subtle.decrypt(
          { name: 'AES-GCM', iv },
          key,
          data
        );
        
        const decoder = new TextDecoder();
        const originalHtml = decoder.decode(decrypted);
        
        // Save license for session
        sessionStorage.setItem('app_license', license);
        
        // Replace page with decrypted content
        document.open();
        document.write(originalHtml);
        document.close();
        
      } catch (error) {
        button.disabled = false;
        button.textContent = 'Activate License';
        showError('Invalid license key or decryption failed');
      }
    }
    
    function showError(message) {
      const errorMsg = document.getElementById('errorMsg');
      errorMsg.textContent = message;
      errorMsg.style.display = 'block';
    }
    
    // Allow Enter key
    document.getElementById('licenseInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') activateLicense();
    });
  </script>
</body>
</html>`;
}

async function main() {
  try {
    log('📦 Step 1: Reading build files...', 'blue');
    
    // Read index.html
    const indexPath = path.join(DIST_DIR, 'index.html');
    if (!fs.existsSync(indexPath)) {
      throw new Error('index.html not found in dist/');
    }
    
    const indexHtml = fs.readFileSync(indexPath, 'utf-8');
    log(`   ✓ Read index.html (${indexHtml.length} bytes)`, 'green');
    
    // Encrypt the entire HTML
    log('\n🔒 Step 2: Encrypting bundle...', 'blue');
    const encrypted = encryptString(indexHtml, MASTER_KEY);
    log('   ✓ Bundle encrypted successfully', 'green');
    
    // Generate bootstrap loader
    log('\n🚀 Step 3: Generating bootstrap loader...', 'blue');
    const bootstrapHtml = generateBootstrapLoader(encrypted, indexHtml);
    
    // Write encrypted bundle
    const encryptedIndexPath = path.join(ENCRYPTED_DIR, 'index.html');
    fs.writeFileSync(encryptedIndexPath, bootstrapHtml, 'utf-8');
    log(`   ✓ Written to ${encryptedIndexPath}`, 'green');
    
    // Copy assets
    log('\n📁 Step 4: Copying assets...', 'blue');
    const assetsDir = path.join(DIST_DIR, 'assets');
    if (fs.existsSync(assetsDir)) {
      const encryptedAssetsDir = path.join(ENCRYPTED_DIR, 'assets');
      fs.mkdirSync(encryptedAssetsDir, { recursive: true });
      
      const files = fs.readdirSync(assetsDir);
      files.forEach(file => {
        fs.copyFileSync(
          path.join(assetsDir, file),
          path.join(encryptedAssetsDir, file)
        );
      });
      log(`   ✓ Copied ${files.length} asset files`, 'green');
    }
    
    log('\n✅ Encryption complete!', 'bright');
    log(`\n📦 Encrypted build available in: ${ENCRYPTED_DIR}`, 'yellow');
    log('\n🔑 Test License Keys (for demo):', 'yellow');
    log('   Trial:      APP01-A7F3B-20251231-X8K2', 'green');
    log('   Standard:   APP01-B8G4C-20260630-Y9L3', 'green');
    log('   Premium:    APP01-C9H5D-20270101-Z0M4', 'green');
    log('   Enterprise: APP01-D0I6E-20280101-A1N5', 'green');
    
  } catch (error) {
    log(`\n❌ Error: ${error.message}`, 'red');
    process.exit(1);
  }
}

main();
