import React, { useState } from 'react';
import { Play, Calendar, User, ArrowRight, Search, TrendingUp, Clock, Eye, Star, Filter, Bookmark, Share2, MessageCircle, ThumbsUp } from 'lucide-react';

const CryptoNews = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    { id: 'all', name: 'All News', count: 24 },
    { id: 'bitcoin', name: 'Bitcoin', count: 8 },
    { id: 'ethereum', name: 'Ethereum', count: 6 },
    { id: 'defi', name: 'DeFi', count: 4 },
    { id: 'nft', name: 'NFTs', count: 3 },
    { id: 'regulation', name: 'Regulation', count: 2 },
    { id: 'mining', name: 'Mining', count: 1 }
  ];

  const trendingTopics = [
    { name: 'Bitcoin ETF', mentions: 1250, change: '+15%' },
    { name: 'Ethereum Merge', mentions: 890, change: '+8%' },
    { name: 'DeFi Protocols', mentions: 675, change: '+12%' },
    { name: 'Crypto Regulation', mentions: 543, change: '+5%' },
    { name: 'NFT Market', mentions: 432, change: '-3%' }
  ];

  const tickerData = [
    { symbol: 'BTC', price: '43,250.80', change: '+2.45%', changeType: 'positive', icon: '₿' },
    { symbol: 'ETH', price: '2,650.30', change: '+1.89%', changeType: 'positive', icon: 'Ξ' },
    { symbol: 'BNB', price: '315.20', change: '-0.75%', changeType: 'negative', icon: 'B' },
    { symbol: 'ADA', price: '0.52', change: '+3.12%', changeType: 'positive', icon: 'A' },
    { symbol: 'SOL', price: '98.45', change: '+5.67%', changeType: 'positive', icon: 'S' },
    { symbol: 'DOT', price: '7.82', change: '-1.23%', changeType: 'negative', icon: 'D' }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: 'Bitcoin Surges Past $43,000 as Institutional Adoption Accelerates',
      excerpt: 'Major financial institutions continue to embrace Bitcoin, with recent announcements from BlackRock and Fidelity driving the price momentum. Analysts predict further upside as traditional finance bridges with cryptocurrency markets.',
      category: 'Bitcoin',
      date: '2 hours ago',
      author: 'Sarah Chen',
      readTime: '5 min read',
      views: 15420,
      likes: 892,
      image: 'https://picsum.photos/600/400?random=1',
      badgeColor: 'bg-orange-100 text-orange-800',
      featured: true,
      tags: ['Bitcoin', 'Institutional', 'Price Analysis']
    },
    {
      id: 2,
      title: 'Ethereum 2.0 Upgrade: What It Means for DeFi and NFT Markets',
      excerpt: 'The Shanghai upgrade brings significant improvements to Ethereum\'s network efficiency. DeFi protocols and NFT platforms stand to benefit immensely from reduced gas fees and enhanced scalability.',
      category: 'Ethereum',
      date: '4 hours ago',
      author: 'Michael Rodriguez',
      readTime: '7 min read',
      views: 12850,
      likes: 654,
      image: 'https://picsum.photos/600/400?random=2',
      badgeColor: 'bg-blue-100 text-blue-800',
      featured: true,
      tags: ['Ethereum', 'DeFi', 'NFTs']
    },
    {
      id: 3,
      title: 'SEC Approves First Bitcoin Futures ETF: Market Implications',
      excerpt: 'The long-awaited approval of spot Bitcoin ETFs could bring billions in institutional money into the crypto space. Experts analyze the potential impact on market volatility and adoption rates.',
      category: 'Regulation',
      date: '6 hours ago',
      author: 'Dr. Emily Watson',
      readTime: '8 min read',
      views: 18750,
      likes: 1203,
      image: 'https://picsum.photos/600/400?random=3',
      badgeColor: 'bg-green-100 text-green-800',
      featured: true,
      tags: ['ETF', 'Regulation', 'Institutional']
    }
  ];

  const latestNews = [
    {
      id: 4,
      title: 'Cardano\'s Hydra Protocol Goes Live: Multi-Asset Support Confirmed',
      category: 'Blockchain',
      date: '8 hours ago',
      author: 'Alex Thompson',
      readTime: '4 min read',
      views: 8920,
      image: 'https://picsum.photos/300/200?random=4',
      badgeColor: 'bg-purple-100 text-purple-800',
      tags: ['Cardano', 'Hydra', 'Multi-Asset']
    },
    {
      id: 5,
      title: 'Uniswap V3 Volume Surpasses $1 Trillion in Trading Activity',
      category: 'DeFi',
      date: '10 hours ago',
      author: 'Lisa Park',
      readTime: '3 min read',
      views: 7560,
      image: 'https://picsum.photos/300/200?random=5',
      badgeColor: 'bg-pink-100 text-pink-800',
      tags: ['Uniswap', 'DeFi', 'Trading']
    },
    {
      id: 6,
      title: 'New Mining Difficulty Adjustment: Bitcoin Network Health Strong',
      category: 'Mining',
      date: '12 hours ago',
      author: 'David Kim',
      readTime: '5 min read',
      views: 6230,
      image: 'https://picsum.photos/300/200?random=6',
      badgeColor: 'bg-yellow-100 text-yellow-800',
      tags: ['Mining', 'Bitcoin', 'Network']
    },
    {
      id: 7,
      title: 'OpenSea Introduces Creator Royalties on Polygon Network',
      category: 'NFTs',
      date: '14 hours ago',
      author: 'Rachel Green',
      readTime: '4 min read',
      views: 9450,
      image: 'https://picsum.photos/300/200?random=7',
      badgeColor: 'bg-indigo-100 text-indigo-800',
      tags: ['NFTs', 'OpenSea', 'Royalties']
    },
    {
      id: 8,
      title: 'Central Bank Digital Currencies: Global Adoption Trends',
      category: 'Regulation',
      date: '16 hours ago',
      author: 'Prof. James Wilson',
      readTime: '6 min read',
      views: 11200,
      image: 'https://picsum.photos/300/200?random=8',
      badgeColor: 'bg-red-100 text-red-800',
      tags: ['CBDC', 'Regulation', 'Global']
    },
    {
      id: 9,
      title: 'Layer 2 Solutions Drive Ethereum Gas Fee Reduction by 80%',
      category: 'Ethereum',
      date: '18 hours ago',
      author: 'Tom Anderson',
      readTime: '5 min read',
      views: 8340,
      image: 'https://picsum.photos/300/200?random=9',
      badgeColor: 'bg-cyan-100 text-cyan-800',
      tags: ['Layer 2', 'Ethereum', 'Gas Fees']
    }
  ];

  const marketAnalysis = [
    {
      title: 'Technical Analysis: BTC/USD Weekly Chart Shows Bullish Momentum',
      summary: 'Resistance levels broken, next target $45,000',
      sentiment: 'bullish',
      accuracy: '78%'
    },
    {
      title: 'Altcoin Season Incoming? Correlation Analysis Suggests Yes',
      summary: 'ETH/BTC ratio indicates potential altcoin rally',
      sentiment: 'neutral',
      accuracy: '65%'
    },
    {
      title: 'DeFi TVL Reaches New Highs Despite Market Volatility',
      summary: 'Total value locked exceeds $50 billion',
      sentiment: 'bullish',
      accuracy: '82%'
    }
  ];

  const filteredNews = latestNews.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category.toLowerCase().includes(activeCategory);
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Live Ticker */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-4">
          <div className="overflow-hidden">
            <div className="flex animate-pulse">
              {[...tickerData, ...tickerData].map((item, index) => (
                <div key={index} className="flex items-center space-x-6 px-4 py-2 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-semibold text-sm">{item.symbol}:</span>
                    <span className="font-bold text-sm">{item.price}</span>
                    <span className={`text-xs font-medium ${item.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Header with Search and Filters */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Crypto News Hub</h1>
              <p className="text-gray-600">Stay updated with the latest cryptocurrency news, analysis, and market insights</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/50 text-gray-700 hover:bg-white/70'
                }`}
              >
                <span>{category.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.id ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Featured Articles */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-500" />
                <span>Featured Stories</span>
              </h2>
              {featuredArticles.map((article) => (
                <div key={article.id} className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={article.image}
                        alt="Featured News"
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${article.badgeColor}`}>
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-sm">{article.date}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 cursor-pointer transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{article.views.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <ThumbsUp className="w-4 h-4 text-gray-500" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <Bookmark className="w-4 h-4 text-gray-500" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <Share2 className="w-4 h-4 text-gray-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Latest News */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-green-500" />
                <span>Latest News</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredNews.map((article) => (
                  <div key={article.id} className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 cursor-pointer">
                    <img
                      src={article.image}
                      alt="News"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${article.badgeColor}`}>
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-xs">{article.date}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 hover:text-blue-600 cursor-pointer transition-colors leading-tight">
                        {article.title}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-3">
                          <span>{article.author}</span>
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Trending Topics */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-red-500" />
                <span>Trending Topics</span>
              </h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium text-gray-800">{topic.name}</p>
                      <p className="text-sm text-gray-500">{topic.mentions.toLocaleString()} mentions</p>
                    </div>
                    <span className={`text-sm font-medium ${topic.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {topic.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Analysis */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span>Market Analysis</span>
              </h3>
              <div className="space-y-4">
                {marketAnalysis.map((analysis, index) => (
                  <div key={index} className="p-4 bg-white/50 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">{analysis.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{analysis.summary}</p>
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        analysis.sentiment === 'bullish' ? 'bg-green-100 text-green-800' :
                        analysis.sentiment === 'bearish' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {analysis.sentiment}
                      </span>
                      <span className="text-xs text-gray-500">{analysis.accuracy} accuracy</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl border border-blue-200/50 shadow-2xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Stay Updated</h3>
              <p className="text-gray-600 text-sm mb-4">Get the latest crypto news delivered to your inbox daily.</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                  Subscribe Now
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">No spam, unsubscribe anytime.</p>
            </div>

            {/* Popular Tags */}
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Bitcoin', 'Ethereum', 'DeFi', 'NFTs', 'Blockchain', 'Crypto', 'Trading', 'Mining', 'Regulation', 'Altcoins'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoNews;
