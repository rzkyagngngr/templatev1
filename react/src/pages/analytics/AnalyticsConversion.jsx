import React from 'react';
import { TrendingUp, Target, CheckCircle, DollarSign } from 'lucide-react';

export default function AnalyticsConversion() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-600 backdrop-blur-xl bg-white/40 px-4 py-2 rounded-2xl border border-white/60 shadow-lg shadow-blue-100/50 mb-6 inline-flex">
        <span>Glacia</span> › <span>Analytics</span> › <span className="text-slate-900 font-semibold">Conversion</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Analytics Conversion</h1>
        <p className="text-slate-600">Track and optimize your conversion funnel performance</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 rounded-3xl border border-white/60 p-6 hover:shadow-2xl hover:shadow-blue-200/40 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-100/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-300/50">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-600">Conversion Rate</h3>
              <p className="text-3xl font-bold text-slate-900">3.45%</p>
            </div>
          </div>
          <p className="text-sm text-emerald-600 font-semibold">↑ 0.5% from last month</p>
        </div>
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 rounded-3xl border border-white/60 p-6 hover:shadow-2xl hover:shadow-blue-200/40 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-100/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-300/50">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-600">Total Conversions</h3>
              <p className="text-3xl font-bold text-slate-900">1,564</p>
            </div>
          </div>
          <p className="text-sm text-blue-600 font-semibold">↑ 12% from last month</p>
        </div>
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 rounded-3xl border border-white/60 p-6 hover:shadow-2xl hover:shadow-blue-200/40 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-100/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-300/50">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-600">Avg. Value</h3>
              <p className="text-3xl font-bold text-slate-900">$245.50</p>
            </div>
          </div>
          <p className="text-sm text-purple-600 font-semibold">↑ 8% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Conversion Funnel */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
          <div className="p-6 border-b border-white/40 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Conversion Funnel</h2>
            <Target className="text-blue-600 w-6 h-6" />
          </div>
          <div className="p-6 space-y-4">
            {[
              { label: 'Landing Page', count: 45231, rate: '100%', color: 'from-blue-500 to-blue-600' },
              { label: 'Product View', count: 32450, rate: '71.8%', color: 'from-indigo-500 to-indigo-600' },
              { label: 'Add to Cart', count: 18920, rate: '41.9%', color: 'from-purple-500 to-purple-600' },
              { label: 'Checkout', count: 8564, rate: '18.9%', color: 'from-pink-500 to-pink-600' },
              { label: 'Purchase', count: 1564, rate: '3.5%', color: 'from-emerald-500 to-emerald-600' }
            ].map((step, idx) => (
              <div key={idx} className="backdrop-blur-xl bg-white/30 rounded-2xl p-4 border border-white/40 hover:shadow-lg hover:shadow-blue-200/30 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-slate-900">{step.label}</span>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-900">{step.count.toLocaleString()}</p>
                    <p className="text-xs text-slate-600">{step.rate}</p>
                  </div>
                </div>
                <div className="w-full bg-white/50 rounded-full h-3 overflow-hidden backdrop-blur-xl">
                  <div 
                    className={`bg-gradient-to-r ${step.color} h-full rounded-full shadow-lg transition-all`}
                    style={{ width: step.rate }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Trends */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
          <div className="p-6 border-b border-white/40 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Conversion Trends</h2>
            <TrendingUp className="text-emerald-600 w-6 h-6" />
          </div>
          <div className="p-6">
            <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/90 to-purple-600/90 rounded-3xl p-8 text-white border border-blue-400/30 shadow-2xl shadow-blue-400/40 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2">↑ 24.5%</h3>
                <p className="text-white/80">Month-over-month growth</p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="backdrop-blur-xl bg-white/40 rounded-2xl p-4 border border-white/50">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-medium">This Week</span>
                  <span className="text-slate-900 font-bold">487 conversions</span>
                </div>
              </div>
              <div className="backdrop-blur-xl bg-white/40 rounded-2xl p-4 border border-white/50">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700 font-medium">Last Week</span>
                  <span className="text-slate-900 font-bold">392 conversions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Converting Pages Table */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
        <div className="p-6 border-b border-white/40 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Top Converting Pages</h2>
          <CheckCircle className="text-emerald-600 w-6 h-6" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="backdrop-blur-xl bg-white/30 border-b border-white/40">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Page</th>
                <th className="px-6 py-4 text-right text-sm font-bold text-slate-900">Visitors</th>
                <th className="px-6 py-4 text-right text-sm font-bold text-slate-900">Conversions</th>
                <th className="px-6 py-4 text-right text-sm font-bold text-slate-900">Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/30">
              <tr className="hover:bg-white/20 transition-all">
                <td className="px-6 py-4 font-medium text-slate-900">/pricing</td>
                <td className="px-6 py-4 text-right text-slate-700">8,450</td>
                <td className="px-6 py-4 text-right text-slate-700">425</td>
                <td className="px-6 py-4 text-right">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-700 rounded-full text-sm font-semibold">5.03%</span>
                </td>
              </tr>
              <tr className="hover:bg-white/20 transition-all">
                <td className="px-6 py-4 font-medium text-slate-900">/features</td>
                <td className="px-6 py-4 text-right text-slate-700">12,340</td>
                <td className="px-6 py-4 text-right text-slate-700">540</td>
                <td className="px-6 py-4 text-right">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-700 rounded-full text-sm font-semibold">4.38%</span>
                </td>
              </tr>
              <tr className="hover:bg-white/20 transition-all">
                <td className="px-6 py-4 font-medium text-slate-900">/product-demo</td>
                <td className="px-6 py-4 text-right text-slate-700">6,780</td>
                <td className="px-6 py-4 text-right text-slate-700">289</td>
                <td className="px-6 py-4 text-right">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-700 rounded-full text-sm font-semibold">4.26%</span>
                </td>
              </tr>
              <tr className="hover:bg-white/20 transition-all">
                <td className="px-6 py-4 font-medium text-slate-900">/case-studies</td>
                <td className="px-6 py-4 text-right text-slate-700">5,230</td>
                <td className="px-6 py-4 text-right text-slate-700">198</td>
                <td className="px-6 py-4 text-right">
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-700 rounded-full text-sm font-semibold">3.79%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
