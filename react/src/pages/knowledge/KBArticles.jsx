import React from 'react';
import { FileText, Plus, Edit2, Trash2, Eye } from 'lucide-react';

export default function KBArticles() {
  const articles = [
    { id: 1, title: 'Getting Started with API', status: 'Published', author: 'John Doe', views: '2,145', date: '2025-01-10' },
    { id: 2, title: 'Advanced Configuration', status: 'Draft', author: 'Jane Smith', views: '0', date: '2025-01-08' },
    { id: 3, title: 'Troubleshooting Guide', status: 'Published', author: 'Mike Johnson', views: '1,856', date: '2025-01-05' },
    { id: 4, title: 'Best Practices', status: 'In Review', author: 'Sarah Lee', views: '324', date: '2025-01-02' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-black">Articles - CREATED</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-slate-900 rounded-lg hover:bg-blue-600">
            <Plus className="w-5 h-5" />
            New Article
          </button>
        </div>

        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300 bg-white/50">
                  <th className="text-left py-3 px-4 font-semibold text-black">Title</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Author</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Views</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article.id} className="border-b border-gray-300">
                    <td className="py-3 px-4 text-black">{article.title}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded text-sm font-medium text-black ${
                        article.status === 'Published' ? 'bg-green-100' : article.status === 'Draft' ? 'bg-gray-100' : 'bg-yellow-100'
                      }`}>
                        {article.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-black">{article.author}</td>
                    <td className="py-3 px-4 text-black">{article.views}</td>
                    <td className="py-3 px-4 text-black">{article.date}</td>
                    <td className="py-3 px-4 flex gap-2">
                      <button className="p-2 hover:bg-white/50 rounded">
                        <Eye className="w-4 h-4 text-black" />
                      </button>
                      <button className="p-2 hover:bg-white/50 rounded">
                        <Edit2 className="w-4 h-4 text-black" />
                      </button>
                      <button className="p-2 hover:bg-white/50 rounded">
                        <Trash2 className="w-4 h-4 text-black" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
