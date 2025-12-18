import React, { useState } from 'react';
import { Send, Download, Search, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Eye, EyeOff, QrCode, Copy, RefreshCw } from 'lucide-react';

const CryptoWallet = () => {
  const [sendModalOpen, setSendModalOpen] = useState(false);
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('BTC');
  const [showBalance, setShowBalance] = useState(true);

  const walletData = {
    BTC: {
      balance: '3.18424000',
      usdValue: '$ 33,277.37',
      change: '+2.45%',
      changeType: 'positive',
      icon: '₿',
      color: 'orange'
    },
    ETH: {
      balance: '1.17424000',
      usdValue: '$ 2,077.37',
      change: '+1.23%',
      changeType: 'positive',
      icon: 'Ξ',
      color: 'blue'
    },
    DASH: {
      balance: '2.99424000',
      usdValue: '$ 277.37',
      change: '-0.45%',
      changeType: 'negative',
      icon: 'Đ',
      color: 'green'
    },
    LTC: {
      balance: '5.00024000',
      usdValue: '$ 57.37',
      change: '+0.89%',
      changeType: 'positive',
      icon: 'Ł',
      color: 'gray'
    }
  };

  const assets = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      balance: '3.18424000',
      usdValue: '$33,277.37',
      change: '+2.45%',
      changeType: 'positive',
      icon: '₿',
      image: 'https://picsum.photos/40/40?random=1'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      balance: '1.17424000',
      usdValue: '$2,077.37',
      change: '+1.23%',
      changeType: 'positive',
      icon: 'Ξ',
      image: 'https://picsum.photos/40/40?random=2'
    },
    {
      name: 'Dash',
      symbol: 'DASH',
      balance: '2.99424000',
      usdValue: '$277.37',
      change: '-0.45%',
      changeType: 'negative',
      icon: 'Đ',
      image: 'https://picsum.photos/40/40?random=3'
    },
    {
      name: 'Litecoin',
      symbol: 'LTC',
      balance: '5.00024000',
      usdValue: '$57.37',
      change: '+0.89%',
      changeType: 'positive',
      icon: 'Ł',
      image: 'https://picsum.photos/40/40?random=4'
    }
  ];

  const transactions = [
    {
      id: '01',
      date: '14 Jan 2021',
      time: '12:05PM',
      txId: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba',
      type: 'Sent',
      value: '$521.36',
      typeColor: 'red',
      to: 'John Doe'
    },
    {
      id: '02',
      date: '13 Jan 2021',
      time: '10:30AM',
      txId: 'd23c002b26c8ce57f2d7662497d7b3cdbe2bc4fbf60a2fcb',
      type: 'Received',
      value: '$1,250.00',
      typeColor: 'green',
      from: 'Alice Smith'
    },
    {
      id: '03',
      date: '12 Jan 2021',
      time: '03:15PM',
      txId: 'e34d003c37d9df68g3e87735a8e8c4debf3cd5gcf71b3gdc',
      type: 'Sent',
      value: '$365.21',
      typeColor: 'red',
      to: 'Bob Johnson'
    },
    {
      id: '04',
      date: '11 Jan 2021',
      time: '09:45AM',
      txId: 'f45e004d48eaf79h4f98846b9f9d5efcg4de6hdg82c4hed',
      type: 'Received',
      value: '$750.50',
      typeColor: 'green',
      from: 'Crypto Exchange'
    },
    {
      id: '05',
      date: '10 Jan 2021',
      time: '02:20PM',
      txId: 'g56f005e59fbg8i5g0a957c0a0e6fgdh5ef7ieh93d5ife',
      type: 'Sent',
      value: '$200.00',
      typeColor: 'red',
      to: 'Merchant Store'
    },
    {
      id: '06',
      date: '04 Jan 2021',
      time: '08:10PM',
      txId: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba',
      type: 'Sent',
      value: '$365.21',
      typeColor: 'red',
      to: 'Jane Wilson'
    }
  ];

  const totalBalance = '$37,689.88';
  const totalChange = '+1.87%';

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Main Balance Card */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">₿</span>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Total Portfolio Value</p>
                <div className="flex items-center space-x-2">
                  <h1 className="text-3xl font-bold text-gray-800">
                    {showBalance ? totalBalance : '••••••'}
                  </h1>
                  <button
                    onClick={() => setShowBalance(!showBalance)}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    {showBalance ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
                  </button>
                </div>
                <p className={`text-sm font-medium ${totalChange.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {totalChange} today
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={() => setSendModalOpen(true)}
                className="flex-1 max-w-xs px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 font-semibold"
              >
                <Send className="w-5 h-5" />
                <span>Send</span>
              </button>

              <button
                onClick={() => setRequestModalOpen(true)}
                className="flex-1 max-w-xs px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 font-semibold"
              >
                <Download className="w-5 h-5" />
                <span>Receive</span>
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Portfolio Chart */}
          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Portfolio</h3>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <RefreshCw className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Chart Placeholder */}
            <div className="relative h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center mb-6">
              <img
                src="https://picsum.photos/300/200?random=chart"
                alt="Portfolio Chart"
                className="w-full h-full object-cover rounded-2xl opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <p className="text-gray-600 font-medium">Portfolio Growth</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-gray-600 text-sm">24h Change</p>
                <p className="text-green-600 font-bold text-lg">+1.87%</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm">7d Change</p>
                <p className="text-green-600 font-bold text-lg">+5.23%</p>
              </div>
            </div>
          </div>

          {/* Top Assets */}
          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Your Assets</h3>
            <div className="space-y-4">
              {assets.map((asset, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-2xl hover:bg-white/70 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <img
                      src={asset.image}
                      alt={asset.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{asset.name}</h4>
                      <p className="text-gray-600 text-sm">{asset.balance} {asset.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-800">{asset.usdValue}</p>
                    <p className={`text-sm font-medium ${asset.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                      {asset.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Recent Transactions</h3>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search transactions"
                    className="pl-10 pr-4 py-2 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 text-sm font-medium">
                  View All
                </button>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {transactions.slice(0, 5).map((tx, index) => (
              <div key={tx.id} className="p-6 hover:bg-white/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      tx.typeColor === 'red' ? 'bg-red-100' : 'bg-green-100'
                    }`}>
                      {tx.typeColor === 'red' ? (
                        <ArrowUpRight className={`w-5 h-5 ${tx.typeColor === 'red' ? 'text-red-600' : 'text-green-600'}`} />
                      ) : (
                        <ArrowDownRight className={`w-5 h-5 ${tx.typeColor === 'red' ? 'text-red-600' : 'text-green-600'}`} />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{tx.type} {tx.type === 'Sent' ? 'to' : 'from'} {tx.type === 'Sent' ? tx.to : tx.from}</h4>
                      <p className="text-gray-600 text-sm">{tx.date} at {tx.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold text-lg ${tx.typeColor === 'red' ? 'text-red-600' : 'text-green-600'}`}>
                      {tx.type === 'Sent' ? '-' : '+'}{tx.value}
                    </p>
                    <p className="text-gray-500 text-sm font-mono">{tx.txId.substring(0, 12)}...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Send Modal */}
        {sendModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/95 to-white/80 rounded-3xl border border-white/60 shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">Send Crypto</h3>
                  <button
                    onClick={() => setSendModalOpen(false)}
                    className="w-8 h-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Asset Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Select Asset</label>
                    <div className="grid grid-cols-2 gap-3">
                      {assets.map((asset, index) => (
                        <div key={index} className="p-3 bg-white/50 border border-gray-200 rounded-xl cursor-pointer hover:bg-white/70 transition-colors">
                          <div className="flex items-center space-x-3">
                            <img src={asset.image} alt={asset.name} className="w-8 h-8 rounded-full" />
                            <div>
                              <p className="font-semibold text-gray-800 text-sm">{asset.symbol}</p>
                              <p className="text-gray-600 text-xs">{asset.balance}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recipient */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Recipient</label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Enter wallet address or ENS name"
                        className="flex-1 px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <button className="px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl hover:scale-105 transition-all duration-300">
                        <QrCode className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Amount */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                    <div className="space-y-3">
                      <div className="flex items-center px-4 py-3 bg-white/50 border border-gray-200 rounded-xl">
                        <input
                          type="text"
                          placeholder="0.00"
                          className="flex-1 bg-transparent border-none outline-none text-lg font-semibold"
                        />
                        <span className="text-gray-600 font-medium">BTC</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>≈ $0.00</span>
                        <span>Balance: 3.18424000 BTC</span>
                      </div>
                    </div>
                  </div>

                  {/* Network Fee */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Network Fee</label>
                    <div className="space-y-2">
                      <label className="flex items-center justify-between p-3 bg-white/50 border border-gray-200 rounded-xl cursor-pointer hover:bg-white/70 transition-colors">
                        <div>
                          <p className="font-medium text-gray-800">Slow</p>
                          <p className="text-sm text-gray-600">~30 minutes</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-800">$0.50</p>
                          <input type="radio" name="networkFee" value="slow" className="ml-2" />
                        </div>
                      </label>
                      <label className="flex items-center justify-between p-3 bg-white/50 border border-gray-200 rounded-xl cursor-pointer hover:bg-white/70 transition-colors">
                        <div>
                          <p className="font-medium text-gray-800">Standard</p>
                          <p className="text-sm text-gray-600">~10 minutes</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-800">$1.20</p>
                          <input type="radio" name="networkFee" value="standard" className="ml-2" defaultChecked />
                        </div>
                      </label>
                      <label className="flex items-center justify-between p-3 bg-white/50 border border-gray-200 rounded-xl cursor-pointer hover:bg-white/70 transition-colors">
                        <div>
                          <p className="font-medium text-gray-800">Fast</p>
                          <p className="text-sm text-gray-600">~2 minutes</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-800">$2.50</p>
                          <input type="radio" name="networkFee" value="fast" className="ml-2" />
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Total (including fee)</span>
                      <span className="font-bold text-gray-800">$1,201.20</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 mt-6">
                  <button
                    onClick={() => setSendModalOpen(false)}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg font-semibold">
                    Send
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
                  <h3 className="text-xl font-bold text-gray-800">Receive Crypto</h3>
                  <button
                    onClick={() => setRequestModalOpen(false)}
                    className="w-8 h-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Asset Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Select Asset</label>
                    <div className="grid grid-cols-2 gap-3">
                      {assets.map((asset, index) => (
                        <div key={index} className="p-3 bg-white/50 border border-gray-200 rounded-xl cursor-pointer hover:bg-white/70 transition-colors">
                          <div className="flex items-center space-x-3">
                            <img src={asset.image} alt={asset.name} className="w-8 h-8 rounded-full" />
                            <div>
                              <p className="font-semibold text-gray-800 text-sm">{asset.symbol}</p>
                              <p className="text-gray-600 text-xs">{asset.balance}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* QR Code */}
                  <div className="text-center">
                    <div className="w-48 h-48 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center border-2 border-dashed border-gray-300">
                      <QrCode className="w-24 h-24 text-gray-400" />
                    </div>
                    <p className="text-gray-600 text-sm mb-4">Scan QR code to send crypto to this address</p>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your BTC Address</label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
                        className="flex-1 px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                        readOnly
                      />
                      <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300">
                        <Copy className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Share Options */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Share Address</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="flex items-center justify-center space-x-2 p-3 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors">
                        <span className="text-sm font-medium">Copy Link</span>
                      </button>
                      <button className="flex items-center justify-center space-x-2 p-3 bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition-colors">
                        <span className="text-sm font-medium">Share</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => setRequestModalOpen(false)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:scale-105 transition-all duration-300 shadow-lg font-semibold"
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

export default CryptoWallet;