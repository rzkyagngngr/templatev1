/**
 * Node.js License Engine
 * Pure JavaScript version for CLI scripts and server-side validation
 */

import crypto from 'crypto';

export const LICENSE_TYPES = {
    TRIAL: 'A7F3B',
    STANDARD: 'B8G4C',
    PREMIUM: 'C9H5D',
    ENTERPRISE: 'D0I6E'
};

const TYPE_MAP = {
    'trial': LICENSE_TYPES.TRIAL,
    'standard': LICENSE_TYPES.STANDARD,
    'premium': LICENSE_TYPES.PREMIUM,
    'enterprise': LICENSE_TYPES.ENTERPRISE
};

/**
 * Generate a license key
 */
export function generateLicenseKey(productId, type = 'trial', expiryDays = 30) {
    const typeCode = TYPE_MAP[type.toLowerCase()] || LICENSE_TYPES.TRIAL;
    
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + parseInt(expiryDays));
    const expiryStr = formatDate(expiryDate);
    
    const baseKey = `${productId}-${typeCode}-${expiryStr}`;
    const checksum = generateChecksum(baseKey);
    
    return `${baseKey}-${checksum}`;
}

/**
 * Format date as YYYYMMDD
 */
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
}

/**
 * Generate checksum for license key
 */
function generateChecksum(str) {
    const hash = crypto.createHash('sha256').update(str).digest('hex');
    return hash.slice(0, 4).toUpperCase();
}

/**
 * Parse a license key into its components
 */
export function parseLicenseKey(licenseKey) {
    const parts = licenseKey.split('-');
    if (parts.length !== 4) {
        return null;
    }

    const [productId, typeCode, expiry, checksum] = parts;
    
    // Find license type name
    let typeName = 'unknown';
    for (const [name, code] of Object.entries(LICENSE_TYPES)) {
        if (code === typeCode) {
            typeName = name.toLowerCase();
            break;
        }
    }

    return {
        productId,
        typeCode,
        typeName,
        expiry,
        checksum,
        expiryDate: parseExpiryDate(expiry)
    };
}

/**
 * Parse expiry date string (YYYYMMDD)
 */
function parseExpiryDate(expiryStr) {
    if (expiryStr.length !== 8) return null;
    const year = expiryStr.slice(0, 4);
    const month = expiryStr.slice(4, 6);
    const day = expiryStr.slice(6, 8);
    return new Date(`${year}-${month}-${day}`);
}

/**
 * Validate license key format and checksum
 */
export function validateLicenseKey(licenseKey, productId) {
    try {
        const parsed = parseLicenseKey(licenseKey);
        if (!parsed) {
            return { valid: false, error: 'Invalid license key format' };
        }

        // Check product ID
        if (parsed.productId !== productId) {
            return { valid: false, error: 'License key is for a different product' };
        }

        // Verify checksum
        const baseKey = `${parsed.productId}-${parsed.typeCode}-${parsed.expiry}`;
        const expectedChecksum = generateChecksum(baseKey);
        if (parsed.checksum !== expectedChecksum) {
            return { valid: false, error: 'Invalid license key checksum' };
        }

        // Check expiry
        const now = new Date();
        if (parsed.expiryDate && parsed.expiryDate < now) {
            return { valid: false, error: 'License key has expired', expired: true };
        }

        return { 
            valid: true, 
            license: {
                type: parsed.typeName,
                expiryDate: parsed.expiryDate,
                daysRemaining: Math.ceil((parsed.expiryDate - now) / (1000 * 60 * 60 * 24))
            }
        };
    } catch (error) {
        return { valid: false, error: error.message };
    }
}

/**
 * Generate HMAC signature for server-side validation
 */
export function generateHMAC(licenseKey, secret) {
    return crypto
        .createHmac('sha256', secret)
        .update(licenseKey)
        .digest('hex');
}

/**
 * Verify HMAC signature
 */
export function verifyHMAC(licenseKey, signature, secret) {
    const expected = generateHMAC(licenseKey, secret);
    return crypto.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(expected)
    );
}
