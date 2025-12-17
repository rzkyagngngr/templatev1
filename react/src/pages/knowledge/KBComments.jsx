import React from 'react';
import { MessageCircle, Plus, Trash2, ThumbsUp } from 'lucide-react';

export default function KBComments() {
  const comments = [
    { id: 1, article: 'Getting Started Guide', author: 'John Doe', text: 'Great article! Very helpful.', likes: '24', date: '2025-01-10' },
    { id: 2, article: 'API Documentation', author: 'Jane Smith', text: 'Need more examples for this section.', likes: '8', date: '2025-01-08' },
    { id: 3, article: 'Best Practices', author: 'Mike Johnson', text: 'This helped me optimize my code significantly.', likes: '15', date: '2025-01-05' },
    { id: 4, article: 'Troubleshooting', author: 'Sarah Lee', text: 'Step 3 is unclear. Can someone clarify?', likes: '5', date: '2025-01-02' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Comments - CREATED</h1>

        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-semibold text-black">{comment.author}</p>
                  <p className="text-sm text-black">On: {comment.article}</p>
                </div>
                <span className="text-sm text-black bg-white/50 px-3 py-1 rounded">{comment.date}</span>
              </div>
              
              <p className="text-black mb-4">{comment.text}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-black hover:text-blue-500">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{comment.likes}</span>
                  </button>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm text-blue-500 hover:bg-white/50 rounded">
                    Reply
                  </button>
                  <button className="p-2 hover:bg-white/50 rounded">
                    <Trash2 className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
