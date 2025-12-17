import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Edit2, Trash2, Plus } from 'lucide-react';

export default function Contacts() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John Anderson',
      email: 'john.anderson@company.com',
      phone: '+1 (555) 123-4567',
      company: 'Tech Solutions Inc',
      location: 'New York, USA',
      category: 'Business',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@company.com',
      phone: '+1 (555) 234-5678',
      company: 'Digital Ventures',
      location: 'San Francisco, USA',
      category: 'Business',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Michael Chen',
      email: 'michael.chen@company.com',
      phone: '+1 (555) 345-6789',
      company: 'Innovation Labs',
      location: 'Boston, USA',
      category: 'Lead',
      status: 'Inactive'
    },
    {
      id: 4,
      name: 'Emma Wilson',
      email: 'emma.wilson@company.com',
      phone: '+1 (555) 456-7890',
      company: 'Global Enterprises',
      location: 'Chicago, USA',
      category: 'Client',
      status: 'Active'
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const getStatusColor = (status) => {
    return status === 'Active'
      ? 'bg-emerald-100 text-emerald-700'
      : 'bg-gray-100 text-gray-700';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Business': 'bg-blue-100 text-blue-700',
      'Lead': 'bg-orange-100 text-orange-700',
      'Client': 'bg-green-100 text-green-700',
      'Partner': 'bg-purple-100 text-purple-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div>
        <h4 className="text-2xl font-bold text-black">Contacts</h4>
        <div className="text-sm text-gray-600 mt-2">Glacia / Pages / Contacts</div>
      </div>

      {/* Search & Add Button */}
      <div className="glass-card border border-gray-300 p-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
            />
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-slate-900 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            <Plus size={18} /> Add Contact
          </button>
        </div>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContacts.map((contact) => (
          <div key={contact.id} className="glass-card border border-gray-300 p-6 hover:bg-gray-50 transition">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-slate-900 font-bold">
                  {contact.name.charAt(0)}
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-black">{contact.name}</h5>
                  <p className="text-sm text-gray-600">{contact.company}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-200 rounded-lg transition text-gray-600">
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="p-2 hover:bg-red-100 rounded-lg transition text-red-600"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-black">
                <Mail size={16} className="text-blue-600" />
                <span className="text-sm">{contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-black">
                <Phone size={16} className="text-blue-600" />
                <span className="text-sm">{contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-black">
                <MapPin size={16} className="text-blue-600" />
                <span className="text-sm">{contact.location}</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4 pt-4 border-t border-gray-300">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(contact.category)}`}>
                {contact.category}
              </span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(contact.status)}`}>
                {contact.status}
              </span>
            </div>

            <button className="w-full mt-4 px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50 transition font-medium flex items-center justify-center gap-2">
              <MessageCircle size={16} /> Send Message
            </button>
          </div>
        ))}
      </div>

      {filteredContacts.length === 0 && (
        <div className="glass-card border border-gray-300 p-12 text-center">
          <p className="text-black font-medium mb-2">No contacts found</p>
          <p className="text-gray-600">Try adjusting your search criteria</p>
        </div>
      )}

      {/* Contacts Table View */}
      <div className="glass-card border border-gray-300 p-6">
        <h5 className="text-lg font-semibold text-black mb-4">All Contacts</h5>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-3 px-4 text-xs font-bold text-black uppercase">Name</th>
                <th className="text-left py-3 px-4 text-xs font-bold text-black uppercase">Email</th>
                <th className="text-left py-3 px-4 text-xs font-bold text-black uppercase">Phone</th>
                <th className="text-left py-3 px-4 text-xs font-bold text-black uppercase">Category</th>
                <th className="text-left py-3 px-4 text-xs font-bold text-black uppercase">Status</th>
                <th className="text-center py-3 px-4 text-xs font-bold text-black uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => (
                <tr key={contact.id} className="border-b border-gray-300 hover:bg-gray-50 transition">
                  <td className="py-3 px-4 text-black font-medium">{contact.name}</td>
                  <td className="py-3 px-4 text-black text-sm">{contact.email}</td>
                  <td className="py-3 px-4 text-black text-sm">{contact.phone}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(contact.category)}`}>
                      {contact.category}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(contact.status)}`}>
                      {contact.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex gap-2 justify-center">
                    <button className="p-2 hover:bg-blue-100 rounded-lg transition text-blue-600">
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(contact.id)}
                      className="p-2 hover:bg-red-100 rounded-lg transition text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
