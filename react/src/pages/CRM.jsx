import React, { useState } from 'react';
import PillLayout from '../components/PillLayout';
import DataTable from '../components/DataTable';

// --- Shared Data Helpers ---
// Mock Avatars helper
const getAvatar = (name) => {
    return `https://ui-avatars.com/api/?name=${name}&background=random&color=fff`;
}

// --- Sub-View: Index (Dashboard) ---
const IndexView = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: 'Total Revenue', value: '$24,500', change: '+15%', color: 'from-blue-500 to-indigo-500', icon: 'payments' },
                    { label: 'New Deals', value: '45', change: '+5%', color: 'from-emerald-500 to-teal-500', icon: 'handshake' },
                    { label: 'Conversion Rate', value: '18.5%', change: '-2%', color: 'from-orange-500 to-amber-500', icon: 'trending_up' },
                    { label: 'Active Leads', value: '128', change: '+8%', color: 'from-purple-500 to-pink-500', icon: 'group' },
                ].map((stat, i) => (
                    <div key={i} className="glass-card p-4 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="text-xs font-semibold text-tertiary uppercase tracking-wider">{stat.label}</span>
                                <h3 className="text-2xl font-bold text-textPrimary mt-1">{stat.value}</h3>
                            </div>
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg shadow-primary/20`}>
                                <span className="material-icons-round text-lg">{stat.icon}</span>
                            </div>
                        </div>
                        <div className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                            {stat.change} <span className="text-tertiary font-normal ml-1">vs last month</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 glass-card p-6 min-h-[300px] flex items-center justify-center text-tertiary">
                    {/* Placeholder for Main Chart */}
                    <div className="text-center">
                        <span className="material-icons-round text-5xl mb-2 opacity-20">bar_chart</span>
                        <p>Sales Performance Chart</p>
                    </div>
                </div>
                <div className="glass-card p-6">
                    <h3 className="font-bold text-textPrimary mb-4">Top Deals</h3>
                    <div className="space-y-4">
                        {[
                            { n: 'Tech Corp Upgrade', v: '$12,000', s: 'Won' },
                            { n: 'Global Logistics', v: '$8,500', s: 'Pending' },
                            { n: 'StartUp Inc Seed', v: '$5,200', s: 'Won' },
                        ].map((d, i) => (
                            <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                                <div>
                                    <div className="text-sm font-medium text-textPrimary">{d.n}</div>
                                    <div className="text-xs text-tertiary">{d.s}</div>
                                </div>
                                <div className="text-sm font-bold text-textPrimary">{d.v}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Sub-View: Contacts ---
const ContactsView = () => {
    const columns = [
        {
            header: 'Name',
            render: (row) => (
                <div className="flex items-center gap-3">
                    <img src={getAvatar(row.name)} alt="" className="w-8 h-8 rounded-full" />
                    <span className="font-medium">{row.name}</span>
                </div>
            )
        },
        { header: 'Email', accessor: 'email' },
        { header: 'Phone', accessor: 'phone' },
        { header: 'Company', accessor: 'company' },
        {
            header: 'Status',
            render: (row) => (
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${row.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                        'bg-slate-500/10 text-slate-500 border-slate-500/20'
                    }`}>
                    {row.status}
                </span>
            )
        },
    ];

    const data = [
        { name: 'Donald Gardner', email: 'donald@example.com', phone: '+123456789', company: 'Starbucks', status: 'Active' },
        { name: 'Matt Rosales', email: 'matt@example.com', phone: '+987654321', company: 'MacDonald', status: 'Inactive' },
        { name: 'Michael Hill', email: 'michael@example.com', phone: '+112233445', company: 'Life Good', status: 'Active' },
        { name: 'Nancy Flanary', email: 'nancy@example.com', phone: '+556677889', company: 'Flipkart', status: 'Active' },
        { name: 'Dorothy Key', email: 'dorothy@example.com', phone: '+998877665', company: 'Adidas', status: 'Inactive' },
    ];

    return <DataTable columns={columns} data={data} />;
};

