import React, { useState } from 'react';
import { ChevronRight, User, MapPin, Mail, Phone, Award, Briefcase, Users, Activity, Heart, MessageCircle } from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('overview');

  const users = [
    { id: 1, name: 'John Anderson', role: 'Product Manager', location: 'San Francisco, CA', email: 'john.anderson@example.com', phone: '+1 (555) 123-4567', avatar: 'https://picsum.photos/400/300?random=1', bio: 'Experienced product manager with 8 years of SaaS expertise', followers: 2543, following: 487 },
    { id: 2, name: 'Sarah Chen', role: 'Senior Designer', location: 'New York, NY', email: 'sarah.chen@example.com', phone: '+1 (555) 234-5678', avatar: 'https://picsum.photos/400/300?random=2', bio: 'Creative designer passionate about user experience', followers: 3124, following: 512 },
    { id: 3, name: 'Michael Dev', role: 'Full Stack Engineer', location: 'Austin, TX', email: 'michael.dev@example.com', phone: '+1 (555) 345-6789', avatar: 'https://picsum.photos/400/300?random=3', bio: 'Full stack developer specializing in React and Node.js', followers: 1876, following: 423 },
    { id: 4, name: 'Emma Wilson', role: 'Marketing Lead', location: 'Boston, MA', email: 'emma.wilson@example.com', phone: '+1 (555) 456-7890', avatar: 'https://picsum.photos/400/300?random=4', bio: 'Strategic marketer with 6 years of digital marketing experience', followers: 2109, following: 567 },
    { id: 5, name: 'David Thompson', role: 'Data Analyst', location: 'Seattle, WA', email: 'david.thompson@example.com', phone: '+1 (555) 567-8901', avatar: 'https://picsum.photos/400/300?random=5', bio: 'Data-driven analyst focusing on business intelligence', followers: 1654, following: 389 },
    { id: 6, name: 'Lisa Martinez', role: 'DevOps Engineer', location: 'Denver, CO', email: 'lisa.martinez@example.com', phone: '+1 (555) 678-9012', avatar: 'https://picsum.photos/400/300?random=6', bio: 'Cloud infrastructure specialist with Kubernetes expertise', followers: 2034, following: 445 },
    { id: 7, name: 'James Brown', role: 'QA Lead', location: 'Chicago, IL', email: 'james.brown@example.com', phone: '+1 (555) 789-0123', avatar: 'https://picsum.photos/400/300?random=7', bio: 'Quality assurance expert with automated testing focus', followers: 1432, following: 356 },
    { id: 8, name: 'Rachel Green', role: 'Business Analyst', location: 'Miami, FL', email: 'rachel.green@example.com', phone: '+1 (555) 890-1234', avatar: 'https://picsum.photos/400/300?random=8', bio: 'Business analyst specializing in process optimization', followers: 1789, following: 478 },
  ];

  const currentUser = users[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>Glacia</span>
          <ChevronRight size={16} />
          <span>Pages</span>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-semibold">Profile</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">User Profiles</h1>
      </div>

      {/* Current User Profile */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
          {/* Cover Image */}
          <div className="h-32 bg-gradient-to-r from-blue-500/30 to-purple-500/30"></div>
          
          {/* Profile Info */}
          <div className="px-8 pb-8 text-center relative">
            <div className="flex flex-col items-center -mt-16 mb-6">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-1">{currentUser.name}</h2>
            <p className="text-lg text-blue-600 font-semibold mb-4">{currentUser.role}</p>
            <p className="text-gray-700 mb-6">{currentUser.bio}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{currentUser.followers.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{currentUser.following.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Following</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">847</div>
                <div className="text-sm text-gray-600">Posts</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6 text-gray-900">
              <div className="flex items-center justify-center gap-3">
                <Mail size={18} className="text-blue-600" />
                <span className="text-sm">{currentUser.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone size={18} className="text-blue-600" />
                <span className="text-sm">{currentUser.phone}</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin size={18} className="text-blue-600" />
                <span className="text-sm">{currentUser.location}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 justify-center">
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-slate-900 rounded-lg font-medium transition-all hover:shadow-lg">
                Follow
              </button>
              <button className="px-6 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-all">
                Message
              </button>
              <button className="w-10 h-10 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg flex items-center justify-center transition-all">
                <Heart size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* User Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Team Members</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {users.map((user) => (
            <div key={user.id} className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:bg-white/60 group">
              {/* Image */}
              <div className="h-32 overflow-hidden relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h5 className="text-lg font-bold text-gray-900 mb-1">{user.name}</h5>
                <p className="text-blue-600 font-semibold text-sm mb-3">{user.role}</p>
                <p className="text-gray-700 text-xs mb-3 line-clamp-2">{user.bio}</p>

                {/* Mini Stats */}
                <div className="grid grid-cols-2 gap-2 mb-3 py-3 border-y border-gray-300">
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-900">{(user.followers / 1000).toFixed(1)}k</div>
                    <div className="text-xs text-gray-600">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-gray-900">{user.following}</div>
                    <div className="text-xs text-gray-600">Following</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center gap-1 text-gray-700 text-xs mb-3">
                  <MapPin size={14} />
                  <span>{user.location}</span>
                </div>

                {/* Contact */}
                <div className="space-y-1 mb-4 text-xs text-gray-700">
                  <div className="flex items-center gap-1 truncate justify-center hover:text-blue-600">
                    <Mail size={12} />
                    <span className="truncate">{user.email}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-slate-900 text-xs rounded font-medium transition-all">
                    View
                  </button>
                  <button className="flex-1 px-3 py-1.5 border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs rounded font-medium transition-all">
                    Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
