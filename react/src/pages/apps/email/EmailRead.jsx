import React from 'react';
import { Mail, Reply, Forward, Trash2, Archive, Tag } from 'lucide-react';

export default function EmailRead() {
  return (
    <div className="w-full p-6 space-y-6">
      {/* Header */}
      <div>
        <h4 className="text-3xl font-bold text-black">Email</h4>
        <div className="text-sm text-gray-600 mt-2">Glacia / Apps / Email</div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Email Reader */}
        <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-300 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-black">Trip home from Colombo</h3>
              <p className="text-gray-600 text-sm mt-1">From: Peter Miller &lt;peter@gmail.com&gt;</p>
              <p className="text-gray-600 text-sm">To: You &lt;you@gmail.com&gt;</p>
              <p className="text-gray-600 text-sm">Date: March 6, 2024, 10:30 AM</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition">
                <Archive className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition">
                <Tag className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 border-b border-gray-300">
            <div className="prose prose-sm max-w-none text-gray-700 text-black">
              <p className="mb-4">
                Hi! Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)
              </p>
              <p className="mb-4">
                It would be nice to see you soon. Let me know your thoughts about the plan.
              </p>
              <p className="mb-4">
                Looking forward to hearing from you!
              </p>
              <p>
                Best regards,<br />
                Peter Miller
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="p-6 flex gap-3 border-t border-gray-300">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600 transition font-semibold">
              <Reply className="w-4 h-4" />
              Reply
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50 transition font-semibold">
              <Forward className="w-4 h-4" />
              Forward
            </button>
          </div>
        </div>

        {/* Related Emails */}
        <div className="mt-6 glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-300">
            <h4 className="text-lg font-bold text-black">Conversation Thread</h4>
          </div>
          <div className="divide-y divide-gray-300">
            {[
              { sender: 'You', subject: 'Re: Trip home from Colombo', date: 'Today at 2:45 PM', preview: 'That sounds great! I\'ll...' },
              { sender: 'Peter', subject: 'Trip home from Colombo', date: 'Today at 10:30 AM', preview: 'Trip home from Colombo has been arranged...' }
            ].map((item, idx) => (
              <div key={idx} className="p-4 hover:bg-gray-50 transition cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-black text-sm">{item.sender}</span>
                  <span className="text-xs text-gray-600">{item.date}</span>
                </div>
                <p className="text-gray-600 text-sm mb-1">{item.subject}</p>
                <p className="text-gray-500 text-sm truncate">{item.preview}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
