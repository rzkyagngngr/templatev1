import React from 'react';
import { MessageSquare, Star, User, Calendar } from 'lucide-react';

export default function TrainingFeedback() {
  const feedback = [
    { id: 'FB-001', employee: 'John Smith', course: 'Advanced React', rating: '5', date: '2025-01-15', comment: 'Excellent course with practical examples' },
    { id: 'FB-002', employee: 'Sarah Lee', course: 'Project Management', rating: '4', date: '2025-01-14', comment: 'Good content, could use more case studies' },
    { id: 'FB-003', employee: 'Mike Chen', course: 'Data Analysis', rating: '5', date: '2025-01-13', comment: 'Very informative and well-structured' },
    { id: 'FB-004', employee: 'Emily Davis', course: 'Digital Marketing', rating: '4', date: '2025-01-12', comment: 'Great insights on current trends' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Training Feedback</h1>

        {/* Feedback List */}
        <div className="space-y-4 mb-8">
          {feedback.map((item) => (
            <div key={item.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6 text-black" />
                  <div>
                    <p className="font-bold text-black">{item.employee}</p>
                    <p className="text-gray-600 text-sm">{item.course}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < parseInt(item.rating) ? 'fill-yellow-400 text-yellow-600' : 'text-gray-300'}`} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">"{item.comment}"</p>
              <p className="text-gray-500 text-xs">{item.date}</p>
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
