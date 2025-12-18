/*
  COMPLETED REDESIGNS - iOS 26 LIQUID GLASS DESIGN SYSTEM
  ========================================================
  
  All pages have been redesigned following the mandate:
  - Gradient wrapper: from-blue-50 via-indigo-50 to-purple-50 background
  - Glass morphism: backdrop-blur-2xl + bg-white/50 + border-white/60
  - Rounded corners: rounded-3xl (MANDATORY on all elements)
  - Shadows: shadow-xl shadow-black/5 + hover states
  - Icons: lucide-react library
  - Colors: Indigo/Purple gradient primary theme
  - Responsive: Full responsive grid layouts
  - Badges/Tags: Rounded-2xl with color-coded gradients
  - Tables: Enhanced with avatars, status badges, action buttons
  - Stats Cards: Grid-based with icon accompaniment
  
  COMPLETED PAGES (10):
  ====================
  ✓ Hospital/HospitalAppointments.jsx - Table with stats, glass design
  ✓ Hospital/HospitalDoctors.jsx - Doctor directory with specialty colors
  ✓ Hospital/HospitalPatients.jsx - Patient registry with status badges
  ✓ Hospital/AllPayments.jsx - Payment tracking with amount summaries
  ✓ Hospital/AllStaff.jsx - Staff directory with contact info
  ✓ Charts/ChartsApex.jsx - Chart containers with visualization placeholders
  ✓ Tables/TablesBasic.jsx - Data table with enhanced styling
  ✓ Icons/IconsMaterial.jsx - Icon gallery with Lucide icons
  ✓ Auth/AuthLogin.jsx - Login form with password visibility toggle
  ✓ Auth/AuthRegister.jsx - Registration form with password confirmation
  
  TEMPLATE PATTERN FOR REMAINING 25 PAGES:
  ========================================
  
  1. PAGE HEADER STRUCTURE:
     - min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6
     - Breadcrumb navigation with hover states
     - Large gradient title: bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent
     - Description paragraph with indigo-600/70 color
  
  2. STATS CARDS (if applicable):
     - grid-cols-1 md:grid-cols-3 gap-4
     - backdrop-blur-2xl bg-gradient-to-br [color]/20 to-[color]/6
     - border border-white/60 rounded-3xl
     - Icon + value + label layout
  
  3. MAIN CONTAINER:
     - backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl
     - shadow-xl shadow-black/5
     - Hover: shadow-2xl shadow-black/10
  
  4. TABLE HEADERS & CELLS:
     - px-8 py-4 text-indigo-900
     - Row hover: hover:bg-white/40
     - Status badges with color gradients
  
  5. ACTION BUTTONS:
     - Icon buttons: p-2 rounded-2xl bg-blue-100/60 text-blue-600
     - Primary buttons: bg-gradient-to-r from-indigo-600 to-purple-600
  
  REMAINING PAGES TO APPLY TEMPLATE:
  ==================================
  
  CHARTS (3):
  - Charts/ChartsChartjs.jsx
  - Charts/ChartsJustgage.jsx
  - Charts/ChartsMorris.jsx (if exists) / Charts/ChartsToast.jsx
  
  TABLES (2):
  - Tables/TablesDatatable.jsx
  - Tables/TablesEditable.jsx
  
  ICONS (3):
  - Icons/IconsFontAwesome.jsx
  - Icons/IconsTabler.jsx
  - Icons/IconsFeather.jsx
  
  MAPS (3):
  - Maps/MapsGoogle.jsx
  - Maps/MapsLeaflet.jsx
  - Maps/MapsVector.jsx
  
  EMAIL TEMPLATES (3):
  - Email/EmailBasic.jsx
  - Email/EmailAlert.jsx
  - Email/EmailBilling.jsx
  
  AUTH (6):
  - Auth/AuthRecover.jsx
  - Auth/AuthLockScreen.jsx
  - Auth/Auth404.jsx
  - Auth/Auth500.jsx
  - Auth/AuthLoginAlt.jsx (if exists)
  - Auth/AuthRegisterAlt.jsx (if exists)
  - Auth/AuthRecoverAlt.jsx (if exists)
  - Auth/AuthLockScreenAlt.jsx (if exists)
  - Auth/Auth404Alt.jsx (if exists)
  - Auth/Auth500Alt.jsx (if exists)
  
  IMPLEMENTATION STEPS:
  ====================
  
  For each remaining page:
  1. Use same gradient wrapper for page
  2. Add breadcrumb navigation
  3. Add main title with gradient color
  4. If data table: use same table styling as HospitalAppointments
  5. If chart/visualization: use same container as ChartsApex
  6. If gallery/grid: use grid layout from IconsMaterial
  7. Add stats cards if relevant
  8. Apply rounded-3xl to ALL containers
  9. Use backdrop-blur-2xl on all major sections
  10. Test responsive on mobile/tablet/desktop
  
  KEY TAILWIND CLASSES TO REMEMBER:
  ==================================
  - Gradients: from-[color]-50 via-[color]-50 to-[color]-50
  - Glass: backdrop-blur-2xl bg-white/50 border-white/60
  - Radius: rounded-3xl (ALL containers)
  - Shadows: shadow-xl shadow-black/5 + hover:shadow-2xl hover:shadow-black/10
  - Text: bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent
  - Icons: lucide-react (import { IconName } from 'lucide-react')
  - Buttons: px-6 py-3 rounded-2xl (smaller radius than containers)
  
  BUILD COMMAND:
  ==============
  npm run dev (already running in terminal with esbuild)
  
  VALIDATION:
  ===========
  After applying templates to remaining pages:
  1. Check each URL loads without errors
  2. Verify glass effect visible (backdrop-blur working)
  3. Check responsive behavior on smaller screens
  4. Ensure all icons from lucide-react render
  5. Verify rounded-3xl applied consistently
  6. Check gradient backgrounds are correct
  7. Test hover states on buttons/cards
*/

export const DESIGN_SYSTEM = {
  gradients: {
    pageBackground: 'from-blue-50 via-indigo-50 to-purple-50',
    primary: 'from-indigo-600 to-purple-600',
    stats: {
      indigo: 'from-indigo-400/20 to-indigo-600/5 border-indigo-200/40',
      blue: 'from-blue-400/20 to-blue-600/5 border-blue-200/40',
      green: 'from-green-400/20 to-green-600/5 border-green-200/40',
      purple: 'from-purple-400/20 to-purple-600/5 border-purple-200/40',
    }
  },
  glass: {
    container: 'backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5',
    hover: 'hover:shadow-2xl hover:shadow-black/10 transition-all duration-300',
  },
  radius: {
    lg: 'rounded-3xl',
    md: 'rounded-2xl',
    sm: 'rounded-xl',
  }
};
