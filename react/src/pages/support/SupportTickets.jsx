import React from 'react';
import { Ticket, AlertCircle, Clock, CheckCircle } from 'lucide-react';

export default function SupportTickets() {
  const tickets = [
    { id: 'TKT-001', subject: 'Login Issue', priority: 'High', status: 'Open', created: '2025-01-10' },
    { id: 'TKT-002', subject: 'Feature Request', priority: 'Low', status: 'In Progress', created: '2025-01-09' },
    { id: 'TKT-003', subject: 'Bug Report', priority: 'High', status: 'Resolved', created: '2025-01-08' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Support Tickets - CREATED</h1>

        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-3 px-4 font-semibold text-black">ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Subject</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Priority</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Created</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => (
                  <tr key={ticket.id} className="border-b border-gray-300">
                    <td className="py-3 px-4 text-black">{ticket.id}</td>
                    <td className="py-3 px-4 text-black">{ticket.subject}</td>
                    <td className="py-3 px-4 text-black">{ticket.priority}</td>
                    <td className="py-3 px-4 text-black">{ticket.status}</td>
                    <td className="py-3 px-4 text-black">{ticket.created}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
