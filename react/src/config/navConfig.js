import React from 'react';

export const navConfig = {
    apps: {
        label: 'Apps',
        items: [
            {
                id: 'analytics',
                label: 'Analytics',
                icon: 'analytics',
                subItems: [
                    { id: 'analytics-customers', label: 'Customers', path: '/apps/analytics/customers' },
                    { id: 'analytics-reports', label: 'Reports', path: '/apps/analytics/reports' }
                ]
            },
            {
                id: 'crm',
                label: 'CRM',
                icon: 'groups',
                subItems: [
                    { id: 'crm-dashboard', label: 'Dashboard', path: '/apps/crm/dashboard' },
                    { id: 'crm-contacts', label: 'Contacts', path: '/apps/crm/contacts' },
                    { id: 'crm-opportunities', label: 'Opportunities', path: '/apps/crm/opportunities' },
                    { id: 'crm-leads', label: 'Leads', path: '/apps/crm/leads' },
                    { id: 'crm-customers', label: 'Customers', path: '/apps/crm/customers' }
                ]
            },
            {
                id: 'projects',
                label: 'Projects',
                icon: 'assignment',
                subItems: [
                    { id: 'projects-clients', label: 'Clients', path: '/apps/projects/clients' },
                    { id: 'projects-team', label: 'Team', path: '/apps/projects/team' },
                    { id: 'projects-project', label: 'Project', path: '/apps/projects/project' },
                    { id: 'projects-task', label: 'Task', path: '/apps/projects/task' },
                    { id: 'projects-kanban', label: 'Kanban Board', path: '/apps/projects/kanban' },
                    { id: 'projects-chat', label: 'Chat', path: '/apps/projects/chat' },
                    { id: 'projects-users', label: 'Users', path: '/apps/projects/users' },
                    { id: 'projects-create', label: 'Project Create', path: '/apps/projects/create' }
                ]
            },
            {
                id: 'email',
                label: 'Email',
                icon: 'mail',
                subItems: [
                    { id: 'email-inbox', label: 'Inbox', path: '/apps/email/inbox' },
                    { id: 'email-read', label: 'Read Email', path: '/apps/email/read' }
                ]
            },
            {
                id: 'chat',
                label: 'Chat',
                icon: 'chat',
                subItems: [] // Chat might be a full screen app without sub-sub items? Or maybe specific chats?
                // Sample apps-chat has a sidebar with users. 
                // We'll mimic the layout: Submenu=Chat, SubSub=UserList?
            },
            {
                id: 'contact-list',
                label: 'Contact List',
                icon: 'contacts',
                subItems: []
            },
            {
                id: 'calendar',
                label: 'Calendar',
                icon: 'calendar_today',
                subItems: []
            },
            {
                id: 'invoice',
                label: 'Invoice',
                icon: 'receipt',
                subItems: []
            }
        ]
    },
    pages: {
        label: 'Pages',
        items: [
            {
                id: 'profile',
                label: 'Profile',
                icon: 'person',
                subItems: [
                    { id: 'profile-overview', label: 'Overview', path: '/pages/profile/overview' }
                    // Additional tabs from sample could go here if we split them
                ]
            },
            {
                id: 'timeline',
                label: 'Timeline',
                icon: 'timeline',
                subItems: []
            },
            {
                id: 'pricing',
                label: 'Pricing',
                icon: 'attach_money',
                subItems: []
            },
            {
                id: 'gallery',
                label: 'Gallery',
                icon: 'collections',
                subItems: []
            },
            {
                id: 'faq',
                label: 'FAQs',
                icon: 'help_outline',
                subItems: []
            }
        ]
    },
    ui: {
        label: 'UI Kit',
        items: [
            {
                id: 'elements',
                label: 'UI Elements',
                icon: 'layers',
                subItems: [
                    { id: 'ui-alerts', label: 'Alerts', path: '/ui/elements/alerts' },
                    { id: 'ui-avatar', label: 'Avatar', path: '/ui/elements/avatar' },
                    { id: 'ui-buttons', label: 'Buttons', path: '/ui/elements/buttons' },
                    { id: 'ui-badges', label: 'Badges', path: '/ui/elements/badges' },
                    { id: 'ui-cards', label: 'Cards', path: '/ui/elements/cards' },
                    { id: 'ui-modals', label: 'Modals', path: '/ui/elements/modals' },
                    { id: 'ui-navbar', label: 'Navbar', path: '/ui/elements/navbar' }
                ]
            },
            {
                id: 'advanced',
                label: 'Advanced UI',
                icon: 'stars',
                subItems: [
                    { id: 'adv-animation', label: 'Animation', path: '/ui/advanced/animation' },
                    { id: 'adv-clipboard', label: 'Clipboard', path: '/ui/advanced/clipboard' },
                    { id: 'adv-sweetalerts', label: 'Sweet Alerts', path: '/ui/advanced/sweetalerts' }
                ]
            }
        ]
    }
};
