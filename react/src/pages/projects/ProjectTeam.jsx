import React from 'react';
import { Plus, Mail, Phone, MapPin, Trash2 } from 'lucide-react';

export default function ProjectTeam() {
  const team = [
    { id: 1, name: 'Sarah Johnson', role: 'Project Lead', email: 'sarah@company.com', phone: '+1-555-0101', image: 'ðŸ‘©â€ðŸ’¼', status: 'active' },
    { id: 2, name: 'John Smith', role: 'Lead Developer', email: 'john@company.com', phone: '+1-555-0102', image: 'ðŸ‘¨â€ðŸ’»', status: 'active' },
    { id: 3, name: 'Lisa Chen', role: 'Designer', email: 'lisa@company.com', phone: '+1-555-0103', image: 'ðŸ‘©â€ðŸŽ¨', status: 'active' },
    { id: 4, name: 'Mike Johnson', role: 'Backend Developer', email: 'mike@company.com', phone: '+1-555-0104', image: 'ðŸ‘¨â€ðŸ’»', status: 'active' },
    { id: 5, name: 'Tom Wilson', role: 'QA Engineer', email: 'tom@company.com', phone: '+1-555-0105', image: 'ðŸ‘¨â€ðŸ”¬', status: 'inactive' },
  ];

  const departments = [
    { name: 'Engineering', count: 3, color: 'bg-blue-100' },
    { name: 'Design', count: 1, color: 'bg-purple-100' },
    { name: 'QA', count: 1, color: 'bg-green-100' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black">Project Team</h1>
        <button className="bg-blue-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
          <Plus size={20} /> Add Member
        </button>
      </div>

      {/* Team Overview */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="glass-card border border-gray-300 rounded-lg p-4">
          <p className="text-gray-600 text-sm">Total Members</p>
          <p className="text-3xl font-bold text-black">{team.length}</p>
        </div>
        <div className="glass-card border border-gray-300 rounded-lg p-4">
          <p className="text-gray-600 text-sm">Active</p>
          <p className="text-3xl font-bold text-green-600">{team.filter(m => m.status === 'active').length}</p>
        </div>
        <div className="glass-card border border-gray-300 rounded-lg p-4">
          <p className="text-gray-600 text-sm">Departments</p>
          <p className="text-3xl font-bold text-blue-600">{departments.length}</p>
        </div>
        <div className="glass-card border border-gray-300 rounded-lg p-4">
          <p className="text-gray-600 text-sm">Roles</p>
          <p className="text-3xl font-bold text-purple-600">5</p>
        </div>
      </div>

      {/* Departments */}
      <div className="glass-card border border-gray-300 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold text-black mb-4">Departments</h2>
        <div className="grid grid-cols-3 gap-4">
          {departments.map((dept, idx) => (
            <div key={idx} className={`${dept.color} rounded-lg p-4`}>
              <p className="font-semibold text-black">{dept.name}</p>
              <p className="text-2xl font-bold text-black mt-2">{dept.count}</p>
              <p className="text-xs text-gray-600 mt-1">Team members</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Members */}
      <div className="glass-card border border-gray-300 rounded-lg p-6">
        <h2 className="text-xl font-bold text-black mb-4">Team Members</h2>
        <div className="space-y-4">
          {team.map((member) => (
            <div key={member.id} className="border border-gray-300 rounded-lg p-4 bg-white hover:bg-gray-50">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{member.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-black">{member.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded ${
                        member.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {member.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Mail size={14} /> {member.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone size={14} /> {member.phone}
                      </div>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
