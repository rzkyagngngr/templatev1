/**
 * License Server Example (Node.js + Express)
 * 
 * This is a complete example of a license validation server.
 * Deploy this on your backend to enable server-side license validation.
 * 
 * SETUP:
 * 1. npm install express cors dotenv bcrypt jsonwebtoken
 * 2. Create .env file with LICENSE_SECRET and DATABASE_URL
 * 3. Run: node scripts/license-server-example.js
 * 4. Update frontend licenseServerUrl to point here
 */

import express from 'express';
import cors from 'cors';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const LICENSE_SECRET = process.env.LICENSE_SECRET || 'change-this-secret-key';

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database (replace with real database in production)
const licenseDatabase = new Map([
  // Format: [licenseKey, { productId, customerId, type, expiryDate, status, activations }]
  ['APP01-A7F3B-20251231-X8K2', {
    productId: 'APP01',
    customerId: 'DEMO001',
    customerName: 'Demo User (Trial)',
    type: 'trial',
    expiryDate: '2025-12-31',
    status: 'active',
    features: ['base'],
    maxActivations: 1,
    activations: 0,
  }],
  ['APP01-B8G4C-20260630-Y9L3', {
    productId: 'APP01',
    customerId: 'DEMO002',
    customerName: 'Demo User (Standard)',
    type: 'standard',
    expiryDate: '2026-06-30',
    status: 'active',
    features: ['base', 'analytics'],
    maxActivations: 3,
    activations: 0,
  }],
  ['APP01-C9H5D-20270101-Z0M4', {
    productId: 'APP01',
    customerId: 'DEMO003',
    customerName: 'Demo User (Premium)',
    type: 'premium',
    expiryDate: '2027-01-01',
    status: 'active',
    features: ['base', 'analytics', 'priority-support'],
    maxActivations: 5,
    activations: 0,
  }],
  ['APP01-D0I6E-20280101-A1N5', {
    productId: 'APP01',
    customerId: 'DEMO004',
    customerName: 'Demo User (Enterprise)',
    type: 'enterprise',
    expiryDate: '2028-01-01',
    status: 'active',
    features: ['base', 'analytics', 'priority-support', 'custom-branding', 'sso'],
    maxActivations: -1, // Unlimited
    activations: 0,
  }],
]);

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

/**
 * POST /api/licenses/validate
 * Validates a license key
 */
app.post('/api/licenses/validate', (req, res) => {
  const { licenseKey, productId, timestamp } = req.body;

  // 1. Validate request
  if (!licenseKey || !productId) {
    return res.status(400).json({
      valid: false,
      message: 'Missing licenseKey or productId',
    });
  }

  // 2. Check timestamp (prevent replay attacks)
  const now = Date.now();
  if (Math.abs(now - timestamp) > 300000) { // 5 minutes
    return res.status(400).json({
      valid: false,
      message: 'Request timestamp expired',
    });
  }

  // 3. Look up license in database
  const license = licenseDatabase.get(licenseKey);
  
  if (!license) {
    console.log(`❌ Invalid license key attempted: ${licenseKey}`);
    return res.json({
      valid: false,
      message: 'Invalid license key',
    });
  }

  // 4. Check product ID match
  if (license.productId !== productId) {
    console.log(`❌ Product ID mismatch: ${productId} vs ${license.productId}`);
    return res.json({
      valid: false,
      message: 'License key is for a different product',
    });
  }

  // 5. Check status
  if (license.status !== 'active') {
    console.log(`❌ License not active: ${license.status}`);
    return res.json({
      valid: false,
      message: `License is ${license.status}`,
    });
  }

  // 6. Check expiry date
  const expiryDate = new Date(license.expiryDate);
  if (expiryDate < new Date()) {
    console.log(`❌ License expired: ${license.expiryDate}`);
    return res.json({
      valid: false,
      message: 'License has expired',
    });
  }

  // 7. Check activation limit (if not unlimited)
  if (license.maxActivations !== -1 && license.activations >= license.maxActivations) {
    console.log(`❌ Activation limit reached: ${license.activations}/${license.maxActivations}`);
    return res.json({
      valid: false,
      message: 'Activation limit reached',
    });
  }

  // 8. Increment activations (in production, track by device/user)
  // license.activations++;

  // 9. Return success
  console.log(`✅ Valid license: ${license.customerName} (${license.type})`);
  return res.json({
    valid: true,
    productId: license.productId,
    type: license.type,
    customerName: license.customerName,
    expiryDate: license.expiryDate,
    features: license.features,
    remainingActivations: license.maxActivations === -1 
      ? -1 
      : license.maxActivations - license.activations,
  });
});

