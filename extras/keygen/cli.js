#!/usr/bin/env node
/**
 * PTOS License Key Generator (CLI)
 *
 * Examples:
 *   node extras/keygen/cli.js --product APP01 --type vl --days 365 --customer "John Doe"
 *   node extras/keygen/cli.js --product APP01 --batch
 */

import { generateLicenseKey } from './licenseEngineNode.js';

function parseArgs(argv) {
  const args = argv.slice(2);
  const out = {
    product: 'APP01',
    type: 'trial',
    days: 30,
    customer: 'Customer',
    batch: false,
  };

  for (let i = 0; i < args.length; i++) {
    const token = args[i];
    if (!token.startsWith('--')) continue;

    const key = token.slice(2);
    if (key === 'batch') {
      out.batch = true;
      continue;
    }

    const value = args[i + 1];
    if (value == null || value.startsWith('--')) continue;
    out[key] = value;
    i++;
  }

  out.type = String(out.type).toLowerCase();
  out.product = String(out.product);
  out.customer = String(out.customer);

  const parsedDays = parseInt(String(out.days), 10);
  out.days = Number.isFinite(parsedDays) ? parsedDays : 30;

  if (out.type === 'lifetime') out.days = 0;
  if (out.type === 'vl' && out.days <= 0) out.days = 365;
  if (out.type === 'trial' && out.days <= 0) out.days = 30;

  return out;
}

const options = parseArgs(process.argv);

console.log('\n🔑 License Key Generator\n');
console.log('Configuration:');
console.log(`  Product ID: ${options.product}`);
console.log(`  Type: ${options.type}`);
console.log(`  Valid for: ${options.type === 'lifetime' ? 'lifetime' : `${options.days} days`}`);
console.log(`  Customer: ${options.customer}\n`);

if (options.batch) {
  console.log('📦 Batch Generation:\n');
  const types = ['trial', 'vl', 'lifetime'];
  const daysList = [30, 365, 0];

  types.forEach((type, idx) => {
    const days = daysList[idx];
    const key = generateLicenseKey(options.product, type, days);
    console.log(`${type.padEnd(12)} (${String(days).padStart(4)} days): ${key}`);
  });

  console.log();
  process.exit(0);
}

const licenseKey = generateLicenseKey(options.product, options.type, options.days);

console.log('Generated License Key:');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`\n  ${licenseKey}\n`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`\nExpires: ${options.type === 'lifetime' ? 'never (9999-12-31)' : 'see key (YYYYMMDD)'}`);
console.log('\n✅ License key generated successfully!\n');
