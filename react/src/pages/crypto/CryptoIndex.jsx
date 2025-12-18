import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Bitcoin, Coins, ArrowUpRight, ArrowDown, RefreshCw, Eye, Clock, User, AlertCircle, Calendar } from 'lucide-react';

const CryptoIndex = () => {
  const [activeTab, setActiveTab] = useState('Day');

  const balanceData = [
    { name: 'Bitcoin', symbol: 'BTC', amount: '6.18424000', value: '$33,277.37', icon: Bitcoin, color: 'from-orange-500 to-orange-600' },
    { name: 'Monero', symbol: 'XMR', amount: '60.1842', value: '$18,564.37', icon: Coins, color: 'from-orange-400 to-red-500' },
    { name: 'Ethereum', symbol: 'ETH', amount: '32.65849212', value: '$5,562.37', icon: Coins, color: 'from-blue-500 to-blue-600' },
    { name: 'Light', symbol: 'LTC', amount: '10.65849212', value: '$7,854.37', icon: Coins, color: 'from-gray-500 to-gray-600' },
    { name: 'Dashcoin', symbol: 'DASH', amount: '62.65849212', value: '$7,289.37', icon: Coins, color: 'from-blue-600 to-indigo-600' },
    { name: 'Monero', symbol: 'XMR', amount: '60.1842', value: '$18,564.37', icon: Coins, color: 'from-orange-400 to-red-500' }
  ];

  const marketData = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$7,289.45', change: '+2.5%', marketCap: '$129,820,932', volume: '$25,111,773', icon: Bitcoin },
    { name: 'Ethereum', symbol: 'ETH', price: '$234.45', change: '+0.45%', marketCap: '$24,909,743', volume: '$12,856,403', icon: Coins },
    { name: 'Litecoin', symbol: 'LTC', price: '$7289.45', change: '+3.51%', marketCap: '$5,399,795,666', volume: '$4,394,304,674', icon: Coins },
    { name: 'Monero', symbol: 'XMR', price: '$7289.45', change: '+0.95%', marketCap: '$1,375,808,437', volume: '$58,791,421', icon: Coins }
  ];

  const transactions = [
    { type: 'send', description: 'Send BTC', amount: '0.000245684 BTC', date: '6 June 2019 10:25 AM', icon: ArrowUpRight, color: 'text-red-500' },
    { type: 'receive', description: 'Receive BTC', amount: '0.012458632 BTC', date: '4 June 2019 7:05 PM', icon: ArrowDown, color: 'text-green-500' },
    { type: 'send', description: 'Send BTC', amount: '0.000245684 BTC', date: '1 June 2019 11:30 PM', icon: ArrowUpRight, color: 'text-red-500' },
    { type: 'send', description: 'Send BTC', amount: '0.000245684 BTC', date: '28 May 2019 08:45 AM', icon: ArrowUpRight, color: 'text-red-500' },
    { type: 'receive', description: 'Receive BTC', amount: '0.012458632 BTC', date: '25 May 2019 01:25 PM', icon: ArrowDown, color: 'text-green-500' }
  ];

  const activities = [
    { user: 'Donald', action: 'updated the status of Refund #1234 to awaiting customer response', time: '10 Min ago', icon: User, color: 'bg-blue-500' },
    { user: 'Lucy Peterson', action: 'was added to the group, group name is Overtake', time: '50 Min ago', icon: Clock, color: 'bg-green-500' },
    { user: 'Joseph Rust', action: 'opened new showcase Mannat #112233 with theme market', time: '10 hours ago', icon: Calendar, color: 'bg-purple-500' },
    { user: 'Donald', action: 'updated the status of Refund #1234 to awaiting customer response', time: 'Yesterday', icon: User, color: 'bg-blue-500' },
    { user: 'Lucy Peterson', action: 'was added to the group, group name is Overtake', time: '14 Nov 2019', icon: AlertCircle, color: 'bg-red-500' },
    { user: 'Joseph Rust', action: 'opened new showcase Mannat #112233 with theme market', time: '15 Nov 2019', icon: Calendar, color: 'bg-purple-500' }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Main Chart and Balance Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-8">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-1">
                  {['Hour', 'Day', 'Week', 'Month', 'Order Book'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        activeTab === tab
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                          : 'text-gray-600 hover:bg-white/50'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Bitcoin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">$50,289.45</h3>
                    <p className="text-gray-600">Bitcoin <span className="text-sm">(BTC)</span> <span className="text-green-500">2.5% <TrendingUp className="w-4 h-4 inline" /></span></p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-3 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Last</p>
                  <p className="font-semibold">0.25436584</p>
                </div>
                <div className="bg-gradient-to-r from-green-100 to-green-200 p-3 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">24High</p>
                  <p className="font-semibold">0.25436584</p>
                </div>
                <div className="bg-gradient-to-r from-red-100 to-red-200 p-3 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">24Low</p>
                  <p className="font-semibold">0.25436584</p>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-gray-600">Bitcoin Price Chart</p>
                  <p className="text-sm text-gray-500">Chart integration would go here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Total Balance */}
          <div className="lg:col-span-4">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Total Balance</h3>
                <span className="text-sm text-gray-500">30 June 2021</span>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">$85,692.00</h2>
                <p className="text-green-500">+ $455.00 <span className="text-sm">(6.2% <TrendingUp className="w-4 h-4 inline" />)</span></p>
              </div>

              <div className="flex justify-center space-x-2 mb-6">
                <button className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                  Receive
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                  Send
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg">
                  + Invest
                </button>
              </div>

              <div className="space-y-3">
                {balanceData.map((coin, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 bg-gradient-to-r ${coin.color} rounded-full flex items-center justify-center`}>
                        <coin.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{coin.amount}</p>
                        <p className="text-xs text-gray-500">{coin.value}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium bg-gradient-to-r ${coin.color} text-white`}>
                      {coin.symbol}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Currency Calculator */}
          <div className="lg:col-span-4">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Currency Calculator</h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bitcoin className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <button className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 ml-auto">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg text-xs font-medium text-blue-800 mt-2">
                    Balance
                  </span>
                  <h4 className="text-lg font-bold text-gray-800 mt-1">122.5692.00 <small className="text-sm">BTC</small></h4>
                  <p className="text-green-500 text-sm">11.1% <TrendingUp className="w-3 h-3 inline" /> Up from yesterday</p>
                </div>
              </div>

              {/* Calculator Placeholder */}
              <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <DollarSign className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">Crypto Converter</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <div className="lg:col-span-4">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Transaction History</h3>
                <button className="text-blue-500 hover:text-blue-600 font-medium text-sm">View All</button>
              </div>

              <div className="space-y-4">
                {transactions.map((tx, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                        <tx.icon className={`w-5 h-5 ${tx.color}`} />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-gray-800">{tx.description}</p>
                        <p className="text-xs text-gray-500">{tx.date}</p>
                      </div>
                    </div>
                    <span className={`font-semibold text-sm ${tx.color}`}>{tx.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Market Cap */}
          <div className="lg:col-span-4">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Market cap</h3>
              <p className="text-gray-600 text-sm mb-6">
                The global crypto market cap is $1.44T, a <span className="text-red-500">3.99%</span> decrease over the last day.
              </p>

              <div className="space-y-4">
                {marketData.map((coin, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                        <coin.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{coin.price}</p>
                        <p className="text-xs text-gray-600">
                          {coin.name} <span className="text-gray-400">({coin.symbol})</span>
                          <span className="text-green-500 ml-1">{coin.change} <TrendingUp className="w-3 h-3 inline" /></span>
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-600 font-medium">{coin.marketCap}</p>
                      <p className="text-xs text-gray-500">{coin.volume}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Activity and Historical Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Activity */}
          <div className="lg:col-span-4">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Activity</h3>
                <div className="relative">
                  <button className="px-3 py-1 bg-white/50 rounded-lg text-sm text-gray-600 hover:bg-white/70 transition-all duration-300">
                    All <TrendingDown className="w-3 h-3 inline ml-1" />
                  </button>
                </div>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {activities.map((activity, index) => (
                  <div key={index} className="flex space-x-3">
                    <div className={`w-8 h-8 bg-gradient-to-r ${activity.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <activity.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          <span className="font-medium text-gray-800">{activity.user}</span> {activity.action}
                        </p>
                        <span className="text-xs text-gray-400 ml-2 flex-shrink-0">{activity.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Historical Bitcoin Price */}
          <div className="lg:col-span-8">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Historical Bitcoin Price and Volume</h3>

              {/* Chart Placeholder */}
              <div className="h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <p className="text-gray-600">Historical Bitcoin Price Chart</p>
                  <p className="text-sm text-gray-500">CryptoCompare widget integration would go here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoIndex;