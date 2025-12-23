/**
 * License Key Generator Tool
 * 
 * Generate license keys for your application
 * 
 * USAGE:
 *   node scripts/generate-license.js
 *   
 * Or with parameters:
 *   node scripts/generate-license.js --product APP01 --type premium --days 365 --customer "John Doe"
 */

import { generateLicenseKey } from './licenseEngineNode.js';

// Parse command line arguments
const args = process.argv.slice(2);
const options = {
  product: 'APP01',
  type: 'standard',
  days: 365,
  customer: 'Customer',
};

for (let i = 0; i < args.length; i += 2) {
  const key = args[i].replace('--', '');
  const value = args[i + 1];
  if (key && value) {
    options[key] = value;
  }
}

console.log('\n🔑 License Key Generator\n');
console.log('Configuration:');
console.log(`  Product ID: ${options.product}`);
console.log(`  Type: ${options.type}`);
console.log(`  Valid for: ${options.days} days`);
console.log(`  Customer: ${options.customer}\n`);

// Generate license
const licenseKey = generateLicenseKey(
  options.product,
  options.type,
  parseInt(options.days, 10)
);

// Calculate expiry date for display
const expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + parseInt(options.days, 10));

console.log('Generated License Key:');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`\n  ${licenseKey}\n`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`\nExpires: ${expiryDate.toISOString().split('T')[0]}`);
console.log('\n✅ License key generated successfully!\n');

// Show usage instructions
console.log('To use this license:');
console.log('1. Run your app: npm run dev');
console.log('2. Enter the license key above');
console.log('3. App will unlock and run\n');

// Generate multiple licenses if batch mode
if (args.includes('--batch')) {
  console.log('\n📦 Batch Generation:\n');
  
  const types = ['trial', 'standard', 'premium', 'enterprise'];
  const days = [30, 365, 730, 1095];
  
  types.forEach((type, idx) => {
    const date = new Date();
    date.setDate(date.getDate() + days[idx]);
    const key = generateLicenseKey(options.product, type, date);
    console.log(`${type.padEnd(12)} (${days[idx].toString().padStart(4)} days): ${key}`);
  });
  console.log();
}
