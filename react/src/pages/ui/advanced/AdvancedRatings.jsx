import React, { useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';

export default function AdvancedRatings() {
  const [ratings, setRatings] = useState({
    product: 4,
    service: 5,
    delivery: 3,
    quality: 4,
  });

  const items = Object.entries(ratings).map(([key, value]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    rating: value,
  }));

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={20}
            className={star <= rating ? 'fill-yellow-400 text-yellow-600' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>Glacia</span>
          <ChevronRight size={16} />
          <span>UI Kit</span>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-semibold">Ratings</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Advanced Ratings</h1>
      </div>

      {/* Examples */}
      <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Customer Ratings</h3>
        <div className="grid gap-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between bg-white/50 p-4 rounded border border-gray-300">
              <span className="font-medium text-gray-900">{item.name}</span>
              <div className="flex items-center gap-3">
                {renderStars(item.rating)}
                <span className="text-sm text-gray-600">{item.rating}.0</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
