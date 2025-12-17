import React from 'react';
import { BookOpen, FileText, Search, ExternalLink } from 'lucide-react';

export default function SupportKnowledgeBase() {
  const articles = [
    { id: 1, title: 'Getting Started Guide', views: '1,234', category: 'Basics' },
    { id: 2, title: 'Troubleshooting Common Issues', views: '856', category: 'Support' },
    { id: 3, title: 'API Documentation', views: '2,145', category: 'Development' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Knowledge Base - CREATED</h1>

        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6 mb-8">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black"
              />
            </div>
            <button className="px-6 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {articles.map((article) => (
            <div key={article.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <FileText className="w-6 h-6 text-black" />
                  <div>
                    <h3 className="font-semibold text-black">{article.title}</h3>
                    <p className="text-sm text-black">Category: {article.category} â€¢ Views: {article.views}</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-black" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
