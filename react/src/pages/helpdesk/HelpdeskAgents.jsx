import React, { useState } from 'react';

export default function HelpdeskAgents() {
  const agents = [
    {
      id: 1,
      name: 'Donald Gardner',
      agentId: '#78459',
      location: 'New Jersey',
      rating: 4.8,
      lastMessage: 'popular belief, Lorem Ipsum is not simply random text.',
      satisfiedPercent: 91,
      unsatisfiedPercent: 9
    },
    {
      id: 2,
      name: 'Nicholas Smith',
      agentId: '#78459',
      location: 'New Jersey',
      rating: 4.8,
      lastMessage: 'popular belief, Lorem Ipsum is not simply random text.',
      satisfiedPercent: 91,
      unsatisfiedPercent: 9
    },
    {
      id: 3,
      name: 'Joseph Rust',
      agentId: '#78459',
      location: 'New Jersey',
      rating: 4.8,
      lastMessage: 'popular belief, Lorem Ipsum is not simply random text.',
      satisfiedPercent: 91,
      unsatisfiedPercent: 9
    }
  ];

  return (
    <div className="w-full space-y-6 p-6">
      {/* Header */}
      <div>
        <h4 className="text-2xl font-bold text-black">Agents</h4>
        <div className="text-sm text-gray-600 mt-2">Glacia / Helpdesk / Agents</div>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <div key={agent.id} className="glass-card border border-gray-300 p-6 rounded-lg">
            {/* Agent Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <h4 className="text-base font-semibold text-black">{agent.name}</h4>
                <p className="text-sm text-gray-600">ID : {agent.agentId}</p>
                <p className="text-sm text-gray-600">{agent.location}</p>
                <div className="text-sm text-yellow-500 mt-1">â­ {agent.rating}</div>
              </div>
            </div>

            {/* Last Message */}
            <p className="text-sm text-gray-600 mb-4">
              <span className="font-semibold text-black">Last Message:</span> {agent.lastMessage}
            </p>

            {/* Divider */}
            <div className="border-b border-gray-300 mb-4"></div>

            {/* Actions and Satisfaction */}
            <div className="space-y-3">
              <div className="flex gap-2">
                <button className="px-3 py-2 text-sm bg-gray-500 text-slate-900 rounded hover:bg-gray-600">
                  Send SMS
                </button>
                <button className="px-3 py-2 text-sm bg-blue-500 text-slate-900 rounded hover:bg-blue-600">
                  Send Email
                </button>
              </div>

              {/* Satisfaction Stats */}
              <div className="pt-3 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-black">Satisfied:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">ðŸ‘</span>
                    <span className="text-sm font-semibold text-black">{agent.satisfiedPercent}%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-black">Unsatisfied:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-red-600">ðŸ‘Ž</span>
                    <span className="text-sm font-semibold text-black">{agent.unsatisfiedPercent}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Agent Performance Table */}
      <div className="glass-card border border-gray-300 rounded-lg p-6 mt-8">
        <h4 className="text-lg font-bold text-black mb-4">Agent Performance</h4>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="px-4 py-3 text-left text-xs font-bold text-black uppercase">Agent Name</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-black uppercase">Rating</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-black uppercase">Satisfied</th>
                <th className="px-4 py-3 text-left text-xs font-bold text-black uppercase">Performance</th>
              </tr>
            </thead>
            <tbody>
              {agents.map((agent) => (
                <tr key={agent.id} className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-semibold text-black">{agent.name}</td>
                  <td className="px-4 py-4 text-sm text-yellow-500">â­ {agent.rating}</td>
                  <td className="px-4 py-4 text-sm text-gray-700">{agent.satisfiedPercent}%</td>
                  <td className="px-4 py-4">
                    <div className="w-32 bg-gray-200 rounded h-2">
                      <div
                        className="bg-green-500 h-2 rounded"
                        style={{ width: `${agent.satisfiedPercent}%` }}
                      ></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
