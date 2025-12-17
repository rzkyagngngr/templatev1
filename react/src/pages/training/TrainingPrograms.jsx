import React from 'react';
import { BookOpen, Users, Calendar, CheckCircle } from 'lucide-react';

export default function TrainingPrograms() {
  const programs = [
    { id: 'PRG-001', name: 'Leadership Development', participants: '150', duration: '12 weeks', status: 'Active' },
    { id: 'PRG-002', name: 'Technical Skills', participants: '200', duration: '8 weeks', status: 'Active' },
    { id: 'PRG-003', name: 'Communication Mastery', participants: '120', duration: '6 weeks', status: 'Planned' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Training Programs</h1>

        {/* Programs List */}
        <div className="grid grid-cols-1 gap-4 mb-8">
          {programs.map((program) => (
            <div key={program.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <BookOpen className="w-6 h-6 text-black" />
                  <div>
                    <p className="font-bold text-black">{program.name}</p>
                    <p className="text-gray-600 text-sm">{program.id}</p>
                  </div>
                </div>
                <div className="flex gap-6 text-right">
                  <div>
                    <p className="text-gray-600 text-sm">Participants</p>
                    <p className="font-bold text-black">{program.participants}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Duration</p>
                    <p className="font-bold text-black">{program.duration}</p>
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
