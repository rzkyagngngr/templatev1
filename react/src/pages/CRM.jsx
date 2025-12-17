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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
        <div className="space-y-6">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900">CRM Dashboard</h1>
                <p className="text-slate-600 mt-2">Manage customer relationships and sales pipeline</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Total Revenue', value: '$24,500', change: '+15%', color: 'from-blue-500 to-indigo-500', icon: 'payments' },
                    { label: 'New Deals', value: '45', change: '+5%', color: 'from-emerald-500 to-teal-500', icon: 'handshake' },
                    { label: 'Conversion Rate', value: '18.5%', change: '-2%', color: 'from-orange-500 to-amber-500', icon: 'trending_up' },
                    { label: 'Active Leads', value: '128', change: '+8%', color: 'from-purple-500 to-pink-500', icon: 'group' },
                ].map((stat, i) => (
                    <div key={i} className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 rounded-3xl border border-white/60 p-6 hover:shadow-2xl hover:shadow-blue-200/40 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-100/30">
                        <div className="flex items-start justify-between mb-3">
                            <div className={`p-3 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                                <span className="material-icons-round text-white">{stat.icon}</span>
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-emerald-500/20 text-emerald-700' : 'bg-red-500/20 text-red-700'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-slate-600 text-sm font-semibold">{stat.label}</p>
                        <h3 className="text-3xl font-bold text-slate-900 mt-1">{stat.value}</h3>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40 p-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">Sales Performance</h2>
                    <div className="min-h-[300px] flex items-center justify-center text-slate-500">
                        <div className="text-center">
                            <span className="material-icons-round text-5xl mb-2 opacity-20">bar_chart</span>
                            <p>Sales Performance Chart</p>
                        </div>
                    </div>
                </div>
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40 p-6">
                    <h3 className="font-bold text-slate-900 mb-4">Top Deals</h3>
                    <div className="space-y-4">
                        {[
                            { n: 'Tech Corp Upgrade', v: '$12,000', s: 'Won', c: 'emerald' },
                            { n: 'Global Logistics', v: '$8,500', s: 'Pending', c: 'amber' },
                            { n: 'StartUp Inc Seed', v: '$5,200', s: 'Won', c: 'emerald' },
                        ].map((d, i) => (
                            <div key={i} className="backdrop-blur-xl bg-white/40 rounded-2xl p-4 border border-white/50 hover:shadow-lg hover:scale-102 transition-all mb-3">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <div className="text-sm font-semibold text-slate-900">{d.n}</div>
                                        <span className={`text-xs px-2 py-1 rounded-full mt-1 inline-block bg-${d.c}-500/20 text-${d.c}-700 font-semibold`}>{d.s}</span>
                                    </div>
                                    <div className="text-lg font-bold text-slate-900">{d.v}</div>
                                </div>
                            </div>
                        ))}
                    </div>
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
