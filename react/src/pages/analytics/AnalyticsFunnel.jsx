import React from 'react';
import { Funnel, Percent, Users, TrendingDown } from 'lucide-react';

export default function AnalyticsFunnel() {
  const funnelStages = [
    { name: 'Landing Page', value: 45231, width: '100%', color: 'blue', dropoff: '-' },
    { name: 'Product View', value: 32450, width: '71.8%', color: 'indigo', dropoff: '28.2%' },
    { name: 'Add to Cart', value: 18920, width: '41.9%', color: 'purple', dropoff: '41.7%' },
    { name: 'Checkout', value: 8564, width: '18.9%', color: 'pink', dropoff: '54.7%' },
    { name: 'Purchase', value: 1564, width: '3.5%', color: 'emerald', dropoff: '81.7%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <nav className="text-sm text-slate-600 backdrop-blur-xl bg-white/40 px-4 py-2 rounded-2xl border border-white/60 shadow-lg shadow-blue-100/50 mb-6 inline-flex">
        <span>Glacia</span>  <span>Analytics</span>  <span className="text-slate-900 font-semibold">Funnel</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Analytics Funnel</h1>
        <p className="text-slate-600">Visualize user journey and identify drop-off points</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 rounded-3xl border border-white/60 p-6 hover:shadow-2xl hover:shadow-blue-200/40 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-100/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-300/50">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-600">Top Funnel</h3>
              <p className="text-3xl font-bold text-slate-900">45,231</p>
            </div>
          </div>
          <p className="text-sm text-slate-600">Total entries</p>
        </div>
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 rounded-3xl border border-white/60 p-6 hover:shadow-2xl hover:shadow-emerald-200/40 hover:scale-105 transition-all duration-300 shadow-xl shadow-emerald-100/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-300/50">
              <Funnel className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-600">Bottom Funnel</h3>
              <p className="text-3xl font-bold text-slate-900">1,564</p>
            </div>
          </div>
          <p className="text-sm text-slate-600">Total conversions</p>
        </div>
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/80 to-white/40 rounded-3xl border border-white/60 p-6 hover:shadow-2xl hover:shadow-purple-200/40 hover:scale-105 transition-all duration-300 shadow-xl shadow-purple-100/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-300/50">
              <Percent className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-600">Overall Rate</h3>
              <p className="text-3xl font-bold text-slate-900">3.45%</p>
            </div>
          </div>
          <p className="text-sm text-slate-600">End-to-end conversion</p>
        </div>
      </div>

      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40 mb-8">
        <div className="p-6 border-b border-white/40 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Funnel Visualization</h2>
          <Funnel className="text-blue-600 w-6 h-6" />
        </div>
        <div className="p-6 space-y-4">
          {funnelStages.map((stage, idx) => (
            <div key={idx} className="backdrop-blur-xl bg-white/30 rounded-2xl p-4 border border-white/40 hover:shadow-lg hover:shadow-blue-200/30 transition-all">
              <div className="flex justify-between mb-3">
                <span className="text-sm font-semibold text-slate-900">{stage.name}</span>
                <div className="text-right">
                  <span className="text-sm font-bold text-slate-900">{stage.value.toLocaleString()}</span>
                  <span className="text-xs text-slate-600 ml-2">({stage.width})</span>
                </div>
              </div>
              <div className="w-full bg-white/50 rounded-full h-8 overflow-hidden backdrop-blur-xl">
                <div 
                  className={`bg-gradient-to-r from-${stage.color}-500 to-${stage.color}-600 h-full rounded-full flex items-center justify-end pr-3 shadow-lg transition-all`}
                  style={{ width: stage.width }}
                >
                  <span className="text-white text-xs font-semibold">{stage.width}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
          <div className="p-6 border-b border-white/40 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Drop-off Analysis</h2>
            <TrendingDown className="text-red-600 w-6 h-6" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="backdrop-blur-xl bg-white/30 border-b border-white/40">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Stage</th>
                  <th className="px-6 py-4 text-right text-sm font-bold text-slate-900">Drop-off</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/30">
                <tr className="hover:bg-white/20 transition-all">
                  <td className="px-6 py-4 font-medium text-slate-900">Product View  Cart</td>
                  <td className="px-6 py-4 text-right"><span className="px-3 py-1 bg-red-500/20 text-red-700 rounded-full text-sm font-semibold">28.2%</span></td>
                </tr>
                <tr className="hover:bg-white/20 transition-all">
                  <td className="px-6 py-4 font-medium text-slate-900">Cart  Checkout</td>
                  <td className="px-6 py-4 text-right"><span className="px-3 py-1 bg-orange-500/20 text-orange-700 rounded-full text-sm font-semibold">41.7%</span></td>
                </tr>
                <tr className="hover:bg-white/20 transition-all">
                  <td className="px-6 py-4 font-medium text-slate-900">Checkout  Purchase</td>
                  <td className="px-6 py-4 text-right"><span className="px-3 py-1 bg-yellow-500/20 text-yellow-700 rounded-full text-sm font-semibold">54.7%</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 overflow-hidden shadow-2xl shadow-blue-200/40">
          <div className="p-6 border-b border-white/40 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Funnel Performance</h2>
            <Users className="text-purple-600 w-6 h-6" />
          </div>
          <div className="p-6">
            <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/90 to-pink-600/90 rounded-3xl p-8 text-white border border-purple-400/30 shadow-2xl shadow-purple-400/40 hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <h3 className="text-5xl font-bold mb-2">96.55%</h3>
                <p className="text-white/80">Overall drop-off rate</p>
                <p className="text-sm text-white/60 mt-2">Only 3.45% complete the full journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
