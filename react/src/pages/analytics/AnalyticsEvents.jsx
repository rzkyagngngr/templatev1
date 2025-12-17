import React from 'react';
import { Activity, Clock, Filter, Zap } from 'lucide-react';

export default function AnalyticsEvents() {
  const events = [
    { name: 'Page View', count: '45,231', time: 'Dec 17, 2025 10:30 AM', category: 'Navigation', color: 'blue' },
    { name: 'Button Click', count: '12,540', time: 'Dec 17, 2025 11:15 AM', category: 'Interaction', color: 'emerald' },
    { name: 'Form Submit', count: '3,210', time: 'Dec 17, 2025 09:45 AM', category: 'Conversion', color: 'purple' },
    { name: 'Video Play', count: '8,920', time: 'Dec 17, 2025 08:20 AM', category: 'Media', color: 'pink' },
    { name: 'Download', count: '1,450', time: 'Dec 17, 2025 07:15 AM', category: 'Engagement', color: 'indigo' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-600 backdrop-blur-xl bg-white/40 px-4 py-2 rounded-2xl border border-white/60 shadow-lg shadow-blue-100/50 mb-6 inline-flex">
        <span>Glacia</span>  <span>Analytics</span>  <span className="text-slate-900 font-semibold">Events</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Analytics Events</h1>
        <p className="text-slate-600">Track and analyze custom events across your application</p>
      </div>

      {/* Event Tracking Card */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40 mb-8">
        <div className="p-6 border-b border-white/40 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Event Tracking</h2>
          <Activity className="text-blue-600 w-6 h-6" />
        </div>
        
        <div className="p-6">
          <div className="mb-6 flex gap-4">
            <input 
              type="text" 
              placeholder="Filter by event..." 
              className="flex-1 px-4 py-3 border border-white/50 rounded-2xl bg-white/50 backdrop-blur-xl shadow-lg focus:ring-2 focus:ring-blue-400/50 focus:outline-none text-slate-900"
            />
            <button className="backdrop-blur-xl bg-blue-500/50 rounded-2xl border border-blue-400/50 shadow-lg hover:shadow-2xl transition-all px-6 py-3 text-white font-semibold flex items-center gap-2">
              <Filter size={16} /> Filter
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="backdrop-blur-xl bg-white/30 border-b border-white/40">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Event Name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Count</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Last Triggered</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/30">
                {events.map((event, idx) => (
                  <tr key={idx} className="hover:bg-white/20 transition-all">
                    <td className="px-6 py-4 font-medium text-slate-900">{event.name}</td>
                    <td className="px-6 py-4 text-slate-700 font-semibold">{event.count}</td>
                    <td className="px-6 py-4 text-slate-600">{event.time}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 bg-${event.color}-500/20 text-${event.color}-700 rounded-full text-sm font-semibold`}>
                        {event.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Event Trends */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
        <div className="p-6 border-b border-white/40 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Event Trends</h2>
          <Clock className="text-emerald-600 w-6 h-6" />
        </div>
        <div className="p-6">
          <div className="backdrop-blur-xl bg-gradient-to-br from-emerald-500/90 to-teal-600/90 rounded-3xl p-8 text-white border border-emerald-400/30 shadow-2xl shadow-emerald-400/40 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-5xl font-bold mb-2">71,351</h3>
                <p className="text-white/80">Total events tracked today</p>
              </div>
              <Zap className="w-20 h-20 text-white/30" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="backdrop-blur-xl bg-white/40 rounded-2xl p-4 border border-white/50 text-center hover:shadow-lg hover:shadow-blue-200/30 transition-all">
              <p className="text-2xl font-bold text-slate-900">18.2K</p>
              <p className="text-sm text-slate-600 mt-1">This Hour</p>
            </div>
            <div className="backdrop-blur-xl bg-white/40 rounded-2xl p-4 border border-white/50 text-center hover:shadow-lg hover:shadow-blue-200/30 transition-all">
              <p className="text-2xl font-bold text-slate-900">145K</p>
              <p className="text-sm text-slate-600 mt-1">Last 24h</p>
            </div>
            <div className="backdrop-blur-xl bg-white/40 rounded-2xl p-4 border border-white/50 text-center hover:shadow-lg hover:shadow-blue-200/30 transition-all">
              <p className="text-2xl font-bold text-slate-900">892K</p>
              <p className="text-sm text-slate-600 mt-1">This Week</p>
            </div>
            <div className="backdrop-blur-xl bg-white/40 rounded-2xl p-4 border border-white/50 text-center hover:shadow-lg hover:shadow-blue-200/30 transition-all">
              <p className="text-2xl font-bold text-slate-900">3.5M</p>
              <p className="text-sm text-slate-600 mt-1">This Month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
