import React, { useState } from 'react';
import { Send, Download, Star, Facebook, Twitter, MessageCircle, FileText, Copy, QrCode } from 'lucide-react';

const CryptoIco = () => {
  const [sendModalOpen, setSendModalOpen] = useState(false);
  const [requestModalOpen, setRequestModalOpen] = useState(false);

  const icoListings = [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      description: 'Basic Attention Token',
      status: 'active',
      startDate: '10/05/2021',
      endDate: '20/05/2021',
      rating: 4.5,
      socialLinks: ['facebook', 'twitter', 'medium', 'telegram'],
      icon: '₿'
    },
    {
      id: 2,
      name: 'Qubitica',
      symbol: 'QUB',
      description: 'Basic Attention Token',
      status: 'active',
      startDate: '10/05/2021',
      endDate: '20/05/2021',
      rating: 4.5,
      socialLinks: ['facebook', 'twitter', 'medium', 'telegram'],
      icon: 'Q'
    },
    {
      id: 3,
      name: 'Litecoin',
      symbol: 'LTC',
      description: 'Basic Attention Token',
      status: 'ended',
      startDate: '10/05/2021',
      endDate: '20/05/2021',
      rating: 4.5,
      socialLinks: ['facebook', 'twitter', 'medium', 'telegram'],
      icon: 'Ł'
    },
    {
      id: 4,
      name: 'Ethereum',
      symbol: 'ETH',
      description: 'Basic Attention Token',
      status: 'ended',
      startDate: '10/05/2021',
      endDate: '20/05/2021',
      rating: 4.5,
      socialLinks: ['facebook', 'twitter', 'medium', 'telegram'],
      icon: 'Ξ'
    },
    {
      id: 5,
      name: 'Monero',
      symbol: 'XMR',
      description: 'Basic Attention Token',
      status: 'active',
      startDate: '10/05/2021',
      endDate: '20/05/2021',
      rating: 4.5,
      socialLinks: ['facebook', 'twitter', 'medium', 'telegram'],
      icon: 'M'
    },
    {
      id: 6,
      name: 'Dashcoin',
      symbol: 'DASH',
      description: 'Basic Attention Token',
      status: 'active',
      startDate: '10/05/2021',
      endDate: '20/05/2021',
      rating: 4.5,
      socialLinks: ['facebook', 'twitter', 'medium', 'telegram'],
      icon: 'Đ'
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 text-yellow-400 fill-current opacity-50" />);
    }

    return stars;
  };

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'facebook':
        return <Facebook className="w-4 h-4" />;
      case 'twitter':
        return <Twitter className="w-4 h-4" />;
      case 'medium':
        return <FileText className="w-4 h-4" />;
      case 'telegram':
        return <MessageCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header with Balance and Action Buttons */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSendModalOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send</span>
              </button>

              <button
                onClick={() => setRequestModalOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Request</span>
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">₿</span>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Total Balance</p>
                <h4 className="text-gray-800 font-bold">122.00125503 BTC</h4>
              </div>
            </div>
          </div>
        </div>

        {/* ICO Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {icoListings.map((ico) => (
            <div key={ico.id} className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{ico.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{ico.name}</h3>
                    <p className="text-gray-600 text-sm">{ico.description}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  ico.status === 'active'
                    ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-800'
                    : 'bg-gradient-to-r from-red-100 to-red-200 text-red-800'
                }`}>
                  ICO {ico.status === 'active' ? 'Active' : 'End'}
                </span>
              </div>

              {/* Dates and Rating */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-gray-600 text-sm">Start Date: <span className="text-gray-800 font-medium">{ico.startDate}</span></p>
                  <p className="text-gray-600 text-sm">End Date: <span className="text-gray-800 font-medium">{ico.endDate}</span></p>
                </div>
                <div className="flex justify-end items-center">
                  <div className="flex space-x-1">
                    {renderStars(ico.rating)}
                  </div>
                </div>
              </div>

              {/* Social Links and Buy Button */}
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {ico.socialLinks.map((platform, index) => (
                    <button
                      key={index}
                      className="w-8 h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
                    >
                      {getSocialIcon(platform)}
                    </button>
                  ))}
                </div>

                <button
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    ico.status === 'active'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 shadow-lg'
                      : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={ico.status !== 'active'}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Send Modal */}
        {sendModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/95 to-white/80 rounded-3xl border border-white/60 shadow-2xl max-w-md w-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Send Coin</h3>
                  <button
                    onClick={() => setSendModalOpen(false)}
                    className="w-8 h-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Crypto Currency</label>
                    <select className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>-- Currency --</option>
                      <option value="BTC">BTC</option>
                      <option value="ETH">ETH</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Currency From</label>
                    <select className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>-- My wallet --</option>
                      <option value="BTC">BTC</option>
                      <option value="ETH">ETH</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                    <div className="flex">
                      <div className="flex-1 flex items-center px-4 py-3 bg-white/50 border border-gray-200 rounded-l-xl">
                        <QrCode className="w-5 h-5 text-gray-400 mr-2" />
                        <input
                          type="text"
                          placeholder="Can you scan"
                          className="flex-1 bg-transparent border-none outline-none"
                        />
                      </div>
                      <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-r-xl">
                        <QrCode className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">USD</label>
                      <div className="flex items-center px-4 py-3 bg-white/50 border border-gray-200 rounded-xl">
                        <span className="text-gray-500 mr-2">$</span>
                        <input
                          type="text"
                          placeholder="USD"
                          className="flex-1 bg-transparent border-none outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">BTC</label>
                      <div className="flex items-center px-4 py-3 bg-white/50 border border-gray-200 rounded-xl">
                        <span className="text-gray-500 mr-2">₿</span>
                        <input
                          type="text"
                          placeholder="BTC"
                          className="flex-1 bg-transparent border-none outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                      rows="3"
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Enter description..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Network Fee</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input type="radio" name="networkFee" value="regular" className="mr-2" defaultChecked />
                        <span className="text-sm">Regular</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="networkFee" value="priority" className="mr-2" />
                        <span className="text-sm">Priority</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 mt-6">
                  <button
                    onClick={() => setSendModalOpen(false)}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    Close
                  </button>
                  <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Request Modal */}
        {requestModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/95 to-white/80 rounded-3xl border border-white/60 shadow-2xl max-w-md w-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Request Coin</h3>
                  <button
                    onClick={() => setRequestModalOpen(false)}
                    className="w-8 h-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Crypto Currency</label>
                    <select className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>-- Currency --</option>
                      <option value="BTC">BTC</option>
                      <option value="ETH">ETH</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Receive To</label>
                    <select className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>-- My wallet --</option>
                      <option value="BTC">BTC</option>
                      <option value="ETH">ETH</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                    <div className="flex">
                      <input
                        type="text"
                        value="c12b001a15f9bd46ef1c6551386c"
                        className="flex-1 px-4 py-3 bg-white/50 border border-gray-200 rounded-l-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        readOnly
                      />
                      <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-r-xl hover:scale-105 transition-all duration-300">
                        <Copy className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => setRequestModalOpen(false)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoIco;