// --- Sub-View: Opportunities ---
const OpportunitiesView = () => {
    const columns = [
        { header: 'Deal Name', accessor: 'deal' },
        { header: 'Company', accessor: 'company' },
        { header: 'Amount', accessor: 'amount' },
        {
            header: 'Stage', render: (row) => (
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${row.stage === 'Won' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                        row.stage === 'Lost' ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' :
                            'bg-amber-500/10 text-amber-500 border-amber-500/20'
                    }`}>
                    {row.stage}
                </span>
            )
        },
        { header: 'Owner', accessor: 'owner' },
    ];

    const data = [
        { deal: 'Q1 Upgrade License', company: 'Nvidia Corp', amount: '$45,000', stage: 'Negotiation', owner: 'Mike H.' },
        { deal: 'Cloud Migration', company: 'Google Inc', amount: '$120,000', stage: 'Won', owner: 'Donald G.' },
        { deal: 'Consulting Retainer', company: 'Amazon', amount: '$15,000', stage: 'Lost', owner: 'Nancy F.' },
        { deal: 'Design System Ops', company: 'Meta', amount: '$85,000', stage: 'Qualified', owner: 'Matt R.' },
    ];

    return <DataTable columns={columns} data={data} />;
};

// --- Sub-View: Leads ---
const LeadsView = () => {
    const columns = [
        { header: 'Lead Name', accessor: 'name' },
        { header: 'Source', accessor: 'source' },
        {
            header: 'Status', render: (row) => (
                <span className="text-xs font-medium text-primary">
                    {row.status}
                </span>
            )
        },
        { header: 'Created', accessor: 'date' },
    ];

    const data = [
        { name: 'James Anderson', source: 'Website', status: 'New', date: 'Oct 24, 2023' },
        { name: 'Sarah Connor', source: 'LinkedIn', status: 'Contacted', date: 'Oct 22, 2023' },
        { name: 'Kyle Reese', source: 'Referral', status: 'Qualified', date: 'Oct 20, 2023' },
    ];

    return <DataTable columns={columns} data={data} />;
};


// --- Sub-View: Customers ---
const CustomersView = () => {
    // Reusing contacts view logic principally, but conceptually distinct
    const columns = [
        {
            header: 'Customer',
            render: (row) => (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">{row.name[0]}</div>
                    <span className="font-medium">{row.name}</span>
                </div>
            )
        },
        { header: 'Industry', accessor: 'industry' },
        { header: 'Total Spent', accessor: 'spent' },
        { header: 'Last Order', accessor: 'lastOrder' },
    ];

    const data = [
        { name: 'Starbucks', industry: 'Food & Beverage', spent: '$125,000', lastOrder: '2 days ago' },
        { name: 'Nike', industry: 'Retail', spent: '$540,000', lastOrder: '1 week ago' },
        { name: 'Tesla', industry: 'Automotive', spent: '$2,100,000', lastOrder: 'Yesterday' },
    ];

    return <DataTable columns={columns} data={data} />;
};


export default function CRM() {
    const [activePill, setActivePill] = useState('index');

    const pills = [
        { id: 'index', label: 'Dashboard' },
        { id: 'contacts', label: 'Contacts' },
        { id: 'opportunities', label: 'Opportunities' },
        { id: 'leads', label: 'Leads' },
        { id: 'customers', label: 'Customers' }
    ];

    const renderView = () => {
        switch (activePill) {
            case 'index': return <IndexView />;
            case 'contacts': return <ContactsView />;
            case 'opportunities': return <OpportunitiesView />;
            case 'leads': return <LeadsView />;
            case 'customers': return <CustomersView />;
            default: return <IndexView />;
        }
    };

    return (
        <PillLayout
            title="CRM"
            bills={pills}
            activePill={activePill}
            onPillChange={setActivePill}
        >
            {renderView()}
        </PillLayout>
    );
}
