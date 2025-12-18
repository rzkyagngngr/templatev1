import React, { useState } from 'react';
import { Star, User } from 'lucide-react';

const AdvancedRatings = () => {
  const [rating5, setRating5] = useState(0);
  const [rating10, setRating10] = useState(0);
  const [hoverRating5, setHoverRating5] = useState(0);
  const [hoverRating10, setHoverRating10] = useState(0);

  const mockReviews = [
    {
      id: 1,
      author: 'Sarah Johnson',
      avatar: 'https://picsum.photos/40/40?random=1',
      rating: 5,
      text: 'Excellent product! Highly recommended. The quality exceeded my expectations.',
      date: '2 days ago',
    },
    {
      id: 2,
      author: 'Mike Chen',
      avatar: 'https://picsum.photos/40/40?random=2',
      rating: 4,
      text: 'Great value for money. Works as described, very satisfied.',
      date: '1 week ago',
    },
    {
      id: 3,
      author: 'Emma Wilson',
      avatar: 'https://picsum.photos/40/40?random=3',
      rating: 5,
      text: 'Amazing customer service and fast delivery. Will buy again!',
      date: '2 weeks ago',
    },
    {
      id: 4,
      author: 'James Brown',
      avatar: 'https://picsum.photos/40/40?random=4',
      rating: 3,
      text: 'Good product but took some time to understand the features.',
      date: '3 weeks ago',
    },
    {
      id: 5,
      author: 'Lisa Anderson',
      avatar: 'https://picsum.photos/40/40?random=5',
      rating: 5,
      text: 'Perfect! Just what I was looking for. Five stars deserved.',
      date: '1 month ago',
    },
  ];

  const ratingDistribution = {
    5: mockReviews.filter((r) => r.rating === 5).length,
    4: mockReviews.filter((r) => r.rating === 4).length,
    3: mockReviews.filter((r) => r.rating === 3).length,
    2: mockReviews.filter((r) => r.rating === 2).length,
    1: mockReviews.filter((r) => r.rating === 1).length,
  };

  const averageRating = (
    mockReviews.reduce((sum, r) => sum + r.rating, 0) / mockReviews.length
  ).toFixed(1);

  const renderStars = (rating, max = 5, onHover = null, onLeave = null, onClick = null, hoverValue = 0) => {
    return Array.from({ length: max }).map((_, i) => (
      <button
        key={i}
        onMouseEnter={() => onHover && onHover(i + 1)}
        onMouseLeave={() => onLeave && onLeave(0)}
        onClick={() => onClick && onClick(i + 1)}
        className="transition-transform hover:scale-110"
      >
        <Star
          size={24}
          className={`${
            i < (hoverValue || rating)
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-slate-300'
          } transition-colors`}
        />
      </button>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Star Ratings</h1>
        <div className="flex gap-2 text-sm text-slate-600">
          <span className="hover:text-indigo-600 cursor-pointer">Dashboard</span>
          <span>/</span>
          <span className="hover:text-indigo-600 cursor-pointer">Advanced</span>
          <span>/</span>
          <span className="text-indigo-600 font-medium">Ratings</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Rating Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* 5-Star Rating */}
          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Rate Your Experience (5 Stars)</h2>
            <div className="flex items-center gap-8 mb-6">
              <div className="flex gap-4">
                {renderStars(
                  rating5,
                  5,
                  setHoverRating5,
                  () => setHoverRating5(0),
                  setRating5,
                  hoverRating5
                )}
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-indigo-600">{hoverRating5 || rating5}</p>
                <p className="text-sm text-slate-500">{rating5 > 0 && `out of 5`}</p>
              </div>
            </div>
            {rating5 > 0 && (
              <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                <p className="text-sm text-indigo-700">
                  ✓ Thank you for rating! Your feedback helps us improve.
                </p>
              </div>
            )}
          </div>

          {/* 10-Star Rating */}
          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Rate Your Experience (10 Stars)</h2>
            <div className="flex items-center gap-8 mb-6">
              <div className="flex gap-2">
                {renderStars(
                  rating10,
                  10,
                  setHoverRating10,
                  () => setHoverRating10(0),
                  setRating10,
                  hoverRating10
                )}
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-purple-600">{hoverRating10 || rating10}</p>
                <p className="text-sm text-slate-500">{rating10 > 0 && `out of 10`}</p>
              </div>
            </div>
            {rating10 > 0 && (
              <div className="p-4 bg-purple-50/50 rounded-2xl border border-purple-100">
                <p className="text-sm text-purple-700">
                  ✓ Thank you for rating! Your feedback helps us improve.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Stats & Distribution */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-8 h-fit">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Rating Overview</h3>

          {/* Average Rating */}
          <div className="text-center mb-8">
            <div className="text-5xl font-bold text-yellow-500 mb-2">{averageRating}</div>
            <div className="flex justify-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < Math.round(averageRating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-slate-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-slate-500">{mockReviews.length} reviews</p>
          </div>

          {/* Distribution */}
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = ratingDistribution[stars];
              const percentage = (count / mockReviews.length) * 100;
              return (
                <div key={stars} className="flex items-center gap-3">
                  <span className="text-xs font-medium text-slate-600 min-w-fit">{stars}⭐</span>
                  <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-400 to-amber-400 transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-500 min-w-fit">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Latest Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockReviews.map((review) => (
            <div
              key={review.id}
              className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">{review.author}</h4>
                  <p className="text-xs text-slate-500">{review.date}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < review.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-slate-300'
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm text-slate-700">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedRatings;