/**
 * POST /api/licenses/generate
 * Generates a new license key (admin only)
 */
app.post('/api/licenses/generate', (req, res) => {
  const { productId, customerId, customerName, type, expiryDate, adminKey } = req.body;

  // Verify admin key
  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  // Generate secure license key using HMAC
  const data = `${productId}|${customerId}|${type}|${expiryDate}`;
  const hmac = crypto.createHmac('sha256', LICENSE_SECRET)
    .update(data)
    .digest('hex')
    .substring(0, 10)
    .toUpperCase();

  const licenseKey = `${productId}-${hmac}-${expiryDate.replace(/-/g, '')}-${customerId}`;

  // Store in database
  licenseDatabase.set(licenseKey, {
    productId,
    customerId,
    customerName,
    type,
    expiryDate,
    status: 'active',
    features: getFeaturesByType(type),
    maxActivations: getMaxActivationsByType(type),
    activations: 0,
    createdAt: new Date().toISOString(),
  });

  console.log(`✅ Generated new license: ${licenseKey} for ${customerName}`);

  return res.json({
    success: true,
    licenseKey,
    expiryDate,
  });
});

/**
 * GET /api/licenses/:key
 * Get license details (admin only)
 */
app.get('/api/licenses/:key', (req, res) => {
  const { key } = req.params;
  const { adminKey } = req.query;

  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  const license = licenseDatabase.get(key);
  
  if (!license) {
    return res.status(404).json({ error: 'License not found' });
  }

  return res.json(license);
});

/**
 * DELETE /api/licenses/:key
 * Revoke a license (admin only)
 */
app.delete('/api/licenses/:key', (req, res) => {
  const { key } = req.params;
  const { adminKey } = req.body;

  if (adminKey !== process.env.ADMIN_KEY) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  const license = licenseDatabase.get(key);
  
  if (!license) {
    return res.status(404).json({ error: 'License not found' });
  }

  license.status = 'revoked';
  console.log(`❌ Revoked license: ${key}`);

  return res.json({ success: true, message: 'License revoked' });
});

/**
 * GET /health
 * Health check endpoint
 */
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Helper functions
function getFeaturesByType(type) {
  const features = {
    trial: ['base'],
    standard: ['base', 'analytics'],
    premium: ['base', 'analytics', 'priority-support'],
    enterprise: ['base', 'analytics', 'priority-support', 'custom-branding', 'sso'],
  };
  return features[type] || ['base'];
}

function getMaxActivationsByType(type) {
  const limits = {
    trial: 1,
    standard: 3,
    premium: 5,
    enterprise: -1, // Unlimited
  };
  return limits[type] || 1;
}

// Start server
app.listen(PORT, () => {
  console.log(`\n🔐 License Server running on http://localhost:${PORT}`);
  console.log(`\nTest the API:`);
  console.log(`  curl -X POST http://localhost:${PORT}/api/licenses/validate \\`);
  console.log(`    -H "Content-Type: application/json" \\`);
  console.log(`    -d '{"licenseKey":"APP01-A7F3B-20251231-X8K2","productId":"APP01","timestamp":${Date.now()}}'`);
  console.log(`\n📊 Loaded ${licenseDatabase.size} demo licenses\n`);
});

export default app;
