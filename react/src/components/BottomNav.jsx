import React, { useState, useEffect } from 'react';

export default function BottomNav({ activeTab, onNavigate }) {
    const [layout, setLayout] = useState('bottom'); // 'bottom', 'left', 'right'
    const [isAnimating, setIsAnimating] = useState(false);

    // Navigation Items matching the new structure
    const navItems = [
        {
            id: 'home',
            icon: 'home',
            label: 'Home',
            path: '/apps/crm/dashboard',
            submenus: [
                { label: 'Analytics', path: '/apps/analytics/customers' },
                { label: 'Crypto', path: '/apps/crypto/dashboard' },
                { label: 'CRM', path: '/apps/crm/dashboard' },
                { label: 'Project', path: '/apps/projects/dashboard' },
                { label: 'Ecommerce', path: '/apps/ecommerce/dashboard' }, // Placeholder route
                { label: 'Helpdesk', path: '/apps/helpdesk/dashboard' }, // Placeholder route
                { label: 'Hospital', path: '/apps/hospital/dashboard' } // Placeholder route
            ]
        },
        {
            id: 'apps',
            icon: 'apps',
            label: 'Apps',
            path: '/apps/crm/dashboard',
            submenus: [
                {
                    label: 'Analytics',
                    submenus: [
                        { label: 'Customers', path: '/apps/analytics/customers' },
                        { label: 'Reports', path: '/apps/analytics/reports' },
                    ]
                },
                {
                    label: 'Crypto',
                    submenus: [
                        { label: 'Exchange', path: '/apps/crypto/exchange' },
                        { label: 'Wallet', path: '/apps/crypto/wallet' },
                        { label: 'Crypto News', path: '/apps/crypto/news' },
                        { label: 'ICO List', path: '/apps/crypto/ico' },
                        { label: 'Settings', path: '/apps/crypto/settings' },
                    ]
                },
                {
                    label: 'CRM',
                    submenus: [
                        { label: 'Contacts', path: '/apps/crm/contacts' },
                        { label: 'Opportunities', path: '/apps/crm/opportunities' },
                        { label: 'Leads', path: '/apps/crm/leads' },
                        { label: 'Customers', path: '/apps/crm/customers' },
                    ]
                },
                {
                    label: 'Projects',
                    submenus: [
                        { label: 'Clients', path: '/apps/projects/clients' },
                        { label: 'Team', path: '/apps/projects/team' },
                        { label: 'Project', path: '/apps/projects/project' },
                        { label: 'Task', path: '/apps/projects/task' },
                        { label: 'Kanban Board', path: '/apps/projects/kanban' },
                        { label: 'Chat', path: '/apps/projects/chat' },
                        { label: 'Users', path: '/apps/projects/users' },
                        { label: 'Project Create', path: '/apps/projects/create' },
                    ]
                },
                {
                    label: 'Ecommerce',
                    submenus: [
                        { label: 'Products', path: '/apps/ecommerce/products' },
                        { label: 'Product List', path: '/apps/ecommerce/list' },
                        { label: 'Product Detail', path: '/apps/ecommerce/detail' },
                        { label: 'Cart', path: '/apps/ecommerce/cart' },
                        { label: 'Checkout', path: '/apps/ecommerce/checkout' },
                    ]
                },
                {
                    label: 'Helpdesk',
                    submenus: [
                        { label: 'Tickets', path: '/apps/helpdesk/tickets' },
                        { label: 'Reports', path: '/apps/helpdesk/reports' },
                        { label: 'Agents', path: '/apps/helpdesk/agents' },
                    ]
                },
                {
                    label: 'Hospital',
                    submenus: [
                        {
                            label: 'Appointments', path: '/apps/hospital/appointments'
                        },
                        {
                            label: 'Doctors', path: '/apps/hospital/doctors'
                        },
                        {
                            label: 'Patients', path: '/apps/hospital/patients'
                        },
                        {
                            label: 'Payments', path: '/apps/hospital/payments'
                        },
                        {
                            label: 'Staff', path: '/apps/hospital/staff'
                        },
                        {
                            label: 'General', path: '/apps/hospital/general'
                        },
                    ]
                },
                {
                    label: 'Email',
                    submenus: [
                        { label: 'Inbox', path: '/apps/email/inbox' },
                        { label: 'Starred', path: '/apps/email/starred' },
                        { label: 'Sent', path: '/apps/email/sent' },
                        { label: 'Trash', path: '/apps/email/trash' },
                        { label: 'Read Email', path: '/apps/email/read' },
                    ]
                },
                { label: 'Chat', path: '/apps/chat' },
                { label: 'Contact List', path: '/apps/crm/contacts' },
                { label: 'Calendar', path: '/apps/calendar' },
                { label: 'Invoice', path: '/apps/invoice' },
            ]
        },
        {
            id: 'ui',
            icon: 'palette',
            label: 'UI',
            path: '/ui/elements/alerts',
            submenus: [
                {
                    label: 'UI Elements',
                    submenus: [
                        { label: 'Alerts', path: '/ui/elements/alerts' },
                        { label: 'Avatar', path: '/ui/elements/avatar' },
                        { label: 'Buttons', path: '/ui/elements/buttons' },
                        { label: 'Badges', path: '/ui/elements/badges' },
                        { label: 'Cards', path: '/ui/elements/cards' },
                        { label: 'Carousels', path: '/ui/elements/carousels' },
                        { label: 'Dropdowns', path: '/ui/elements/dropdowns' },
                        { label: 'Grids', path: '/ui/elements/grids' },
                        { label: 'Images', path: '/ui/elements/images' },
                        { label: 'List', path: '/ui/elements/list' },
                        { label: 'Modals', path: '/ui/elements/modals' },
                        { label: 'Navs', path: '/ui/elements/navs' },
                        { label: 'Navbar', path: '/ui/elements/navbar' },
                        { label: 'Paginations', path: '/ui/elements/paginations' },
                        { label: 'Popover & Tooltips', path: '/ui/elements/popovers' },
                        { label: 'Progress', path: '/ui/elements/progress' },
                        { label: 'Spinners', path: '/ui/elements/spinners' },
                        { label: 'Tabs & Accordions', path: '/ui/elements/tabs' },
                        { label: 'Typography', path: '/ui/elements/typography' },
                        { label: 'Videos', path: '/ui/elements/videos' },
                    ]
                },
                {
                    label: 'Advanced UI',
                    submenus: [
                        { label: 'Animation', path: '/ui/advanced/animation' },
                        { label: 'Clip Board', path: '/ui/advanced/clipboard' },
                        { label: 'Dragula', path: '/ui/advanced/dragula' },
                        { label: 'File Manager', path: '/ui/advanced/files' },
                        { label: 'Highlight', path: '/ui/advanced/highlight' },
                        { label: 'Range Slider', path: '/ui/advanced/slider' },
                        { label: 'Ratings', path: '/ui/advanced/ratings' },
                        { label: 'Ribbons', path: '/ui/advanced/ribbons' },
                        { label: 'Sweet Alerts', path: '/ui/advanced/sweetalerts' },
                        { label: 'Toasts', path: '/ui/advanced/toasts' },
                    ]
                },
                {
                    label: 'Forms',
                    submenus: [
                        { label: 'Basic Elements', path: '/ui/forms/basic' },
                        { label: 'Advance Elements', path: '/ui/forms/advanced' },
                        { label: 'Validation', path: '/ui/forms/validation' },
                        { label: 'Wizard', path: '/ui/forms/wizard' },
                        { label: 'Editors', path: '/ui/forms/editors' },
                        { label: 'File Upload', path: '/ui/forms/upload' },
                        { label: 'Image Crop', path: '/ui/forms/crop' },
                    ]
                },
                {
                    label: 'Charts',
                    submenus: [
                        { label: 'Apex', path: '/ui/charts/apex' },
                        { label: 'JustGage', path: '/ui/charts/justgage' },
                        { label: 'Chartjs', path: '/ui/charts/chartjs' },
                    ]
                },
                {
                    label: 'Tables',
                    submenus: [
                        { label: 'Basic', path: '/ui/tables/basic' },
                        { label: 'Datatables', path: '/ui/tables/datatables' },
                        { label: 'Editable', path: '/ui/tables/editable' },
                    ]
                },
                {
                    label: 'Icons',
                    submenus: [
                        { label: 'Material Design', path: '/ui/icons/material' },
                        { label: 'Font awesome', path: '/ui/icons/fontawesome' },
                        { label: 'Tabler', path: '/ui/icons/tabler' },
                        { label: 'Feather', path: '/ui/icons/feather' },
                    ]
                },
                {
                    label: 'Maps',
                    submenus: [
                        { label: 'Google Maps', path: '/ui/maps/google' },
                        { label: 'Leaflet Maps', path: '/ui/maps/leaflet' },
                        { label: 'Vector Maps', path: '/ui/maps/vector' },
                    ]
                },
                {
                    label: 'Email Templates',
                    submenus: [
                        { label: 'Basic Action Email', path: '/ui/email-templates/basic' },
                        { label: 'Alert Email', path: '/ui/email-templates/alert' },
                        { label: 'Billing Email', path: '/ui/email-templates/billing' },
                    ]
                }
            ]
        },
        {
            id: 'pages',
            icon: 'description',
            label: 'Pages',
            path: '/pages/profile/overview',
            submenus: [
                { label: 'Profile', path: '/pages/profile/overview' },
                { label: 'Tour', path: '/pages/tour' },
                { label: 'Timeline', path: '/pages/timeline' },
                { label: 'Treeview', path: '/pages/treeview' },
                { label: 'Starter Page', path: '/pages/starter' },
                { label: 'Pricing', path: '/pages/pricing' },
                { label: 'Blogs', path: '/pages/blogs' },
                { label: 'FAQs', path: '/pages/faq' },
                { label: 'Gallery', path: '/pages/gallery' },
            ]
        },
        {
            id: 'auth',
            icon: 'shield',
            label: 'Auth',
            path: '/auth-login',
            submenus: [
                { label: 'Log in', path: '/auth-login' },
                { label: 'Log in alt', path: '/auth-login-alt' },
                { label: 'Register', path: '/auth-register' },
                { label: 'Register-alt', path: '/auth-register-alt' },
                { label: 'Re-Password', path: '/auth-recover' },
                { label: 'Re-Password-alt', path: '/auth-recover-alt' },
                { label: 'Lock Screen', path: '/auth-lock-screen' },
                { label: 'Lock Screen-alt', path: '/auth-lock-screen-alt' },
                { label: 'Error 404', path: '/auth-404' },
                { label: 'Error 404-alt', path: '/auth-404-alt' },
                { label: 'Error 500', path: '/auth-500' },
                { label: 'Error 500-alt', path: '/auth-500-alt' },
            ]
        },
        {
            id: 'business',
            icon: 'business',
            label: 'Business',
            path: '/hr/dashboard',
            submenus: [
                {
                    label: 'HR & Payroll',
                    submenus: [
                        { label: 'Dashboard', path: '/hr/dashboard' },
                        { label: 'Employees', path: '/hr/employees' },
                        { label: 'Departments', path: '/hr/departments' },
                        { label: 'Attendance', path: '/hr/attendance' },
                        { label: 'Leave Management', path: '/hr/leaves' },
                        { label: 'Payroll', path: '/hr/payroll' },
                        { label: 'Performance', path: '/hr/performance' },
                        { label: 'Recruitment', path: '/hr/recruitment' },
                        { label: 'Training', path: '/hr/training' },
                    ]
                },
                {
                    label: 'Finance & Accounting',
                    submenus: [
                        { label: 'Dashboard', path: '/finance/dashboard' },
                        { label: 'Invoices', path: '/finance/invoices' },
                        { label: 'Expenses', path: '/finance/expenses' },
                        { label: 'Reports', path: '/finance/reports' },
                        { label: 'Budget', path: '/finance/budget' },
                        { label: 'Audits', path: '/finance/audits' },
                    ]
                },
                {
                    label: 'Sales & Marketing',
                    submenus: [
                        { label: 'Sales Dashboard', path: '/sales/dashboard' },
                        { label: 'Orders', path: '/sales/orders' },
                        { label: 'Quotes', path: '/sales/quotes' },
                        { label: 'Leads', path: '/sales/leads' },
                        { label: 'Marketing Campaigns', path: '/marketing/campaigns' },
                        { label: 'Marketing Analytics', path: '/marketing/analytics' },
                    ]
                },
                {
                    label: 'QA & Testing',
                    submenus: [
                        { label: 'Dashboard', path: '/qa/dashboard' },
                        { label: 'Test Cases', path: '/qa/testcases' },
                        { label: 'Defects', path: '/qa/defects' },
                        { label: 'Test Environments', path: '/qa/environments' },
                        { label: 'Test Coverage', path: '/qa/coverage' },
                    ]
                },
                {
                    label: 'Projects & Operations',
                    submenus: [
                        { label: 'Projects Dashboard', path: '/projects/dashboard' },
                        { label: 'Kanban Board', path: '/projects/kanban' },
                        { label: 'Tasks', path: '/projects/tasks' },
                        { label: 'Project Approvals', path: '/projects/approvals' },
                        { label: 'Operations Dashboard', path: '/operations/dashboard' },
                        { label: 'Tickets', path: '/operations/tickets' },
                    ]
                },
                {
                    label: 'Reporting',
                    submenus: [
                        { label: 'Dashboard', path: '/reporting/dashboard' },
                        { label: 'Report Builder', path: '/reporting/builder' },
                        { label: 'Scheduled Reports', path: '/reporting/scheduler' },
                    ]
                },
                {
                    label: 'Inventory',
                    submenus: [
                        { label: 'Dashboard', path: '/inventory/dashboard' },
                        { label: 'Products', path: '/inventory/products' },
                        { label: 'Warehouses', path: '/inventory/warehouses' },
                        { label: 'Stock Management', path: '/inventory/stock' },
                    ]
                },
                {
                    label: 'Support & Knowledge',
                    submenus: [
                        { label: 'Support Dashboard', path: '/support/dashboard' },
                        { label: 'Support Tickets', path: '/support/tickets' },
                        { label: 'Knowledge Base', path: '/support/knowledgebase' },
                        { label: 'FAQ', path: '/support/faq' },
                    ]
                },
            ]
        }
    ];

    const toggleLayout = () => {
        setIsAnimating(true);
        setTimeout(() => {
            let nextLayout = 'bottom';
            if (layout === 'bottom') nextLayout = 'left';
            else if (layout === 'left') nextLayout = 'right';
            else nextLayout = 'bottom';
            setLayout(nextLayout);
            setIsAnimating(false);
        }, 200);
    };

    const getPositionClasses = () => {
        if (layout === 'bottom') return 'bottom-5 left-1/2 -translate-x-1/2 flex-row rounded-[50px] px-6 py-2.5';
        if (layout === 'left') return 'top-1/2 left-5 -translate-y-1/2 flex-col rounded-[1.5rem] py-3 px-2.5';
        if (layout === 'right') return 'top-1/2 right-5 -translate-y-1/2 flex-col rounded-[1.5rem] py-3 px-2.5';
        return '';
    };

    const getAnimationClasses = () => {
        if (isAnimating) return 'opacity-0 scale-95';
        return 'opacity-100 scale-100';
    };

    return (
        <nav className={`fixed z-50 flex gap-2.5 bg-white/12 backdrop-blur-[1.5rem] saturate-[1.8] border border-white/25 shadow-glass transition-all duration-300 ease-in-out ${getPositionClasses()} ${getAnimationClasses()}`}>
            {navItems.map((item) => (
                <NavButton
                    key={item.id}
                    item={item}
                    isActive={activeTab === item.id}
                    layout={layout}
                    onNavigate={onNavigate}
                    onClick={() => {
                        if (item.path && !item.submenus) {
                            onNavigate(item.path);
                        }
                    }}
                />
            ))}
            <button
                onClick={toggleLayout}
                className={`w-10 h-10 flex items-center justify-center rounded-xl bg-white/15 text-navAccent hover:bg-white/25 hover:shadow-[0_0_1.25rem_rgba(50,208,255,0.3)] transition-all duration-300 flex-shrink-0 ${layout !== 'bottom' ? 'mt-2 w-12 h-12' : ''}`}
                title="Toggle Layout"
            >
                <span className="material-icons-round text-base">
                    {layout === 'bottom' ? 'view_agenda' : 'view_week'}
                </span>
            </button>
        </nav>
    );
}

