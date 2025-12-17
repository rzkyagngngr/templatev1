import React, { useState } from 'react';
import { Mail, Star, FileText, Send, Trash2, Tag, MoreVertical, Search } from 'lucide-react';

export default function EmailInbox() {
  const [emails, setEmails] = useState([
    {
      id: 1,
      sender: 'Peter, me',
      subject: 'Hello',
      teaser: 'Trip home from ðŸŽ‰ Colombo has been arranged, then Jenna will come get me from Stockholm. :)',
      date: 'Mar. 6',
      starred: false,
      label: null,
      count: 3
    },
    {
      id: 2,
      sender: 'me, Susanna',
      subject: 'Since you asked...',
      teaser: "Alright thanks. I'll have to re-book that somehow, i'll get back to you.",
      date: 'Mar. 6',
      starred: false,
      label: 'Freelance',
      labelColor: 'bg-yellow-100 text-yellow-800',
      count: 7
    },
    {
      id: 3,
      sender: 'Web Support Dennis',
      subject: 'Re: New mail settings',
      teaser: 'Will you answer him asap?',
      date: 'Mar 7',
      starred: false,
      label: null
    },
    {
      id: 4,
      sender: 'me, Peter',
      subject: 'Off on Thursday',
      teaser: 'Eff that place, you might as well stay here with us instead!',
      date: 'Mar 4',
      starred: false,
      label: 'Support',
      labelColor: 'bg-blue-100 text-blue-800',
      count: 2
    },
    {
      id: 5,
      sender: 'Medium',
      subject: "This Week's Top Stories",
      teaser: 'Our top pick for you on Medium this week The Man Who Destroyed America\'s Ego',
      date: 'Feb 28',
      starred: false,
      label: 'Social',
      labelColor: 'bg-purple-100 text-purple-800'
    },
    {
      id: 6,
      sender: 'Randy, me',
      subject: 'Last pic over my village',
      teaser: 'Yeah i\'d like that! Do you remember the video you showed me...',
      date: '5:01 am',
      starred: true,
      label: 'Family',
      labelColor: 'bg-green-100 text-green-800',
      count: 5
    }
  ]);

  const toggleStar = (id) => {
    setEmails(emails.map(e => e.id === id ? { ...e, starred: !e.starred } : e));
  };

  const labels = [
    { name: 'Theme Support', color: 'text-blue-500' },
    { name: 'Freelance', color: 'text-yellow-500' },
    { name: 'Social', color: 'text-purple-500' },
    { name: 'Friends', color: 'text-pink-500' },
    { name: 'Family', color: 'text-green-500' }
  ];

  const chats = [
    { name: 'Scott Median', message: 'Hello' },
    { name: 'Julian Rosa', message: 'What about our next..' },
    { name: 'David Medina', message: 'Yeah everything is fine' },
    { name: 'Jay Baker', message: 'Wow that\'s great' }
  ];

  return (
    <div className="w-full p-6 space-y-6">
      {/* Header */}
      <div>
        <h4 className="text-3xl font-bold text-black">Inbox</h4>
        <div className="text-sm text-gray-600 mt-2">Glacia / Apps / Inbox</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-1">
          <button className="w-full mb-4 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600 transition font-semibold flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            Compose
          </button>

          <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-4 space-y-4">
            {/* Mail List */}
            <div className="space-y-2">
              <a href="#" className="flex items-center gap-2 p-2 bg-blue-50 text-blue-600 rounded-lg font-semibold text-sm">
                <Mail className="w-4 h-4" />
                Inbox <span className="ml-auto">(5)</span>
              </a>
              <a href="#" className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm">
                <Star className="w-4 h-4" />
                Starred
              </a>
              <a href="#" className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm">
                <Tag className="w-4 h-4" />
                Important
              </a>
              <a href="#" className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm">
                <FileText className="w-4 h-4" />
                Draft
              </a>
              <a href="#" className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm">
                <Send className="w-4 h-4" />
                Sent Mail
              </a>
              <a href="#" className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm">
                <Trash2 className="w-4 h-4" />
                Trash
              </a>
            </div>

            {/* Labels */}
            <div className="pt-4 border-t border-gray-300">
              <p className="font-bold text-black text-sm mb-3">Labels</p>
              <div className="space-y-2">
                {labels.map((label, idx) => (
                  <a key={idx} href="#" className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm">
                    <div className={`w-2 h-2 rounded-full ${label.color}`}></div>
                    {label.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Chat */}
            <div className="pt-4 border-t border-gray-300">
              <p className="font-bold text-black text-sm mb-3">Chat</p>
              <div className="space-y-2">
                {chats.map((chat, idx) => (
                  <a key={idx} href="#" className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg text-sm">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-black text-xs">{chat.name}</p>
                      <p className="text-gray-600 text-xs truncate">{chat.message}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-3">
          {/* Toolbar */}
          <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition">
                  <Mail className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition">
                  <Tag className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition">
                  <MoreVertical className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Email List */}
          <div className="glass-card bg-white/40 backdrop-blur-lg border border-gray-300 rounded-lg overflow-hidden">
            {emails.map((email, idx) => (
              <div
                key={idx}
                className="p-4 border-b border-gray-200 hover:bg-gray-50 transition cursor-pointer flex items-center gap-3"
              >
                <input type="checkbox" className="w-4 h-4" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-semibold text-black text-sm">{email.sender}</span>
                    {email.count && <span className="text-xs text-gray-600">({email.count})</span>}
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    {email.label && (
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${email.labelColor}`}>
                        {email.label}
                      </span>
                    )}
                    <span className="font-semibold text-black text-sm truncate">{email.subject}</span>
                  </div>
                  <p className="text-gray-600 text-sm truncate">{email.teaser}</p>
                </div>
                <button
                  onClick={() => toggleStar(email.id)}
                  className="flex-shrink-0"
                >
                  <Star className={`w-4 h-4 ${email.starred ? 'fill-yellow-400 text-yellow-600' : 'text-gray-400'}`} />
                </button>
                <span className="text-xs text-gray-600 flex-shrink-0">{email.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
