import React from 'react';
import { Layers, Plus, Edit2, Trash2 } from 'lucide-react';

export default function SupportCategories() {
  const categories = [
    { id: 1, name: 'Account & Login', articles: '24', tickets: '156' },
    { id: 2, name: 'Billing & Payments', articles: '18', tickets: '89' },
    { id: 3, name: 'Technical Support', articles: '42', tickets: '234' },
    { id: 4, name: 'Product Features', articles: '35', tickets: '167' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-black">Categories - CREATED</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600">
            <Plus className="w-5 h-5" />
            New Category
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Layers className="w-6 h-6 text-black" />
                  <h3 className="font-semibold text-black text-lg">{category.name}</h3>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-white/50 rounded">
                    <Edit2 className="w-4 h-4 text-black" />
                  </button>
                  <button className="p-2 hover:bg-white/50 rounded">
                    <Trash2 className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
              <div className="flex gap-6">
                <div>
                  <p className="text-sm text-black">Articles</p>
                  <p className="text-xl font-bold text-black">{category.articles}</p>
                </div>
                <div>
                  <p className="text-sm text-black">Tickets</p>
                  <p className="text-xl font-bold text-black">{category.tickets}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
