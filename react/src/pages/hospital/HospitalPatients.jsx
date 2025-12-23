import React, { useState } from 'react';
import { Users, User, UserPlus, Activity, TrendingUp, Search, Filter, ChevronDown } from 'lucide-react';

function GlassCard({ children, className = '' }) {
  return <div className={`backdrop-blur-xl bg-white/40 border border-white/30 rounded-3xl shadow-[0_8px_32px_rgba(15,23,42,0.06)] overflow-hidden ${className}`}>{children}</div>;
}

function SegmentedControl({ value, onChange, options }) {
  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-white/30 border border-white/40">
      {options.map((opt) => (
        <button key={opt.value} type="button" onClick={() => onChange(opt.value)} className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${value === opt.value ? 'bg-white/80 text-slate-900 shadow-sm' : 'text-slate-800 hover:bg-white/40'}`}>{opt.label}</button>
      ))}
    </div>
  );
}

function PatientGrowthChart() {
  return (
    <div className="relative h-48 w-full">
      <svg viewBox="0 0 600 160" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="patGrowth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(99 102 241)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="rgb(99 102 241)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,140 L100,130 L200,110 L300,100 L400,85 L500,75 L600,60 L600,160 L0,160 Z" fill="url(#patGrowth)" />
        <path d="M0,140 L100,130 L200,110 L300,100 L400,85 L500,75 L600,60" fill="none" stroke="rgb(99 102 241)" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 px-2 pb-2 flex items-center justify-between text-[10px] text-slate-800">
        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
      </div>
    </div>
  );
}

function AgeDistributionChart() {
  const data = [
    { label: '0-18', pct: 18 },
    { label: '19-35', pct: 32 },
    { label: '36-55', pct: 28 },
    { label: '56+', pct: 22 }
  ];
  return (
    <div className="space-y-3">
      {data.map((d) => (
        <div key={d.label} className="space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-slate-700">{d.label} yrs</span>
            <span className="font-semibold text-slate-900 tabular-nums">{d.pct}%</span>
          </div>
          <div className="h-2 rounded-full bg-white/30 border border-white/40 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-400/75 to-violet-400/75 rounded-full" style={{ width: `${d.pct}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HospitalPatients() {
  const [filterType, setFilterType] = useState('all');

  const patients = [
    { id: 1, name: 'Alice Johnson', age: 34, gender: 'F', type: 'in-patient', dept: 'Cardiology', room: 'A-201', status: 'stable', doctor: 'Dr. Anderson', admitted: '2 days ago' },
    { id: 2, name: 'Bob Smith', age: 62, gender: 'M', type: 'in-patient', dept: 'Neurology', room: 'B-105', status: 'critical', doctor: 'Dr. Williams', admitted: '5 days ago' },
    { id: 3, name: 'Carol Martinez', age: 28, gender: 'F', type: 'out-patient', dept: 'Dermatology', room: '-', status: 'stable', doctor: 'Dr. Garcia', admitted: 'Today' },
    { id: 4, name: 'David Lee', age: 45, gender: 'M', type: 'in-patient', dept: 'Orthopedics', room: 'C-302', status: 'recovering', doctor: 'Dr. Martinez', admitted: '1 day ago' },
    { id: 5, name: 'Emma Wilson', age: 7, gender: 'F', type: 'in-patient', dept: 'Pediatrics', room: 'D-110', status: 'stable', doctor: 'Dr. Thompson', admitted: '3 days ago' },
    { id: 6, name: 'Frank Davis', age: 56, gender: 'M', type: 'out-patient', dept: 'Oncology', room: '-', status: 'stable', doctor: 'Dr. Kim', admitted: 'Today' },
    { id: 7, name: 'Grace Brown', age: 39, gender: 'F', type: 'in-patient', dept: 'Cardiology', room: 'A-208', status: 'stable', doctor: 'Dr. Anderson', admitted: '4 days ago' },
    { id: 8, name: 'Henry Taylor', age: 71, gender: 'M', type: 'in-patient', dept: 'Neurology', room: 'B-112', status: 'critical', doctor: 'Dr. Williams', admitted: '7 days ago' }
  ];

  const kpis = [
    { label: 'Total patients', value: '312', delta: '+14 today', icon: Users },
    { label: 'In-patient', value: '142', delta: '45% capacity', icon: User },
    { label: 'Out-patient', value: '170', delta: '+8 today', icon: UserPlus },
    { label: 'Critical care', value: '8', delta: 'ICU monitored', icon: Activity }
  ];

  const getStatusClass = (status) => {
    if (status === 'stable') return 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20';
    if (status === 'recovering') return 'bg-sky-500/10 text-sky-700 border-sky-500/20';
    if (status === 'critical') return 'bg-red-500/10 text-red-700 border-red-500/20';
    return 'bg-amber-500/10 text-amber-700 border-amber-500/20';
  };

  return (
    <div className="min-h-screen -m-6 p-6 bg-gradient-to-br from-slate-50 via-sky-50 to-slate-50">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Patient Management</h1>
          <p className="text-sm md:text-base text-slate-800 mt-1">Active patient registry</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input type="text" placeholder="Search patients..." className="pl-9 pr-4 py-2 rounded-2xl bg-white/30 border border-white/40 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 backdrop-blur-xl" />
          </div>
          <button className="p-2 rounded-2xl bg-white/30 border border-white/40 hover:bg-white/60 dark:hover:bg-white/10 transition-all">
            <Filter className="w-4 h-4 text-slate-800" />
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
                  <div className="text-xs font-semibold text-slate-800">{kpi.label}</div>
                  <div className="mt-2 text-2xl md:text-3xl font-black text-slate-900 tabular-nums">{kpi.value}</div>
                  <div className="mt-1 text-xs font-medium text-slate-800">{kpi.delta}</div>
                </div>
                <div className="p-2.5 rounded-2xl bg-white/50 border border-white/50">
                  <Icon className="w-5 h-5 text-sky-600" />
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <GlassCard className="lg:col-span-2">
          <div className="p-5 border-b border-white/20">
            <div className="text-sm font-semibold text-slate-900">Patient growth trend</div>
            <div className="text-xs text-slate-800 mt-1">Monthly patient admissions</div>
          </div>
          <div className="p-5">
            <PatientGrowthChart />
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="text-sm font-semibold text-slate-900 mb-4">Age distribution</div>
          <AgeDistributionChart />
        </GlassCard>
      </div>

      <div className="mb-4">
        <SegmentedControl value={filterType} onChange={setFilterType} options={[{ label: 'All', value: 'all' }, { label: 'In-Patient', value: 'in-patient' }, { label: 'Out-Patient', value: 'out-patient' }]} />
      </div>

      <GlassCard>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900">Patient</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900">Age</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900">Type</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900">Department</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900">Room</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900">Status</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900">Doctor</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900">Admitted</th>
                <th className="px-5 py-4 text-right text-xs font-semibold text-slate-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-b border-white/10 hover:bg-white/20 transition-all">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400/30 to-indigo-400/30 border border-white/50 flex items-center justify-center">
                        <span className="text-sm font-bold text-slate-900">{patient.name[0]}</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">{patient.name}</div>
                        <div className="text-xs text-slate-800">{patient.gender === 'M' ? 'Male' : 'Female'}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-700 tabular-nums">{patient.age}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex px-2 py-1 rounded-xl text-[11px] font-semibold ${patient.type === 'in-patient' ? 'bg-indigo-500/10 text-indigo-700 border border-indigo-500/20' : 'bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20'}`}>{patient.type}</span>
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-700">{patient.dept}</td>
                  <td className="px-5 py-4 text-sm text-slate-700 tabular-nums font-mono">{patient.room}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex px-2 py-1 rounded-xl text-[11px] font-semibold border ${getStatusClass(patient.status)}`}>{patient.status}</span>
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-700">{patient.doctor}</td>
                  <td className="px-5 py-4 text-xs text-slate-800">{patient.admitted}</td>
                  <td className="px-5 py-4 text-right">
                    <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/30 border border-white/40 hover:bg-white/60 dark:hover:bg-white/10 text-xs font-semibold text-slate-900 transition-all">
                      View <ChevronDown className="w-3 h-3 -rotate-90" />
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
