import React, { useState } from 'react';
import { Stethoscope, UserCheck, UserX, Search, Filter, Calendar, Phone, Mail, MapPin } from 'lucide-react';

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

function DoctorWorkloadBarChart() {
  const data = [
    { name: 'Dr. Anderson', patients: 28, color: 'rgb(56 189 248)' },
    { name: 'Dr. Williams', patients: 22, color: 'rgb(99 102 241)' },
    { name: 'Dr. Martinez', patients: 31, color: 'rgb(20 184 166)' },
    { name: 'Dr. Thompson', patients: 18, color: 'rgb(168 85 247)' },
    { name: 'Dr. Garcia', patients: 25, color: 'rgb(236 72 153)' }
  ];
  const max = Math.max(...data.map(d => d.patients));
  return (
    <div className="h-56 flex items-end gap-3">
      {data.map((d) => (
        <div key={d.name} className="flex-1 flex flex-col items-center gap-2">
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-200 tabular-nums">{d.patients}</div>
          <div className="w-full rounded-2xl bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 overflow-hidden relative" style={{ height: '160px' }}>
            <div className="absolute bottom-0 w-full rounded-2xl transition-all" style={{ height: `${(d.patients / max) * 100}%`, backgroundColor: d.color, opacity: 0.75 }} />
          </div>
          <div className="text-[10px] font-medium text-slate-600 dark:text-slate-300 text-center leading-tight">{d.name.replace('Dr. ', '')}</div>
        </div>
      ))}
    </div>
  );
}

function OnDutyDonutChart() {
  const onDuty = 32;
  const offDuty = 10;
  const total = onDuty + offDuty;
  const onDutyPct = (onDuty / total) * 100;
  const r = 42;
  const c = 2 * Math.PI * r;
  const dash = (onDutyPct / 100) * c;
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-28 h-28">
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <defs>
            <linearGradient id="onDuty" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgb(34 197 94)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="rgb(20 184 166)" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(148,163,184,0.25)" strokeWidth="12" />
          <circle cx="60" cy="60" r={r} fill="none" stroke="url(#onDuty)" strokeWidth="12" strokeLinecap="round" strokeDasharray={`${dash} ${c - dash}`} transform="rotate(-90 60 60)" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-black text-slate-900 dark:text-slate-100 tabular-nums">{onDuty}</div>
            <div className="text-[11px] text-slate-600 dark:text-slate-300">on-duty</div>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-slate-700 dark:text-slate-200">On Duty</span>
          <span className="ml-auto text-xs font-semibold text-slate-900 dark:text-slate-100 tabular-nums">{onDuty}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-400" />
          <span className="text-xs font-medium text-slate-700 dark:text-slate-200">Off Duty</span>
          <span className="ml-auto text-xs font-semibold text-slate-900 dark:text-slate-100 tabular-nums">{offDuty}</span>
        </div>
      </div>
    </div>
  );
}

export default function HospitalDoctors() {
  const [filterDept, setFilterDept] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const doctors = [
    { id: 1, name: 'Dr. Sarah Anderson', specialty: 'Cardiology', status: 'available', patients: 28, photo: 'https://i.pravatar.cc/150?img=1', phone: '+1 555-0101', email: 'anderson@hospital.com', dept: 'Cardiology' },
    { id: 2, name: 'Dr. James Williams', specialty: 'Neurology', status: 'available', patients: 22, photo: 'https://i.pravatar.cc/150?img=12', phone: '+1 555-0102', email: 'williams@hospital.com', dept: 'Neurology' },
    { id: 3, name: 'Dr. Maria Martinez', specialty: 'Orthopedics', status: 'available', patients: 31, photo: 'https://i.pravatar.cc/150?img=5', phone: '+1 555-0103', email: 'martinez@hospital.com', dept: 'Orthopedics' },
    { id: 4, name: 'Dr. David Thompson', specialty: 'Pediatrics', status: 'busy', patients: 18, photo: 'https://i.pravatar.cc/150?img=13', phone: '+1 555-0104', email: 'thompson@hospital.com', dept: 'Pediatrics' },
    { id: 5, name: 'Dr. Lisa Garcia', specialty: 'Dermatology', status: 'available', patients: 25, photo: 'https://i.pravatar.cc/150?img=9', phone: '+1 555-0105', email: 'garcia@hospital.com', dept: 'Dermatology' },
    { id: 6, name: 'Dr. Michael Kim', specialty: 'Oncology', status: 'off-duty', patients: 19, photo: 'https://i.pravatar.cc/150?img=14', phone: '+1 555-0106', email: 'kim@hospital.com', dept: 'Oncology' }
  ];

  const kpis = [
    { label: 'Total doctors', value: '42', icon: Stethoscope },
    { label: 'On duty', value: '32', icon: UserCheck },
    { label: 'Off duty', value: '10', icon: UserX },
    { label: 'Appointments', value: '124', icon: Calendar }
  ];

  const getStatusClass = (status) => {
    if (status === 'available') return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20';
    if (status === 'busy') return 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20';
    return 'bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/20';
  };

  return (
    <div className="min-h-screen -m-6 p-6 bg-gradient-to-br from-slate-50 via-sky-50 to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Medical Staff</h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mt-1">Doctor profiles & availability</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input type="text" placeholder="Search doctors..." className="pl-9 pr-4 py-2 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 backdrop-blur-xl" />
          </div>
          <button className="p-2 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/10 transition-all">
            <Filter className="w-4 h-4 text-slate-600 dark:text-slate-300" />
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
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Doctor workload</div>
            <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">Current patient load per doctor</div>
          </div>
          <div className="p-5">
            <DoctorWorkloadBarChart />
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">On-duty status</div>
          <OnDutyDonutChart />
        </GlassCard>
      </div>

      <div className="mb-4 flex items-center gap-2">
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Filter:</span>
        <SegmentedControl value={filterDept} onChange={setFilterDept} options={[{ label: 'All', value: 'all' }, { label: 'Cardiology', value: 'cardiology' }, { label: 'Neurology', value: 'neurology' }, { label: 'Pediatrics', value: 'pediatrics' }]} />
        <SegmentedControl value={filterStatus} onChange={setFilterStatus} options={[{ label: 'All', value: 'all' }, { label: 'Available', value: 'available' }, { label: 'Busy', value: 'busy' }]} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.map((doctor) => (
          <GlassCard key={doctor.id} className="p-5">
            <div className="flex items-start gap-4">
              <div className="relative">
                <img src={doctor.photo} alt={doctor.name} className="w-16 h-16 rounded-2xl object-cover border-2 border-white/50 dark:border-white/10" />
                <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white dark:border-slate-900 ${doctor.status === 'available' ? 'bg-emerald-500' : doctor.status === 'busy' ? 'bg-amber-500' : 'bg-slate-400'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 truncate">{doctor.name}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">{doctor.specialty}</p>
                <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-xl border text-[10px] font-semibold mt-2 ${getStatusClass(doctor.status)}`}>
                  <span className="capitalize">{doctor.status}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-slate-600 dark:text-slate-300">{doctor.patients} patients</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-slate-600 dark:text-slate-300">{doctor.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-xs truncate">
                <Mail className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-300 truncate">{doctor.email}</span>
              </div>
            </div>

            <button className="w-full mt-4 px-4 py-2 rounded-xl bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/10 text-sm font-semibold text-slate-900 dark:text-slate-100 transition-all">
              View Profile
            </button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
