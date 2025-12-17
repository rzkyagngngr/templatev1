import React from 'react';
import { Activity, TrendingUp, Users, Clock } from 'lucide-react';

export default function ProjectDashboard() {
  const stats = [
    { label: 'Active Projects', value: '12', icon: Activity, color: 'bg-blue-50' },
    { label: 'Team Members', value: '24', icon: Users, color: 'bg-green-50' },
    { label: 'Completed Tasks', value: '158', icon: TrendingUp, color: 'bg-purple-50' },
    { label: 'Avg Completion', value: '4.2d', icon: Clock, color: 'bg-orange-50' },
  ];

  const recentProjects = [
    { name: 'Website Redesign', status: 'In Progress', progress: 65, team: 5 },
    { name: 'Mobile App', status: 'Planning', progress: 25, team: 8 },
    { name: 'Cloud Migration', status: 'In Progress', progress: 80, team: 6 },
    { name: 'API Integration', status: 'Completed', progress: 100, team: 3 },
    { name: 'Database Optimization', status: 'In Progress', progress: 45, team: 4 },
  ];

  const upcomingMilestones = [
    { title: 'Phase 1 Launch', date: '2025-01-15', projects: 3 },
    { title: 'Budget Review', date: '2025-01-20', projects: 5 },
    { title: 'Team Expansion', date: '2025-02-01', projects: 2 },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-black mb-8">Project Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="glass-card border border-gray-300 p-6 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-black">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-black" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Projects */}
      <div className="glass-card border border-gray-300 p-6 rounded-lg mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black">Recent Projects</h2>
          <button className="bg-blue-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-blue-600">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {recentProjects.map((project, idx) => (
            <div key={idx} className="border border-gray-300 rounded-lg p-4 bg-white hover:bg-gray-50">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-black">{project.name}</h3>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{project.status}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div style={{ width: `${project.progress}%` }} className="bg-blue-500 h-2 rounded-full"></div>
                  </div>
                </div>
                <span className="text-sm text-black font-medium">{project.progress}%</span>
                <span className="text-xs text-gray-600 ml-4">{project.team} members</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Milestones */}
      <div className="glass-card border border-gray-300 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-black">Upcoming Milestones</h2>
          <button className="bg-green-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-green-600">
            Add Milestone
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {upcomingMilestones.map((milestone, idx) => (
            <div key={idx} className="border border-gray-300 rounded-lg p-4 bg-white hover:bg-gray-50">
              <h3 className="font-semibold text-black mb-2">{milestone.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{milestone.date}</p>
              <p className="text-xs text-black">{milestone.projects} projects involved</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
