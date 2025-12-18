import React, { useState } from 'react';
import { Send, Download, Search, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const CryptoWallet = () => {
  const [sendModalOpen, setSendModalOpen] = useState(false);
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('BTC');

  const walletData = {
    BTC: {
      balance: '3.18424000',
      usdValue: '$ 33277.36605044718',
      icon: '₿',
      color: 'orange'
    },
    ETH: {
      balance: '1.17424000',
      usdValue: '$ 77.36605044718',
      icon: 'Ξ',
      color: 'blue'
    },
    DASH: {
      balance: '2.99424000',
      usdValue: '$ 277.36605044718',
      icon: 'Đ',
      color: 'green'
    },
    LTC: {
      balance: '5.00024000',
      usdValue: '$ 57.36605044718',
      icon: 'Ł',
      color: 'gray'
    }
  };

  const exchangeAccounts = [
    { name: 'Kraken', balance: '$8172.60', color: 'blue' },
    { name: 'Bittrex', balance: '$2243.12', color: 'green' },
    { name: 'Binance', balance: '$3524.00', color: 'orange' },
    { name: 'Coinex', balance: '$142.00', color: 'purple' }
  ];

  const transactions = [
    {
      id: '01',
      date: '14 Jan 2021',
      time: '12:05PM',
      txId: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba',
      type: 'Sent',
      value: '$521.36',
      typeColor: 'red'
    },
    {
      id: '02',
      date: '13 Jan 2021',
      time: '10:15AM',
      txId: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba',
      type: 'Received',
      value: '$990.00',
      typeColor: 'green'
    },
    {
      id: '03',
      date: '11 Jan 2021',
      time: '09:14PM',
      txId: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba',
      type: 'Sent',
      value: '$321.21',
      typeColor: 'red'
    },
    {
      id: '04',
      date: '08 Jan 2021',
      time: '12:05PM',
      txId: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba',
      type: 'Received',
      value: '$321.21',
      typeColor: 'green'
    },
    {
      id: '05',
      date: '06 Jan 2021',
      time: '11:30AM',
      txId: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba',
      type: 'Sent',
      value: '$458.80',
      typeColor: 'red'
    },
    {
      id: '06',
      date: '05 Jan 2021',
      time: '05:50PM',
      txId: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba',
      type: 'Received',
      value: '125.50',
      typeColor: 'green'
    },
    {
      id: '07',
      date: '04 Jan 2021',
      time: '08:10PM',
      txId: 'c12b001a15f9bd46ef1c6551386c6a2bcda1ab3eae5091fba',
      type: 'Sent',
      value: '$365.21',
      typeColor: 'red'
    }
  ];

  const currentWallet = walletData[activeTab];

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

        {/* Main Wallet Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Wallet Overview */}
          <div className="lg:col-span-6">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-6">
              <div className="grid grid-cols-12 gap-6">
                {/* Pie Chart Placeholder */}
                <div className="col-span-5 flex flex-col items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <hr className="w-16 border-gray-300 mb-4" />
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:scale-105 transition-all duration-300 text-sm font-medium">
                    + Invest
                  </button>
                </div>

                {/* Tabbed Wallet Content */}
                <div className="col-span-7">
                  {/* Tabs */}
                  <div className="flex space-x-4 mb-6">
                    {Object.keys(walletData).map((coin) => (
                      <button
                        key={coin}
                        onClick={() => setActiveTab(coin)}
                        className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                          activeTab === coin
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {coin}
                      </button>
                    ))}
                  </div>

                  {/* Wallet Content */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r from-${currentWallet.color}-500 to-${currentWallet.color}-600 rounded-full flex items-center justify-center`}>
                        <span className="text-white font-bold text-lg">{currentWallet.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{currentWallet.balance} {activeTab}</h3>
                        <p className="text-gray-600 text-sm">{currentWallet.usdValue}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSendModalOpen(true)}
                        className="px-3 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:scale-105 transition-all duration-300 text-sm flex items-center space-x-1"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send</span>
                      </button>
                      <button
                        onClick={() => setRequestModalOpen(true)}
                        className="px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:scale-105 transition-all duration-300 text-sm flex items-center space-x-1"
                      >
                        <Download className="w-4 h-4" />
                        <span>Request</span>
                      </button>
                    </div>
                  </div>

                  {/* Recent Transaction */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h6 className="text-sm font-semibold text-gray-800">Sent</h6>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            Confirmed
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          There are many variations of passages of have suffered alteration in some form, Lorem Ipsum available.
                        </p>
                      </div>
                      <span className="text-red-500 font-semibold text-sm">-$2531.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Exchange Accounts */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {exchangeAccounts.map((account, index) => (
                <div key={index} className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl p-4">
                  <span className="text-gray-600 text-sm font-semibold">Total Balance</span>
                  <div className="flex justify-between items-center mt-2 mb-3">
                    <h2 className="text-lg font-bold text-gray-800">{account.balance}</h2>
                    <span className={`px-2 py-1 bg-${account.color}-100 text-${account.color}-800 rounded-lg text-xs font-semibold`}>
                      {account.name}
                    </span>
                  </div>
                  <button className="w-full px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:scale-105 transition-all duration-300 text-sm font-medium">
                    Open Ac.
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-2xl overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-bold text-gray-800">Transaction History</h4>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>
                <div className="relative">
                  <button className="px-4 py-2 bg-white/50 border border-gray-200 rounded-lg text-sm flex items-center space-x-2 hover:bg-gray-50 transition-colors">
                    <span>Today</span>
                    <ArrowDownRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">No</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Transaction ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {transactions.map((tx, index) => (
                  <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tx.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tx.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tx.time}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                      {tx.txId.substring(0, 20)}...
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        tx.typeColor === 'red'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {tx.type}
                      </span>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${
                      tx.typeColor === 'red' ? 'text-red-600' : 'text-green-600'
                    }`}>
                      {tx.type === 'Sent' ? '-' : '+'}{tx.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
                        <span className="text-gray-500 mr-2">🔍</span>
                        <input
                          type="text"
                          placeholder="Can you scan"
                          className="flex-1 bg-transparent border-none outline-none"
                        />
                      </div>
                      <button className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-r-xl">
                        <span className="text-sm">🔍</span>
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
                        Copy
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

export default CryptoWallet;
