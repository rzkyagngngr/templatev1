import React, { useState } from 'react';
import { Mail, Star, FileText, Send, Trash2, Tag, MoreVertical, Search, Archive, Reply, Forward } from 'lucide-react';

export default function EmailInbox() {
  const [emails, setEmails] = useState([
    {
      id: 1,
      sender: 'Peter, me',
      subject: 'Hello',
      teaser: 'Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)',
      date: 'Dec. 17',
      starred: false,
      label: null,
      count: 3,
      read: false
    },
    {
      id: 2,
      sender: 'me, Susanna',
      subject: 'Since you asked...',
      teaser: "Alright thanks. I'll have to re-book that somehow, i'll get back to you.",
      date: 'Dec. 17',
      starred: true,
      label: 'Freelance',
      labelColor: 'bg-yellow-100 text-yellow-800',
      count: 7,
      read: false
    },
    {
      id: 3,
      sender: 'Web Support Dennis',
      subject: 'Re: New mail settings',
      teaser: 'Will you answer him asap?',
      date: 'Dec. 16',
      starred: false,
      label: null,
      read: true
    },
    {
      id: 4,
      sender: 'me, Peter',
      subject: 'Off on Thursday',
      teaser: 'Eff that place, you might as well stay here with us instead!',
      date: 'Dec. 15',
      starred: false,
      label: 'Support',
      labelColor: 'bg-blue-100 text-blue-800',
      count: 2,
      read: true
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 border border-white/60 rounded-2xl p-6 shadow-2xl">
          <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Inbox</h4>
          <div className="text-sm text-gray-600 mt-2">Glacia / Apps / Inbox</div>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-1">
          <button className="w-full mb-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-xl">
            <Mail className="w-5 h-5" />
            Compose
          </button>

          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 border border-white/60 rounded-2xl p-6 space-y-6 shadow-2xl">
            {/* Mail List */}
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold text-sm shadow-lg hover:scale-105 transition-all duration-300">
                <Mail className="w-4 h-4" />
                Inbox <span className="ml-auto bg-white/20 px-2 py-1 rounded-lg">(5)</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-white/60 hover:scale-105 rounded-xl text-sm transition-all duration-300 backdrop-blur-sm">
                <Star className="w-4 h-4" />
                Starred
              </a>
              <a href="#" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-white/60 hover:scale-105 rounded-xl text-sm transition-all duration-300 backdrop-blur-sm">
                <Tag className="w-4 h-4" />
                Important
              </a>
              <a href="#" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-white/60 hover:scale-105 rounded-xl text-sm transition-all duration-300 backdrop-blur-sm">
                <FileText className="w-4 h-4" />
                Draft
              </a>
              <a href="#" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-white/60 hover:scale-105 rounded-xl text-sm transition-all duration-300 backdrop-blur-sm">
                <Send className="w-4 h-4" />
                Sent Mail
              </a>
              <a href="#" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-white/60 hover:scale-105 rounded-xl text-sm transition-all duration-300 backdrop-blur-sm">
                <Trash2 className="w-4 h-4" />
                Trash
              </a>
            </div>

            {/* Labels */}
            <div className="pt-6 border-t border-white/40">
              <p className="font-bold text-black text-sm mb-4">Labels</p>
              <div className="space-y-3">
                {labels.map((label, idx) => (
                  <a key={idx} href="#" className="flex items-center gap-3 p-3 text-gray-700 hover:bg-white/60 hover:scale-105 rounded-xl text-sm transition-all duration-300 backdrop-blur-sm">
                    <div className={`w-3 h-3 rounded-full ${label.color} shadow-lg`}></div>
                    {label.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Chat */}
            <div className="pt-6 border-t border-white/40">
              <p className="font-bold text-black text-sm mb-4">Chat</p>
              <div className="space-y-3">
                {chats.map((chat, idx) => (
                  <a key={idx} href="#" className="flex items-center gap-3 p-3 hover:bg-white/60 hover:scale-105 rounded-xl text-sm transition-all duration-300 backdrop-blur-sm">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex-shrink-0 shadow-lg"></div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-black text-sm">{chat.name}</p>
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
          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 border border-white/60 rounded-2xl p-4 mb-6 shadow-2xl">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex gap-3">
                <button className="p-3 hover:bg-white/60 hover:scale-105 rounded-xl text-gray-600 transition-all duration-300 backdrop-blur-sm">
                  <Mail className="w-5 h-5" />
                </button>
                <button className="p-3 hover:bg-white/60 hover:scale-105 rounded-xl text-gray-600 transition-all duration-300 backdrop-blur-sm">
                  <Tag className="w-5 h-5" />
                </button>
                <button className="p-3 hover:bg-white/60 hover:scale-105 rounded-xl text-gray-600 transition-all duration-300 backdrop-blur-sm">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
              <div className="flex gap-3">
                <button className="p-3 hover:bg-white/60 hover:scale-105 rounded-xl text-gray-600 transition-all duration-300 backdrop-blur-sm">
                  <MoreVertical className="w-5 h-5" />
                </button>
                <button className="p-3 hover:bg-white/60 hover:scale-105 rounded-xl text-gray-600 transition-all duration-300 backdrop-blur-sm">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Email List */}
          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 border border-white/60 rounded-2xl overflow-hidden shadow-2xl">
            {emails.map((email, idx) => (
              <div
                key={idx}
                className="p-5 border-b border-white/40 hover:bg-white/60 hover:scale-[1.02] transition-all duration-300 cursor-pointer flex items-center gap-4 backdrop-blur-sm"
              >
                <input type="checkbox" className="w-5 h-5 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-500" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="font-bold text-black text-base">{email.sender}</span>
                    {email.count && <span className="text-sm text-gray-600 bg-white/40 px-2 py-1 rounded-lg">({email.count})</span>}
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    {email.label && (
                      <span className={`text-xs font-bold px-3 py-1 rounded-xl shadow-lg ${email.labelColor}`}>
                        {email.label}
                      </span>
                    )}
                    <span className="font-bold text-black text-base truncate">{email.subject}</span>
                  </div>
                  <p className="text-gray-600 text-sm truncate">{email.teaser}</p>
                </div>
                <button
                  onClick={() => toggleStar(email.id)}
                  className="flex-shrink-0 p-2 hover:bg-white/40 rounded-xl transition-all duration-300"
                >
                  <Star className={`w-5 h-5 ${email.starred ? 'fill-yellow-400 text-yellow-600' : 'text-gray-400'} hover:scale-110 transition-all duration-300`} />
                </button>
                <span className="text-sm text-gray-600 flex-shrink-0 bg-white/40 px-3 py-1 rounded-lg">{email.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
