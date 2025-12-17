import React, { useState } from 'react';

export default function HospitalChat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Dr. Smith', text: 'Hello, how can I help?', timestamp: '10:30 AM' },
    { id: 2, sender: 'You', text: 'I need to schedule an appointment', timestamp: '10:31 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [department, setDepartment] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: 'You',
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleClear = () => {
    setMessages([]);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/30 backdrop-blur-md border border-gray-300 rounded-2xl p-6 shadow-lg flex flex-col h-[600px]">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-black mb-4">Hospital Chat Support</h1>
            <div>
              <label className="block text-black font-semibold mb-2">Select Department</label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full px-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose department</option>
                <option value="general">General Inquiry</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="emergency">Emergency</option>
                <option value="appointments">Appointments</option>
              </select>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto mb-4 bg-white/40 rounded-lg p-4 space-y-3">
            {messages.length > 0 ? (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === 'You'
                        ? 'bg-blue-400 text-black'
                        : 'bg-gray-300 text-black'
                    }`}
                  >
                    <p className="font-semibold text-sm">{msg.sender}</p>
                    <p className="text-black">{msg.text}</p>
                    <p className="text-xs text-black/70 mt-1">{msg.timestamp}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-black text-center">No messages yet. Start a conversation!</p>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 px-4 py-2 bg-white/50 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your message..."
              />
              <button
                onClick={handleSendMessage}
                className="px-6 py-2 bg-blue-500 text-black font-semibold rounded-lg hover:bg-blue-600 transition"
              >
                Send
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleClear}
                className="flex-1 px-4 py-2 bg-gray-400 text-black font-semibold rounded-lg hover:bg-gray-500 transition"
              >
                Clear Chat
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-500 text-black font-semibold rounded-lg hover:bg-blue-600 transition">
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
