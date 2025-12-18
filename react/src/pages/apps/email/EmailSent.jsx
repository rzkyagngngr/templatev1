import React, { useState } from 'react';
import { Mail, Star, FileText, Send, Trash2, Tag, MoreVertical, Search, Archive, Reply, Forward, CheckCircle } from 'lucide-react';

export default function EmailSent() {
  const [emails, setEmails] = useState([
    {
      id: 1,
      to: 'Sarah Johnson',
      subject: 'Project Update Meeting',
      teaser: 'Hi team, I wanted to schedule a quick meeting to discuss the latest project updates and timeline adjustments.',
      date: 'Dec. 15',
      status: 'delivered',
      read: true
    },
    {
      id: 2,
      to: 'Mike Chen',
      subject: 'Design Review Feedback',
      teaser: 'Thanks for sharing the new designs. Here are my thoughts on the user interface improvements.',
      date: 'Dec. 14',
      status: 'delivered',
      read: false
    },
    {
      id: 3,
      to: 'Alex Rodriguez',
      subject: 'Client Presentation Prep',
      teaser: 'The client presentation is scheduled for next week. Let me know if you need any additional materials.',
      date: 'Dec. 13',
      status: 'delivered',
      read: true
    },
    {
      id: 4,
      to: 'Emma Wilson',
      subject: 'Budget Approval Request',
      teaser: 'Please review and approve the budget for the Q1 marketing campaign. Details attached.',
      date: 'Dec. 12',
      status: 'sent',
      read: false
    },
    {
      id: 5,
      to: 'Team All',
      subject: 'Weekly Standup Notes',
      teaser: 'Here are the key points from today\'s standup meeting. Please review and let me know if I missed anything.',
      date: 'Dec. 11',
      status: 'delivered',
      read: true
    }
  ]);

  const [selectedEmails, setSelectedEmails] = useState([]);

  const toggleSelect = (id) => {
    setSelectedEmails(prev =>
      prev.includes(id)
        ? prev.filter(emailId => emailId !== id)
        : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selectedEmails.length === emails.length) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(emails.map(email => email.id));
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'sent':
        return <Send className="w-4 h-4 text-blue-500" />;
      default:
        return <Mail className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <div className="w-full p-6 space-y-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Sent Emails</h4>
          <div className="text-sm text-slate-600 mt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></span>
            Glacia / Apps / Email / Sent
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search sent emails..."
              className="pl-10 pr-4 py-2 w-64 rounded-2xl border border-white/60 bg-white/70 backdrop-blur-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/60 transition-all duration-300"
            />
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-3">
          {/* Compose Button */}
          <button className="w-full mb-6 px-6 py-3 bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-400/25 hover:shadow-blue-400/40 transition-all duration-300 hover:scale-105">
            <Mail className="w-5 h-5" />
            Compose
          </button>

          {/* Navigation */}
          <div className="glass-card bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-3xl p-6 space-y-4">
            {/* Mail Folders */}
            <div className="space-y-2">
              <a href="/apps/email/inbox" className="flex items-center gap-3 p-3 text-slate-700 hover:bg-white/60 rounded-2xl text-sm transition-all duration-300 hover:scale-105">
                <Mail className="w-4 h-4" />
                Inbox
                <span className="ml-auto bg-slate-200 text-slate-700 px-2 py-1 rounded-full text-xs">12</span>
              </a>
              <a href="/apps/email/starred" className="flex items-center gap-3 p-3 text-slate-700 hover:bg-white/60 rounded-2xl text-sm transition-all duration-300 hover:scale-105">
                <Star className="w-4 h-4" />
                Starred
              </a>
              <a href="/apps/email/sent" className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 text-blue-700 rounded-2xl text-sm font-semibold shadow-lg border border-blue-400/30">
                <Send className="w-4 h-4 fill-blue-500 text-blue-600" />
                Sent
                <span className="ml-auto bg-blue-500 text-white px-2 py-1 rounded-full text-xs">{emails.length}</span>
              </a>
              <a href="/apps/email/trash" className="flex items-center gap-3 p-3 text-slate-700 hover:bg-white/60 rounded-2xl text-sm transition-all duration-300 hover:scale-105">
                <Trash2 className="w-4 h-4" />
                Trash
              </a>
            </div>

            {/* Labels */}
            <div className="pt-4 border-t border-white/30">
              <p className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Labels
              </p>
              <div className="space-y-2">
                {[
                  { name: 'Work', color: 'bg-blue-100 text-blue-800 border-blue-200' },
                  { name: 'Personal', color: 'bg-green-100 text-green-800 border-green-200' },
                  { name: 'Important', color: 'bg-red-100 text-red-800 border-red-200' },
                  { name: 'Design', color: 'bg-purple-100 text-purple-800 border-purple-200' }
                ].map((label, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 hover:bg-white/60 rounded-xl text-sm transition-all duration-300 cursor-pointer hover:scale-105">
                    <div className={`w-3 h-3 rounded-full border-2 ${label.color}`}></div>
                    {label.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9">
          {/* Toolbar */}
          <div className="glass-card bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-3xl p-4 mb-6">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex gap-2">
                <button
                  onClick={selectAll}
                  className="p-2 hover:bg-white/60 rounded-xl text-slate-600 transition-all duration-300 hover:scale-110"
                >
                  <input
                    type="checkbox"
                    checked={selectedEmails.length === emails.length && emails.length > 0}
                    className="w-4 h-4 rounded border-slate-300"
                    readOnly
                  />
                </button>
                <button className="p-2 hover:bg-white/60 rounded-xl text-slate-600 transition-all duration-300 hover:scale-110">
                  <Archive className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-white/60 rounded-xl text-slate-600 transition-all duration-300 hover:scale-110">
                  <Trash2 className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-white/60 rounded-xl text-slate-600 transition-all duration-300 hover:scale-110">
                  <Tag className="w-4 h-4" />
                </button>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-white/60 rounded-xl text-slate-600 transition-all duration-300 hover:scale-110">
                  <Reply className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-white/60 rounded-xl text-slate-600 transition-all duration-300 hover:scale-110">
                  <Forward className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-white/60 rounded-xl text-slate-600 transition-all duration-300 hover:scale-110">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Email List */}
          <div className="glass-card bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-3xl overflow-hidden">
            {emails.map((email, idx) => (
              <div
                key={idx}
                className={`p-4 border-b border-white/30 hover:bg-gradient-to-r hover:from-blue-400/10 hover:to-cyan-400/10 transition-all duration-300 cursor-pointer ${
                  !email.read ? 'bg-gradient-to-r from-blue-400/5 to-cyan-400/5' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedEmails.includes(email.id)}
                    onChange={() => toggleSelect(email.id)}
                    className="w-4 h-4 rounded border-slate-300"
                  />
                  <div className="flex items-center gap-2 mr-2">
                    {getStatusIcon(email.status)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-semibold text-sm text-slate-900">
                        To: {email.to}
                      </span>
                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                        {email.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm text-slate-900 truncate">
                        {email.subject}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm truncate">{email.teaser}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs text-slate-500">{email.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="glass-card bg-gradient-to-br from-blue-400/20 to-cyan-400/20 backdrop-blur-2xl border border-blue-400/30 shadow-lg rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-700">{emails.length}</div>
              <div className="text-sm text-blue-600">Sent Emails</div>
            </div>
            <div className="glass-card bg-gradient-to-br from-green-400/20 to-emerald-400/20 backdrop-blur-2xl border border-green-400/30 shadow-lg rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-green-700">{emails.filter(e => e.status === 'delivered').length}</div>
              <div className="text-sm text-green-600">Delivered</div>
            </div>
            <div className="glass-card bg-gradient-to-br from-slate-400/20 to-gray-400/20 backdrop-blur-2xl border border-slate-400/30 shadow-lg rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-slate-700">{emails.filter(e => e.read).length}</div>
              <div className="text-sm text-slate-600">Read by Recipients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}