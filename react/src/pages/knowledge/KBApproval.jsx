import React from 'react';
import { CheckCircle, AlertCircle, Edit2, Trash2, Clock } from 'lucide-react';

export default function KBApproval() {
  const submissions = [
    { id: 1, title: 'New Feature Guide', author: 'John Doe', status: 'Pending', date: '2025-01-10', priority: 'High' },
    { id: 2, title: 'Update to Docs', author: 'Jane Smith', status: 'In Review', date: '2025-01-08', priority: 'Medium' },
    { id: 3, title: 'Tutorial Series', author: 'Mike Johnson', status: 'Approved', date: '2025-01-05', priority: 'Low' },
    { id: 4, title: 'Bug Fix Note', author: 'Sarah Lee', status: 'Rejected', date: '2025-01-02', priority: 'High' },
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Approved': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'Rejected': return <AlertCircle className="w-5 h-5 text-red-600" />;
      default: return <Clock className="w-5 h-5 text-yellow-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Approval Workflow - CREATED</h1>

        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300 bg-white/50">
                  <th className="text-left py-3 px-4 font-semibold text-black">Title</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Author</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Priority</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Actions</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission) => (
                  <tr key={submission.id} className="border-b border-gray-300">
                    <td className="py-3 px-4 text-black">{submission.title}</td>
                    <td className="py-3 px-4 text-black">{submission.author}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(submission.status)}
                        <span className="text-black text-sm">{submission.status}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-sm text-black font-medium ${
                        submission.priority === 'High' ? 'bg-red-100' : submission.priority === 'Medium' ? 'bg-yellow-100' : 'bg-green-100'
                      }`}>
                        {submission.priority}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-black">{submission.date}</td>
                    <td className="py-3 px-4 flex gap-2">
                      <button className="p-2 hover:bg-white/50 rounded">
                        <Edit2 className="w-4 h-4 text-black" />
                      </button>
                      <button className="p-2 hover:bg-white/50 rounded">
                        <Trash2 className="w-4 h-4 text-black" />
                      </button>
                    </td>
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
