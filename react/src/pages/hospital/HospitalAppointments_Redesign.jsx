import React, { useState } from 'react';
import { Calendar, Clock, User, Plus, X, Edit, Trash2, Search, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

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

function AppointmentLineChart() {
  return (
    <div className="relative h-48 w-full">
      <svg viewBox="0 0 500 160" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="apptLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgb(56 189 248)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="rgb(99 102 241)" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <path d="M0,120 L70,100 L140,110 L210,70 L280,85 L350,60 L420,75 L500,55" fill="none" stroke="url(#apptLine)" strokeWidth="3" strokeLinecap="round" />
        {[0,70,140,210,280,350,420,500].map((x,i) => <circle key={i} cx={x} cy={[120,100,110,70,85,60,75,55][i]} r="4" fill="rgb(56 189 248)" />)}
      </svg>
      <div className="absolute inset-x-0 bottom-0 px-2 pb-2 flex items-center justify-between text-[10px] text-slate-600 dark:text-slate-300">
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
      </div>
    </div>
  );
}

function StatusPieChart() {
  const data = [{ label: 'Confirmed', pct: 62, color: 'rgb(34 197 94)' }, { label: 'Pending', pct: 25, color: 'rgb(251 191 36)' }, { label: 'Cancelled', pct: 13, color: 'rgb(239 68 68)' }];
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

function Fab({ icon: Icon, onClick }) {
  return (
    <button onClick={onClick} className="fixed bottom-6 right-6 w-14 h-14 rounded-2xl backdrop-blur-2xl bg-sky-500/90 dark:bg-sky-600/80 hover:bg-sky-600/90 dark:hover:bg-sky-700/80 border border-white/50 dark:border-white/10 shadow-[0_20px_40px_rgba(14,165,233,0.3)] hover:shadow-[0_25px_50px_rgba(14,165,233,0.4)] transition-all flex items-center justify-center">
      <Icon className="w-6 h-6 text-white" />
    </button>
  );
}

export default function HospitalAppointments() {
  const [view, setView] = useState('timeline');
  const [filter, setFilter] = useState('all');

  const appointments = [
    { id: 1, patient: 'Sarah Johnson', doctor: 'Dr. Anderson', time: '09:00 AM', dept: 'Cardiology', status: 'confirmed', duration: '30 min' },
    { id: 2, patient: 'Michael Chen', doctor: 'Dr. Williams', time: '09:30 AM', dept: 'Neurology', status: 'pending', duration: '45 min' },
    { id: 3, patient: 'Emily Davis', doctor: 'Dr. Martinez', time: '10:00 AM', dept: 'Orthopedics', status: 'confirmed', duration: '30 min' },
    { id: 4, patient: 'James Wilson', doctor: 'Dr. Thompson', time: '11:00 AM', dept: 'Pediatrics', status: 'confirmed', duration: '30 min' },
    { id: 5, patient: 'Lisa Brown', doctor: 'Dr. Garcia', time: '11:30 AM', dept: 'Dermatology', status: 'cancelled', duration: '30 min' },
    { id: 6, patient: 'David Lee', doctor: 'Dr. Anderson', time: '02:00 PM', dept: 'Cardiology', status: 'pending', duration: '45 min' },
    { id: 7, patient: 'Anna Martinez', doctor: 'Dr. Kim', time: '03:00 PM', dept: 'Oncology', status: 'confirmed', duration: '60 min' },
    { id: 8, patient: 'Tom Rodriguez', doctor: 'Dr. Patel', time: '04:00 PM', dept: 'ENT', status: 'confirmed', duration: '30 min' }
  ];

  const getStatusIcon = (status) => {
    if (status === 'confirmed') return <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    if (status === 'pending') return <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
    return <XCircle className="w-4 h-4 text-red-600 dark:text-red-400" />;
  };

  const getStatusClass = (status) => {
    if (status === 'confirmed') return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20';
    if (status === 'pending') return 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20';
    return 'bg-red-500/10 text-red-700 dark:text-red-300 border-red-500/20';
  };

  const kpis = [
    { label: 'Total today', value: '42', icon: Calendar },
    { label: 'Confirmed', value: '28', icon: CheckCircle },
    { label: 'Pending', value: '10', icon: AlertCircle },
    { label: 'Cancelled', value: '4', icon: XCircle }
  ];

  return (
    <div className="min-h-screen -m-6 p-6 bg-gradient-to-br from-slate-50 via-sky-50 to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Appointments</h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mt-1">Today's schedule • December 23, 2025</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 backdrop-blur-xl" />
          </div>
          <SegmentedControl value={view} onChange={setView} options={[{ label: 'Timeline', value: 'timeline' }, { label: 'Calendar', value: 'calendar' }]} />
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
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Appointments per day</div>
              <SegmentedControl value={filter} onChange={setFilter} options={[{ label: 'All', value: 'all' }, { label: 'Week', value: 'week' }, { label: 'Month', value: 'month' }]} />
            </div>
          </div>
          <div className="p-5">
            <AppointmentLineChart />
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">Status distribution</div>
          <StatusPieChart />
        </GlassCard>
      </div>

      <GlassCard>
        <div className="p-5 border-b border-white/20">
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Today's timeline</div>
        </div>
        <div className="p-5">
          <div className="space-y-3">
            {appointments.map((apt) => (
              <div key={apt.id} className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/30 dark:border-white/5 hover:bg-white/60 dark:hover:bg-white/10 transition-all">
                <div className="flex items-center gap-3 flex-1">
                  <div className="flex flex-col items-center gap-1">
                    <Clock className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 tabular-nums">{apt.time}</span>
                  </div>
                  <div className="w-px h-12 bg-white/50 dark:bg-white/10" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <User className="w-4 h-4 text-slate-500" />
                      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{apt.patient}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                      <span>{apt.doctor}</span>
                      <span>•</span>
                      <span>{apt.dept}</span>
                      <span>•</span>
                      <span>{apt.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold ${getStatusClass(apt.status)}`}>
                    {getStatusIcon(apt.status)}
                    <span className="capitalize">{apt.status}</span>
                  </div>
                  <button className="p-2 rounded-xl hover:bg-white/40 dark:hover:bg-white/5 transition-all">
                    <Edit className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  </button>
                  <button className="p-2 rounded-xl hover:bg-white/40 dark:hover:bg-white/5 transition-all">
                    <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </GlassCard>

      <Fab icon={Plus} onClick={() => console.log('Add appointment')} />
    </div>
  );
}
