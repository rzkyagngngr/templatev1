import React, { useState } from 'react';
import { Search, Filter, FileText } from 'lucide-react';

export default function KBSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const results = [
    { id: 1, title: 'Getting Started with API', category: 'API Documentation', relevance: '95%' },
    { id: 2, title: 'API Authentication Methods', category: 'API Documentation', relevance: '92%' },
    { id: 3, title: 'Troubleshooting API Errors', category: 'Troubleshooting', relevance: '88%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Search - CREATED</h1>

        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-black" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-black"
              />
            </div>
            <button className="px-6 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600 flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {results.map((result) => (
            <div key={result.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <FileText className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-black text-lg">{result.title}</h3>
                    <p className="text-sm text-black">{result.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-600">Relevance: {result.relevance}</p>
                  <button className="text-blue-500 hover:text-blue-700 text-sm mt-2">Read Article</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
