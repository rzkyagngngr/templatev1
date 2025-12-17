import React from 'react';
import { Plus, Crown, Shield, Trash2 } from 'lucide-react';

export default function ProjectMembers() {
  const members = [
    { id: 1, name: 'Sarah Johnson', role: 'Project Lead', email: 'sarah@company.com', joined: '2025-01-05', status: 'active', avatar: 'ðŸ‘©â€ðŸ’¼' },
    { id: 2, name: 'John Smith', role: 'Senior Developer', email: 'john@company.com', joined: '2025-01-05', status: 'active', avatar: 'ðŸ‘¨â€ðŸ’»' },
    { id: 3, name: 'Lisa Chen', role: 'UI/UX Designer', email: 'lisa@company.com', joined: '2025-01-08', status: 'active', avatar: 'ðŸ‘©â€ðŸŽ¨' },
    { id: 4, name: 'Mike Johnson', role: 'Backend Developer', email: 'mike@company.com', joined: '2025-01-10', status: 'active', avatar: 'ðŸ‘¨â€ðŸ’»' },
    { id: 5, name: 'Tom Wilson', role: 'QA Engineer', email: 'tom@company.com', joined: '2025-01-12', status: 'inactive', avatar: 'ðŸ‘¨â€ðŸ”¬' },
  ];

  const roles = [
    { role: 'Project Lead', permissions: 'Full access', members: 1, color: 'bg-purple-100' },
    { role: 'Senior Developer', permissions: 'Code & planning', members: 1, color: 'bg-blue-100' },
    { role: 'Designer', permissions: 'Design & feedback', members: 1, color: 'bg-pink-100' },
    { role: 'Developer', permissions: 'Code access', members: 1, color: 'bg-green-100' },
    { role: 'QA Engineer', permissions: 'Testing access', members: 1, color: 'bg-orange-100' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black">Project Members</h1>
        <button className="bg-blue-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
          <Plus size={20} /> Invite Member
        </button>
      </div>

      {/* Team Overview */}
      <div className="glass-card border border-gray-300 rounded-lg p-6 mb-8 bg-white">
        <h2 className="text-xl font-bold text-black mb-4">Team Overview</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="border border-gray-300 rounded-lg p-4">
            <p className="text-gray-600 text-sm">Total Members</p>
            <p className="text-3xl font-bold text-black">{members.length}</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4">
            <p className="text-gray-600 text-sm">Active</p>
            <p className="text-3xl font-bold text-green-600">{members.filter(m => m.status === 'active').length}</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4">
            <p className="text-gray-600 text-sm">Roles</p>
            <p className="text-3xl font-bold text-blue-600">{roles.length}</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4">
            <p className="text-gray-600 text-sm">Pending Invites</p>
            <p className="text-3xl font-bold text-orange-600">2</p>
          </div>
        </div>
      </div>

      {/* Roles */}
      <div className="glass-card border border-gray-300 rounded-lg p-6 mb-8 bg-white">
        <h2 className="text-xl font-bold text-black mb-4">Roles</h2>
        <div className="grid grid-cols-5 gap-3">
          {roles.map((roleItem, idx) => (
            <div key={idx} className={`${roleItem.color} rounded-lg p-4 border border-gray-300`}>
              <p className="font-semibold text-black text-sm">{roleItem.role}</p>
              <p className="text-xs text-gray-600 mt-1">{roleItem.permissions}</p>
              <p className="text-lg font-bold text-black mt-2">{roleItem.members}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Members List */}
      <div className="glass-card border border-gray-300 rounded-lg p-6 bg-white">
        <h2 className="text-xl font-bold text-black mb-4">Team Members</h2>
        <div className="space-y-3">
          {members.map((member) => (
            <div key={member.id} className="flex items-center justify-between border border-gray-300 rounded-lg p-4 bg-white hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{member.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-black">{member.name}</h3>
                    {member.role === 'Project Lead' && <Crown size={16} className="text-yellow-600" />}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{member.role}</p>
                  <p className="text-xs text-gray-600">{member.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-right">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Joined</p>
                  <p className="text-sm text-black font-medium">{member.joined}</p>
                </div>
                <div>
                  <span className={`text-xs px-2 py-1 rounded capitalize ${
                    member.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {member.status}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-blue-500">
                    <Shield size={18} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-500">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
