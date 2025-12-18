import React, { useState } from 'react';
import { Trash2, Edit, Check, Circle, CheckCircle, User, Mail, Phone } from 'lucide-react';

export default function UILists() {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400/50 to-blue-300/50 flex items-center justify-center">
            <span className="text-sm font-bold text-blue-600">UI</span>
          </div>
          <span className="text-sm font-medium text-gray-600">UI Elements</span>
          <span className="text-sm text-gray-400">/</span>
          <span className="text-sm text-blue-600 font-medium">Lists</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          List Components
        </h1>
        <p className="text-gray-600">Beautiful list variations and styles</p>
      </div>

      {/* Ordered Lists */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Ordered Lists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Basic Ordered List</h3>
            <ol className="space-y-3 list-decimal list-inside">
              <li className="text-gray-700">First item in the list</li>
              <li className="text-gray-700">Second item in the list</li>
              <li className="text-gray-700">Third item in the list</li>
              <li className="text-gray-700">Fourth item in the list</li>
              <li className="text-gray-700">Fifth item in the list</li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Custom Styled List</h3>
            <div className="space-y-2">
              {['Item One', 'Item Two', 'Item Three', 'Item Four', 'Item Five'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 backdrop-blur-xl bg-gradient-to-br from-blue-400/10 to-blue-300/10 rounded-xl border border-white/40">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400/50 to-blue-300/50 text-white font-semibold text-sm">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Unordered Lists */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Unordered Lists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Bullet List</h3>
            <ul className="space-y-3 list-disc list-inside">
              <li className="text-gray-700">Feature or benefit point</li>
              <li className="text-gray-700">Another important feature</li>
              <li className="text-gray-700">Yet another benefit</li>
              <li className="text-gray-700">Additional functionality</li>
              <li className="text-gray-700">Final important point</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Check Mark List</h3>
            <div className="space-y-2">
              {['Requirement one', 'Requirement two', 'Requirement three', 'Requirement four', 'Requirement five'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 backdrop-blur-xl bg-gradient-to-br from-green-400/10 to-green-300/10 rounded-xl border border-white/40">
                  <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Description Lists */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Description Lists</h2>
        <div className="space-y-6">
          {[
            { term: 'HTML', desc: 'HyperText Markup Language - the standard markup language for web pages' },
            { term: 'CSS', desc: 'Cascading Style Sheets - used for styling and layout of web pages' },
            { term: 'JavaScript', desc: 'A programming language commonly used to make interactive web pages' },
            { term: 'React', desc: 'A JavaScript library for building user interfaces with reusable components' },
          ].map((item, idx) => (
            <div key={idx} className="p-4 backdrop-blur-xl bg-gradient-to-br from-purple-400/10 to-purple-300/10 rounded-xl border border-white/40">
              <dt className="font-bold text-gray-800 mb-2">{item.term}</dt>
              <dd className="text-gray-700 ml-4 border-l-4 border-purple-400 pl-4">{item.desc}</dd>
            </div>
          ))}
        </div>
      </div>

      {/* Lists with Icons */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Lists with Icons</h2>
        <div className="space-y-3">
          {[
            { icon: User, label: 'User Management', color: 'text-blue-600' },
            { icon: Mail, label: 'Email Notifications', color: 'text-green-600' },
            { icon: Phone, label: 'Phone Support', color: 'text-purple-600' },
            { icon: CheckCircle, label: 'Task Completion', color: 'text-yellow-600' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-4 p-4 backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 rounded-xl border border-white/40 hover:shadow-lg transition-all">
                <Icon className={`${item.color} flex-shrink-0`} size={24} />
                <span className="text-gray-700">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lists with Avatars */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Lists with Avatars</h2>
        <div className="space-y-3">
          {[
            { name: 'Alice Johnson', role: 'Product Manager' },
            { name: 'Bob Smith', role: 'Developer' },
            { name: 'Carol White', role: 'Designer' },
            { name: 'David Brown', role: 'QA Engineer' },
          ].map((person, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 rounded-xl border border-white/40">
              <img
                src={`https://picsum.photos/48/48?random=${idx + 50}`}
                alt={person.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{person.name}</p>
                <p className="text-sm text-gray-600">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lists with Checkboxes */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Lists with Checkboxes</h2>
        <div className="space-y-3">
          {['Complete project documentation', 'Review pull requests', 'Update dependencies', 'Write unit tests', 'Deploy to production'].map((task, idx) => (
            <label key={idx} className="flex items-center gap-3 p-4 backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 rounded-xl border border-white/40 cursor-pointer hover:bg-white/20 transition-all">
              <input
                type="checkbox"
                checked={checkedItems[idx] || false}
                onChange={() => toggleCheck(idx)}
                className="w-5 h-5 rounded border-2 border-gray-300 accent-blue-600"
              />
              <span className={`text-gray-700 ${checkedItems[idx] ? 'line-through text-gray-400' : ''}`}>
                {task}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Nested Lists */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Nested Lists</h2>
        <div className="p-6 backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 rounded-xl border border-white/40">
          <ul className="space-y-2">
            <li className="text-gray-700 font-semibold">Frontend Development</li>
            <ul className="ml-6 space-y-2 mt-2 border-l-2 border-blue-400 pl-4">
              <li className="text-gray-700">React</li>
              <ul className="ml-6 space-y-1 mt-1">
                <li className="text-gray-600">Components</li>
                <li className="text-gray-600">Hooks</li>
                <li className="text-gray-600">State Management</li>
              </ul>
              <li className="text-gray-700">Vue.js</li>
              <li className="text-gray-700">Angular</li>
            </ul>
            <li className="text-gray-700 font-semibold mt-4">Backend Development</li>
            <ul className="ml-6 space-y-2 mt-2 border-l-2 border-green-400 pl-4">
              <li className="text-gray-700">Node.js</li>
              <li className="text-gray-700">Python</li>
              <li className="text-gray-700">Java</li>
            </ul>
          </ul>
        </div>
      </div>

      {/* Lists with Action Buttons */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Lists with Action Buttons</h2>
        <div className="space-y-3">
          {[
            { id: 1, title: 'Implement new feature' },
            { id: 2, title: 'Fix critical bugs' },
            { id: 3, title: 'Update documentation' },
            { id: 4, title: 'Performance optimization' },
          ].map(item => (
            <div key={item.id} className="flex items-center justify-between p-4 backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 rounded-xl border border-white/40 hover:shadow-lg transition-all">
              <span className="text-gray-700">{item.title}</span>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-blue-400/20 rounded-lg transition-all">
                  <Edit size={18} className="text-blue-600" />
                </button>
                <button className="p-2 hover:bg-green-400/20 rounded-lg transition-all">
                  <Check size={18} className="text-green-600" />
                </button>
                <button className="p-2 hover:bg-red-400/20 rounded-lg transition-all">
                  <Trash2 size={18} className="text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
