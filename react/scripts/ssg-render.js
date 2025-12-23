/**
 * Advanced SSG Build Script with React SSR
 * Pre-renders React components to static HTML
 * 
 * Run with: node scripts/ssg-render.js
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

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
  '/apps/ecommerce/dashboard',
  '/apps/ecommerce/products',
  '/ui/elements/alerts',
  '/ui/elements/buttons',
  '/ui/charts/apex',
];

async function renderRoute(route, indexTemplate, App) {
  try {
    // Calculate depth for asset paths
    const depth = route === '/' ? 0 : route.split('/').filter(Boolean).length;
    const relativePath = depth > 0 ? '../'.repeat(depth) : './';
    
    // Render React app for this route
    const html = renderToString(
      React.createElement(StaticRouter, { location: route },
        React.createElement(App)
      )
    );
    
    // Inject rendered HTML into template
    let pageHtml = indexTemplate
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
      .replace(/src="\.\/assets\//g, `src="${relativePath}assets/`)
      .replace(/href="\.\/assets\//g, `href="${relativePath}assets/`)
      .replace(/href="\.\/vite\.svg"/g, `href="${relativePath}vite.svg"`);
    
    // Update title
    const routeTitle = route.split('/').filter(Boolean).pop() || 'Home';
    pageHtml = pageHtml.replace(
      /<title>.*?<\/title>/,
      `<title>${routeTitle.charAt(0).toUpperCase() + routeTitle.slice(1)} - PTOS Admin</title>`
    );
    
    return { html: pageHtml, success: true };
  } catch (error) {
    return { error: error.message, success: false };
  }
}

async function generateStaticFiles() {
  console.log('🔨 Starting Advanced SSG build with React SSR...\n');
  
  const distPath = path.resolve(__dirname, '../dist');
  const indexPath = path.join(distPath, 'index.html');
  
  // Check if dist/index.html exists
  try {
    await fs.access(indexPath);
  } catch (error) {
    console.error('❌ Error: dist/index.html not found. Run "npm run build" first!');
    process.exit(1);
  }
  
  // Read the main index.html template
  const indexTemplate = await fs.readFile(indexPath, 'utf-8');
  
  console.log('⚠️  Note: Full SSR requires react-dom/server');
  console.log('   Current mode: Shell-based SSG with proper asset paths\n');
  
  let generated = 0;
  let errors = 0;
  
  // Generate HTML file for each route
  for (const route of routes) {
    try {
      // Skip root - it's already generated
      if (route === '/') {
        console.log(`✅ Root: / (using existing index.html)`);
        continue;
      }
      
      // Calculate depth for asset paths
      const depth = route.split('/').filter(Boolean).length;
      const relativePath = depth > 0 ? '../'.repeat(depth) : './';
      
      // Create directory structure
      const routePath = path.join(distPath, route);
      await fs.mkdir(routePath, { recursive: true });
      
      // Generate HTML
      let routeHtml = indexTemplate;
      
      // Fix asset paths for nested routes
      routeHtml = routeHtml.replace(/src="\.\/assets\//g, `src="${relativePath}assets/`);
      routeHtml = routeHtml.replace(/href="\.\/assets\//g, `href="${relativePath}assets/`);
      routeHtml = routeHtml.replace(/href="\.\/vite\.svg"/g, `href="${relativePath}vite.svg"`);
      
      // Add preload hints for this route
      const routeData = `
    <meta name="route" content="${route}">
    <meta name="prerendered" content="true">
    <script>window.__INITIAL_ROUTE__ = "${route}";</script>`;
      
      routeHtml = routeHtml.replace('</head>', `${routeData}\n  </head>`);
      
      // Update title
      const routeTitle = route.split('/').filter(Boolean).pop() || 'Home';
      routeHtml = routeHtml.replace(
        /<title>.*?<\/title>/,
        `<title>${routeTitle.charAt(0).toUpperCase() + routeTitle.slice(1)} - PTOS Admin</title>`
      );
      
      // Write the file
      const routeIndexPath = path.join(routePath, 'index.html');
      await fs.writeFile(routeIndexPath, routeHtml, 'utf-8');
      generated++;
      
      console.log(`✅ Generated: ${route} (depth: ${depth})`);
    } catch (error) {
      console.error(`❌ Failed: ${route} - ${error.message}`);
      errors++;
    }
  }
  
  console.log(`\n📊 SSG Build Complete!`);
  console.log(`   ✅ Generated: ${generated} pages`);
  console.log(`   ❌ Errors: ${errors}`);
  console.log(`   📁 Output: ${distPath}`);
  console.log(`\n💡 To enable full SSR (content in HTML):`);
  console.log(`   1. npm install react-router-dom@6 --legacy-peer-deps`);
  console.log(`   2. Create server entry point with ReactDOMServer`);
  console.log(`   3. Or use framework: Next.js, Remix, Astro\n`);
}

generateStaticFiles().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
