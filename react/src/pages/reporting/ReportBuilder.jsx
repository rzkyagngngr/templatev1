import React from 'react';
import { FileText, Plus } from 'lucide-react';

export default function ReportBuilder() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6">
        <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
          CREATED
        </div>
        <h1 className="text-4xl font-bold text-black mt-4">Report Builder</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-black">Create New Report</h2>
              <FileText className="text-black" />
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Report Name</label>
                <input type="text" placeholder="Enter report name" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white/60" />
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Data Source</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white/60">
                  <option>Select Data Source</option>
                  <option>Sales</option>
                  <option>Revenue</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Date Range</label>
                <input type="date" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black bg-white/60" />
              </div>
              <button className="w-full bg-black text-slate-900 py-2 rounded-lg font-semibold hover:bg-gray-800">Create Report</button>
            </form>
          </div>
        </div>

        <div>
          <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-black mb-4">Templates</h3>
            <div className="space-y-2">
              {['Sales', 'Revenue', 'Inventory'].map(template => (
                <button key={template} className="w-full flex items-center px-4 py-2 text-black border border-gray-300 rounded-lg hover:bg-gray-100">
                  <Plus size={16} className="mr-2" />
                  {template}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
