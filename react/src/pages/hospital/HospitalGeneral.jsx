import React, { useState } from 'react';
import { Activity, HeartPulse, CalendarDays, Users, CreditCard, Stethoscope, TrendingUp } from 'lucide-react';

function GlassCard({ children, className = '' }) {
  return (
    <div className={`backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl shadow-[0_8px_32px_rgba(15,23,42,0.06)] overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

function StatusChip({ label, status, meta, tone }) {
  const toneClasses = tone === 'ok'
    ? 'bg-emerald-500/10 text-emerald-800 border-emerald-500/20'
    : tone === 'warn'
    ? 'bg-amber-500/10 text-amber-800 border-amber-500/20'
    : 'bg-red-500/10 text-red-800 border-red-500/20';

  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-2xl border ${toneClasses} backdrop-blur-xl`}>
      <span className="relative inline-flex w-2 h-2">
        <span className={`absolute inset-0 rounded-full opacity-30 ${tone === 'ok' ? 'bg-emerald-500' : tone === 'warn' ? 'bg-amber-500' : 'bg-red-500'}`}></span>
        <span className={`relative w-2 h-2 rounded-full ${tone === 'ok' ? 'bg-emerald-500' : tone === 'warn' ? 'bg-amber-500' : 'bg-red-500'}`}></span>
      </span>
      <div className="leading-tight">
        <div className="text-[11px] font-semibold tracking-tight">{label}</div>
        <div className="text-[11px] opacity-80">{status} • {meta}</div>
      </div>
    </div>
  );
}

