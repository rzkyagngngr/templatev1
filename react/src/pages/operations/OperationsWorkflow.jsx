import React, { useState } from 'react';
import { Workflow, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export default function OperationsWorkflow() {
  const [workflows] = useState([
    { id: 1, name: 'Deployment Pipeline', status: 'Active', stages: 5, completionRate: 78, lastRun: '2 hours ago' },
    { id: 2, name: 'Data Sync Process', status: 'Active', stages: 3, completionRate: 92, lastRun: '30 minutes ago' },
    { id: 3, name: 'Backup Automation', status: 'Active', stages: 4, completionRate: 100, lastRun: 'Completed' },
    { id: 4, name: 'Log Archival', status: 'Scheduled', stages: 2, completionRate: 0, lastRun: 'Tonight 02:00 AM' },
    { id: 5, name: 'Report Generation', status: 'Active', stages: 6, completionRate: 45, lastRun: '15 minutes ago' }
  ]);

  const [workflowStages] = useState([
    { id: 1, workflow: 'Deployment Pipeline', stages: [
      { name: 'Code Build', status: 'Completed', duration: '2m 15s' },
      { name: 'Unit Tests', status: 'Completed', duration: '4m 30s' },
      { name: 'Integration Tests', status: 'In Progress', duration: '3m 12s' },
      { name: 'Staging Deploy', status: 'Pending', duration: '-' },
      { name: 'Smoke Tests', status: 'Pending', duration: '-' }
    ]}
  ]);

  const getStatusColor = (status) => {
    if (status === 'Active') return 'text-green-700';
    if (status === 'Scheduled') return 'text-blue-700';
    return 'text-orange-700';
  };

  const getStatusBg = (status) => {
    if (status === 'Active') return 'bg-green-100/50';
    if (status === 'Scheduled') return 'bg-blue-100/50';
    return 'bg-orange-100/50';
  };

  const getStageStatusIcon = (status) => {
    if (status === 'Completed') return <CheckCircle className="w-4 h-4 text-green-600" />;
    if (status === 'In Progress') return <Clock className="w-4 h-4 text-blue-600" />;
    return <AlertCircle className="w-4 h-4 text-gray-400" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Workflow Management</h1>

        {/* Workflow Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Total Workflows</p>
            <p className="text-3xl font-bold text-black mt-2">{workflows.length}</p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Active</p>
            <p className="text-3xl font-bold text-green-600 mt-2">4</p>
          </div>
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <p className="text-gray-600 text-sm font-medium">Scheduled</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">1</p>
          </div>
        </div>

        {/* Active Workflows */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:bg-white/50 transition mb-8">
          <div className="p-6 border-b border-gray-300">
            <h2 className="text-lg font-bold text-black">Workflows Overview</h2>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-bold">Workflow</th>
                <th className="text-left py-4 px-6 text-black font-bold">Status</th>
                <th className="text-left py-4 px-6 text-black font-bold">Stages</th>
                <th className="text-left py-4 px-6 text-black font-bold">Progress</th>
                <th className="text-left py-4 px-6 text-black font-bold">Last Run</th>
              </tr>
            </thead>
            <tbody>
              {workflows.map((workflow, idx) => (
                <tr key={workflow.id} className={`border-b border-gray-300 hover:bg-white/30 ${idx % 2 === 0 ? 'bg-white/10' : ''}`}>
                  <td className="py-4 px-6 text-black font-medium flex items-center gap-2">
                    <Workflow className="w-4 h-4 text-gray-400" /> {workflow.name}
                  </td>
                  <td className={`py-4 px-6 font-semibold ${getStatusColor(workflow.status)}`}>
                    <span className={`px-2 py-1 rounded text-xs ${getStatusBg(workflow.status)}`}>{workflow.status}</span>
                  </td>
                  <td className="py-4 px-6 text-black">{workflow.stages} stages</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-gray-300/50 rounded-full h-2 overflow-hidden">
                        <div className="bg-blue-500 h-full" style={{width: `${workflow.completionRate}%`}}></div>
                      </div>
                      <span className="text-black text-sm font-semibold">{workflow.completionRate}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-black text-sm">{workflow.lastRun}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Workflow Stages Detail */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
          <h2 className="text-lg font-bold text-black mb-6">Deployment Pipeline Stages</h2>
          <div className="space-y-3">
            {workflowStages[0].stages.map((stage, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 bg-white/30 border border-gray-300 rounded-lg hover:bg-white/50">
                <div className="flex items-center gap-2 flex-1">
                  {getStageStatusIcon(stage.status)}
                  <div>
                    <p className="text-black font-medium text-sm">{stage.name}</p>
                    <p className="text-xs text-gray-600">{stage.duration}</p>
                  </div>
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded ${stage.status === 'Completed' ? 'bg-green-100/50 text-green-700' : stage.status === 'In Progress' ? 'bg-blue-100/50 text-blue-700' : 'bg-gray-100/50 text-gray-700'}`}>
                  {stage.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
