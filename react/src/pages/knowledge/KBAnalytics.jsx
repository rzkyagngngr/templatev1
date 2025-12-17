import React from 'react';
import { BarChart3, TrendingUp, Eye, MessageSquare } from 'lucide-react';

export default function KBAnalytics() {
  const metrics = [
    { label: 'Total Views', value: '54,892', trend: '+18%', icon: Eye },
    { label: 'Avg Article Views', value: '156', trend: '+8%', icon: TrendingUp },
    { label: 'Comments This Month', value: '342', trend: '+12%', icon: MessageSquare },
    { label: 'Engagement Rate', value: '78%', trend: '+5%', icon: BarChart3 },
  ];

  const topArticles = [
    { title: 'Getting Started', views: '2,456' },
    { title: 'API Reference', views: '2,134' },
    { title: 'Best Practices', views: '1,876' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Analytics - CREATED</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div key={idx} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-black mb-2">{metric.label}</p>
                    <p className="text-3xl font-bold text-black">{metric.value}</p>
                    <p className="text-sm text-green-600 mt-2">{metric.trend}</p>
                  </div>
                  <Icon className="w-6 h-6 text-black" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-6">Top Articles</h2>
          <div className="space-y-4">
            {topArticles.map((article, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-300">
                <p className="text-black font-medium">{article.title}</p>
                <p className="text-black">{article.views} views</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
