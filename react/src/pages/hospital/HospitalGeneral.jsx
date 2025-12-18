import React, { useState } from 'react';
import { Users, Activity, Heart, Brain, Stethoscope, TrendingUp, Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react';

export default function HospitalGeneral() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Doctors', value: '156', icon: Stethoscope, color: 'from-blue-500 to-blue-600', trend: '+12%' },
    { label: 'Total Patients', value: '2,847', icon: Users, color: 'from-green-500 to-green-600', trend: '+8%' },
    { label: 'Appointments', value: '342', icon: Calendar, color: 'from-yellow-500 to-yellow-600', trend: '+23%' },
    { label: 'Bed Occupancy', value: '78%', icon: Activity, color: 'from-purple-500 to-purple-600', trend: '+5%' },
    { label: 'Emergency Cases', value: '45', icon: Heart, color: 'from-red-500 to-red-600', trend: '+15%' },
    { label: 'Departments', value: '18', icon: Brain, color: 'from-indigo-500 to-indigo-600', trend: '0%' },
  ];

  const departments = [
    { name: 'Cardiology', head: 'Dr. Smith', patients: 142, doctors: 12 },
    { name: 'Neurology', head: 'Dr. Johnson', patients: 98, doctors: 8 },
    { name: 'Orthopedics', head: 'Dr. Williams', patients: 167, doctors: 10 },
    { name: 'Pediatrics', head: 'Dr. Brown', patients: 203, doctors: 14 },
  ];

  const recentActivities = [
    { type: 'admission', patient: 'John Doe', time: '2 hours ago', icon: '📥' },
    { type: 'appointment', patient: 'Jane Smith', time: '4 hours ago', icon: '📅' },
    { type: 'discharge', patient: 'Mike Johnson', time: '6 hours ago', icon: '📤' },
    { type: 'emergency', patient: 'Sarah Lee', time: '8 hours ago', icon: '🚨' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Hospital General Overview</h1>
        <p className="text-gray-600">Central management dashboard for hospital operations</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl p-6 shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-gray-600 text-sm font-medium mb-1">{stat.label}</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                    <span className="text-green-600 text-sm font-semibold">{stat.trend}</span>
                  </div>
                </div>
                <div className={`p-4 bg-gradient-to-br ${stat.color} rounded-2xl text-white`}>
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Departments Section */}
        <div className="lg:col-span-2">
          <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 overflow-hidden">
            <div className="p-6 border-b border-white/30">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Stethoscope size={24} className="text-blue-600" />
                Departments Overview
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/30 border-b border-white/30">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Department</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Head</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Doctors</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Patients</th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map((dept, idx) => (
                    <tr key={idx} className="border-b border-white/20 hover:bg-white/30 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{dept.name}</td>
                      <td className="px-6 py-4 text-gray-700">{dept.head}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100/50 text-blue-700">
                          {dept.doctors}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100/50 text-green-700">
                          {dept.patients}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Activity size={24} className="text-purple-600" />
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-4 border-b border-white/20 last:border-0">
                  <div className="text-2xl">{activity.icon}</div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.patient}</p>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <Clock size={14} />
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-2xl">
              <Phone className="text-blue-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Emergency Contact</h3>
          </div>
          <p className="text-gray-700 text-sm">+1 (555) 123-4567</p>
        </div>

        <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-green-100 rounded-2xl">
              <MapPin className="text-green-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Main Location</h3>
          </div>
          <p className="text-gray-700 text-sm">123 Medical Center Dr, Healthcare City</p>
        </div>

        <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-purple-100 rounded-2xl">
              <Mail className="text-purple-600" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Email Support</h3>
          </div>
          <p className="text-gray-700 text-sm">info@hospital.com</p>
        </div>
      </div>
    </div>
  );
}