function SegmentedControl({ value, onChange, options }) {
  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-white/30 border border-white/40">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            value === opt.value
              ? 'bg-white/80 text-slate-900 shadow-sm'
              : 'text-slate-700 hover:bg-white/40'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function HeroAreaChart() {
  return (
    <div className="relative h-64 w-full">
      <svg viewBox="0 0 600 220" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hgFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(56 189 248)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="rgb(56 189 248)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hgStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgb(56 189 248)" stopOpacity="0.9" />
            <stop offset="50%" stopColor="rgb(99 102 241)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="rgb(20 184 166)" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <path d="M0,150 C60,160 90,120 140,128 C190,136 220,90 270,96 C320,102 340,70 390,78 C440,86 470,58 520,62 C555,65 580,58 600,54 L600,220 L0,220 Z" fill="url(#hgFill)" />
        <path d="M0,150 C60,160 90,120 140,128 C190,136 220,90 270,96 C320,102 340,70 390,78 C440,86 470,58 520,62 C555,65 580,58 600,54" fill="none" stroke="url(#hgStroke)" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 px-4 pb-4 flex items-center justify-between text-xs text-slate-700">
        <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span>
      </div>
    </div>
  );
}

function MiniBarChart() {
  const bars = [
    { label: 'ER', v: 72 },
    { label: 'ICU', v: 58 },
    { label: 'OPD', v: 84 },
    { label: 'Lab', v: 46 },
    { label: 'Ward', v: 66 }
  ];
  return (
    <div className="h-40 flex items-end gap-3">
      {bars.map((b) => (
        <div key={b.label} className="flex-1 flex flex-col items-center gap-2">
          <div className="w-full rounded-2xl bg-white/30 border border-white/40 overflow-hidden">
            <div className="w-full rounded-2xl bg-gradient-to-t from-sky-400/70 via-indigo-400/55 to-teal-300/55" style={{ height: `${Math.max(18, Math.min(100, b.v))}%` }} />
          </div>
          <div className="text-[11px] font-semibold text-slate-700">{b.label}</div>
        </div>
      ))}
    </div>
  );
}

function MiniDonutChart({ value = 72 }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  const dash = (pct / 100) * c;
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-28 h-28">
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <defs>
            <linearGradient id="donut" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgb(56 189 248)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="rgb(20 184 166)" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(148,163,184,0.25)" strokeWidth="12" />
          <circle cx="60" cy="60" r={r} fill="none" stroke="url(#donut)" strokeWidth="12" strokeLinecap="round" strokeDasharray={`${dash} ${c - dash}`} transform="rotate(-90 60 60)" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-black text-slate-900 tabular-nums">{pct}%</div>
            <div className="text-[11px] text-slate-700">occupied</div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="text-sm font-semibold text-slate-900">Bed occupancy</div>
        <div className="text-xs text-slate-700 mt-1">Target 70–85% for balanced throughput.</div>
        <div className="mt-3 flex items-center gap-2">
          <div className="h-2 flex-1 rounded-full bg-white/30 border border-white/40 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-sky-400/75 to-teal-300/75" style={{ width: `${pct}%` }} />
          </div>
          <div className="text-xs font-semibold text-slate-700200 tabular-nums">{pct}%</div>
        </div>
      </div>
    </div>
  );
}

export default function HospitalGeneral() {
  const [range, setRange] = useState('7d');

  const kpis = [
    { label: 'Appointments today', value: '128', delta: '+6.2%', icon: CalendarDays },
    { label: 'Active doctors', value: '42', delta: '+2 on-duty', icon: Stethoscope },
    { label: 'Current patients', value: '312', delta: '+14 admit', icon: Users },
    { label: 'Revenue today', value: '$48,260', delta: '+9.1%', icon: CreditCard }
  ];

  return (
    <div className="min-h-screen -m-6 p-6 bg-gradient-to-br from-slate-50 via-sky-50 to-slate-50 from-slate-50 via-sky-50/50 to-slate-50">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Hospital Overview</h1>
          <p className="text-sm md:text-base text-slate-700 mt-1">Real-time operations dashboard</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <StatusChip label="ER" status="Stable" meta="12 waiting" tone="ok" />
          <StatusChip label="ICU" status="Elevated" meta="18/24 beds" tone="warn" />
          <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/30 border border-white/40 backdrop-blur-xl">
            <HeartPulse className="w-4 h-4 text-sky-700" />
            <span className="text-xs font-semibold text-slate-700200 tabular-nums">Live</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <GlassCard key={kpi.label} className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-700">{kpi.label}</div>
                  <div className="mt-2 text-2xl md:text-3xl font-black text-slate-900 tabular-nums">{kpi.value}</div>
                  <div className="mt-1 text-xs font-semibold text-slate-700 tabular-nums">{kpi.delta}</div>
                </div>
                <div className="p-2.5 rounded-2xl bg-white/50/5 border border-white/50">
                  <Icon className="w-5 h-5 text-sky-700" />
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <GlassCard className="lg:col-span-2">
          <div className="p-5 flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-slate-900">Hospital activity</div>
              <div className="mt-1 text-xs text-slate-700">Visits • Admissions • Diagnostics</div>
              <div className="mt-3 flex items-baseline gap-3">
                <div className="text-2xl font-black text-slate-900 tabular-nums">1,482</div>
                <div className="text-xs font-semibold text-emerald-800 tabular-nums">+4.3%</div>
                <div className="text-xs text-slate-700">vs previous</div>
              </div>
            </div>
            <SegmentedControl value={range} onChange={setRange} options={[{ label: '24H', value: '24h' }, { label: '7D', value: '7d' }, { label: '30D', value: '30d' }]} />
          </div>
          <div className="px-2 pb-5">
            <HeroAreaChart key={range} />
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 gap-4">
          <GlassCard className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-900">Patient inflow</div>
                <div className="text-xs text-slate-700 mt-1">By department</div>
              </div>
              <div className="p-2.5 rounded-2xl bg-white/50/5 border border-white/50">
                <Activity className="w-5 h-5 text-indigo-700" />
              </div>
            </div>
            <div className="mt-4">
              <MiniBarChart />
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <MiniDonutChart value={78} />
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

