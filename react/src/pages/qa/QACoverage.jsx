import React, { useState } from 'react';
import { TrendingUp, FileText, Activity } from 'lucide-react';

export default function QACoverage() {
  const [coverage] = useState([
    { module: 'Authentication', totalLines: 1245, coveredLines: 1189, percentage: 95.5 },
    { module: 'User Management', totalLines: 892, coveredLines: 821, percentage: 92.0 },
    { module: 'Products', totalLines: 2156, coveredLines: 1876, percentage: 87.0 },
    { module: 'Orders', totalLines: 1678, coveredLines: 1502, percentage: 89.5 },
    { module: 'Payments', totalLines: 1234, coveredLines: 1156, percentage: 93.7 },
    { module: 'Reports', totalLines: 945, coveredLines: 834, percentage: 88.3 },
    { module: 'Analytics', totalLines: 1567, coveredLines: 1456, percentage: 92.9 },
    { module: 'API Gateway', totalLines: 1845, coveredLines: 1634, percentage: 88.6 }
  ]);

  const totalLines = coverage.reduce((sum, item) => sum + item.totalLines, 0);
  const totalCovered = coverage.reduce((sum, item) => sum + item.coveredLines, 0);
  const overallCoverage = ((totalCovered / totalLines) * 100).toFixed(1);

  const getCoverageColor = (percentage) => {
    if (percentage >= 90) return 'bg-green-100/50 text-green-600';
    if (percentage >= 80) return 'bg-blue-100/50 text-blue-600';
    if (percentage >= 70) return 'bg-yellow-100/50 text-yellow-600';
    return 'bg-red-100/50 text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Code Coverage</h1>

        {/* Overall Coverage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm font-medium">Overall Coverage</p>
              <TrendingUp className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-black">{overallCoverage}%</p>
            <p className="text-xs text-gray-500 mt-2">{totalCovered.toLocaleString()} / {totalLines.toLocaleString()} lines</p>
          </div>

          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm font-medium">Modules Analyzed</p>
              <Activity className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-black">{coverage.length}</p>
          </div>

          <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg p-6 hover:bg-white/50 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm font-medium">Total Lines</p>
              <FileText className="w-5 h-5 text-orange-500" />
            </div>
            <p className="text-3xl font-bold text-black">{totalLines.toLocaleString()}</p>
          </div>
        </div>

        {/* Coverage Table */}
        <div className="backdrop-blur-xl bg-white/40 border border-gray-300 rounded-lg overflow-hidden hover:bg-white/50 transition">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-6 text-black font-bold">Module</th>
                <th className="text-left py-4 px-6 text-black font-bold">Total Lines</th>
                <th className="text-left py-4 px-6 text-black font-bold">Covered Lines</th>
                <th className="text-left py-4 px-6 text-black font-bold">Coverage %</th>
                <th className="text-left py-4 px-6 text-black font-bold">Trend</th>
              </tr>
            </thead>
            <tbody>
              {coverage.map((item, idx) => (
                <tr key={idx} className={`border-b border-gray-300 hover:bg-white/30 ${idx % 2 === 0 ? 'bg-white/10' : ''}`}>
                  <td className="py-4 px-6 text-black font-medium">{item.module}</td>
                  <td className="py-4 px-6 text-black">{item.totalLines.toLocaleString()}</td>
                  <td className="py-4 px-6 text-black">{item.coveredLines.toLocaleString()}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-gray-300/50 rounded-full h-2 overflow-hidden">
                        <div className="bg-green-500 h-full" style={{width: `${item.percentage}%`}}></div>
                      </div>
                      <span className={`text-sm font-bold px-2 py-1 rounded ${getCoverageColor(item.percentage)}`}>{item.percentage}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-green-600 font-semibold">â†‘ 2.3%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
