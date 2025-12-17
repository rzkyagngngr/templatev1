import React from 'react';
import DataTable from '../components/DataTable';
import PillLayout from '../components/PillLayout';

const getAvatar = (name) => `https://ui-avatars.com/api/?name=${name}&background=random&color=fff`;

const ContactList = () => {
    const columns = [
        {
            header: 'Name',
            render: (row) => (
                <div className="flex items-center gap-3">
                    <img src={getAvatar(row.name)} alt="" className="w-8 h-8 rounded-full" />
                    <div>
                        <div className="font-medium text-textPrimary">{row.name}</div>
                        <div className="text-xs text-tertiary">{row.position}</div>
                    </div>
                </div>
            )
        },
        { header: 'Email', accessor: 'email' },
        { header: 'Phone', accessor: 'phone' },
        {
            header: 'Status', render: (row) => (
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${row.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                        'bg-slate-500/10 text-slate-500 border-slate-500/20'
                    }`}>
                    {row.status}
                </span>
            )
        },
        {
            header: 'Action', render: () => (
                <div className="flex gap-2">
                    <button className="text-tertiary hover:text-primary transition"><span className="material-icons-round text-sm">edit</span></button>
                    <button className="text-tertiary hover:text-rose-500 transition"><span className="material-icons-round text-sm">delete</span></button>
                </div>
            )
        }
    ];

    const data = [
        { name: 'Donald Gardner', position: 'Manager', email: 'donald@example.com', phone: '+123456789', status: 'Active' },
        { name: 'Matt Rosales', position: 'Developer', email: 'matt@example.com', phone: '+987654321', status: 'Inactive' },
        { name: 'Michael Hill', position: 'Designer', email: 'michael@example.com', phone: '+112233445', status: 'Active' },
        { name: 'Nancy Flanary', position: 'Manager', email: 'nancy@example.com', phone: '+556677889', status: 'Active' },
        { name: 'Dorothy Key', position: 'Developer', email: 'dorothy@example.com', phone: '+998877665', status: 'Inactive' },
        { name: 'Joseph Cross', position: 'Designer', email: 'joseph@example.com', phone: '+123123123', status: 'Active' },
    ];

    return <DataTable columns={columns} data={data} />;
};

export default function Contacts() {
    // Usually just one view, but wrapping in PillLayout for page title and consistency
    return (
        <PillLayout title="Contact List" bills={[{ id: 'all', label: 'All Contacts' }]} activePill="all" onPillChange={() => { }}>
            <ContactList />
        </PillLayout>
    );
}
