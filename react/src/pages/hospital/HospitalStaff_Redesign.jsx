import React, { useState } from 'react';
import { Users, UserCheck, UserX, Clock, Search, Filter, Mail, Phone } from 'lucide-react';

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

function RoleDistributionChart() {
  const data = [
    { label: 'Nurses', pct: 45, count: 68, color: 'rgb(99 102 241)' },
    { label: 'Technicians', pct: 25, count: 38, color: 'rgb(20 184 166)' },
    { label: 'Admin', pct: 18, count: 27, color: 'rgb(168 85 247)' },
    { label: 'Support', pct: 12, count: 18, color: 'rgb(236 72 153)' }
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
            <span className="ml-auto text-xs font-semibold text-slate-900 dark:text-slate-100 tabular-nums">{d.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShiftScheduleOverview() {
  const shifts = [
    { dept: 'ER', morning: 8, evening: 6, night: 4 },
    { dept: 'ICU', morning: 10, evening: 8, night: 6 },
    { dept: 'Ward', morning: 12, evening: 10, night: 6 },
    { dept: 'OPD', morning: 15, evening: 8, night: 0 }
  ];
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-4 gap-2 text-[10px] font-semibold text-slate-600 dark:text-slate-300 pb-2 border-b border-white/20">
        <div>Dept</div>
        <div className="text-center">Morning</div>
        <div className="text-center">Evening</div>
        <div className="text-center">Night</div>
      </div>
      {shifts.map((s) => (
        <div key={s.dept} className="grid grid-cols-4 gap-2 items-center">
          <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">{s.dept}</div>
          <div className="flex justify-center">
            <span className="px-2 py-1 rounded-lg bg-sky-500/10 text-sky-700 dark:text-sky-300 text-xs font-semibold tabular-nums">{s.morning}</span>
          </div>
          <div className="flex justify-center">
            <span className="px-2 py-1 rounded-lg bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 text-xs font-semibold tabular-nums">{s.evening}</span>
          </div>
          <div className="flex justify-center">
            <span className="px-2 py-1 rounded-lg bg-violet-500/10 text-violet-700 dark:text-violet-300 text-xs font-semibold tabular-nums">{s.night}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ActiveStaffPerDept() {
  const depts = [
    { name: 'Emergency', count: 18 },
    { name: 'ICU', count: 24 },
    { name: 'Ward', count: 28 },
    { name: 'OPD', count: 23 },
    { name: 'Lab', count: 12 },
    { name: 'Radiology', count: 10 }
  ];
  const max = Math.max(...depts.map(d => d.count));
  return (
    <div className="space-y-3">
      {depts.map((dept) => (
        <div key={dept.name} className="space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-slate-700 dark:text-slate-200">{dept.name}</span>
            <span className="font-semibold text-slate-900 dark:text-slate-100 tabular-nums">{dept.count}</span>
          </div>
          <div className="h-2 rounded-full bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-sky-400/75 to-indigo-400/75 rounded-full" style={{ width: `${(dept.count / max) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HospitalStaff() {
  const [filterRole, setFilterRole] = useState('all');

  const staff = [
    { id: 1, name: 'Jennifer Wilson', role: 'Nurse', dept: 'ICU', shift: 'Morning', status: 'active', phone: '+1 555-0201', email: 'wilson@hospital.com' },
    { id: 2, name: 'Robert Taylor', role: 'Technician', dept: 'Radiology', shift: 'Evening', status: 'active', phone: '+1 555-0202', email: 'taylor@hospital.com' },
    { id: 3, name: 'Patricia Anderson', role: 'Admin', dept: 'Reception', shift: 'Morning', status: 'active', phone: '+1 555-0203', email: 'anderson@hospital.com' },
    { id: 4, name: 'Michael Moore', role: 'Nurse', dept: 'ER', shift: 'Night', status: 'active', phone: '+1 555-0204', email: 'moore@hospital.com' },
    { id: 5, name: 'Linda Martinez', role: 'Support', dept: 'Housekeeping', shift: 'Morning', status: 'off-duty', phone: '+1 555-0205', email: 'martinez@hospital.com' },
    { id: 6, name: 'James Garcia', role: 'Technician', dept: 'Lab', shift: 'Evening', status: 'active', phone: '+1 555-0206', email: 'garcia@hospital.com' },
    { id: 7, name: 'Mary Rodriguez', role: 'Nurse', dept: 'Ward', shift: 'Morning', status: 'active', phone: '+1 555-0207', email: 'rodriguez@hospital.com' },
    { id: 8, name: 'David Lopez', role: 'Admin', dept: 'Billing', shift: 'Morning', status: 'active', phone: '+1 555-0208', email: 'lopez@hospital.com' }
  ];

  const kpis = [
    { label: 'Total staff', value: '151', delta: '+3 this month', icon: Users },
    { label: 'On duty', value: '115', delta: '76% active', icon: UserCheck },
    { label: 'Off duty', value: '36', delta: '24% off', icon: UserX },
    { label: 'Shift changes', value: '42', delta: 'Today', icon: Clock }
  ];

  const getStatusClass = (status) => {
    if (status === 'active') return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20';
    return 'bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/20';
  };

  const getShiftBadge = (shift) => {
    if (shift === 'Morning') return 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20';
    if (shift === 'Evening') return 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20';
    return 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/20';
  };

  return (
    <div className="min-h-screen -m-6 p-6 bg-gradient-to-br from-slate-50 via-sky-50 to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Hospital Staff</h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mt-1">Staff management & scheduling</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input type="text" placeholder="Search staff..." className="pl-9 pr-4 py-2 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/50 dark:border-white/10 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 backdrop-blur-xl" />
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
        <GlassCard className="p-5">
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">Role distribution</div>
          <RoleDistributionChart />
        </GlassCard>

        <GlassCard className="p-5">
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">Shift schedule</div>
          <ShiftScheduleOverview />
        </GlassCard>

        <GlassCard className="p-5">
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-4">Active per department</div>
          <ActiveStaffPerDept />
        </GlassCard>
      </div>

      <div className="mb-4">
        <SegmentedControl value={filterRole} onChange={setFilterRole} options={[{ label: 'All', value: 'all' }, { label: 'Nurses', value: 'nurse' }, { label: 'Technicians', value: 'technician' }, { label: 'Admin', value: 'admin' }]} />
      </div>

      <GlassCard>
        <div className="p-5 border-b border-white/20">
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Staff directory</div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900 dark:text-slate-100">Name</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900 dark:text-slate-100">Role</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900 dark:text-slate-100">Department</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900 dark:text-slate-100">Shift</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900 dark:text-slate-100">Status</th>
                <th className="px-5 py-4 text-left text-xs font-semibold text-slate-900 dark:text-slate-100">Contact</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((s) => (
                <tr key={s.id} className="border-b border-white/10 hover:bg-white/20 dark:hover:bg-white/5 transition-all">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400/30 to-indigo-400/30 border border-white/50 dark:border-white/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-slate-900 dark:text-slate-100">{s.name[0]}</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{s.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-slate-700 dark:text-slate-200">{s.role}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-slate-700 dark:text-slate-200">{s.dept}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex px-2 py-1 rounded-xl text-[11px] font-semibold border ${getShiftBadge(s.shift)}`}>{s.shift}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex px-2 py-1 rounded-xl text-[11px] font-semibold border ${getStatusClass(s.status)}`}>{s.status}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <a href={`tel:${s.phone}`} className="p-1.5 rounded-lg hover:bg-white/40 dark:hover:bg-white/5 transition-all">
                        <Phone className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
                      </a>
                      <a href={`mailto:${s.email}`} className="p-1.5 rounded-lg hover:bg-white/40 dark:hover:bg-white/5 transition-all">
                        <Mail className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
                      </a>
                    </div>
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
