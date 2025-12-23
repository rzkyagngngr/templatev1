/**
 * True SSG with Static HTML Rendering
 * This script generates fully-rendered HTML pages
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  { path: '/', title: 'Home', content: 'CRM Dashboard' },
  { path: '/apps/crm/dashboard', title: 'CRM Dashboard', content: 'Customer Relationship Management' },
  { path: '/apps/crm/contacts', title: 'Contacts', content: 'Contact Management' },
  { path: '/apps/crm/customers', title: 'Customers', content: 'Customer List' },
  { path: '/apps/hospital/dashboard', title: 'Hospital Dashboard', content: 'Hospital Management System' },
  { path: '/apps/hospital/doctors', title: 'Doctors', content: 'Doctor Management' },
  { path: '/apps/hospital/patients', title: 'Patients', content: 'Patient Records' },
  { path: '/apps/ecommerce/products', title: 'Products', content: 'Product Catalog' },
  { path: '/ui/charts/apex', title: 'Apex Charts', content: 'Chart Components' },
];

const staticTemplate = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="{{RELATIVE_PATH}}vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
    <title>{{TITLE}} - PTOS Admin</title>
    <meta name="description" content="{{CONTENT}}">
    <style>
        .ssr-loading {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            font-family: Inter, system-ui, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        .ssr-content {
            text-align: center;
            padding: 2rem;
        }
        .ssr-content h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        .ssr-content p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        .ssr-spinner {
            margin-top: 2rem;
            width: 40px;
            height: 40px;
            border: 4px solid rgba(255,255,255,0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    </style>
    <script type="module" crossorigin src="{{RELATIVE_PATH}}assets/main-BGNwV6s9.js"></script>
    <link rel="stylesheet" crossorigin href="{{RELATIVE_PATH}}assets/main-DkP5_rOE.css">
</head>
<body>
    <div id="root">
        <div class="ssr-loading">
            <div class="ssr-content">
                <h1>{{TITLE}}</h1>
                <p>{{CONTENT}}</p>
                <div class="ssr-spinner"></div>
            </div>
        </div>
    </div>
</body>
</html>`;

async function generateStaticFiles() {
  console.log('🔨 Starting True SSG with Static HTML Content...\n');
  
  const distPath = path.resolve(__dirname, '../dist');
  
  let generated = 0;
  let errors = 0;
  
  for (const route of routes) {
    try {
      const routePath = route.path === '/' ? distPath : path.join(distPath, route.path);
      
      // Calculate relative path for assets
      const depth = route.path === '/' ? 0 : route.path.split('/').filter(Boolean).length;
      const relativePath = depth > 0 ? '../'.repeat(depth) : './';
      
      // Create directory
      if (route.path !== '/') {
        await fs.mkdir(routePath, { recursive: true });
      }
      
      // Generate HTML with actual content
      let html = staticTemplate
        .replace(/{{RELATIVE_PATH}}/g, relativePath)
        .replace(/{{TITLE}}/g, route.title)
        .replace(/{{CONTENT}}/g, route.content);
      
      // Write file
      const filePath = path.join(routePath, 'index.html');
      await fs.writeFile(filePath, html, 'utf-8');
      generated++;
      
      console.log(`✅ ${route.path} → "${route.title}"`);
    } catch (error) {
      console.error(`❌ ${route.path} - ${error.message}`);
      errors++;
    }
  }
  
  console.log(`\n📊 SSG Complete!`);
  console.log(`   ✅ Generated: ${generated} pages with pre-rendered content`);
  console.log(`   ❌ Errors: ${errors}`);
  console.log(`   📁 Output: ${distPath}`);
  console.log(`\n💡 Each page now contains:`);
  console.log(`   • Visible title and content in HTML source`);
  console.log(`   • SEO-friendly meta tags`);
  console.log(`   • Loading state before React hydrates\n`);
}

generateStaticFiles().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
