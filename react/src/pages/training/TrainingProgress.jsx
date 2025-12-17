import React from 'react';
import { TrendingUp, User, BarChart3, Clock } from 'lucide-react';

export default function TrainingProgress() {
  const progress = [
    { id: 'PRG-001', employee: 'John Smith', course: 'Advanced React', completion: '85%', lastUpdate: '2025-01-15' },
    { id: 'PRG-002', employee: 'Sarah Lee', course: 'Project Management', completion: '60%', lastUpdate: '2025-01-14' },
    { id: 'PRG-003', employee: 'Mike Chen', course: 'Data Analysis', completion: '45%', lastUpdate: '2025-01-13' },
    { id: 'PRG-004', employee: 'Emily Davis', course: 'Digital Marketing', completion: '90%', lastUpdate: '2025-01-15' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Training Progress</h1>

        {/* Progress List */}
        <div className="space-y-4 mb-8">
          {progress.map((item) => (
            <div key={item.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <User className="w-6 h-6 text-black" />
                    <div>
                      <p className="font-bold text-black">{item.employee}</p>
                      <p className="text-gray-600 text-sm">{item.course}</p>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-black">{item.completion}</p>
                </div>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: item.completion}}></div>
              </div>
              <p className="text-gray-600 text-sm">Last Update: {item.lastUpdate}</p>
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
