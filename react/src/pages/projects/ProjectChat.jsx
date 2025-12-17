import React, { useState } from 'react';
import { Send, Paperclip, Smile, Plus } from 'lucide-react';

export default function ProjectChat() {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Sarah Johnson', avatar: 'ðŸ‘©â€ðŸ’¼', text: 'Good morning team! Starting sprint planning at 10 AM.', time: '09:30 AM', role: 'Lead' },
    { id: 2, user: 'John Smith', avatar: 'ðŸ‘¨â€ðŸ’»', text: 'Thanks Sarah! I have the API requirements ready.', time: '09:45 AM', role: 'Developer' },
    { id: 3, user: 'Lisa Chen', avatar: 'ðŸ‘©â€ðŸŽ¨', text: 'Mockups are finalized. Sharing the Figma link in the chat.', time: '10:00 AM', role: 'Designer' },
    { id: 4, user: 'Mike Johnson', avatar: 'ðŸ‘¨â€ðŸ’»', text: 'Database schema looks good. Ready to start development.', time: '10:15 AM', role: 'Developer' },
  ]);

  const channels = [
    { name: 'general', unread: 0 },
    { name: 'development', unread: 3 },
    { name: 'design', unread: 1 },
    { name: 'announcements', unread: 0 },
  ];

  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        user: 'You',
        avatar: 'ðŸ‘¤',
        text: newMessage,
        time: new Date().toLocaleTimeString(),
        role: 'Member'
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-black mb-8">Project Chat</h1>

      <div className="grid grid-cols-4 gap-6">
        {/* Channels Sidebar */}
        <div className="glass-card border border-gray-300 rounded-lg p-4 bg-white h-96">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-black">Channels</h2>
            <button className="p-1 hover:bg-gray-100 rounded">
              <Plus size={18} className="text-black" />
            </button>
          </div>
          <div className="space-y-2">
            {channels.map((channel, idx) => (
              <div
                key={idx}
                className={`px-3 py-2 rounded-lg cursor-pointer flex items-center justify-between ${
                  idx === 0
                    ? 'bg-blue-100 text-blue-800'
                    : 'hover:bg-gray-100 text-black'
                }`}
              >
                <span className="text-sm font-medium">#{channel.name}</span>
                {channel.unread > 0 && (
                  <span className="bg-red-500 text-slate-900 text-xs px-2 py-0.5 rounded-full">
                    {channel.unread}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="col-span-3 glass-card border border-gray-300 rounded-lg bg-white flex flex-col h-screen">
          {/* Header */}
          <div className="border-b border-gray-300 p-4">
            <h2 className="font-bold text-black">#general</h2>
            <p className="text-xs text-gray-600">Project discussion</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="flex gap-3">
                <div className="text-3xl flex-shrink-0">{msg.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-black text-sm">{msg.user}</span>
                    <span className="text-xs text-gray-600">{msg.time}</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">{msg.role}</span>
                  </div>
                  <div className="bg-gray-100 border border-gray-300 rounded-lg p-3">
                    <p className="text-black text-sm">{msg.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-300 p-4 bg-white">
            <div className="flex gap-2 mb-3">
              <button className="p-2 hover:bg-gray-100 rounded text-gray-600">
                <Paperclip size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded text-gray-600">
                <Smile size={20} />
              </button>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSend}
                className="bg-blue-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
