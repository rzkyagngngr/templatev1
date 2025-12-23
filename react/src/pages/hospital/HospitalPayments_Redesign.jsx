import React, { useState } from 'react';
import { DollarSign, CreditCard, TrendingUp, Clock, CheckCircle, XCircle, Download, Search } from 'lucide-react';

function GlassCard({ children, className = '' }) {
  return <div className={`backdrop-blur-2xl bg-white/55 dark:bg-slate-900/35 border border-white/50 dark:border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden ${className}`}>{children}</div>;
}

function SegmentedControl({ value, onChange, options }) {
  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10">
      {options.map((opt) => (
        <button key={opt.value} type="button" onClick={() => onChange(opt.value)} className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${value === opt.value ? 'bg-white/70 dark:bg-white/10 text-slate-900 dark:text-slate-100 shadow-sm' : 'text-slate-600 dark:text-slate-300 hover:bg-white/40 dark:hover:bg-white/5'}`}>{opt.label}</button>
      ))}
    </div>
  );
}

function RevenueAreaChart() {
  return (
    <div className="relative h-56 w-full">
      <svg viewBox="0 0 700 200" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(34 197 94)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="rgb(34 197 94)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="revStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgb(34 197 94)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="rgb(20 184 166)" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <path d="M0,160 L70,150 L140,135 L210,125 L280,110 L350,95 L420,85 L490,70 L560,60 L630,50 L700,40 L700,200 L0,200 Z" fill="url(#revFill)" />
        <path d="M0,160 L70,150 L140,135 L210,125 L280,110 L350,95 L420,85 L490,70 L560,60 L630,50 L700,40" fill="none" stroke="url(#revStroke)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 px-2 pb-2 flex items-center justify-between text-[10px] text-slate-600 dark:text-slate-300">
        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
      </div>
    </div>
  );
}

function PaymentMethodDonut() {
  const data = [
    { label: 'Cash', pct: 35, color: 'rgb(34 197 94)' },
    { label: 'Card', pct: 45, color: 'rgb(99 102 241)' },
    { label: 'Insurance', pct: 20, color: 'rgb(20 184 166)' }
  ];
  let accum = 0;
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 120 120" className="w-full h-full">
          {data.map((d, i) => {
            const start = accum;
            accum += d.pct;
            const [x1, y1] = [60 + 50 * Math.cos(2 * Math.PI * start / 100 - Math.PI / 2), 60 + 50 * Math.sin(2 * Math.PI * start / 100 - Math.PI / 2)];
            const [x2, y2] = [60 + 50 * Math.cos(2 * Math.PI * accum / 100 - Math.PI / 2), 60 + 50 * Math.sin(2 * Math.PI * accum / 100 - Math.PI / 2)];
            const largeArc = d.pct > 50 ? 1 : 0;
            return <path key={i} d={`M60,60 L${x1},${y1} A50,50 0 ${largeArc},1 ${x2},${y2} Z`} fill={d.color} opacity="0.85" />;
          })}
        </svg>
      </div>
      <div className="flex-1 space-y-2">
        {data.map((d) => (
          <div key={d.label} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color, opacity: 0.85 }} />
            <span className="text-xs font-medium text-slate-700 dark:text-slate-200">{d.label}</span>
            <span className="ml-auto text-xs font-semibold text-slate-900 dark:text-slate-100 tabular-nums">{d.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HospitalPayments() {
  const [filter, setFilter] = useState('all');

  const transactions = [
    { id: 'INV-2025-001', patient: 'Sarah Johnson', amount: 1250.00, method: 'Card', status: 'paid', date: 'Dec 23, 2025', time: '09:24 AM' },
    { id: 'INV-2025-002', patient: 'Michael Chen', amount: 3500.00, method: 'Insurance', status: 'pending', date: 'Dec 23, 2025', time: '10:15 AM' },
    { id: 'INV-2025-003', patient: 'Emily Davis', amount: 850.00, method: 'Cash', status: 'paid', date: 'Dec 23, 2025', time: '11:42 AM' },
    { id: 'INV-2025-004', patient: 'James Wilson', amount: 2100.00, method: 'Card', status: 'paid', date: 'Dec 23, 2025', time: '01:05 PM' },
    { id: 'INV-2025-005', patient: 'Lisa Brown', amount: 1750.00, method: 'Insurance', status: 'pending', date: 'Dec 23, 2025', time: '02:30 PM' },
    { id: 'INV-2025-006', patient: 'David Lee', amount: 950.00, method: 'Card', status: 'paid', date: 'Dec 23, 2025', time: '03:18 PM' },
    { id: 'INV-2025-007', patient: 'Anna Martinez', amount: 4200.00, method: 'Insurance', status: 'pending', date: 'Dec 23, 2025', time: '04:22 PM' },
    { id: 'INV-2025-008', patient: 'Tom Rodriguez', amount: 650.00, method: 'Cash', status: 'paid', date: 'Dec 23, 2025', time: '05:10 PM' }
  ];

  const kpis = [
    { label: 'Total revenue', value: '$248,260', delta: '+12.5%', icon: DollarSign },
    { label: 'Paid invoices', value: '142', delta: '78% of total', icon: CheckCircle },
    { label: 'Pending', value: '38', delta: '$42.8K value', icon: Clock },
    { label: 'Transactions', value: '180', delta: '+8 today', icon: CreditCard }
  ];

  const getStatusClass = (status) => {
    if (status === 'paid') return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20';
    if (status === 'pending') return 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20';
    return 'bg-red-500/10 text-red-700 dark:text-red-300 border-red-500/20';
  };

  const getMethodBadge = (method) => {
    if (method === 'Card') return 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20';
    if (method === 'Cash') return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20';
    return 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20';
  };

  return (
    <div className="min-h-screen -m-6 p-6 bg-gradient-to-br from-slate-50 via-sky-50 to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Payments & Billing</h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mt-1">Financial transactions & invoicing</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input type="text" placeholder="Search invoices..." className="pl-9 pr-4 py-2 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 backdrop-blur-xl" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-sky-500/90 dark:bg-sky-600/80 hover:bg-sky-600/90 dark:hover:bg-sky-700/80 border border-white/50 dark:border-white/10 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <GlassCard key={kpi.label} className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">{kpi.label}</div>
                  <div className="mt-2 text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-100 tabular-nums">{kpi.value}</div>
                  <div className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-300">{kpi.delta}</div>
                </div>
                <div className="p-2.5 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/50 dark:border-white/10">
                  <Icon className="w-5 h-5 text-sky-600 dark:text-sky-300" />
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <GlassCard className="lg:col-span-2">
          <div className="p-5 border-b border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Revenue trend</div>
                <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">Monthly revenue performance</div>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-bold text-emerald-700 dark:text-emerald-300">+12.5%</span>
              </div>
            </div>
          </div>
          <div className="p-5">
            <RevenueAreaChart />
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">Payment methods</div>
          <PaymentMethodDonut />
        </GlassCard>
      </div>

      <div className="mb-4">
        <SegmentedControl value={filter} onChange={setFilter} options={[{ label: 'All', value: 'all' }, { label: 'Paid', value: 'paid' }, { label: 'Pending', value: 'pending' }]} />
      </div>

      <GlassCard>
        <div className="p-5 border-b border-white/20">
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Recent transactions</div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900 dark:text-slate-100">Invoice ID</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900 dark:text-slate-100">Patient</th>
                <th className="px-5 py-4 text-right text-xs font-semibold text-slate-900 dark:text-slate-100">Amount</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900 dark:text-slate-100">Method</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900 dark:text-slate-100">Status</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900 dark:text-slate-100">Date & Time</th>
                <th className="px-5 py-4 text-right text-xs font-semibold text-slate-900 dark:text-slate-100">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-b border-white/10 hover:bg-white/20 dark:hover:bg-white/5 transition-all">
                  <td className="px-5 py-4">
                    <span className="text-sm font-mono font-semibold text-slate-900 dark:text-slate-100">{tx.id}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{tx.patient}</span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <span className="text-sm font-bold text-slate-900 dark:text-slate-100 tabular-nums">${tx.amount.toFixed(2)}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex px-2 py-1 rounded-xl text-[11px] font-semibold border ${getMethodBadge(tx.method)}`}>{tx.method}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5">
                      {tx.status === 'paid' ? <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />}
                      <span className={`inline-flex px-2 py-1 rounded-xl text-[11px] font-semibold border ${getStatusClass(tx.status)}`}>{tx.status}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <div className="text-sm text-slate-700 dark:text-slate-200">{tx.date}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-300 tabular-nums">{tx.time}</div>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/10 text-xs font-semibold text-slate-900 dark:text-slate-100 transition-all">
                      <Download className="w-3 h-3" />
                      Invoice
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
