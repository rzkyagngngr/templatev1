/**
 * License Engine - Validates and manages software licenses
 * 
 * LICENSE KEY FORMAT: PRODUCT-HASH-EXPIRY-CHECKSUM
 * Example: APP01-A7F3B9-20251231-X8K2
 */

export type LicenseInfo = {
  productId: string;
  type: 'trial' | 'standard' | 'premium' | 'enterprise' | 'vl' | 'lifetime';
  customerName?: string;
  expiryDate?: Date;
  features?: string[];
};

export type ValidationResult = {
  valid: boolean;
  info?: LicenseInfo;
  error?: string;
};

const LICENSE_ALGORITHM = 'AES-GCM';

/**
 * Derives an AES-GCM key from a license key string
 * This key is used to decrypt the encrypted application bundle
 */
export async function deriveLicenseKey(licenseKey: string): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(licenseKey);
  
  // Hash the license key to create key material
  const hashBuffer = await crypto.subtle.digest('SHA-256', keyData);
  
  // Import as AES-GCM key
  const key = await crypto.subtle.importKey(
    'raw',
    hashBuffer,
    { name: LICENSE_ALGORITHM, length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
  
  return key;
}

/**
 * Client-side basic validation (format checking only)
 * For production, always use server-side validation
 */
function validateLicenseFormat(licenseKey: string): boolean {
  // Expected format: XXXXX-XXXXX-XXXXX-XXXXX (4 segments, alphanumeric)
  const pattern = /^[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{8}-[A-Z0-9]{4}$/;
  return pattern.test(licenseKey);
}

/**
 * Parse license key into components (client-side decoding)
 * SECURITY NOTE: This is obfuscation only. True validation requires server API.
 */
async function parseLicenseKey(licenseKey: string): Promise<LicenseInfo | null> {
  try {
    const parts = licenseKey.split('-');
    if (parts.length !== 4) return null;

    const [productPart, typePart, expiryPart, checksumPart] = parts;

    // Decode product ID (first 5 chars)
    const productId = productPart;

    // Decode type (basic encoding)
    const typeMap: Record<string, LicenseInfo['type']> = {
      'A7F3B': 'trial',
      'B8G4C': 'standard',
      'C9H5D': 'premium',
      'D0I6E': 'enterprise',
      'E1J7F': 'vl',
      'F2K8G': 'lifetime',
    };
    const type = typeMap[typePart.substring(0, 5)] || 'trial';

    // Decode expiry date (YYYYMMDD format)
    const expiryStr = expiryPart;
    const year = parseInt(expiryStr.substring(0, 4), 10);
    const month = parseInt(expiryStr.substring(4, 6), 10) - 1;
    const day = parseInt(expiryStr.substring(6, 8), 10);
    const expiryDate = type === 'lifetime' ? new Date(9999, 11, 31) : new Date(year, month, day);

    // Verify checksum (SHA-256 based)
    const baseKey = `${productPart}-${typePart}-${expiryPart}`;
    const expectedChecksum = await generateChecksum(baseKey);
    if (checksumPart !== expectedChecksum) {
      return null;
    }

    return {
      productId,
      type,
      expiryDate,
      features: ['base'],
    };
  } catch {
    return null;
  }
}

/**
 * Generate checksum for license key using SHA-256
 */
async function generateChecksum(str: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex.slice(0, 4).toUpperCase();
}

/**
 * Validate license key
 * Supports both client-side (basic) and server-side (recommended) validation
 */
export async function validateLicenseKey(
  licenseKey: string,
  options: {
    productId: string;
    serverUrl?: string;
  }
): Promise<ValidationResult> {
  // 1. Format validation
  if (!validateLicenseFormat(licenseKey)) {
    return {
      valid: false,
      error: 'Invalid license key format',
    };
  }

  // 2. Server-side validation (recommended)
  if (options.serverUrl) {
    try {
      const response = await fetch(`${options.serverUrl}/validate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          licenseKey,
          productId: options.productId,
          timestamp: Date.now(),
        }),
      });

      if (!response.ok) {
        return {
          valid: false,
          error: 'License validation failed',
        };
      }

      const result = await response.json();
      
      if (!result.valid) {
        return {
          valid: false,
          error: result.message || 'Invalid license',
        };
      }

      return {
        valid: true,
        info: {
          productId: result.productId,
          type: result.type,
          customerName: result.customerName,
          expiryDate: result.expiryDate ? new Date(result.expiryDate) : undefined,
          features: result.features,
        },
      };
    } catch (error) {
      return {
        valid: false,
        error: 'Could not connect to license server',
      };
    }
  }

  // 3. Client-side validation (fallback - less secure)
  const info = await parseLicenseKey(licenseKey);
  
  if (!info) {
    return {
      valid: false,
      error: 'Invalid license key',
    };
  }

  // Check product ID match
  if (info.productId !== options.productId) {
    return {
      valid: false,
      error: 'License key is for a different product',
    };
  }

  // Check expiry
  if (info.expiryDate && info.expiryDate < new Date()) {
    return {
      valid: false,
      error: 'License has expired',
    };
  }

  return {
    valid: true,
    info,
  };
}

/**
 * Generate a license key (server-side only - this is a demo generator)
 * In production, this should ONLY run on your secure server
 */
export async function generateLicenseKey(
  productId: string,
  type: LicenseInfo['type'],
  expiryDate: Date
): Promise<string> {
  // Product part (5 chars, padded)
  const productPart = productId.toUpperCase().padEnd(5, 'X').substring(0, 5);

  // Type part (encoded)
  const typeMap: Record<LicenseInfo['type'], string> = {
    trial: 'A7F3B',
    standard: 'B8G4C',
    premium: 'C9H5D',
    enterprise: 'D0I6E',
    vl: 'E1J7F',
    lifetime: 'F2K8G',
  };
  const typePart = typeMap[type] || 'A7F3B';

  // Expiry part (YYYYMMDD)
  const year = expiryDate.getFullYear().toString();
  const month = (expiryDate.getMonth() + 1).toString().padStart(2, '0');
  const day = expiryDate.getDate().toString().padStart(2, '0');
  const expiryPart = year + month + day;

  // Checksum (same SHA-256 scheme used by validation)
  const baseKey = `${productPart}-${typePart}-${expiryPart}`;
  const checksumPart = await generateChecksum(baseKey);

  return `${productPart}-${typePart}-${expiryPart}-${checksumPart}`;
}
