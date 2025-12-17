/**
 * COMPREHENSIVE PAGE EXTRACTION GUIDE
 * ====================================
 * 
 * This guide shows how to extract each remaining page from sample files.
 * All pages follow the HelpdeskTickets.jsx pattern (shown below).
 * 
 * TEMPLATE STRUCTURE:
 * 
 * 1. IMPORTS
 *    - React, useState
 *    - Chart from 'react-apexcharts' (if page needs charts)
 * 
 * 2. DATA EXTRACTION
 *    - Extract sample HTML content (tables, cards, stats)
 *    - Extract chart config from sample/assets/js/pages/{feature}.init.js
 *    - Convert HTML data to JavaScript arrays
 * 
 * 3. COMPONENT STRUCTURE
 *    - Header (title + breadcrumb)
 *    - Stat cards (if applicable)
 *    - Charts (ApexCharts if data exists)
 *    - Tables/Lists (with data rows)
 *    - Forms (if applicable)
 * 
 * 4. STYLING (Applied to all)
 *    - Text: text-black, text-gray-600 (never white/light)
 *    - Borders: border border-gray-300, border-gray-200
 *    - Cards: glass-card p-6 border border-gray-300
 *    - Tables: border-b border-gray-200, hover:bg-gray-100
 *    - Buttons: bg-blue-500/600, text-white
 * 
 * ===========================================================================
 * QUICK REFERENCE: Sample Files → React Components
 * ===========================================================================
 * 
 * APPS SECTION (45+ pages)
 * ========================
 * 
 * ✅ ANALYTICS (2 pages)
 *    - analytics-customers.html → AnalyticsCustomers.jsx [DONE]
 *    - analytics-reports.html → AnalyticsReports.jsx [DONE]
 * 
 * 🟡 CRYPTO (5 pages) - PARTIAL
 *    - crypto-exchange.html → CryptoExchange.jsx [UPDATE EXISTING]
 *    - crypto-wallet.html → CryptoWallet.jsx [UPDATE EXISTING]
 *    - crypto-news.html → CryptoNews.jsx [UPDATE EXISTING]
 *    - crypto-ico.html → CryptoICO.jsx [DONE]
 *    - crypto-settings.html → CryptoSettings.jsx [DONE]
 * 
 * ⏳ CRM (4 pages) - NOT STARTED
 *    - crm-contacts.html → CRMContacts.jsx
 *    - crm-opportunities.html → CRMOpportunities.jsx
 *    - crm-leads.html → CRMLeads.jsx
 *    - crm-customers.html → CRMCustomers.jsx
 *    Extract: Contact tables with names, emails, phone, status
 *    Init files: sample/assets/js/pages/crm-*.init.js
 * 
 * ⏳ ECOMMERCE (5 pages) - NOT STARTED
 *    - ecommerce-products.html → EcommerceProducts.jsx
 *    - ecommerce-product-list.html → ProductList.jsx
 *    - ecommerce-product-detail.html → ProductDetail.jsx
 *    - ecommerce-cart.html → Cart.jsx
 *    - ecommerce-checkout.html → Checkout.jsx
 *    Extract: Product grids, prices, images, cart items
 *    Init files: sample/assets/js/pages/ecommerce-*.init.js
 * 
 * ⏳ HELPDESK (3 pages) - 1/3 DONE
 *    - helpdesk-agents.html → HelpdeskAgents.jsx
 *    - helpdesk-reports.html → HelpdeskReports.jsx
 *    - helpdesk-teckets.html → HelpdeskTickets.jsx [DONE]
 *    Extract: Agent lists, support stats, ticket tables
 *    Init files: sample/assets/js/pages/helpdesk-*.init.js
 * 
 * ⏳ HOSPITAL (17+ pages) - NOT STARTED [MOST COMPLEX]
 *    Core:
 *    - hospital-all-doctors.html → HospitalDoctors.jsx
 *    - hospital-all-patients.html → HospitalPatients.jsx
 *    - hospital-all-appointments.html → HospitalAppointments.jsx
 *    - hospital-all-staff.html → AllStaff.jsx
 *    - hospital-all-payments.html → AllPayments.jsx
 *    - hospital-all-rooms.html → AllRooms.jsx
 *    
 *    Forms:
 *    - hospital-add-doctor.html → AddDoctor.jsx
 *    - hospital-doctor-edit.html → EditDoctor.jsx
 *    - hospital-doctor-profile.html → DoctorProfile.jsx
 *    - hospital-doctor-shedule.html → DoctorSchedule.jsx
 *    - hospital-add-patient.html → AddPatient.jsx
 *    - hospital-patient-edit.html → EditPatient.jsx
 *    - hospital-patient-profile.html → PatientProfile.jsx
 *    - hospital-add-member.html → AddStaff.jsx
 *    - hospital-edit-member.html → EditStaff.jsx
 *    
 *    Other:
 *    - hospital-payment-invoice.html → PaymentInvoice.jsx
 *    - hospital-cashless-payments.html → CashlessPayments.jsx
 *    - hospital-departments.html → Departments.jsx
 *    - hospital-insurance-company.html → InsuranceCompany.jsx
 *    - hospital-chat.html → HospitalChat.jsx
 * 
 * ===========================================================================
 * UI SECTION (40+ pages)
 * ===========================================================================
 * 
 * ⏳ UI ELEMENTS (13 pages)
 *    - ui-alerts.html → UIAlerts.jsx
 *    - ui-buttons.html → UIButtons.jsx
 *    - ui-badges.html → UIBadges.jsx
 *    - ui-cards.html → UICards.jsx
 *    - ui-dropdowns.html → UIDropdowns.jsx
 *    - ui-modals.html → UIModals.jsx
 *    - ui-avatar.html → UIAvatar.jsx
 *    - ui-grids.html → UIGrids.jsx
 *    - ui-images.html → UIImages.jsx
 *    - ui-list.html → UIList.jsx
 *    - ui-paginations.html → UIPagination.jsx
 *    - ui-progress.html → UIProgress.jsx
 *    - ui-typography.html → UITypography.jsx
 *    Extract: Component examples and variants
 * 
 * ⏳ ADVANCED UI (10 pages)
 *    - advanced-animation.html → AdvancedAnimation.jsx
 *    - advanced-clipboard.html → AdvancedClipboard.jsx
 *    - advanced-dragula.html → AdvancedDragula.jsx
 *    - advanced-files.html → AdvancedFiles.jsx
 *    - advanced-highlight.html → AdvancedHighlight.jsx
 *    - advanced-rangeslider.html → AdvancedRangeSlider.jsx
 *    - advanced-ratings.html → AdvancedRatings.jsx
 *    - advanced-ribbons.html → AdvancedRibbons.jsx
 *    - advanced-sweetalerts.html → AdvancedSweetAlerts.jsx
 *    - advanced-toasts.html → AdvancedToasts.jsx
 *    Extract: Interactive component examples
 * 
 * ⏳ FORMS (7 pages)
 *    - forms-elements.html → FormElements.jsx (Basic elements)
 *    - forms-advanced.html → FormAdvanced.jsx
 *    - forms-validation.html → FormValidation.jsx
 *    - forms-wizard.html → FormWizard.jsx
 *    - forms-editors.html → FormEditors.jsx (Rich text)
 *    - forms-uploads.html → FormUpload.jsx (Dropzone)
 *    - forms-img-crop.html → FormCrop.jsx (CropperJS)
 *    Extract: Form components and input examples
 * 
 * ⏳ CHARTS (4 pages)
 *    - charts-apex.html → ChartsApex.jsx
 *    - charts-chartjs.html → ChartsChartjs.jsx
 *    - charts-justgage.html → ChartsJustgage.jsx
 *    - charts-toast-ui.html → ChartsToastUI.jsx
 *    Extract: Chart configs from init.js files
 * 
 * ⏳ TABLES (3 pages)
 *    - tables-basic.html → TablesBasic.jsx
 *    - tables-datatable.html → TablesDatatable.jsx
 *    - tables-editable.html → TablesEditable.jsx
 *    Extract: Table data and configs
 * 
 * ⏳ ICONS (4 pages)
 *    - icons-materialdesign.html → IconsMaterial.jsx
 *    - icons-fontawesome.html → IconsFontAwesome.jsx
 *    - icons-tabler.html → IconsTabler.jsx
 *    - icons-feather.html → IconsFeather.jsx
 *    Extract: Icon grids and names
 * 
 * ⏳ MAPS (3 pages)
 *    - maps-google.html → MapsGoogle.jsx (requires API key)
 *    - maps-leaflet.html → MapsLeaflet.jsx (use Leaflet package)
 *    - maps-vector.html → MapsVector.jsx (jsvectormap - if available)
 *    Extract: Map configs and data
 * 
 * ⏳ EMAIL TEMPLATES (3 pages)
 *    - email-templates-basic.html → EmailBasic.jsx
 *    - email-templates-alert.html → EmailAlert.jsx
 *    - email-templates-billing.html → EmailBilling.jsx
 *    Extract: Email template designs
 * 
 * ===========================================================================
 * PAGES & AUTH SECTION (18+ pages)
 * ===========================================================================
 * 
 * ⏳ PAGES (8 pages)
 *    - pages-profile.html → Profile (already exists)
 *    - pages-blogs.html → PagesBlogs.jsx
 *    - pages-faq.html → PagesFAQ.jsx
 *    - pages-gallery.html → Gallery (already exists)
 *    - pages-pricing.html → Pricing (already exists)
 *    - pages-starter.html → PagesStarter.jsx
 *    - pages-timeline.html → Timeline (already exists)
 *    - pages-tour.html → Tour (already exists)
 * 
 * ⏳ AUTH (10 pages) - May already exist
 *    - auth-login.html → Login
 *    - auth-login-alt.html → LoginAlt
 *    - auth-register.html → Register
 *    - auth-register-alt.html → RegisterAlt
 *    - auth-recover-pw.html → Recover
 *    - auth-recover-pw-alt.html → RecoverAlt
 *    - auth-lock-screen.html → LockScreen
 *    - auth-lock-screen-alt.html → LockScreenAlt
 *    - auth-404.html → 404 Error
 *    - auth-500.html → 500 Error
 * 
 * ===========================================================================
 * HOW TO CREATE A NEW PAGE
 * ===========================================================================
 * 
 * STEP 1: Read Sample HTML
 *         grep_search or read_file on sample/{feature}.html
 *         Find the main content section (between <div class="page-content-tab">)
 * 
 * STEP 2: Extract Data
 *         Convert HTML tables → JavaScript arrays
 *         Convert HTML cards → React components with data
 * 
 * STEP 3: Get Chart Config
 *         Read sample/assets/js/pages/{feature}.init.js
 *         Copy ApexCharts or chart.js config
 *         Convert to React format
 * 
 * STEP 4: Create React Component
 *         Use template below as base
 *         Replace {FEATURE} with actual feature name
 *         Insert extracted data and chart config
 * 
 * STEP 5: Apply Styling
 *         Use: text-black, border-gray-300, glass-card
 *         Never use: text-white, border-white, light colors
 * 
 * ===========================================================================
 * REUSABLE TEMPLATE
 * ===========================================================================
 * 
 * import React, { useState } from 'react';
 * import Chart from 'react-apexcharts';
 * 
 * export default function {Feature}() {
 *   const [chartReady, setChartReady] = useState(true);
 * 
 *   // Chart Options (from sample init.js)
 *   const chartOptions = {
 *     chart: { type: 'line', height: 350, toolbar: { show: false } },
 *     // ... rest of config
 *   };
 * 
 *   // Data (extracted from sample HTML)
 *   const data = [
 *     { id: 1, name: 'Item 1', value: 100, status: 'Active' },
 *     // ...
 *   ];
 * 
 *   return (
 *     <div className="w-full space-y-6 p-6">
 *       {/* Header */}
 *       <div>
 *         <h4 className="text-2xl font-bold text-black">{Feature}</h4>
 *         <div className="text-sm text-black mt-2">
 *           Metrica / Section / {Feature}
 *         </div>
 *       </div>
 * 
 *       {/* Stat Cards */}
 *       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 *         {stats.map(stat => (
 *           <div key={stat.id} className="glass-card p-6 border border-gray-300">
 *             {/* stat content */}
 *           </div>
 *         ))}
 *       </div>
 * 
 *       {/* Chart */}
 *       <div className="glass-card p-6 border border-gray-300">
 *         <h5 className="text-lg font-semibold text-black mb-4">Chart Title</h5>
 *         {chartReady && <Chart options={chartOptions} series={chartOptions.series} type="line" height={350} />}
 *       </div>
 * 
 *       {/* Table */}
 *       <div className="glass-card p-6 border border-gray-300">
 *         <h5 className="text-lg font-semibold text-black mb-4">Table Title</h5>
 *         <div className="overflow-x-auto">
 *           <table className="w-full">
 *             <thead>
 *               <tr className="border-b border-gray-300">
 *                 <th className="text-left py-4 px-4 text-xs font-bold text-black uppercase">Column</th>
 *               </tr>
 *             </thead>
 *             <tbody>
 *               {data.map(row => (
 *                 <tr key={row.id} className="border-b border-gray-200 hover:bg-gray-100">
 *                   <td className="py-4 px-4 text-black">{row.value}</td>
 *                 </tr>
 *               ))}
 *             </tbody>
 *           </table>
 *         </div>
 *       </div>
 *     </div>
 *   );
 * }
 * 
 * ===========================================================================
 * KEY SAMPLE FILE LOCATIONS
 * ===========================================================================
 * 
 * HTML Files: d:/project/template/templatev1/sample/*.html (140+ files)
 * Chart Configs: d:/project/template/templatev1/sample/assets/js/pages/*.init.js
 * CSS: d:/project/template/templatev1/sample/assets/css/ (app.min.css, bootstrap.min.css)
 * Images: d:/project/template/templatev1/sample/assets/images/ (users/, flags/, etc.)
 * 
 * ===========================================================================
 * STYLING QUICK REFERENCE
 * ===========================================================================
 * 
 * Text Colors:
 *   - Headings: text-black, text-2xl font-bold
 *   - Regular: text-black, text-gray-600
 *   - NEVER: text-white, text-slate-*
 * 
 * Borders:
 *   - Cards: border border-gray-300
 *   - Tables: border-b border-gray-300 (header), border-gray-200 (rows)
 *   - Buttons: border-0 (no border)
 * 
 * Backgrounds:
 *   - Cards: glass-card p-6
 *   - Rows: hover:bg-gray-100
 *   - Buttons: bg-blue-500, bg-blue-600 (hover)
 * 
 * Spacing:
 *   - Container: p-6, space-y-6
 *   - Grids: gap-6, md:grid-cols-3
 *   - Tables: py-4 px-4
 * 
 * ===========================================================================
 * DEPENDENCY NOTES
 * ===========================================================================
 * 
 * Already Installed:
 *   ✅ react-apexcharts - For ApexCharts rendering
 *   ✅ react-chartjs-2 - For Chart.js rendering
 *   ✅ sweetalert2 - For alert dialogs
 *   ✅ react-hot-toast - For toast notifications
 *   ✅ react-select - For select dropdowns
 *   ✅ react-datepicker - For date inputs
 *   ✅ react-quill - For rich text editing
 *   ✅ react-dnd - For drag and drop
 *   ✅ leaflet - For mapping
 *   ✅ cropperjs - For image cropping
 * 
 * ===========================================================================
 */
