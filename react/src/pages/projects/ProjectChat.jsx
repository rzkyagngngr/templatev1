import React, { useState } from 'react';
import { 
  Send, Paperclip, Smile, Plus, Search, Hash, Users, Phone, Video, 
  MoreVertical, Image, FileText, Check, CheckCheck 
} from 'lucide-react';

export default function ProjectChat() {
  const [selectedChannel, setSelectedChannel] = useState('general');
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const channels = [
    { id: 'general', name: 'general', unread: 0, description: 'Team-wide announcements and work-based matters' },
    { id: 'development', name: 'development', unread: 3, description: 'Engineering discussions and code reviews' },
    { id: 'design', name: 'design', unread: 1, description: 'Design critiques and UI/UX feedback' },
    { id: 'marketing', name: 'marketing', unread: 0, description: 'Marketing campaigns and strategies' },
    { id: 'random', name: 'random', unread: 5, description: 'Non-work banter and water cooler conversation' },
    { id: 'announcements', name: 'announcements', unread: 0, description: 'Company-wide announcements' },
  ];

  const teamMembers = [
    { id: 1, name: 'Sarah Johnson', role: 'Product Lead', status: 'online', avatar: 'https://picsum.photos/seed/chatuser1/100' },
    { id: 2, name: 'John Smith', role: 'Senior Developer', status: 'online', avatar: 'https://picsum.photos/seed/chatuser2/100' },
    { id: 3, name: 'Lisa Chen', role: 'Lead Designer', status: 'away', avatar: 'https://picsum.photos/seed/chatuser3/100' },
    { id: 4, name: 'Mike Johnson', role: 'Backend Developer', status: 'online', avatar: 'https://picsum.photos/seed/chatuser4/100' },
    { id: 5, name: 'Emily Davis', role: 'QA Engineer', status: 'offline', avatar: 'https://picsum.photos/seed/chatuser5/100' },
    { id: 6, name: 'David Wilson', role: 'DevOps Engineer', status: 'online', avatar: 'https://picsum.photos/seed/chatuser6/100' },
  ];

  const messages = [
    {
      id: 1,
      userId: 1,
      user: 'Sarah Johnson',
      avatar: 'https://picsum.photos/seed/chatuser1/100',
      text: 'Good morning team! 🌅 Starting sprint planning at 10 AM. Please make sure you have reviewed the roadmap document.',
      time: '09:30 AM',
      role: 'Product Lead',
      reactions: [{ emoji: '👍', count: 5 }, { emoji: '✅', count: 3 }],
      isRead: true,
      replies: 2
    },
    {
      id: 2,
      userId: 2,
      user: 'John Smith',
      avatar: 'https://picsum.photos/seed/chatuser2/100',
      text: 'Thanks Sarah! I have the API requirements ready. The authentication flow is complete and tested.',
      time: '09:45 AM',
      role: 'Senior Developer',
      reactions: [{ emoji: '🚀', count: 2 }],
      isRead: true,
      replies: 0
    },
    {
      id: 3,
      userId: 3,
      user: 'Lisa Chen',
      avatar: 'https://picsum.photos/seed/chatuser3/100',
      text: 'Mockups are finalized! 🎨 Sharing the Figma link:',
      time: '10:00 AM',
      role: 'Lead Designer',
      attachment: {
        type: 'link',
        title: 'Project Mockups - Figma',
        description: 'Complete UI/UX designs for the new dashboard',
        icon: 'link'
      },
      reactions: [{ emoji: '🎉', count: 4 }, { emoji: '❤️', count: 2 }],
      isRead: true,
      replies: 3
    },
    {
      id: 4,
      userId: 4,
      user: 'Mike Johnson',
      avatar: 'https://picsum.photos/seed/chatuser4/100',
      text: 'Database schema looks good. Ready to start development. Here\'s the entity relationship diagram:',
      time: '10:15 AM',
      role: 'Backend Developer',
      attachment: {
        type: 'image',
        title: 'database-schema.png',
        url: 'https://picsum.photos/seed/dbschema/400/300',
        size: '245 KB'
      },
      reactions: [{ emoji: '👏', count: 3 }],
      isRead: true,
      replies: 1
    },
    {
      id: 5,
      userId: 2,
      user: 'John Smith',
      avatar: 'https://picsum.photos/seed/chatuser2/100',
      text: 'Perfect timing! I\'ll start integrating the API endpoints today. Should have the user authentication module ready by EOD.',
      time: '10:30 AM',
      role: 'Senior Developer',
      reactions: [],
      isRead: false,
      replies: 0
    },
    {
      id: 6,
      userId: 6,
      user: 'David Wilson',
      avatar: 'https://picsum.photos/seed/chatuser6/100',
      text: 'CI/CD pipeline is configured. All tests are passing ✅',
      time: '10:45 AM',
      role: 'DevOps Engineer',
      attachment: {
        type: 'file',
        title: 'pipeline-config.yml',
        size: '12 KB',
        icon: 'file'
      },
      reactions: [{ emoji: '🎯', count: 2 }],
      isRead: false,
      replies: 0
    }
  ];

  const handleSend = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the backend
      setNewMessage('');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6 min-h-screen">
      {/* Header */}
      <div className="backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 p-6 mb-6 shadow-xl shadow-indigo-100/50">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Team Chat
            </h1>
            <p className="text-gray-600">Collaborate with your team in real-time</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search messages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2.5 backdrop-blur-xl bg-white/70 rounded-2xl border border-white/60 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 h-[calc(100vh-250px)]">
        {/* Channels Sidebar */}
        <div className="col-span-3 backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 p-5 shadow-xl shadow-indigo-100/50 overflow-y-auto">
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-bold text-gray-800 text-lg flex items-center gap-2">
              <Hash size={20} className="text-indigo-600" />
              Channels
            </h2>
            <button className="p-2 hover:bg-white/80 rounded-xl transition-all duration-300 group">
              <Plus size={18} className="text-indigo-600 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
          
          <div className="space-y-2">
            {channels.map((channel) => (
              <div
                key={channel.id}
                onClick={() => setSelectedChannel(channel.id)}
                className={`px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 group ${
                  selectedChannel === channel.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-200/50'
                    : 'hover:bg-white/80 text-gray-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold flex items-center gap-2">
                    <Hash size={16} className={selectedChannel === channel.id ? 'text-white' : 'text-gray-400'} />
                    {channel.name}
                  </span>
                  {channel.unread > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-medium shadow-lg shadow-red-200/50 animate-pulse">
                      {channel.unread}
                    </span>
                  )}
                </div>
                <p className={`text-xs truncate ${selectedChannel === channel.id ? 'text-white/80' : 'text-gray-500'}`}>
                  {channel.description}
                </p>
              </div>
            ))}
          </div>

          {/* Team Members Section */}
          <div className="mt-8">
            <h2 className="font-bold text-gray-800 text-lg flex items-center gap-2 mb-4">
              <Users size={20} className="text-indigo-600" />
              Team Members
            </h2>
            <div className="space-y-2">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-white/80 cursor-pointer transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 ${getStatusColor(member.status)} rounded-full border-2 border-white`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-gray-800 truncate">{member.name}</div>
                    <div className="text-xs text-gray-500 truncate">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="col-span-9 backdrop-blur-xl bg-white/50 rounded-3xl border border-white/60 shadow-xl shadow-indigo-100/50 flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="border-b border-white/60 p-5 bg-white/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg shadow-indigo-200/50">
                  <Hash size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-gray-800 text-lg">#{selectedChannel}</h2>
                  <p className="text-sm text-gray-600">
                    {channels.find(c => c.id === selectedChannel)?.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2.5 hover:bg-white/80 rounded-xl transition-all duration-300 group">
                  <Phone size={20} className="text-gray-600 group-hover:text-indigo-600" />
                </button>
                <button className="p-2.5 hover:bg-white/80 rounded-xl transition-all duration-300 group">
                  <Video size={20} className="text-gray-600 group-hover:text-indigo-600" />
                </button>
                <button className="p-2.5 hover:bg-white/80 rounded-xl transition-all duration-300 group">
                  <Users size={20} className="text-gray-600 group-hover:text-indigo-600" />
                </button>
                <button className="p-2.5 hover:bg-white/80 rounded-xl transition-all duration-300 group">
                  <MoreVertical size={20} className="text-gray-600 group-hover:text-indigo-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, index) => {
              const showAvatar = index === 0 || messages[index - 1].userId !== msg.userId;
              const isGrouped = index > 0 && messages[index - 1].userId === msg.userId;

              return (
                <div
                  key={msg.id}
                  className={`flex gap-4 group ${isGrouped ? 'mt-2' : ''}`}
                >
                  <div className="w-10 flex-shrink-0">
                    {showAvatar && (
                      <img
                        src={msg.avatar}
                        alt={msg.user}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                      />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    {showAvatar && (
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-bold text-gray-800">{msg.user}</span>
                        <span className="px-2.5 py-0.5 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs rounded-full font-medium border border-indigo-200">
                          {msg.role}
                        </span>
                        <span className="text-xs text-gray-500">{msg.time}</span>
                      </div>
                    )}
                    
                    <div className="backdrop-blur-xl bg-white/70 rounded-2xl p-4 border border-white/60 shadow-md hover:shadow-lg transition-all duration-300">
                      <p className="text-gray-800 leading-relaxed">{msg.text}</p>
                      
                      {/* Attachment Preview */}
                      {msg.attachment && (
                        <div className="mt-3">
                          {msg.attachment.type === 'image' && (
                            <div className="rounded-xl overflow-hidden border border-white/60 shadow-md group-hover:shadow-xl transition-all duration-300">
                              <img
                                src={msg.attachment.url}
                                alt={msg.attachment.title}
                                className="w-full max-w-md h-auto"
                              />
                              <div className="bg-white/80 backdrop-blur-xl p-3 border-t border-white/60">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <Image size={16} className="text-indigo-600" />
                                    <span className="text-sm font-medium text-gray-800">{msg.attachment.title}</span>
                                  </div>
                                  <span className="text-xs text-gray-500">{msg.attachment.size}</span>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {msg.attachment.type === 'file' && (
                            <div className="backdrop-blur-xl bg-gradient-to-r from-indigo-50/80 to-purple-50/80 rounded-xl p-4 border border-indigo-200 flex items-center gap-3 hover:shadow-lg transition-all duration-300 cursor-pointer">
                              <div className="p-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl">
                                <FileText size={20} className="text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-gray-800 text-sm">{msg.attachment.title}</div>
                                <div className="text-xs text-gray-500">{msg.attachment.size}</div>
                              </div>
                            </div>
                          )}
                          
                          {msg.attachment.type === 'link' && (
                            <div className="backdrop-blur-xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 rounded-xl p-4 border border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer">
                              <div className="font-medium text-indigo-700 mb-1">{msg.attachment.title}</div>
                              <div className="text-sm text-gray-600">{msg.attachment.description}</div>
                            </div>
                          )}
                        </div>
                      )}
                      
                      {/* Reactions */}
                      {msg.reactions && msg.reactions.length > 0 && (
                        <div className="flex items-center gap-2 mt-3 flex-wrap">
                          {msg.reactions.map((reaction, idx) => (
                            <button
                              key={idx}
                              className="flex items-center gap-1.5 px-2.5 py-1 backdrop-blur-xl bg-white/80 rounded-full border border-white/60 hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300"
                            >
                              <span className="text-sm">{reaction.emoji}</span>
                              <span className="text-xs font-medium text-gray-700">{reaction.count}</span>
                            </button>
                          ))}
                          <button className="p-1.5 backdrop-blur-xl bg-white/80 rounded-full border border-white/60 hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300 opacity-0 group-hover:opacity-100">
                            <Smile size={14} className="text-gray-500" />
                          </button>
                        </div>
                      )}
                      
                      {/* Thread Replies */}
                      {msg.replies > 0 && (
                        <button className="mt-3 text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-2 hover:underline transition-all duration-300">
                          <span>{msg.replies} {msg.replies === 1 ? 'reply' : 'replies'}</span>
                          <span className="text-gray-400">→</span>
                        </button>
                      )}
                    </div>
                    
                    {/* Read Status */}
                    <div className="flex items-center gap-2 mt-1 ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {msg.isRead ? (
                        <CheckCheck size={14} className="text-indigo-600" />
                      ) : (
                        <Check size={14} className="text-gray-400" />
                      )}
                      <span className="text-xs text-gray-500">{msg.isRead ? 'Seen' : 'Delivered'}</span>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-4 items-center animate-fade-in">
                <img
                  src={teamMembers[4].avatar}
                  alt={teamMembers[4].name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div className="backdrop-blur-xl bg-white/70 rounded-2xl px-5 py-3 border border-white/60 shadow-md">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
                <span className="text-sm text-gray-600 italic">{teamMembers[4].name} is typing...</span>
              </div>
            )}
          </div>

          {/* Message Input */}
          <div className="border-t border-white/60 p-5 bg-white/30">
            <div className="backdrop-blur-xl bg-white/70 rounded-2xl border border-white/60 p-4 shadow-lg">
              {/* Formatting Toolbar */}
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200">
                <button className="p-2 hover:bg-indigo-50 rounded-xl transition-all duration-300 group">
                  <Paperclip size={18} className="text-gray-600 group-hover:text-indigo-600" />
                </button>
                <button className="p-2 hover:bg-indigo-50 rounded-xl transition-all duration-300 group">
                  <Image size={18} className="text-gray-600 group-hover:text-indigo-600" />
                </button>
                <button className="p-2 hover:bg-indigo-50 rounded-xl transition-all duration-300 group">
                  <FileText size={18} className="text-gray-600 group-hover:text-indigo-600" />
                </button>
                <button className="p-2 hover:bg-indigo-50 rounded-xl transition-all duration-300 group">
                  <Smile size={18} className="text-gray-600 group-hover:text-indigo-600" />
                </button>
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-xs text-gray-500">Press Enter to send</span>
                </div>
              </div>
              
              {/* Input Field */}
              <div className="flex items-end gap-3">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder={`Message #${selectedChannel}`}
                  rows={1}
                  className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none resize-none max-h-32"
                />
                <button
                  onClick={handleSend}
                  disabled={!newMessage.trim()}
                  className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 font-medium flex items-center gap-2 shadow-md shadow-indigo-200/50"
                >
                  <Send size={18} />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
