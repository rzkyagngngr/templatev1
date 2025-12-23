/**
 * Route Configuration for SSG
 * All routes that should be pre-rendered during build
 */

import { Navigate } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Profile from './pages/Profile';
import Calendar from './pages/Calendar';
import Invoice from './pages/Invoice';
import Crypto from './pages/Crypto';
import Chat from './pages/Chat';
import Gallery from './pages/Gallery';
import Timeline from './pages/Timeline';
import Pricing from './pages/Pricing';

// CRM Pages
import Dashboard from './pages/crm/Dashboard';
import Contacts from './pages/crm/Contacts';
import Opportunities from './pages/crm/Opportunities';
import Leads from './pages/crm/Leads';
import Customers from './pages/crm/Customers';

// Hospital Pages
import Hospital from './pages/Hospital';
import HospitalDoctors from './pages/hospital/HospitalDoctors';
import HospitalAppointments from './pages/hospital/HospitalAppointments';
import HospitalPatients from './pages/hospital/HospitalPatients';
import HospitalGeneral from './pages/hospital/HospitalGeneral';
import DoctorSchedule from './pages/hospital/DoctorSchedule';
import AddDoctor from './pages/hospital/AddDoctor';
import AllPayments from './pages/hospital/AllPayments';
import AllStaff from './pages/hospital/AllStaff';
import AllRooms from './pages/hospital/AllRooms';
import Departments from './pages/hospital/Departments';
import InsuranceCompany from './pages/hospital/InsuranceCompany';

// Ecommerce Pages
import Ecommerce from './pages/Ecommerce';
import EcommerceIndex from './pages/ecommerce/EcommerceIndex';
import ProductList from './pages/ecommerce/ProductList';
import ProductDetail from './pages/ecommerce/ProductDetail';
import Cart from './pages/ecommerce/Cart';
import Checkout from './pages/ecommerce/Checkout';

// Analytics
import Analytics from './pages/Analytics';

// Auth Pages
import AuthLogin from './pages/auth/AuthLogin';
import AuthRegister from './pages/auth/AuthRegister';
import AuthRecover from './pages/auth/AuthRecover';
import Auth404 from './pages/auth/Auth404';
import Auth500 from './pages/auth/Auth500';

// UI Pages
import UIAlerts from './pages/ui/UIAlerts';
import UIButtons from './pages/ui/UIButtons';
import UICards from './pages/ui/UICards';
import UIModals from './pages/ui/UIModals';

// Chart Pages
import ChartsApex from './pages/charts/ChartsApex';
import ChartsChartjs from './pages/charts/ChartsChartjs';

// Add more imports as needed...

/**
 * Define all routes for SSG
 * Each route will generate a separate HTML file
 */
export const routes = [
  // Root redirects
  { path: '/', element: <Navigate to="/apps/crm/dashboard" replace /> },
  { path: '/home', element: <Navigate to="/apps/crm/dashboard" replace /> },

  // CRM Routes
  { path: '/apps/crm/dashboard', element: <Dashboard /> },
  { path: '/apps/crm/contacts', element: <Contacts /> },
  { path: '/apps/crm/opportunities', element: <Opportunities /> },
  { path: '/apps/crm/leads', element: <Leads /> },
  { path: '/apps/crm/customers', element: <Customers /> },

  // Hospital Routes
  { path: '/apps/hospital/dashboard', element: <Hospital /> },
  { path: '/apps/hospital/general', element: <HospitalGeneral /> },
  { path: '/apps/hospital/doctors', element: <HospitalDoctors /> },
  { path: '/apps/hospital/appointments', element: <HospitalAppointments /> },
  { path: '/apps/hospital/patients', element: <HospitalPatients /> },
  { path: '/apps/hospital/schedule', element: <DoctorSchedule /> },
  { path: '/apps/hospital/add-doctor', element: <AddDoctor /> },
  { path: '/apps/hospital/all-payments', element: <AllPayments /> },
  { path: '/apps/hospital/all-staff', element: <AllStaff /> },
  { path: '/apps/hospital/rooms', element: <AllRooms /> },
  { path: '/apps/hospital/departments', element: <Departments /> },
  { path: '/apps/hospital/insurance', element: <InsuranceCompany /> },

  // Ecommerce Routes
  { path: '/apps/ecommerce/dashboard', element: <Ecommerce /> },
  { path: '/apps/ecommerce/index', element: <EcommerceIndex /> },
  { path: '/apps/ecommerce/products', element: <ProductList /> },
  { path: '/apps/ecommerce/detail', element: <ProductDetail /> },
  { path: '/apps/ecommerce/cart', element: <Cart /> },
  { path: '/apps/ecommerce/checkout', element: <Checkout /> },

  // Analytics Routes
  { path: '/apps/analytics/customers', element: <Analytics view="customers" /> },
  { path: '/apps/analytics/reports', element: <Analytics view="reports" /> },

  // UI Routes
  { path: '/ui/elements/alerts', element: <UIAlerts /> },
  { path: '/ui/elements/buttons', element: <UIButtons /> },
  { path: '/ui/elements/cards', element: <UICards /> },
  { path: '/ui/elements/modals', element: <UIModals /> },

  // Charts
  { path: '/ui/charts/apex', element: <ChartsApex /> },
  { path: '/ui/charts/chartjs', element: <ChartsChartjs /> },

  // Auth Routes (typically not SSG'd, but included for completeness)
  { path: '/auth-login', element: <AuthLogin /> },
  { path: '/auth-register', element: <AuthRegister /> },
  { path: '/auth-recover', element: <AuthRecover /> },
  { path: '/auth-404', element: <Auth404 /> },
  { path: '/auth-500', element: <Auth500 /> },

  // Add more routes as needed
  // You can add all 100+ routes from your App.jsx here
];
