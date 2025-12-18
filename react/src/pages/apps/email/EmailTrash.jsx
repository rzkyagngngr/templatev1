import React, { useState } from 'react';
import { Mail, Star, FileText, Send, Trash2, Tag, MoreVertical, Search, Archive, Reply, Forward, RotateCcw, X } from 'lucide-react';

export default function EmailTrash() {
  const [emails, setEmails] = useState([
    {
      id: 1,
      sender: 'Spam Sender',
      subject: 'Win a Free iPhone!',
      teaser: 'Congratulations! You have been selected to win a brand new iPhone. Click here to claim your prize.',
      date: 'Dec. 10',
      deletedDate: 'Dec. 15',
      category: 'spam',
      recoverable: true
    },
    {
      id: 2,
      sender: 'Old Newsletter',
      subject: 'Weekly Product Updates',
      teaser: 'Here are the latest updates from our product team. Check out the new features we\'ve released.',
      date: 'Nov. 28',
      deletedDate: 'Dec. 14',
      category: 'newsletter',
      recoverable: true
    },
    {
      id: 3,
      sender: 'John Doe',
      subject: 'Meeting Cancelled',
      teaser: 'Hi, I need to cancel our meeting scheduled for tomorrow. Let\'s reschedule for next week.',
      date: 'Dec. 8',
      deletedDate: 'Dec. 13',
      category: 'work',
      recoverable: true
    },
    {
      id: 4,
      sender: 'Marketing Team',
      subject: 'Holiday Sale Announcement',
      teaser: 'Don\'t miss out on our biggest sale of the year! 50% off on all products.',
      date: 'Dec. 1',
      deletedDate: 'Dec. 12',
      category: 'marketing',
      recoverable: false
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

  const restoreEmail = (id) => {
    setEmails(emails.filter(email => email.id !== id));
    // In a real app, this would restore the email to inbox
  };

  const permanentlyDelete = (id) => {
    setEmails(emails.filter(email => email.id !== id));
    // In a real app, this would permanently delete the email
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'spam':
        return 'bg-red-100 text-red-800';
      case 'newsletter':
        return 'bg-blue-100 text-blue-800';
      case 'work':
        return 'bg-green-100 text-green-800';
      case 'marketing':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full p-6 space-y-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Trash</h4>
          <div className="text-sm text-slate-600 mt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-pink-400"></span>
            Glacia / Apps / Email / Trash
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search deleted emails..."
              className="pl-10 pr-4 py-2 w-64 rounded-2xl border border-white/60 bg-white/70 backdrop-blur-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400/50 focus:border-red-400/60 transition-all duration-300"
            />
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-3">
          {/* Compose Button */}
          <button className="w-full mb-6 px-6 py-3 bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-red-400/25 hover:shadow-red-400/40 transition-all duration-300 hover:scale-105">
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
              <a href="/apps/email/sent" className="flex items-center gap-3 p-3 text-slate-700 hover:bg-white/60 rounded-2xl text-sm transition-all duration-300 hover:scale-105">
                <Send className="w-4 h-4" />
                Sent
              </a>
              <a href="/apps/email/trash" className="flex items-center gap-3 p-3 bg-gradient-to-r from-red-400/20 to-pink-400/20 text-red-700 rounded-2xl text-sm font-semibold shadow-lg border border-red-400/30">
                <Trash2 className="w-4 h-4 fill-red-500 text-red-600" />
                Trash
                <span className="ml-auto bg-red-500 text-white px-2 py-1 rounded-full text-xs">{emails.length}</span>
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
                  { name: 'Spam', color: 'bg-red-100 text-red-800 border-red-200' },
                  { name: 'Marketing', color: 'bg-purple-100 text-purple-800 border-purple-200' }
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
                <button className="p-2 hover:bg-red-400/20 rounded-xl text-red-600 transition-all duration-300 hover:scale-110">
                  <X className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-green-400/20 rounded-xl text-green-600 transition-all duration-300 hover:scale-110">
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
              <div className="flex gap-2">
                <span className="text-xs text-slate-500 self-center">
                  {selectedEmails.length > 0 ? `${selectedEmails.length} selected` : 'Select emails to restore or delete'}
                </span>
              </div>
            </div>
          </div>

          {/* Email List */}
          <div className="glass-card bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-3xl overflow-hidden">
            {emails.map((email, idx) => (
              <div
                key={idx}
                className="p-4 border-b border-white/30 hover:bg-gradient-to-r hover:from-red-400/10 hover:to-pink-400/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedEmails.includes(email.id)}
                    onChange={() => toggleSelect(email.id)}
                    className="w-4 h-4 rounded border-slate-300"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-semibold text-sm text-slate-900">
                        {email.sender}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getCategoryColor(email.category)}`}>
                          {email.category}
                        </span>
                        {email.recoverable && (
                          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                            Recoverable
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm text-slate-900 truncate">
                        {email.subject}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm truncate">{email.teaser}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                      <span>Sent: {email.date}</span>
                      <span>Deleted: {email.deletedDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {email.recoverable ? (
                      <button
                        onClick={() => restoreEmail(email.id)}
                        className="p-2 hover:bg-green-400/20 rounded-xl text-green-600 transition-all duration-300 hover:scale-110"
                        title="Restore to Inbox"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={() => permanentlyDelete(email.id)}
                        className="p-2 hover:bg-red-400/20 rounded-xl text-red-600 transition-all duration-300 hover:scale-110"
                        title="Permanently Delete"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="glass-card bg-gradient-to-br from-red-400/20 to-pink-400/20 backdrop-blur-2xl border border-red-400/30 shadow-lg rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-red-700">{emails.length}</div>
              <div className="text-sm text-red-600">Deleted Emails</div>
            </div>
            <div className="glass-card bg-gradient-to-br from-green-400/20 to-emerald-400/20 backdrop-blur-2xl border border-green-400/30 shadow-lg rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-green-700">{emails.filter(e => e.recoverable).length}</div>
              <div className="text-sm text-green-600">Recoverable</div>
            </div>
            <div className="glass-card bg-gradient-to-br from-gray-400/20 to-slate-400/20 backdrop-blur-2xl border border-gray-400/30 shadow-lg rounded-2xl p-4 text-center">
              <div className="text-2xl font-bold text-gray-700">{emails.filter(e => !e.recoverable).length}</div>
              <div className="text-sm text-gray-600">Permanently Deleted</div>
            </div>
          </div>

          {/* Warning */}
          <div className="glass-card bg-gradient-to-br from-yellow-400/20 to-orange-400/20 backdrop-blur-2xl border border-yellow-400/30 shadow-lg rounded-2xl p-4 mt-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                <span className="text-yellow-600 text-sm">⚠️</span>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800">Auto-deletion Notice</h4>
                <p className="text-sm text-yellow-700">
                  Emails in trash will be permanently deleted after 30 days. Important emails should be restored to your inbox.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}