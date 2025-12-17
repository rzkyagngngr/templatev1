import React from 'react';
import { Archive, Trash2, Restore, Plus } from 'lucide-react';

export default function ProjectArchive() {
  const archivedProjects = [
    { id: 1, name: 'Legacy CRM System', archived: '2024-12-15', tasks: 284, team: 8, reason: 'Project completed' },
    { id: 2, name: 'Mobile App v1', archived: '2024-11-20', tasks: 156, team: 5, reason: 'Deprecated in favor of v2' },
    { id: 3, name: 'Internal Dashboard', archived: '2024-10-30', tasks: 92, team: 3, reason: 'Replaced with new solution' },
    { id: 4, name: 'API Gateway Migration', archived: '2024-09-15', tasks: 48, team: 4, reason: 'Migration completed' },
    { id: 5, name: 'Data Analytics Platform', archived: '2024-08-01', tasks: 210, team: 6, reason: 'Sunset project' },
  ];

  const stats = [
    { label: 'Total Archived', value: archivedProjects.length, color: 'bg-gray-100' },
    { label: 'Total Tasks', value: archivedProjects.reduce((sum, p) => sum + p.tasks, 0), color: 'bg-blue-100' },
    { label: 'Archive Space', value: '2.4 GB', color: 'bg-purple-100' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black">Project Archive</h1>
        <button className="bg-blue-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
          <Plus size={20} /> Archive Project
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className={`${stat.color} glass-card border border-gray-300 rounded-lg p-4`}>
            <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
            <p className="text-3xl font-bold text-black">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Archive Info */}
      <div className="glass-card border border-gray-300 rounded-lg p-6 bg-white mb-8">
        <div className="flex items-start gap-4">
          <div className="text-4xl">ðŸ“¦</div>
          <div>
            <h3 className="font-bold text-black mb-2">Archive Management</h3>
            <p className="text-sm text-gray-600 mb-4">
              Archived projects are stored for historical reference. You can restore projects at any time or permanently delete them.
            </p>
            <div className="flex gap-2">
              <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-xs font-medium hover:bg-blue-200">
                Learn More
              </button>
              <button className="bg-gray-100 text-black px-3 py-1 rounded text-xs font-medium hover:bg-gray-200">
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Archived Projects List */}
      <div className="glass-card border border-gray-300 rounded-lg p-6 bg-white">
        <h2 className="text-xl font-bold text-black mb-4">Archived Projects</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="text-left px-4 py-3 text-sm font-semibold text-black">Project Name</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-black">Archived</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-black">Tasks</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-black">Team</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-black">Reason</th>
                <th className="text-right px-4 py-3 text-sm font-semibold text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {archivedProjects.map((project) => (
                <tr key={project.id} className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <Archive size={18} className="text-gray-400" />
                      <span className="font-semibold text-black">{project.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-600">{project.archived}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-black font-medium">{project.tasks}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-sm text-black font-medium">{project.team} members</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">{project.reason}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex justify-end gap-2">
                      <button className="p-1 text-gray-400 hover:text-blue-500" title="Restore">
                        <Restore size={18} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-500" title="Delete">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Archive Options */}
      <div className="glass-card border border-gray-300 rounded-lg p-6 bg-white mt-6">
        <h2 className="text-lg font-bold text-black mb-4">Archive Options</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3 bg-white hover:bg-gray-50">
            <label className="font-semibold text-black text-sm cursor-pointer">Auto-archive completed projects</label>
            <input type="checkbox" className="w-5 h-5 cursor-pointer" />
          </div>
          <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3 bg-white hover:bg-gray-50">
            <label className="font-semibold text-black text-sm cursor-pointer">Archive after 6 months of inactivity</label>
            <input type="checkbox" className="w-5 h-5 cursor-pointer" defaultChecked />
          </div>
          <div className="flex items-center justify-between border border-gray-300 rounded-lg p-3 bg-white hover:bg-gray-50">
            <label className="font-semibold text-black text-sm cursor-pointer">Email notification on archival</label>
            <input type="checkbox" className="w-5 h-5 cursor-pointer" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
}
