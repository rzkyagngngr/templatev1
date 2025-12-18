# License Key Protection System

## 🔐 Overview

Your application is now protected with a **license key system** that encrypts your source code and requires valid license keys to access it.

## 📋 How It Works

### Development Mode (`npm run dev`)
1. App shows license activation screen
2. Enter test license key (see below)
3. Client-side validation only (format checking)
4. App unlocks and runs normally

### Production Mode (Encrypted Build)
1. Build app: `npm run build`
2. Encrypt bundle: `node scripts/encrypt-bundle.js`
3. Creates `dist-encrypted/` folder with encrypted bundle
4. Deploy `dist-encrypted/` to your server
5. Users must enter valid license key
6. Browser decrypts and loads app using license-derived key

## 🔑 Test License Keys (for demo/testing)

```
Trial (expires 2025-12-31):      APP01-A7F3B-20251231-X8K2
Standard (expires 2026-06-30):   APP01-B8G4C-20260630-Y9L3
Premium (expires 2027-01-01):    APP01-C9H5D-20270101-Z0M4
Enterprise (expires 2028-01-01): APP01-D0I6E-20280101-A1N5
```

## 🚀 Quick Start

### For Development
```bash
npm run dev
# Enter any test license key above
```

### For Production Build
```bash
# 1. Build the app
npm run build

# 2. Encrypt the bundle
npm run encrypt
# OR combined:
npm run build:secure

# 3. Deploy dist-encrypted/ folder
```

### Preview Encrypted Build Locally
```bash
npm run preview:secure
```

## 📦 Build Scripts

### `npm run build`
Standard Vite production build (unencrypted)

### `npm run encrypt`
Encrypts existing dist/ folder

### `npm run build:secure`
Builds AND encrypts in one command (recommended)

### `npm run preview:secure`
Preview the encrypted build locally

## 🛡️ Security Features

### ✅ What This Provides:
- **License key validation** - Only valid keys can access app
- **Bundle encryption** - Source code encrypted with AES-256-GCM
- **Client-side protection** - Prevents casual source viewing
- **Session-based** - No persistent storage (sessionStorage only)
- **License types** - Trial, Standard, Premium, Enterprise
- **Expiry dates** - Time-limited licenses

### ⚠️ Limitations:
- **Client-side only** - Determined attackers can reverse engineer
- **No server validation** - Demo uses client-side validation only
- **Not cryptographically secure** - For real security, add server-side verification
- **JavaScript must download** - Browser must receive encrypted code

## 🌐 Adding Server-Side Validation (Recommended)

For production, validate licenses on your server:

### 1. Update LicenseGatekeeper with server URL:

```jsx
<LicenseGatekeeper 
    productId="APP01"
    licenseServerUrl="https://your-api.com/api/licenses"
>
    <App />
</LicenseGatekeeper>
```

### 2. Create License Validation API:

See `scripts/license-server-example.js` for a complete Node.js/Express example.

### 3. Server validates:
- License key authenticity (HMAC verification)
- Product ID match
- Expiry date
- Customer account status
- Usage limits

## 🔧 Generating License Keys

### Client-Side (Demo Only):
```javascript
import { generateLicenseKey } from './security/licenseEngine';

const license = generateLicenseKey(
  'APP01',           // Product ID
  'premium',         // Type: trial, standard, premium, enterprise
  new Date('2027-12-31')  // Expiry date
);

console.log(license);
// Output: APP01-C9H5D-20271231-Z0M4
```

### Server-Side (Production):
```javascript
// Keep this code on your server ONLY
// Never expose license generation logic to clients

const crypto = require('crypto');

function generateSecureLicense(productId, customerId, type, expiryDate) {
  // Use HMAC with secret key
  const secret = process.env.LICENSE_SECRET;
  const data = `${productId}|${customerId}|${type}|${expiryDate}`;
  const hmac = crypto.createHmac('sha256', secret).update(data).digest('hex');
  
  // Format: PRODUCT-HMAC-EXPIRY-CUSTOMER
  return `${productId}-${hmac.substring(0, 10)}-${expiryDate}-${customerId}`;
}

// Store in database
db.licenses.insert({
  key: generatedKey,
  customerId: 'CUST123',
  productId: 'APP01',
  type: 'premium',
  expiryDate: '2027-12-31',
  status: 'active'
});
```

## 📊 License Management Dashboard

Create an admin panel to:
- Generate new licenses
- View active licenses
- Revoke licenses
- Track usage
- Manage customers

## 🔒 Best Practices

### For Maximum Security:
1. ✅ **Use server-side validation** - Always verify licenses on your backend
2. ✅ **Keep secrets server-side** - Never expose license generation logic
3. ✅ **Use environment variables** - Store encryption keys in `.env` files
4. ✅ **Add rate limiting** - Prevent brute-force attempts
5. ✅ **Log validation attempts** - Monitor suspicious activity
6. ✅ **Implement key blacklisting** - Revoke compromised keys
7. ✅ **Add hardware binding** - Tie licenses to specific devices/domains

### Environment Variables:
```bash
# .env.production
VITE_LICENSE_SERVER_URL=https://your-api.com/api/licenses
VITE_PRODUCT_ID=APP01

# Server .env
LICENSE_SECRET=your-super-secret-hmac-key-here
BUNDLE_ENCRYPTION_KEY=your-bundle-encryption-master-key
DATABASE_URL=postgresql://...
```

## 🎯 Use Cases

### SaaS Applications
- Monthly/annual subscriptions
- Trial periods
- Feature-based tiers

### Enterprise Software
- Per-user licensing
- Site licenses
- Volume licensing

### White-Label Products
- Partner/reseller licenses
- Custom product IDs
- Branded instances

## 🛠️ Customization

### Change Product ID:
```jsx
<LicenseGatekeeper productId="YOURAPP" />
```

### Custom License Formats:
Edit `licenseEngine.ts` to change format from:
```
APP01-A7F3B-20251231-X8K2
```
to your own pattern.

### Branding:
Edit `LicenseGatekeeper.tsx` to customize:
- Colors and styling
- Logo and title
- Error messages
- UI layout

## 📝 License Key Format

Current format: `PRODUCT-TYPE-EXPIRY-CHECKSUM`

Example: `APP01-C9H5D-20271231-Z0M4`
- `APP01` = Product ID (5 chars)
- `C9H5D` = License type encoded (5 chars)
- `20271231` = Expiry date YYYYMMDD (8 chars)
- `Z0M4` = Checksum (4 chars)

Total: 27 characters (including hyphens)

## 🐛 Troubleshooting

### "Invalid license key format"
- Ensure exactly 27 characters
- Format: XXXXX-XXXXX-XXXXXXXX-XXXX
- All uppercase alphanumeric

### "License has expired"
- Check expiry date in license key
- Generate new license with future date

### "Could not connect to license server"
- Verify `licenseServerUrl` is correct
- Check network connectivity
- Verify server is running

### Build encryption fails
- Ensure `dist/` folder exists (run `npm run build` first)
- Check Node.js version (>=18 required)
- Verify write permissions

## 📞 Support

For issues or questions:
1. Check test license keys work in dev mode
2. Verify build completes successfully
3. Check browser console for errors
4. Review network tab for API calls

## 🎉 You're All Set!

Your application is now protected with license key validation. Run `npm run dev` and test it with the keys above!