function SubMenuItem({ item, onNavigate, depth = 0 }) {
    const [isHovered, setIsHovered] = useState(false);
    const [hideTimeout, setHideTimeout] = useState(null);
    const hasChildren = item.submenus && item.submenus.length > 0;

    const handleMouseEnter = () => {
        if (hideTimeout) clearTimeout(hideTimeout);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setIsHovered(false);
        }, 300); // 300ms grace period
        setHideTimeout(timeout);
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    if (item.path) {
                        onNavigate(item.path);
                    }
                }}
                className={`flex items-center justify-center w-full px-4 py-2.5 text-xs font-medium transition-all text-left whitespace-nowrap justify-between ${isHovered ? 'bg-primary/5 text-primary' : 'text-textPrimary hover:bg-primary/5 hover:text-primary'}`}
            >
                <span>{item.label}</span>
                {hasChildren && (
                    <span className="material-icons-round text-[0.8rem] text-tertiary ml-2">chevron_right</span>
                )}
            </button>

            {/* Nested Submenu */}
            {hasChildren && (
                <div
                    className={`absolute top-0 left-full pl-2 py-2 min-w-[10rem] z-[60] transition-all duration-200 
                    ${isHovered ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-2 pointer-events-none'}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="bg-white border border-black/10 rounded-2xl py-2 shadow-xl overflow-hidden">
                        {item.submenus.map((sub, i) => (
                            <SubMenuItem key={i} item={sub} onNavigate={onNavigate} depth={depth + 1} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function NavButton({ item, isActive, layout, onClick, onNavigate }) {
    const [isHovered, setIsHovered] = useState(false);
    const [hideTimeout, setHideTimeout] = useState(null);

    const handleMouseEnter = () => {
        if (hideTimeout) clearTimeout(hideTimeout);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setIsHovered(false);
        }, 150);
        setHideTimeout(timeout);
    };

    return (
        <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button
                onClick={onClick}
                className={`relative flex flex-col items-center justify-center w-12 h-11 rounded-xl transition-all duration-300 ${isActive ? 'text-primary' : 'bg-white/15 text-navAccent'} hover:bg-white/25 hover:-translate-y-1 hover:shadow-[0_0_1.25rem_rgba(50,208,255,0.25)]`}
            >
                <span className={`material-icons-round text-[1.35rem] transition-all duration-300 flex items-center justify-center ${isActive ? 'text-primary drop-shadow-[0_0_0.5rem_rgba(14,165,233,0.8)]' : 'text-[#7dd3fc]'}`}>
                    {item.icon}
                </span>
                <span className={`text-[0.55rem] mt-0.5 font-medium transition-colors ${isActive ? 'text-primary font-semibold' : 'text-[#64748b]'}`}>
                    {item.label}
                </span>
            </button>

            {/* Top Level Submenu */}
            {item.submenus && (
                <div
                    className={`absolute bg-white border border-black/10 rounded-2xl py-2 min-w-[10rem] shadow-xl z-[60] transition-all duration-200 
                    ${isHovered ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2 pointer-events-none'}
                    ${layout === 'bottom' ? 'bottom-[calc(100%+0.75rem)] left-1/2 -translate-x-1/2' : ''}
                    ${layout === 'left' ? 'left-full top-1/2 -translate-y-1/2 ml-3' : ''}
                    ${layout === 'right' ? 'right-full top-1/2 -translate-y-1/2 mr-3' : ''}
                    `}
                    onMouseEnter={() => { if (hideTimeout) clearTimeout(hideTimeout); setIsHovered(true); }}
                    onMouseLeave={handleMouseLeave}
                >
                    {item.submenus.map((sub, i) => (
                        <SubMenuItem key={i} item={sub} onNavigate={onNavigate} />
                    ))}
                </div>
            )}
        </div>
    );
}
