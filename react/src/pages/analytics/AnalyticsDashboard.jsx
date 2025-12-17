import React from 'react';
import { BarChart3, PieChart, TrendingUp, Users, Eye, MousePointerClick } from 'lucide-react';

export default function AnalyticsDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-600 backdrop-blur-xl bg-white/40 px-4 py-2 rounded-2xl border border-white/60 shadow-lg shadow-blue-100/50 mb-6 inline-flex">
        <span>Glacia</span>  <span>Analytics</span>  <span className="text-slate-900 font-semibold">Dashboard</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Analytics Dashboard</h1>
        <p className="text-slate-600">Comprehensive overview of your website analytics</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 rounded-3xl border border-white/60 p-6 hover:shadow-2xl hover:shadow-blue-200/40 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-100/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-300/50">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-600">Total Visitors</h3>
              <p className="text-3xl font-bold text-slate-900">45,231</p>
            </div>
          </div>
          <p className="text-sm text-blue-600 font-semibold"> 12% from last month</p>
        </div>
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 rounded-3xl border border-white/60 p-6 hover:shadow-2xl hover:shadow-purple-200/40 hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-100/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-300/50">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-600">Page Views</h3>
              <p className="text-3xl font-bold text-slate-900">128,546</p>
            </div>
          </div>
          <p className="text-sm text-purple-600 font-semibold"> 8% from last month</p>
        </div>
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 rounded-3xl border border-white/60 p-6 hover:shadow-2xl hover:shadow-emerald-200/40 hover:scale-105 transition-all duration-300 shadow-xl shadow-emerald-100/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-300/50">
              <MousePointerClick className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-600">Bounce Rate</h3>
              <p className="text-3xl font-bold text-slate-900">32.5%</p>
            </div>
          </div>
          <p className="text-sm text-emerald-600 font-semibold"> 2% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Overview */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
          <div className="p-6 border-b border-white/40 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Traffic Overview</h2>
            <BarChart3 className="text-blue-600 w-6 h-6" />
          </div>
          <div className="p-6">
            <div className="backdrop-blur-xl bg-gradient-to-br from-indigo-500/90 to-purple-600/90 rounded-3xl p-8 text-white border border-indigo-400/30 shadow-2xl shadow-indigo-400/40 hover:scale-105 transition-transform duration-300 mb-4">
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2">2.84M</h3>
                <p className="text-white/80">Total sessions this month</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Direct', value: '45%', color: 'blue' },
                { label: 'Organic Search', value: '30%', color: 'emerald' },
                { label: 'Referral', value: '15%', color: 'purple' },
                { label: 'Social', value: '10%', color: 'pink' }
              ].map((source, idx) => (
                <div key={idx} className="backdrop-blur-xl bg-white/40 rounded-2xl p-4 border border-white/50 hover:shadow-lg hover:shadow-blue-200/30 transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 font-medium">{source.label}</span>
                    <span className="text-slate-900 font-bold">{source.value}</span>
                  </div>
                  <div className="w-full bg-white/50 rounded-full h-2">
                    <div className={`bg-gradient-to-r from-${source.color}-500 to-${source.color}-600 h-full rounded-full`} style={{ width: source.value }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Pages */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
          <div className="p-6 border-b border-white/40 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Top Pages</h2>
            <PieChart className="text-purple-600 w-6 h-6" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="backdrop-blur-xl bg-white/30 border-b border-white/40">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Page</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-slate-900">Views</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-slate-900">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/30">
                <tr className="hover:bg-white/20 transition-all">
                  <td className="px-6 py-4 font-medium text-slate-900">/home</td>
                  <td className="px-6 py-4 text-right text-slate-700">25,430</td>
                  <td className="px-6 py-4 text-right"><span className="px-3 py-1 bg-blue-500/20 text-blue-700 rounded-full text-sm font-semibold">3m 24s</span></td>
                </tr>
                <tr className="hover:bg-white/20 transition-all">
                  <td className="px-6 py-4 font-medium text-slate-900">/products</td>
                  <td className="px-6 py-4 text-right text-slate-700">18,920</td>
                  <td className="px-6 py-4 text-right"><span className="px-3 py-1 bg-emerald-500/20 text-emerald-700 rounded-full text-sm font-semibold">4m 12s</span></td>
                </tr>
                <tr className="hover:bg-white/20 transition-all">
                  <td className="px-6 py-4 font-medium text-slate-900">/about</td>
                  <td className="px-6 py-4 text-right text-slate-700">12,340</td>
                  <td className="px-6 py-4 text-right"><span className="px-3 py-1 bg-purple-500/20 text-purple-700 rounded-full text-sm font-semibold">2m 45s</span></td>
                </tr>
                <tr className="hover:bg-white/20 transition-all">
                  <td className="px-6 py-4 font-medium text-slate-900">/contact</td>
                  <td className="px-6 py-4 text-right text-slate-700">8,560</td>
                  <td className="px-6 py-4 text-right"><span className="px-3 py-1 bg-indigo-500/20 text-indigo-700 rounded-full text-sm font-semibold">1m 58s</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
