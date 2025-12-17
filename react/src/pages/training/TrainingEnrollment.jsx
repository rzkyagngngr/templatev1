import React from 'react';
import { UserPlus, Calendar, Mail, CheckCircle } from 'lucide-react';

export default function TrainingEnrollment() {
  const enrollments = [
    { id: 'ENR-001', employee: 'John Smith', course: 'Advanced React', enrollDate: '2025-01-05', status: 'Active' },
    { id: 'ENR-002', employee: 'Sarah Lee', course: 'Project Management', enrollDate: '2025-01-08', status: 'Active' },
    { id: 'ENR-003', employee: 'Mike Chen', course: 'Data Analysis', enrollDate: '2025-01-10', status: 'Pending' },
    { id: 'ENR-004', employee: 'Emily Davis', course: 'Digital Marketing', enrollDate: '2025-01-12', status: 'Active' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Training Enrollment</h1>

        {/* Enrollments List */}
        <div className="space-y-4 mb-8">
          {enrollments.map((enrollment) => (
            <div key={enrollment.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <UserPlus className="w-6 h-6 text-black" />
                  <div>
                    <p className="font-bold text-black">{enrollment.employee}</p>
                    <p className="text-gray-600 text-sm">{enrollment.course}</p>
                  </div>
                </div>
                <div className="flex gap-6 text-right">
                  <div>
                    <p className="text-gray-600 text-sm">Enrollment Date</p>
                    <p className="font-bold text-black">{enrollment.enrollDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Status</p>
                    <p className="font-bold text-black">{enrollment.status}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">Status</h2>
          <p className="text-black">CREATED</p>
        </div>
      </div>
    </div>
  );
}
