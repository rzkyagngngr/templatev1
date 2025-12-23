/**
 * SSG Build Script
 * Pre-renders all routes to static HTML files
 * 
 * Run with: node scripts/ssg-build.js
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All routes to pre-render
const routes = [
  '/',
  '/apps/crm/dashboard',
  '/apps/crm/contacts',
  '/apps/crm/opportunities',
  '/apps/crm/leads',
  '/apps/crm/customers',
  '/apps/hospital/dashboard',
  '/apps/hospital/general',
  '/apps/hospital/doctors',
  '/apps/hospital/appointments',
  '/apps/hospital/patients',
  '/apps/hospital/schedule',
  '/apps/hospital/add-doctor',
  '/apps/hospital/all-payments',
  '/apps/hospital/all-staff',
  '/apps/hospital/rooms',
  '/apps/hospital/departments',
  '/apps/hospital/insurance',
  '/apps/ecommerce/dashboard',
  '/apps/ecommerce/products',
  '/apps/ecommerce/cart',
  '/apps/analytics/customers',
  '/apps/analytics/reports',
  '/ui/elements/alerts',
  '/ui/elements/buttons',
  '/ui/elements/cards',
  '/ui/charts/apex',
  '/ui/charts/chartjs',
  '/auth-login',
  '/auth-register',
  // Add more routes as needed
];

async function generateStaticFiles() {
  console.log('🔨 Starting SSG build...\n');
  
  const distPath = path.resolve(__dirname, '../dist');
  const indexPath = path.join(distPath, 'index.html');
  
  // Check if dist/index.html exists
  try {
    await fs.access(indexPath);
  } catch (error) {
    console.error('❌ Error: dist/index.html not found. Run "npm run build" first!');
    process.exit(1);
  }
  
  // Read the main index.html
  const indexContent = await fs.readFile(indexPath, 'utf-8');
  
  let generated = 0;
  let errors = 0;
  
  // Generate HTML file for each route
  for (const route of routes) {
    try {
      // Skip root
      if (route === '/') continue;
      
      // Calculate depth (number of slashes) to determine relative path
      const depth = route.split('/').filter(Boolean).length;
      const relativePath = depth > 0 ? '../'.repeat(depth) : './';
      
      // Create directory structure
      const routePath = path.join(distPath, route);
      await fs.mkdir(routePath, { recursive: true });
      
      // Copy index.html to route directory
      const routeIndexPath = path.join(routePath, 'index.html');
      
      // Customize HTML for this route
      let routeHtml = indexContent;
      
      // Fix asset paths for nested routes
      routeHtml = routeHtml.replace(/src="\.\/assets\//g, `src="${relativePath}assets/`);
      routeHtml = routeHtml.replace(/href="\.\/assets\//g, `href="${relativePath}assets/`);
      routeHtml = routeHtml.replace(/href="\.\/vite\.svg"/g, `href="${relativePath}vite.svg"`);
      
      // Update title and meta for each route
      const routeTitle = route.split('/').pop() || 'Home';
      routeHtml = routeHtml.replace(
        /<title>.*?<\/title>/,
        `<title>${routeTitle.charAt(0).toUpperCase() + routeTitle.slice(1)} - PTOS Admin</title>`
      );
      
      // Write the file
      await fs.writeFile(routeIndexPath, routeHtml, 'utf-8');
      generated++;
      
      console.log(`✅ Generated: ${route} (depth: ${depth}, path: ${relativePath})`);
    } catch (error) {
      console.error(`❌ Failed: ${route} - ${error.message}`);
      errors++;
    }
  }
  
  console.log(`\n📊 SSG Build Complete!`);
  console.log(`   ✅ Generated: ${generated} pages`);
  console.log(`   ❌ Errors: ${errors}`);
  console.log(`   📁 Output: ${distPath}\n`);
}

generateStaticFiles().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
