import React from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';

function IllegalActionScreen({ code = 'PTOS-GATEKEEPER-MISSING' }) {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
            <div className="w-full max-w-lg rounded-3xl p-6 bg-white shadow-2xl border border-gray-200">
                <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-red-50 border border-red-100">
                        <span className="text-red-600 font-bold">!</span>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-gray-900">ILLEGAL ACTION</h1>
                        <p className="text-sm text-gray-700 mt-1">
                            License protection module is missing or was removed.
                        </p>
                        <p className="text-xs text-gray-500 mt-3">Ref: {code}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

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

// Hospital Pages
import HospitalDashboard from './pages/hospital/HospitalDashboard';
import HospitalDoctors from './pages/hospital/HospitalDoctors';
import HospitalAppointments from './pages/hospital/HospitalAppointments';
import HospitalPatients from './pages/hospital/HospitalPatients';
import HospitalGeneral from './pages/hospital/HospitalGeneral';
import DoctorSchedule from './pages/hospital/DoctorSchedule';
import AddDoctor from './pages/hospital/AddDoctor';
import EditDoctor from './pages/hospital/EditDoctor';
import DoctorProfile from './pages/hospital/DoctorProfile';
import AddPatient from './pages/hospital/AddPatient';
import EditPatient from './pages/hospital/EditPatient';
import PatientProfile from './pages/hospital/PatientProfile';
import AllPayments from './pages/hospital/AllPayments';
import AllStaff from './pages/hospital/AllStaff';
import AddStaff from './pages/hospital/AddStaff';
import EditStaff from './pages/hospital/EditStaff';
import AllRooms from './pages/hospital/AllRooms';
import PaymentInvoice from './pages/hospital/PaymentInvoice';
import CashlessPayments from './pages/hospital/CashlessPayments';
import Departments from './pages/hospital/Departments';
import InsuranceCompany from './pages/hospital/InsuranceCompany';
import HospitalChat from './pages/hospital/HospitalChat';

// Ecommerce Pages
import Ecommerce from './pages/Ecommerce';
import EcommerceIndex from './pages/ecommerce/EcommerceIndex';
import ProductList from './pages/ecommerce/ProductList';
import ProductDetail from './pages/ecommerce/ProductDetail';
import Cart from './pages/ecommerce/Cart';
import Checkout from './pages/ecommerce/Checkout';

// Helpdesk Pages
import Helpdesk from './pages/Helpdesk';
import HelpdeskTickets from './pages/helpdesk/HelpdeskTickets';
import HelpdeskAgents from './pages/helpdesk/HelpdeskAgents';
import HelpdeskReports from './pages/helpdesk/HelpdeskReports';

// Hospital Dashboard
import Hospital from './pages/Hospital';

// Crypto Pages
import CryptoExchange from './pages/crypto/CryptoExchange';
import CryptoWallet from './pages/crypto/CryptoWallet';
import CryptoNews from './pages/crypto/CryptoNews';
import CryptoIndex from './pages/crypto/CryptoIndex';
import CryptoIco from './pages/crypto/CryptoIco';
import CryptoSettings from './pages/crypto/CryptoSettings';

// UI Pages
import UIAlerts from './pages/ui/UIAlerts';
import UIButtons from './pages/ui/UIButtons';
import UIBadges from './pages/ui/UIBadges';
import UICards from './pages/ui/UICards';
import UITypography from './pages/ui/UITypography';
import UIDropdowns from './pages/ui/UIDropdowns';
import UIModals from './pages/ui/UIModals';
import UIAvatar from './pages/ui/UIAvatar';
import UIGrids from './pages/ui/UIGrids';
import UIImages from './pages/ui/UIImages';
import UILists from './pages/ui/UILists';
import UIPagination from './pages/ui/UIPagination';
import UIProgress from './pages/ui/UIProgress';
import UICarousels from './pages/ui/UICarousels';
import UISpinners from './pages/ui/UISpinners';
import UINavbar from './pages/ui/UINavbar';
import UINavs from './pages/ui/UINavs';
import UIPopovers from './pages/ui/UIPopovers';
import UITabs from './pages/ui/UITabs';
import UIVideos from './pages/ui/UIVideos';

// Advanced UI Pages
import AdvancedAnimation from './pages/advanced/AdvancedAnimation';
import AdvancedClipboard from './pages/advanced/AdvancedClipboard';
import AdvancedRatings from './pages/advanced/AdvancedRatings';
import AdvancedToasts from './pages/advanced/AdvancedToasts';
import AdvancedHighlight from './pages/advanced/AdvancedHighlight';
import AdvancedDragula from './pages/advanced/AdvancedDragula';
import AdvancedSweetAlerts from './pages/advanced/AdvancedSweetAlerts';
import AdvancedFileManager from './pages/advanced/AdvancedFileManager';
import AdvancedRangeSlider from './pages/advanced/AdvancedRangeSlider';
import AdvancedRibbons from './pages/advanced/AdvancedRibbons';

// Form Pages
import FormElements from './pages/forms/FormElements';
import FormValidation from './pages/forms/FormValidation';
import FormAdvanced from './pages/forms/FormAdvanced';
import FormWizard from './pages/forms/FormWizard';
import FormEditors from './pages/forms/FormEditors';
import FormUpload from './pages/forms/FormUpload';
import FormImageCrop from './pages/forms/FormImageCrop';

// Chart Pages
import ChartsApex from './pages/charts/ChartsApex';
import ChartsChartjs from './pages/charts/ChartsChartjs';
import ChartsMorris from './pages/charts/ChartsMorris';
import ChartsJustgage from './pages/charts/ChartsJustgage';

// Table Pages
import TablesBasic from './pages/tables/TablesBasic';
import TablesDatatable from './pages/tables/TablesDatatable';
import TablesEditable from './pages/tables/TablesEditable';

// Icon Pages
import IconsMaterial from './pages/icons/IconsMaterial';
import IconsFontAwesome from './pages/icons/IconsFontAwesome';
import IconsTabler from './pages/icons/IconsTabler';
import IconsFeather from './pages/icons/IconsFeather';

// Map Pages
import MapsGoogle from './pages/maps/MapsGoogle';
import MapsLeaflet from './pages/maps/MapsLeaflet';
import MapsVector from './pages/maps/MapsVector';

// Email Pages
import EmailBasic from './pages/email/EmailBasic';
import EmailAlert from './pages/email/EmailAlert';
import EmailBilling from './pages/email/EmailBilling';
import EmailInbox from './pages/apps/email/EmailInbox';
import EmailRead from './pages/apps/email/EmailRead';
import EmailStarred from './pages/apps/email/EmailStarred';
import EmailSent from './pages/apps/email/EmailSent';
import EmailTrash from './pages/apps/email/EmailTrash';

// Pages Section
import PagesStarter from './pages/pages/PagesStarter';
import PagesBlogs from './pages/pages/PagesBlogs';
import PagesFAQ from './pages/pages/PagesFAQ';
import Tour from './pages/pages/Tour';
import Treeview from './pages/pages/Treeview';

// Auth Pages
import AuthLogin from './pages/auth/AuthLogin';
import AuthRegister from './pages/auth/AuthRegister';
import AuthRecover from './pages/auth/AuthRecover';
import Auth404 from './pages/auth/Auth404';
import Auth500 from './pages/auth/Auth500';
import AuthLoginAlt from './pages/auth/AuthLoginAlt';
import AuthLockScreen from './pages/auth/AuthLockScreen';

// Sales Pages
import SalesLeads from './pages/sales/SalesLeads';
import SalesOrders from './pages/sales/SalesOrders';
import SalesQuotes from './pages/sales/SalesQuotes';
import SalesCustomers from './pages/sales/SalesCustomers';
import SalesDashboard from './pages/sales/SalesDashboard';
import SalesInvoices from './pages/sales/SalesInvoices';
import SalesTeam from './pages/sales/SalesTeam';

// Finance Pages
import FinanceDashboard from './pages/finance/FinanceDashboard';
import Invoices from './pages/finance/Invoices';
import Expenses from './pages/finance/Expenses';
import FinancialReports from './pages/finance/FinancialReports';
import BudgetPlanning from './pages/finance/BudgetPlanning';
import Audit from './pages/finance/Audit';

// HR Pages
import HRDashboard from './pages/hr/HRDashboard';
import HREmployees from './pages/hr/HREmployees';
import HRDepartments from './pages/hr/HRDepartments';
import HRAttendance from './pages/hr/HRAttendance';
import HRLeaves from './pages/hr/HRLeaves';
import HRPayroll from './pages/hr/HRPayroll';
import HRPerformance from './pages/hr/HRPerformance';
import HRRecruitement from './pages/hr/HRRecruitement';
import HRTraining from './pages/hr/HRTraining';

// Marketing Pages
import MarketingDashboard from './pages/marketing/MarketingDashboard';
import MarketingCampaigns from './pages/marketing/MarketingCampaigns';
import MarketingAnalytics from './pages/marketing/MarketingAnalytics';

// QA Pages
import QADashboard from './pages/qa/QADashboard';
import QATestCases from './pages/qa/QATestCases';
import QADefects from './pages/qa/QADefects';
import QAEnvironments from './pages/qa/QAEnvironments';
import QACoverage from './pages/qa/QACoverage';

// Operations Pages
import OperationsDashboard from './pages/operations/OperationsDashboard';
import OperationsTickets from './pages/operations/OperationsTickets';

// Projects Pages
import ProjectApprovals from './pages/projects/ProjectApprovals';
import ProjectKanban from './pages/projects/ProjectKanban';
import ProjectTasks from './pages/projects/ProjectTasks';
import ProjectChat from './pages/projects/ProjectChat';

// Reporting Pages
import ReportDashboard from './pages/reporting/ReportDashboard';
import ReportBuilder from './pages/reporting/ReportBuilder';
import ReportScheduler from './pages/reporting/ReportScheduler';

// Inventory Pages
import InventoryDashboard from './pages/inventory/InventoryDashboard';
import InventoryProducts from './pages/inventory/InventoryProducts';
import InventoryWarehouses from './pages/inventory/InventoryWarehouses';
import InventoryStock from './pages/inventory/InventoryStock';

// Support Pages
import SupportDashboard from './pages/support/SupportDashboard';
import SupportTickets from './pages/support/SupportTickets';
import SupportKnowledgeBase from './pages/support/SupportKnowledgeBase';
import SupportFAQ from './pages/support/SupportFAQ';

// Placeholders for components to be refactored
const Placeholder = ({ title }) => <div className="= p-6">Placeholder for {title}</div>;

function App() {
    const navigate = useNavigate();
    const location = useLocation();

    // Best-effort runtime guard: if LicenseGatekeeper module was deleted/removed from the app wrapper,
    // block rendering in non-file:// mode.
    const isStandalone = typeof window !== 'undefined' && window.location.protocol === 'file:';
    const gatekeeperPresent =
        isStandalone ||
        (typeof window !== 'undefined' && window.__PTOS_LICENSE_GATEKEEPER_PRESENT__ === true);

    if (!gatekeeperPresent) {
        return <IllegalActionScreen />;
    }

    // Derived active tab from path for BottomNav
    const getActiveTab = () => {
        const path = location.pathname;
        if (path.startsWith('/apps')) return 'apps';
        if (path.startsWith('/pages')) return 'pages';
        if (path.startsWith('/ui')) return 'ui';
        if (path.startsWith('/auth') || path.includes('auth-')) return 'auth';
        if (path.startsWith('/hr') || path.startsWith('/finance') || path.startsWith('/sales') || path.startsWith('/marketing') || path.startsWith('/qa') || path.startsWith('/operations') || path.startsWith('/projects') || path.startsWith('/reporting') || path.startsWith('/inventory') || path.startsWith('/support')) return 'business';
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
                <Route path="apps/projects/chat" element={<ProjectChat />} />

                {/* Other Apps */}
                <Route path="apps/calendar" element={<Calendar />} />
                <Route path="apps/invoice" element={<Invoice />} />

                {/* Email & Chat */}
                <Route path="apps/email/inbox" element={<EmailInbox />} />
                <Route path="apps/email/starred" element={<EmailStarred />} />
                <Route path="apps/email/sent" element={<EmailSent />} />
                <Route path="apps/email/trash" element={<EmailTrash />} />
                <Route path="apps/email/read" element={<EmailRead />} />
                {/* Mapping Global Chat route for navigation */}
                <Route path="apps/chat" element={<Chat />} />

                {/* Hospital Routes */}
                <Route path="apps/hospital/general" element={<HospitalGeneral />} />
                <Route path="apps/hospital/dashboard" element={<Hospital />} />
                <Route path="apps/hospital/doctors" element={<HospitalDoctors />} />
                <Route path="apps/hospital/appointments" element={<HospitalAppointments />} />
                <Route path="apps/hospital/patients" element={<HospitalPatients />} />
                <Route path="apps/hospital/schedule" element={<DoctorSchedule />} />
                <Route path="apps/hospital/add-doctor" element={<AddDoctor />} />
                <Route path="apps/hospital/edit-doctor" element={<EditDoctor />} />
                <Route path="apps/hospital/doctor-profile" element={<DoctorProfile />} />
                <Route path="apps/hospital/add-patient" element={<AddPatient />} />
                <Route path="apps/hospital/edit-patient" element={<EditPatient />} />
                <Route path="apps/hospital/patient-profile" element={<PatientProfile />} />
                <Route path="apps/hospital/all-payments" element={<AllPayments />} />
                <Route path="apps/hospital/invoice" element={<PaymentInvoice />} />
                <Route path="apps/hospital/cashless" element={<CashlessPayments />} />
                <Route path="apps/hospital/all-staff" element={<AllStaff />} />
                <Route path="apps/hospital/staff" element={<AllStaff />} />
                <Route path="apps/hospital/add-staff" element={<AddStaff />} />
                <Route path="apps/hospital/edit-staff" element={<EditStaff />} />
                <Route path="apps/hospital/staff-profile" element={<Placeholder title="Staff Profile" />} />
                <Route path="apps/hospital/salary" element={<Placeholder title="Staff Salary" />} />
                <Route path="apps/hospital/payments" element={<AllPayments />} />
                <Route path="apps/hospital/all-payments" element={<AllPayments />} />
                <Route path="apps/hospital/rooms" element={<AllRooms />} />
                <Route path="apps/hospital/departments" element={<Departments />} />
                <Route path="apps/hospital/insurance" element={<InsuranceCompany />} />
                <Route path="apps/hospital/chat" element={<HospitalChat />} />
                <Route path="apps/hospital/events" element={<Placeholder title="Hospital Events" />} />
                <Route path="apps/hospital/leaves" element={<Placeholder title="Hospital Leaves" />} />
                <Route path="apps/hospital/holidays" element={<Placeholder title="Hospital Holidays" />} />
                <Route path="apps/hospital/attendance" element={<Placeholder title="Hospital Attendance" />} />
                <Route path="apps/hospital/expenses" element={<Placeholder title="Hospital Expenses" />} />
                <Route path="apps/hospital/management" element={<Hospital />} />

                {/* Ecommerce Routes */}
                <Route path="apps/ecommerce/index" element={<EcommerceIndex />} />
                <Route path="apps/ecommerce/dashboard" element={<Ecommerce />} />
                <Route path="apps/ecommerce/products" element={<ProductList />} />
                <Route path="apps/ecommerce/list" element={<ProductList />} />
                <Route path="apps/ecommerce/detail" element={<ProductDetail />} />
                <Route path="apps/ecommerce/cart" element={<Cart />} />
                <Route path="apps/ecommerce/checkout" element={<Checkout />} />

                {/* Helpdesk Routes */}
                <Route path="apps/helpdesk/dashboard" element={<Helpdesk />} />
                <Route path="apps/helpdesk/tickets" element={<HelpdeskTickets />} />
                <Route path="apps/helpdesk/agents" element={<HelpdeskAgents />} />
                <Route path="apps/helpdesk/reports" element={<HelpdeskReports />} />

                {/* Crypto Routes */}
                <Route path="apps/crypto/dashboard" element={<Crypto />} />
                <Route path="apps/crypto/index" element={<CryptoIndex />} />
                <Route path="apps/crypto/exchange" element={<CryptoExchange />} />
                <Route path="apps/crypto/wallet" element={<CryptoWallet />} />
                <Route path="apps/crypto/news" element={<CryptoNews />} />
                <Route path="apps/crypto/ico" element={<CryptoIco />} />
                <Route path="apps/crypto/settings" element={<CryptoSettings />} />

                {/* UI Routes */}
                <Route path="ui/elements/alerts" element={<UIAlerts />} />
                <Route path="ui/elements/buttons" element={<UIButtons />} />
                <Route path="ui/elements/badges" element={<UIBadges />} />
                <Route path="ui/elements/cards" element={<UICards />} />
                <Route path="ui/elements/typography" element={<UITypography />} />
                <Route path="ui/elements/dropdowns" element={<UIDropdowns />} />
                <Route path="ui/elements/modals" element={<UIModals />} />
                <Route path="ui/elements/avatar" element={<UIAvatar />} />
                <Route path="ui/elements/grids" element={<UIGrids />} />
                <Route path="ui/elements/images" element={<UIImages />} />
                <Route path="ui/elements/lists" element={<UILists />} />
                <Route path="ui/elements/pagination" element={<UIPagination />} />
                <Route path="ui/elements/progress" element={<UIProgress />} />
                <Route path="ui/elements/carousels" element={<UICarousels />} />
                <Route path="ui/elements/list" element={<UILists />} />
                <Route path="ui/elements/navs" element={<UINavs />} />
                <Route path="ui/elements/navbar" element={<UINavbar />} />
                <Route path="ui/elements/paginations" element={<UIPagination />} />
                <Route path="ui/elements/popovers" element={<UIPopovers />} />
                <Route path="ui/elements/spinners" element={<UISpinners />} />
                <Route path="ui/elements/tabs" element={<UITabs />} />
                <Route path="ui/elements/videos" element={<UIVideos />} />

                {/* Advanced UI Routes */}
                <Route path="ui/advanced/animation" element={<AdvancedAnimation />} />
                <Route path="ui/advanced/clipboard" element={<AdvancedClipboard />} />
                <Route path="ui/advanced/ratings" element={<AdvancedRatings />} />
                <Route path="ui/advanced/toasts" element={<AdvancedToasts />} />
                <Route path="ui/advanced/highlight" element={<AdvancedHighlight />} />
                <Route path="ui/advanced/dragula" element={<AdvancedDragula />} />
                <Route path="ui/advanced/sweetalerts" element={<AdvancedSweetAlerts />} />
                <Route path="ui/advanced/files" element={<AdvancedFileManager />} />
                <Route path="ui/advanced/slider" element={<AdvancedRangeSlider />} />
                <Route path="ui/advanced/ribbons" element={<AdvancedRibbons />} />

                {/* Forms Routes */}
                <Route path="ui/forms/basic" element={<FormElements />} />
                <Route path="ui/forms/advanced" element={<FormAdvanced />} />
                <Route path="ui/forms/validation" element={<FormValidation />} />
                <Route path="ui/forms/wizard" element={<FormWizard />} />
                <Route path="ui/forms/editors" element={<FormEditors />} />
                <Route path="ui/forms/upload" element={<FormUpload />} />
                <Route path="ui/forms/crop" element={<FormImageCrop />} />

                {/* Charts Routes */}
                <Route path="ui/charts/apex" element={<ChartsApex />} />
                <Route path="ui/charts/chartjs" element={<ChartsChartjs />} />
                <Route path="ui/charts/morris" element={<ChartsMorris />} />
                <Route path="ui/charts/justgage" element={<ChartsJustgage />} />
                <Route path="ui/charts/toast" element={<Placeholder title="Toast Charts" />} />

                {/* Tables Routes */}
                <Route path="ui/tables/basic" element={<TablesBasic />} />
                <Route path="ui/tables/datatables" element={<TablesDatatable />} />
                <Route path="ui/tables/editable" element={<TablesEditable />} />

                {/* Icons Routes */}
                <Route path="ui/icons/material" element={<IconsMaterial />} />
                <Route path="ui/icons/fontawesome" element={<IconsFontAwesome />} />
                <Route path="ui/icons/tabler" element={<IconsTabler />} />
                <Route path="ui/icons/feather" element={<IconsFeather />} />

                {/* Maps Routes */}
                <Route path="ui/maps/google" element={<MapsGoogle />} />
                <Route path="ui/maps/leaflet" element={<MapsLeaflet />} />
                <Route path="ui/maps/vector" element={<MapsVector />} />

                {/* Email Routes */}
                <Route path="ui/email-templates/basic" element={<EmailBasic />} />
                <Route path="ui/email-templates/alert" element={<EmailAlert />} />
                <Route path="ui/email-templates/billing" element={<EmailBilling />} />

                {/* Pages Routes */}
                <Route path="pages/starter" element={<PagesStarter />} />
                <Route path="pages/blogs" element={<PagesBlogs />} />
                <Route path="pages/faq" element={<PagesFAQ />} />
                <Route path="pages/gallery" element={<Gallery />} />
                <Route path="pages/tour" element={<Tour />} />
                <Route path="pages/treeview" element={<Treeview />} />
                <Route path="pages/profile/overview" element={<Profile />} />
                <Route path="pages/timeline" element={<Timeline />} />
                <Route path="pages/pricing" element={<Pricing />} />
                <Route path="pages/gallery" element={<Gallery />} />

                {/* Auth Routes */}
                <Route path="/auth-login" element={<AuthLogin />} />
                <Route path="/auth-register" element={<AuthRegister />} />
                <Route path="/auth-recover" element={<AuthRecover />} />
                <Route path="/auth-404" element={<Auth404 />} />
                <Route path="/auth-500" element={<Auth500 />} />
                <Route path="/auth-login-alt" element={<AuthLoginAlt />} />
                <Route path="/auth-lock-screen" element={<AuthLockScreen />} />
                <Route path="/auth-lock-screen-alt" element={<Placeholder title="Lock Screen Alt" />} />
                <Route path="/auth-404-alt" element={<Placeholder title="Error 404 Alt" />} />
                <Route path="/auth-500-alt" element={<Placeholder title="Error 500 Alt" />} />
                <Route path="/auth-register-alt" element={<Placeholder title="Register Alt" />} />
                <Route path="/auth-recover-alt" element={<Placeholder title="Recover Alt" />} />

                {/* Sales Routes */}
                <Route path="sales/leads" element={<SalesLeads />} />
                <Route path="sales/orders" element={<SalesOrders />} />
                <Route path="sales/quotes" element={<SalesQuotes />} />
                <Route path="sales/customers" element={<SalesCustomers />} />
                <Route path="sales/dashboard" element={<SalesOrders />} />

                {/* Finance Routes */}
                <Route path="finance/dashboard" element={<FinanceDashboard />} />
                <Route path="finance/invoices" element={<Invoices />} />
                <Route path="finance/expenses" element={<Expenses />} />
                <Route path="finance/reports" element={<FinancialReports />} />
                <Route path="finance/budget" element={<BudgetPlanning />} />
                <Route path="finance/audits" element={<Audit />} />

                {/* HR Routes */}
                <Route path="hr/dashboard" element={<HRDashboard />} />
                <Route path="hr/employees" element={<HREmployees />} />
                <Route path="hr/departments" element={<HRDepartments />} />
                <Route path="hr/attendance" element={<HRAttendance />} />
                <Route path="hr/leaves" element={<HRLeaves />} />
                <Route path="hr/payroll" element={<HRPayroll />} />
                <Route path="hr/performance" element={<HRPerformance />} />
                <Route path="hr/recruitment" element={<HRRecruitement />} />
                <Route path="hr/training" element={<HRTraining />} />

                {/* Marketing Routes */}
                <Route path="marketing/dashboard" element={<MarketingDashboard />} />
                <Route path="marketing/campaigns" element={<MarketingCampaigns />} />
                <Route path="marketing/analytics" element={<MarketingAnalytics />} />

                {/* QA Routes */}
                <Route path="qa/dashboard" element={<QADashboard />} />
                <Route path="qa/testcases" element={<QATestCases />} />
                <Route path="qa/defects" element={<QADefects />} />
                <Route path="qa/environments" element={<QAEnvironments />} />
                <Route path="qa/coverage" element={<QACoverage />} />

                {/* Operations Routes */}
                <Route path="operations/dashboard" element={<OperationsDashboard />} />
                <Route path="operations/tickets" element={<OperationsTickets />} />

                {/* Projects Routes */}
                <Route path="projects/approvals" element={<ProjectApprovals />} />
                <Route path="projects/dashboard" element={<DashboardProject />} />
                <Route path="projects/kanban" element={<ProjectKanban />} />
                <Route path="projects/tasks" element={<ProjectTasks />} />

                {/* Reporting Routes */}
                <Route path="reporting/dashboard" element={<ReportDashboard />} />
                <Route path="reporting/builder" element={<ReportBuilder />} />
                <Route path="reporting/scheduler" element={<ReportScheduler />} />

                {/* Inventory Routes */}
                <Route path="inventory/dashboard" element={<InventoryDashboard />} />
                <Route path="inventory/products" element={<InventoryProducts />} />
                <Route path="inventory/warehouses" element={<InventoryWarehouses />} />
                <Route path="inventory/stock" element={<InventoryStock />} />

                {/* Support Routes */}
                <Route path="support/dashboard" element={<SupportDashboard />} />
                <Route path="support/tickets" element={<SupportTickets />} />
                <Route path="support/knowledgebase" element={<SupportKnowledgeBase />} />
                <Route path="support/faq" element={<SupportFAQ />} />
            </Routes>
        </Layout>
    );
}

export default App;
