import React, { useState } from 'react';
import { Play, CheckCircle, AlertCircle, Clock } from 'lucide-react';

export default function QATestRuns() {
  const [testRuns] = useState([
    { id: 1, name: 'Sprint 2.1 - Regression', totalTests: 245, passed: 231, failed: 8, pending: 6, duration: '2h 45m', startTime: '2025-01-15 09:00' },
    { id: 2, name: 'Sprint 2.0 - Full Suite', totalTests: 1250, passed: 1176, failed: 40, pending: 34, duration: '12h 30m', startTime: '2025-01-14 08:00' },
    { id: 3, name: 'API Integration Tests', totalTests: 89, passed: 87, failed: 2, pending: 0, duration: '45m', startTime: '2025-01-13 15:00' },
    { id: 4, name: 'Mobile UI Tests', totalTests: 156, passed: 142, failed: 12, pending: 2, duration: '3h 15m', startTime: '2025-01-12 10:00' },
    { id: 5, name: 'Smoke Tests - Production', totalTests: 45, passed: 45, failed: 0, pending: 0, duration: '12m', startTime: '2025-01-15 18:00' }
  ]);

  const getPassRate = (passed, total) => {
    return total > 0 ? ((passed / total) * 100).toFixed(1) : 0;
  };

  const getStatusColor = (passed, failed) => {
    if (failed === 0) return 'text-green-600';
    if (failed > 10) return 'text-red-600';
    return 'text-yellow-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Test Runs</h1>

        {/* Test Runs List */}
        <div className="space-y-4">
          {testRuns.map((run) => (
            <div key={run.id} className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-black">{run.name}</h3>
                  <p className="text-sm text-gray-600">Started: {run.startTime}</p>
                </div>
                <span className="text-sm font-semibold text-gray-700 bg-blue-100/50 px-3 py-1 rounded-full">{run.duration}</span>
              </div>

              {/* Test Stats */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                <div className="bg-white/40 border border-gray-300 rounded-lg p-3">
                  <p className="text-xs text-gray-600 font-medium">Total Tests</p>
                  <p className="text-xl font-bold text-black">{run.totalTests}</p>
                </div>
                <div className="bg-green-100/50 border border-gray-300 rounded-lg p-3">
                  <p className="text-xs text-gray-600 font-medium">Passed</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <p className="text-xl font-bold text-green-600">{run.passed}</p>
                  </div>
                </div>
                <div className="bg-red-100/50 border border-gray-300 rounded-lg p-3">
                  <p className="text-xs text-gray-600 font-medium">Failed</p>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <p className="text-xl font-bold text-red-600">{run.failed}</p>
                  </div>
                </div>
                <div className="bg-yellow-100/50 border border-gray-300 rounded-lg p-3">
                  <p className="text-xs text-gray-600 font-medium">Pending</p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-600" />
                    <p className="text-xl font-bold text-yellow-600">{run.pending}</p>
                  </div>
                </div>
                <div className={`border border-gray-300 rounded-lg p-3 ${getStatusColor(run.passed, run.failed) === 'text-green-600' ? 'bg-green-100/50' : getStatusColor(run.passed, run.failed) === 'text-red-600' ? 'bg-red-100/50' : 'bg-yellow-100/50'}`}>
                  <p className="text-xs text-gray-600 font-medium">Pass Rate</p>
                  <p className={`text-xl font-bold ${getStatusColor(run.passed, run.failed)}`}>{getPassRate(run.passed, run.totalTests)}%</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300/50 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-green-500 to-green-600 h-full" 
                  style={{width: `${getPassRate(run.passed, run.totalTests)}%`}}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
