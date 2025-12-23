/**
 * Create standalone HTML files that work with file:// protocol
 * Inlines all CSS and JavaScript into single HTML files
 * Generates ALL routes from App.jsx in a flat folder structure
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All routes - flat structure with unique filenames
const routes = [
  // Analytics
  { file: 'analytics-customers.html', title: 'Analytics - Customers', route: '/apps/analytics/customers' },
  { file: 'analytics-reports.html', title: 'Analytics - Reports', route: '/apps/analytics/reports' },
  
  // CRM
  { file: 'crm-dashboard.html', title: 'CRM Dashboard', route: '/apps/crm/dashboard' },
  { file: 'crm-contacts.html', title: 'CRM Contacts', route: '/apps/crm/contacts' },
  { file: 'crm-opportunities.html', title: 'CRM Opportunities', route: '/apps/crm/opportunities' },
  { file: 'crm-leads.html', title: 'CRM Leads', route: '/apps/crm/leads' },
  { file: 'crm-customers.html', title: 'CRM Customers', route: '/apps/crm/customers' },
  
  // Projects
  { file: 'projects-dashboard.html', title: 'Projects Dashboard', route: '/apps/projects/dashboard' },
  { file: 'projects-clients.html', title: 'Projects Clients', route: '/apps/projects/clients' },
  { file: 'projects-team.html', title: 'Projects Team', route: '/apps/projects/team' },
  { file: 'projects-list.html', title: 'Projects List', route: '/apps/projects/project' },
  { file: 'projects-task.html', title: 'Projects Tasks', route: '/apps/projects/task' },
  { file: 'projects-kanban.html', title: 'Projects Kanban', route: '/apps/projects/kanban' },
  { file: 'projects-users.html', title: 'Projects Users', route: '/apps/projects/users' },
  { file: 'projects-create.html', title: 'Create Project', route: '/apps/projects/create' },
  
  // Hospital
  { file: 'hospital-dashboard.html', title: 'Hospital Dashboard', route: '/apps/hospital/dashboard' },
  { file: 'hospital-general.html', title: 'Hospital General', route: '/apps/hospital/general' },
  { file: 'hospital-doctors.html', title: 'Hospital Doctors', route: '/apps/hospital/doctors' },
  { file: 'hospital-appointments.html', title: 'Hospital Appointments', route: '/apps/hospital/appointments' },
  { file: 'hospital-patients.html', title: 'Hospital Patients', route: '/apps/hospital/patients' },
  { file: 'hospital-schedule.html', title: 'Doctor Schedule', route: '/apps/hospital/schedule' },
  { file: 'hospital-add-doctor.html', title: 'Add Doctor', route: '/apps/hospital/add-doctor' },
  { file: 'hospital-edit-doctor.html', title: 'Edit Doctor', route: '/apps/hospital/edit-doctor' },
  { file: 'hospital-doctor-profile.html', title: 'Doctor Profile', route: '/apps/hospital/doctor-profile' },
  { file: 'hospital-add-patient.html', title: 'Add Patient', route: '/apps/hospital/add-patient' },
  { file: 'hospital-edit-patient.html', title: 'Edit Patient', route: '/apps/hospital/edit-patient' },
  { file: 'hospital-patient-profile.html', title: 'Patient Profile', route: '/apps/hospital/patient-profile' },
  { file: 'hospital-payments.html', title: 'Hospital Payments', route: '/apps/hospital/all-payments' },
  { file: 'hospital-invoice.html', title: 'Payment Invoice', route: '/apps/hospital/invoice' },
  { file: 'hospital-cashless.html', title: 'Cashless Payments', route: '/apps/hospital/cashless' },
  { file: 'hospital-staff.html', title: 'Hospital Staff', route: '/apps/hospital/all-staff' },
  { file: 'hospital-add-staff.html', title: 'Add Staff', route: '/apps/hospital/add-staff' },
  { file: 'hospital-edit-staff.html', title: 'Edit Staff', route: '/apps/hospital/edit-staff' },
  { file: 'hospital-rooms.html', title: 'Hospital Rooms', route: '/apps/hospital/rooms' },
  { file: 'hospital-departments.html', title: 'Hospital Departments', route: '/apps/hospital/departments' },
  { file: 'hospital-insurance.html', title: 'Insurance Company', route: '/apps/hospital/insurance' },
  { file: 'hospital-chat.html', title: 'Hospital Chat', route: '/apps/hospital/chat' },
  
  // Ecommerce
  { file: 'ecommerce-dashboard.html', title: 'Ecommerce Dashboard', route: '/apps/ecommerce/dashboard' },
  { file: 'ecommerce-index.html', title: 'Ecommerce Index', route: '/apps/ecommerce/index' },
  { file: 'ecommerce-products.html', title: 'Products', route: '/apps/ecommerce/products' },
  { file: 'ecommerce-list.html', title: 'Product List', route: '/apps/ecommerce/list' },
  { file: 'ecommerce-detail.html', title: 'Product Detail', route: '/apps/ecommerce/detail' },
  { file: 'ecommerce-cart.html', title: 'Shopping Cart', route: '/apps/ecommerce/cart' },
  { file: 'ecommerce-checkout.html', title: 'Checkout', route: '/apps/ecommerce/checkout' },
  
  // Helpdesk
  { file: 'helpdesk-dashboard.html', title: 'Helpdesk Dashboard', route: '/apps/helpdesk/dashboard' },
  { file: 'helpdesk-tickets.html', title: 'Helpdesk Tickets', route: '/apps/helpdesk/tickets' },
  { file: 'helpdesk-agents.html', title: 'Helpdesk Agents', route: '/apps/helpdesk/agents' },
  { file: 'helpdesk-reports.html', title: 'Helpdesk Reports', route: '/apps/helpdesk/reports' },
  
  // Crypto
  { file: 'crypto-dashboard.html', title: 'Crypto Dashboard', route: '/apps/crypto/dashboard' },
  { file: 'crypto-index.html', title: 'Crypto Index', route: '/apps/crypto/index' },
  { file: 'crypto-exchange.html', title: 'Crypto Exchange', route: '/apps/crypto/exchange' },
  { file: 'crypto-wallet.html', title: 'Crypto Wallet', route: '/apps/crypto/wallet' },
  { file: 'crypto-news.html', title: 'Crypto News', route: '/apps/crypto/news' },
  { file: 'crypto-ico.html', title: 'ICO', route: '/apps/crypto/ico' },
  { file: 'crypto-settings.html', title: 'Crypto Settings', route: '/apps/crypto/settings' },
  
  // UI Elements
  { file: 'ui-alerts.html', title: 'UI Alerts', route: '/ui/elements/alerts' },
  { file: 'ui-buttons.html', title: 'UI Buttons', route: '/ui/elements/buttons' },
  { file: 'ui-badges.html', title: 'UI Badges', route: '/ui/elements/badges' },
  { file: 'ui-cards.html', title: 'UI Cards', route: '/ui/elements/cards' },
  { file: 'ui-typography.html', title: 'UI Typography', route: '/ui/elements/typography' },
  { file: 'ui-dropdowns.html', title: 'UI Dropdowns', route: '/ui/elements/dropdowns' },
  { file: 'ui-modals.html', title: 'UI Modals', route: '/ui/elements/modals' },
  { file: 'ui-avatar.html', title: 'UI Avatar', route: '/ui/elements/avatar' },
  { file: 'ui-grids.html', title: 'UI Grids', route: '/ui/elements/grids' },
  { file: 'ui-images.html', title: 'UI Images', route: '/ui/elements/images' },
  { file: 'ui-lists.html', title: 'UI Lists', route: '/ui/elements/lists' },
  { file: 'ui-pagination.html', title: 'UI Pagination', route: '/ui/elements/pagination' },
  { file: 'ui-progress.html', title: 'UI Progress', route: '/ui/elements/progress' },
  { file: 'ui-carousels.html', title: 'UI Carousels', route: '/ui/elements/carousels' },
  { file: 'ui-navs.html', title: 'UI Navs', route: '/ui/elements/navs' },
  { file: 'ui-navbar.html', title: 'UI Navbar', route: '/ui/elements/navbar' },
  { file: 'ui-popovers.html', title: 'UI Popovers', route: '/ui/elements/popovers' },
  { file: 'ui-spinners.html', title: 'UI Spinners', route: '/ui/elements/spinners' },
  { file: 'ui-tabs.html', title: 'UI Tabs', route: '/ui/elements/tabs' },
  { file: 'ui-videos.html', title: 'UI Videos', route: '/ui/elements/videos' },
  
  // Advanced UI
  { file: 'ui-animation.html', title: 'UI Animation', route: '/ui/advanced/animation' },
  { file: 'ui-clipboard.html', title: 'UI Clipboard', route: '/ui/advanced/clipboard' },
  { file: 'ui-ratings.html', title: 'UI Ratings', route: '/ui/advanced/ratings' },
  { file: 'ui-toasts.html', title: 'UI Toasts', route: '/ui/advanced/toasts' },
  { file: 'ui-highlight.html', title: 'UI Highlight', route: '/ui/advanced/highlight' },
  { file: 'ui-dragula.html', title: 'UI Dragula', route: '/ui/advanced/dragula' },
  { file: 'ui-sweetalerts.html', title: 'UI Sweet Alerts', route: '/ui/advanced/sweetalerts' },
  { file: 'ui-files.html', title: 'File Manager', route: '/ui/advanced/files' },
  { file: 'ui-slider.html', title: 'Range Slider', route: '/ui/advanced/slider' },
  { file: 'ui-ribbons.html', title: 'UI Ribbons', route: '/ui/advanced/ribbons' },
  
  // Forms
  { file: 'forms-basic.html', title: 'Form Elements', route: '/ui/forms/basic' },
  { file: 'forms-advanced.html', title: 'Advanced Forms', route: '/ui/forms/advanced' },
  { file: 'forms-validation.html', title: 'Form Validation', route: '/ui/forms/validation' },
  { file: 'forms-wizard.html', title: 'Form Wizard', route: '/ui/forms/wizard' },
  { file: 'forms-editors.html', title: 'Form Editors', route: '/ui/forms/editors' },
  { file: 'forms-upload.html', title: 'File Upload', route: '/ui/forms/upload' },
  { file: 'forms-crop.html', title: 'Image Crop', route: '/ui/forms/crop' },
  
  // Charts
  { file: 'charts-apex.html', title: 'Apex Charts', route: '/ui/charts/apex' },
  { file: 'charts-chartjs.html', title: 'Chart.js', route: '/ui/charts/chartjs' },
  { file: 'charts-morris.html', title: 'Morris Charts', route: '/ui/charts/morris' },
  { file: 'charts-justgage.html', title: 'JustGage Charts', route: '/ui/charts/justgage' },
  
  // Tables
  { file: 'tables-basic.html', title: 'Basic Tables', route: '/ui/tables/basic' },
  { file: 'tables-datatables.html', title: 'DataTables', route: '/ui/tables/datatables' },
  { file: 'tables-editable.html', title: 'Editable Tables', route: '/ui/tables/editable' },
  
  // Icons
  { file: 'icons-material.html', title: 'Material Icons', route: '/ui/icons/material' },
  { file: 'icons-fontawesome.html', title: 'Font Awesome Icons', route: '/ui/icons/fontawesome' },
  { file: 'icons-tabler.html', title: 'Tabler Icons', route: '/ui/icons/tabler' },
  { file: 'icons-feather.html', title: 'Feather Icons', route: '/ui/icons/feather' },
  
  // Maps
  { file: 'maps-google.html', title: 'Google Maps', route: '/ui/maps/google' },
  { file: 'maps-leaflet.html', title: 'Leaflet Maps', route: '/ui/maps/leaflet' },
  { file: 'maps-vector.html', title: 'Vector Maps', route: '/ui/maps/vector' },
  
  // Email Templates
  { file: 'email-basic.html', title: 'Email Basic', route: '/ui/email-templates/basic' },
  { file: 'email-alert.html', title: 'Email Alert', route: '/ui/email-templates/alert' },
  { file: 'email-billing.html', title: 'Email Billing', route: '/ui/email-templates/billing' },
  
  // Pages
  { file: 'pages-starter.html', title: 'Starter Page', route: '/pages/starter' },
  { file: 'pages-blogs.html', title: 'Blogs', route: '/pages/blogs' },
  { file: 'pages-faq.html', title: 'FAQ', route: '/pages/faq' },
  { file: 'pages-gallery.html', title: 'Gallery', route: '/pages/gallery' },
  { file: 'pages-tour.html', title: 'Tour', route: '/pages/tour' },
  { file: 'pages-treeview.html', title: 'Treeview', route: '/pages/treeview' },
  { file: 'pages-profile.html', title: 'Profile', route: '/pages/profile/overview' },
  { file: 'pages-timeline.html', title: 'Timeline', route: '/pages/timeline' },
  { file: 'pages-pricing.html', title: 'Pricing', route: '/pages/pricing' },
  
  // Auth
  { file: 'auth-login.html', title: 'Login', route: '/auth-login' },
  { file: 'auth-register.html', title: 'Register', route: '/auth-register' },
  { file: 'auth-recover.html', title: 'Recover Password', route: '/auth-recover' },
  { file: 'auth-404.html', title: 'Error 404', route: '/auth-404' },
  { file: 'auth-500.html', title: 'Error 500', route: '/auth-500' },
  { file: 'auth-login-alt.html', title: 'Login Alt', route: '/auth-login-alt' },
  { file: 'auth-lock-screen.html', title: 'Lock Screen', route: '/auth-lock-screen' },
  
  // Business Modules
  { file: 'sales-leads.html', title: 'Sales Leads', route: '/sales/leads' },
  { file: 'sales-orders.html', title: 'Sales Orders', route: '/sales/orders' },
  { file: 'sales-quotes.html', title: 'Sales Quotes', route: '/sales/quotes' },
  { file: 'sales-customers.html', title: 'Sales Customers', route: '/sales/customers' },
  { file: 'sales-invoices.html', title: 'Sales Invoices', route: '/sales/invoices' },
  { file: 'sales-team.html', title: 'Sales Team', route: '/sales/team' },
  
  { file: 'finance-dashboard.html', title: 'Finance Dashboard', route: '/finance/dashboard' },
  { file: 'finance-invoices.html', title: 'Invoices', route: '/finance/invoices' },
  { file: 'finance-expenses.html', title: 'Expenses', route: '/finance/expenses' },
  { file: 'finance-reports.html', title: 'Financial Reports', route: '/finance/reports' },
  { file: 'finance-budget.html', title: 'Budget Planning', route: '/finance/budget' },
  { file: 'finance-audits.html', title: 'Audits', route: '/finance/audits' },
  
  { file: 'hr-dashboard.html', title: 'HR Dashboard', route: '/hr/dashboard' },
  { file: 'hr-employees.html', title: 'Employees', route: '/hr/employees' },
  { file: 'hr-departments.html', title: 'Departments', route: '/hr/departments' },
  { file: 'hr-attendance.html', title: 'Attendance', route: '/hr/attendance' },
  { file: 'hr-leaves.html', title: 'Leaves', route: '/hr/leaves' },
  { file: 'hr-payroll.html', title: 'Payroll', route: '/hr/payroll' },
  { file: 'hr-performance.html', title: 'Performance', route: '/hr/performance' },
  { file: 'hr-recruitment.html', title: 'Recruitment', route: '/hr/recruitment' },
  { file: 'hr-training.html', title: 'Training', route: '/hr/training' },
  
  { file: 'marketing-dashboard.html', title: 'Marketing Dashboard', route: '/marketing/dashboard' },
  { file: 'marketing-campaigns.html', title: 'Marketing Campaigns', route: '/marketing/campaigns' },
  { file: 'marketing-analytics.html', title: 'Marketing Analytics', route: '/marketing/analytics' },
  
  { file: 'qa-dashboard.html', title: 'QA Dashboard', route: '/qa/dashboard' },
  { file: 'qa-testcases.html', title: 'Test Cases', route: '/qa/testcases' },
  { file: 'qa-defects.html', title: 'Defects', route: '/qa/defects' },
  { file: 'qa-environments.html', title: 'Environments', route: '/qa/environments' },
  { file: 'qa-coverage.html', title: 'Coverage', route: '/qa/coverage' },
  
  { file: 'operations-dashboard.html', title: 'Operations Dashboard', route: '/operations/dashboard' },
  { file: 'operations-tickets.html', title: 'Operations Tickets', route: '/operations/tickets' },
  
  { file: 'reporting-dashboard.html', title: 'Reporting Dashboard', route: '/reporting/dashboard' },
  { file: 'reporting-builder.html', title: 'Report Builder', route: '/reporting/builder' },
  { file: 'reporting-scheduler.html', title: 'Report Scheduler', route: '/reporting/scheduler' },
  
  { file: 'inventory-dashboard.html', title: 'Inventory Dashboard', route: '/inventory/dashboard' },
  { file: 'inventory-products.html', title: 'Inventory Products', route: '/inventory/products' },
  { file: 'inventory-warehouses.html', title: 'Warehouses', route: '/inventory/warehouses' },
  { file: 'inventory-stock.html', title: 'Stock Management', route: '/inventory/stock' },
  
  { file: 'support-dashboard.html', title: 'Support Dashboard', route: '/support/dashboard' },
  { file: 'support-tickets.html', title: 'Support Tickets', route: '/support/tickets' },
  { file: 'support-knowledgebase.html', title: 'Knowledge Base', route: '/support/knowledgebase' },
  { file: 'support-faq.html', title: 'Support FAQ', route: '/support/faq' },
  
  // Apps
  { file: 'apps-calendar.html', title: 'Calendar', route: '/apps/calendar' },
  { file: 'apps-invoice.html', title: 'Invoice', route: '/apps/invoice' },
  { file: 'apps-chat.html', title: 'Chat', route: '/apps/chat' },
  
  // Email App
  { file: 'email-inbox.html', title: 'Email Inbox', route: '/apps/email/inbox' },
  { file: 'email-starred.html', title: 'Starred Emails', route: '/apps/email/starred' },
  { file: 'email-sent.html', title: 'Sent Emails', route: '/apps/email/sent' },
  { file: 'email-trash.html', title: 'Trash', route: '/apps/email/trash' },
  { file: 'email-read.html', title: 'Read Email', route: '/apps/email/read' },
];

async function createStandaloneFiles() {
  console.log('🔨 Creating standalone HTML files for file:// protocol...\n');
  console.log('📦 Flat folder structure - all files in dist-standalone/\n');
  
  const distPath = path.resolve(__dirname, '../dist');
  const standaloneDir = path.resolve(__dirname, '../dist-standalone');
  
  // Create standalone directory
  await fs.mkdir(standaloneDir, { recursive: true });
  
  // Copy assets folder (images, fonts, etc.)
  const assetsSourceDir = path.join(distPath, 'assets');
  const assetsDestDir = path.join(standaloneDir, 'assets');
  
  try {
    // Create assets directory in standalone
    await fs.mkdir(assetsDestDir, { recursive: true });
    
    // Copy all files from dist/assets to dist-standalone/assets
    const assetFiles = await fs.readdir(assetsSourceDir);
    for (const file of assetFiles) {
      const sourcePath = path.join(assetsSourceDir, file);
      const destPath = path.join(assetsDestDir, file);
      await fs.copyFile(sourcePath, destPath);
    }
    console.log(`✅ Copied ${assetFiles.length} asset files\n`);
  } catch (error) {
    console.log('⚠️  No additional assets to copy\n');
  }
  
  // Copy public assets (vite.svg, images, etc.)
  try {
    const publicFiles = await fs.readdir(distPath);
    for (const file of publicFiles) {
      if (file !== 'assets' && file !== 'index.html') {
        const sourcePath = path.join(distPath, file);
        const destPath = path.join(standaloneDir, file);
        const stats = await fs.stat(sourcePath);
        if (stats.isFile()) {
          await fs.copyFile(sourcePath, destPath);
        }
      }
    }
  } catch (error) {
    // Ignore if no public files
  }
  
  // Read assets
  let jsContent = '';
  let cssContent = '';
  
  try {
    const files = await fs.readdir(assetsSourceDir);
    
    for (const file of files) {
      if (file.endsWith('.js')) {
        jsContent = await fs.readFile(path.join(assetsSourceDir, file), 'utf-8');
      }
      if (file.endsWith('.css')) {
        cssContent = await fs.readFile(path.join(assetsSourceDir, file), 'utf-8');
      }
    }
  } catch (error) {
    console.error('❌ Error reading assets:', error.message);
    console.error('   Make sure to run "npm run build" first!');
    process.exit(1);
  }
  
  let generated = 0;
  
  for (const route of routes) {
    try {
      const filePath = path.join(standaloneDir, route.file);
      
      // Create standalone HTML with inlined assets
      const html = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
    <title>${route.title} - PTOS Admin</title>
    <style>
${cssContent}
    </style>
    <script>
        // Redirect to hash-based URL for file:// protocol compatibility
        if (window.location.protocol === 'file:' && !window.location.hash) {
            window.location.hash = '#${route.route}';
        }
    </script>
</head>
<body>
    <div id="root"></div>
    <script>
${jsContent}
    </script>
</body>
</html>`;
      
      await fs.writeFile(filePath, html, 'utf-8');
      generated++;
      
      if (generated % 10 === 0) {
        console.log(`✅ Generated ${generated} files...`);
      }
    } catch (error) {
      console.error(`❌ ${route.file} - ${error.message}`);
    }
  }
  
  console.log(`\n📊 Standalone Build Complete!`);
  console.log(`   ✅ Generated: ${generated} HTML files`);
  console.log(`   📁 Output: ${standaloneDir}`);
  console.log(`   💾 Size: ~2.4 MB per file\n`);
  console.log(`💡 All files in ONE folder - just double-click any .html file!\n`);
  console.log(`📋 Sample files:`);
  console.log(`   • crm-dashboard.html`);
  console.log(`   • hospital-doctors.html`);
  console.log(`   • ecommerce-products.html`);
  console.log(`   • charts-apex.html\n`);
}

createStandaloneFiles().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
