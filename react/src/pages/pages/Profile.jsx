import React, { useState } from 'react';
import { ChevronRight, Briefcase, MapPin, Mail, Phone, ExternalLink, Award, Code, Users, Clock, Zap, Target } from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: 'John Anderson', role: 'Product Manager', location: 'San Francisco, CA', email: 'john.anderson@example.com', phone: '+1 (555) 123-4567', avatar: 'https://picsum.photos/400/400?random=1', bio: 'Experienced product manager with 8 years of SaaS expertise', followers: 2543, following: 487, posts: 847, skills: ['Product Strategy', 'Data Analysis', 'User Research', 'Agile'], joinDate: 'Jan 2020', activity: 'Active today' },
    { id: 2, name: 'Sarah Chen', role: 'Senior Designer', location: 'New York, NY', email: 'sarah.chen@example.com', phone: '+1 (555) 234-5678', avatar: 'https://picsum.photos/400/400?random=2', bio: 'Creative designer passionate about user experience', followers: 3124, following: 512, posts: 956, skills: ['UI Design', 'UX Research', 'Prototyping', 'Figma'], joinDate: 'Mar 2019', activity: 'Active 2h ago' },
    { id: 3, name: 'Michael Dev', role: 'Full Stack Engineer', location: 'Austin, TX', email: 'michael.dev@example.com', phone: '+1 (555) 345-6789', avatar: 'https://picsum.photos/400/400?random=3', bio: 'Full stack developer specializing in React and Node.js', followers: 1876, following: 423, posts: 612, skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'], joinDate: 'Jun 2020', activity: 'Active 1h ago' },
    { id: 4, name: 'Emma Wilson', role: 'Marketing Lead', location: 'Boston, MA', email: 'emma.wilson@example.com', phone: '+1 (555) 456-7890', avatar: 'https://picsum.photos/400/400?random=4', bio: 'Strategic marketer with 6 years of digital marketing experience', followers: 2109, following: 567, posts: 734, skills: ['SEO/SEM', 'Content Strategy', 'Analytics', 'Social Media'], joinDate: 'Aug 2021', activity: 'Active now' },
    { id: 5, name: 'David Thompson', role: 'Data Analyst', location: 'Seattle, WA', email: 'david.thompson@example.com', phone: '+1 (555) 567-8901', avatar: 'https://picsum.photos/400/400?random=5', bio: 'Data-driven analyst focusing on business intelligence', followers: 1654, following: 389, posts: 523, skills: ['Python', 'SQL', 'Tableau', 'ML'], joinDate: 'Feb 2021', activity: 'Active 3h ago' },
    { id: 6, name: 'Lisa Martinez', role: 'DevOps Engineer', location: 'Denver, CO', email: 'lisa.martinez@example.com', phone: '+1 (555) 678-9012', avatar: 'https://picsum.photos/400/400?random=6', bio: 'Cloud infrastructure specialist with Kubernetes expertise', followers: 2034, following: 445, posts: 445, skills: ['Kubernetes', 'Docker', 'AWS', 'Terraform'], joinDate: 'Sep 2020', activity: 'Active 30m ago' },
    { id: 7, name: 'James Brown', role: 'QA Lead', location: 'Chicago, IL', email: 'james.brown@example.com', phone: '+1 (555) 789-0123', avatar: 'https://picsum.photos/400/400?random=7', bio: 'Quality assurance expert with automated testing focus', followers: 1432, following: 356, posts: 389, skills: ['Selenium', 'Jest', 'Testing Strategy', 'Automation'], joinDate: 'Apr 2021', activity: 'Active yesterday' },
    { id: 8, name: 'Rachel Green', role: 'Business Analyst', location: 'Miami, FL', email: 'rachel.green@example.com', phone: '+1 (555) 890-1234', avatar: 'https://picsum.photos/400/400?random=8', bio: 'Business analyst specializing in process optimization', followers: 1789, following: 478, posts: 567, skills: ['Requirements', 'Process Mapping', 'Documentation', 'Stakeholder Mgmt'], joinDate: 'Nov 2020', activity: 'Active 12h ago' },
  ];

  const currentUser = users[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span className="text-gray-600">Glacia</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="text-gray-600">Pages</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Profile</span>
      </div>

      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">Profile Overview</h1>
        <p className="text-gray-600">Manage and view detailed profile information</p>
      </div>

      {/* Hero Profile Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 overflow-hidden group hover:shadow-2xl transition-all duration-300">
          
          {/* Cover Banner */}
          <div className="h-40 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm"></div>
            <div className="absolute top-4 right-4 backdrop-blur-xl bg-white/30 border border-white/50 px-4 py-2 rounded-2xl text-xs font-medium text-white/90 hover:bg-white/40 hover:shadow-lg transition-all duration-300">
              ✨ Premium Profile
            </div>
          </div>

          {/* Profile Content */}
          <div className="px-8 pb-8 pt-0 relative">
            {/* Avatar & Main Info */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
              <div className="relative -mt-20 flex-shrink-0">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-40 h-40 rounded-3xl border-4 border-white shadow-2xl shadow-blue-300/50 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 right-3 w-6 h-6 bg-emerald-400 border-4 border-white rounded-full shadow-lg"></div>
              </div>

              <div className="flex-1 mt-8 md:mt-0">
                <div className="mb-4">
                  <h2 className="text-3xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-1">{currentUser.name}</h2>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-purple-400/50 border border-white/50 rounded-2xl text-sm font-medium text-blue-900 shadow-lg">
                      {currentUser.role}
                    </span>
                    <span className="flex items-center gap-1 text-xs px-3 py-1 backdrop-blur-xl bg-emerald-400/50 border border-white/50 rounded-2xl text-emerald-900 shadow-lg">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> {currentUser.activity}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">{currentUser.bio}</p>
                
                {/* Quick Actions */}
                <div className="flex flex-wrap gap-3">
                  <button className="px-5 py-2.5 backdrop-blur-xl bg-gradient-to-br from-blue-500/50 to-blue-600/50 border border-white/50 rounded-2xl text-white font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Follow
                  </button>
                  <button className="px-5 py-2.5 backdrop-blur-xl bg-white/50 border border-white/60 rounded-2xl text-gray-700 font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Message
                  </button>
                  <button className="px-5 py-2.5 backdrop-blur-xl bg-white/50 border border-white/60 rounded-2xl text-gray-700 font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Share Profile
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 py-8 border-t border-white/30">
              {[
                { label: 'Followers', value: currentUser.followers, icon: Users },
                { label: 'Following', value: currentUser.following, icon: Users },
                { label: 'Posts', value: currentUser.posts, icon: Award },
                { label: 'Joined', value: currentUser.joinDate, icon: Clock },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl p-4 text-center hover:bg-white/50 transition-all duration-300 group">
                    <Icon size={20} className="mx-auto mb-2 text-blue-500 group-hover:text-purple-500 transition-colors" />
                    <div className="text-2xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Contact & Location Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-t border-white/30">
              <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl p-4 hover:bg-white/50 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-blue-500" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-600">Email</p>
                    <p className="text-sm font-medium text-gray-900 truncate">{currentUser.email}</p>
                  </div>
                </div>
              </div>
              <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl p-4 hover:bg-white/50 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-blue-500" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-600">Phone</p>
                    <p className="text-sm font-medium text-gray-900">{currentUser.phone}</p>
                  </div>
                </div>
              </div>
              <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl p-4 hover:bg-white/50 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-blue-500" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-600">Location</p>
                    <p className="text-sm font-medium text-gray-900">{currentUser.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Expertise Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-purple-200/40 overflow-hidden p-8 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Code size={24} className="text-blue-600" />
            <h3 className="text-2xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent">Skills & Expertise</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {currentUser.skills.map((skill, i) => (
              <span key={i} className="px-4 py-2 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-purple-400/50 border border-white/50 rounded-2xl text-sm font-medium text-blue-900 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">Team Members</h2>
          <p className="text-gray-600">Connect and collaborate with team professionals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => setSelectedUser(user.id)}
              className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 overflow-hidden group hover:shadow-2xl hover:shadow-purple-300/50 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 backdrop-blur-xl bg-white/40 border border-white/50 px-3 py-1 rounded-2xl text-xs font-medium text-white/90 shadow-lg">
                  {user.role.split(' ')[0]}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-1">{user.name}</h4>
                <p className="text-sm bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-3">{user.role}</p>
                <p className="text-xs text-gray-700 leading-relaxed mb-4 line-clamp-2">{user.bio}</p>

                {/* Mini Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4 py-4 border-t border-b border-white/30">
                  <div className="text-center">
                    <div className="text-sm font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">{(user.followers / 1000).toFixed(1)}k</div>
                    <div className="text-xs text-gray-600">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">{user.following}</div>
                    <div className="text-xs text-gray-600">Following</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-700 text-xs mb-4">
                  <MapPin size={14} className="text-blue-500 flex-shrink-0" />
                  <span>{user.location}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 backdrop-blur-xl bg-gradient-to-br from-blue-500/50 to-blue-600/50 border border-white/50 text-white text-xs rounded-2xl font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    View
                  </button>
                  <button className="flex-1 px-3 py-2 backdrop-blur-xl bg-white/50 border border-white/60 text-gray-700 text-xs rounded-2xl font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
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
