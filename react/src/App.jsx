import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
// import GlassSplitLayout from './components/GlassSplitLayout'; // Removed as per request

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Recover from './pages/Recover';
import Profile from './pages/Profile';
import Calendar from './pages/Calendar';
import Invoice from './pages/Invoice';
import Crypto from './pages/Crypto';
import Email from './pages/Email';
import Chat from './pages/Chat';
import Alerts from './pages/Alerts';
import Buttons from './pages/Buttons';
import Cards from './pages/Cards';
import Modals from './pages/Modals';
import Timeline from './pages/Timeline';
import Pricing from './pages/Pricing';
import Gallery from './pages/Gallery';

// Apps - Projects
import DashboardProject from './pages/projects/Dashboard';
import ProjectList from './pages/projects/ProjectList';
import Clients from './pages/projects/Clients';
import Team from './pages/projects/Team';
import Task from './pages/projects/Task';
import Kanban from './pages/projects/Kanban';
import Users from './pages/projects/Users';
import Create from './pages/projects/Create';

// CRM Pages
import Dashboard from './pages/crm/Dashboard';
import Contacts from './pages/crm/Contacts';
import Opportunities from './pages/crm/Opportunities';
import Leads from './pages/crm/Leads';
import Customers from './pages/crm/Customers';

import Analytics from './pages/Analytics';
import HospitalDashboard from './pages/hospital/HospitalDashboard';
import HospitalDoctors from './pages/hospital/HospitalDoctors';
import HospitalAppointments from './pages/hospital/HospitalAppointments';
import HospitalPatients from './pages/hospital/HospitalPatients';

// Placeholders for components to be refactored
const Placeholder = ({ title }) => <div className="text-white p-6">Placeholder for {title}</div>;

function App() {
    const navigate = useNavigate();
    const location = useLocation();

    // Derived active tab from path for BottomNav
    const getActiveTab = () => {
        const path = location.pathname;
        if (path.startsWith('/apps')) return 'apps';
        if (path.startsWith('/pages')) return 'pages';
        if (path.startsWith('/ui')) return 'ui';
        if (path.startsWith('/auth') || path.includes('auth-')) return 'auth';
        return 'home';
    };

    return (
        <Layout activePage={getActiveTab()} onNavigate={(path) => navigate(path)}>
            <Routes>
                {/* Home Redirect */}
                <Route path="/" element={<Navigate to="/apps/crm/dashboard" replace />} />
                <Route path="/home" element={<Navigate to="/apps/crm/dashboard" replace />} />

                {/* Apps Routes */}
                {/* Apps Routes - Flattened */}

                {/* Analytics */}
                <Route path="apps/analytics/customers" element={<Analytics view="customers" />} />
                <Route path="apps/analytics/reports" element={<Analytics view="reports" />} />

                {/* Crypto */}
                <Route path="apps/crypto/dashboard" element={<Crypto />} />

                {/* CRM */}
                <Route path="apps/crm/dashboard" element={<Dashboard />} />
                <Route path="apps/crm/contacts" element={<Contacts />} />
                <Route path="apps/crm/opportunities" element={<Opportunities />} />
                <Route path="apps/crm/leads" element={<Leads />} />
                <Route path="apps/crm/customers" element={<Customers />} />

                {/* Projects */}
                <Route path="apps/projects/dashboard" element={<DashboardProject />} />
                <Route path="apps/projects/clients" element={<Clients />} />
                <Route path="apps/projects/team" element={<Team />} />
                <Route path="apps/projects/project" element={<ProjectList />} />
                <Route path="apps/projects/task" element={<Task />} />
                <Route path="apps/projects/kanban" element={<Kanban />} />
                <Route path="apps/projects/users" element={<Users />} />
                <Route path="apps/projects/create" element={<Create />} />
                <Route path="apps/projects/chat" element={<Placeholder title="Projects Chat" />} />

                {/* Other Apps */}
                <Route path="apps/calendar" element={<Calendar />} />
                <Route path="apps/invoice" element={<Invoice />} />

                {/* Email & Chat */}
                <Route path="apps/email/inbox" element={<Email type="inbox" />} />
                <Route path="apps/email/starred" element={<Email type="starred" />} />
                {/* Note: 'sent' and 'trash' are handled by the same component with different 'type' prop */}
                <Route path="apps/email/sent" element={<Email type="sent" />} />
                <Route path="apps/email/trash" element={<Email type="trash" />} />
                <Route path="apps/email/read" element={<Email type="read" />} />
                {/* Mapping Global Chat route for navigation */}
                <Route path="apps/chat" element={<Chat />} />

                {/* Hospital Routes */}
                <Route path="apps/hospital/dashboard" element={<HospitalDashboard />} />
                <Route path="apps/hospital/doctors" element={<HospitalDoctors />} />
                <Route path="apps/hospital/appointments" element={<HospitalAppointments />} />
                <Route path="apps/hospital/patients" element={<HospitalPatients />} />

                {/* Pages Routes */}
                <Route path="pages/profile/overview" element={<Profile />} />
                <Route path="pages/timeline" element={<Timeline />} />
                <Route path="pages/pricing" element={<Pricing />} />
                <Route path="pages/gallery" element={<Gallery />} />

                {/* UI Routes */}
                <Route path="ui/elements/alerts" element={<Alerts />} />
                <Route path="ui/elements/buttons" element={<Buttons />} />
                <Route path="ui/elements/cards" element={<Cards />} />
                <Route path="ui/elements/modals" element={<Modals />} />

                {/* Auth Routes */}
                <Route path="/auth-login" element={<Login />} />
                <Route path="/auth-register" element={<Register />} />
                <Route path="/auth-recover" element={<Recover />} />
            </Routes>
        </Layout>
    );
}

export default App;
