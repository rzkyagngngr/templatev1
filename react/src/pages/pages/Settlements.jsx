import React, { useState } from 'react';
import { CreditCard, DollarSign, TrendingUp, Calendar, Download, Filter, ChevronDown } from 'lucide-react';

export default function Settlements() {
  const [settlements, setSettlements] = useState([
    {
      id: 'STL-2024-001',
      date: 'December 15, 2024',
      amount: 15250.00,
      status: 'Completed',
      transactions: 127,
      fees: 152.50,
      netAmount: 15097.50,
      method: 'Bank Transfer'
    },
    {
      id: 'STL-2024-002',
      date: 'December 8, 2024',
      amount: 12890.50,
      status: 'Completed',
      transactions: 98,
      fees: 128.91,
      netAmount: 12761.59,
      method: 'Bank Transfer'
    },
    {
      id: 'STL-2024-003',
      date: 'December 1, 2024',
      amount: 18450.75,
      status: 'Completed',
      transactions: 156,
      fees: 184.51,
      netAmount: 18266.24,
      method: 'Bank Transfer'
    },
    {
      id: 'STL-2024-004',
      date: 'November 24, 2024',
      amount: 14200.00,
      status: 'Pending',
      transactions: 112,
      fees: 142.00,
      netAmount: 14058.00,
      method: 'Bank Transfer'
    },
    {
      id: 'STL-2024-005',
      date: 'November 17, 2024',
      amount: 16780.25,
      status: 'Completed',
      transactions: 134,
      fees: 167.80,
      netAmount: 16612.45,
      method: 'Bank Transfer'
    }
  ]);

  const [filterStatus, setFilterStatus] = useState('all');
  const [expandedRow, setExpandedRow] = useState(null);

  const getStatusColor = (status) => {
    return status === 'Completed'
      ? 'bg-green-100 text-green-700'
      : 'bg-yellow-100 text-yellow-700';
  };

  const totalAmount = settlements.reduce((sum, s) => sum + s.amount, 0);
  const completedAmount = settlements
    .filter(s => s.status === 'Completed')
    .reduce((sum, s) => sum + s.amount, 0);
  const pendingAmount = settlements
    .filter(s => s.status === 'Pending')
    .reduce((sum, s) => sum + s.amount, 0);

  const filteredSettlements = settlements.filter(s =>
    filterStatus === 'all' || s.status.toLowerCase() === filterStatus.toLowerCase()
  );

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div>
        <h4 className="text-2xl font-bold text-black">Settlements</h4>
        <div className="text-sm text-gray-600 mt-2">Glacia / Financials / Settlements</div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card border border-gray-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Total Amount</p>
              <p className="text-3xl font-bold text-black">${totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
              <p className="text-xs text-gray-600 mt-2">Across all settlements</p>
            </div>
            <DollarSign size={32} className="text-blue-600 opacity-20" />
          </div>
        </div>

        <div className="glass-card border border-gray-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Completed</p>
              <p className="text-3xl font-bold text-green-600">${completedAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
              <p className="text-xs text-gray-600 mt-2">{settlements.filter(s => s.status === 'Completed').length} settlements</p>
            </div>
            <TrendingUp size={32} className="text-green-600 opacity-20" />
          </div>
        </div>

        <div className="glass-card border border-gray-300 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm mb-1">Pending</p>
              <p className="text-3xl font-bold text-orange-600">${pendingAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
              <p className="text-xs text-gray-600 mt-2">{settlements.filter(s => s.status === 'Pending').length} settlements</p>
            </div>
            <Calendar size={32} className="text-orange-600 opacity-20" />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="glass-card border border-gray-300 p-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2">
          {['all', 'completed', 'pending'].map(status => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg transition font-medium capitalize ${
                filterStatus === status
                  ? 'bg-blue-600 ='
                  : 'bg-gray-100 text-black border border-gray-300 hover:bg-gray-200'
              }`}
            >
              {status === 'all' ? 'All' : status}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-50 transition font-medium">
          <Download size={18} /> Export
        </button>
      </div>

      {/* Settlements Table */}
      <div className="glass-card border border-gray-300 p-6 overflow-x-auto">
        <h5 className="text-lg font-semibold text-black mb-4">Settlement History</h5>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-3 px-4 text-xs font-bold text-black uppercase">Settlement ID</th>
              <th className="text-left py-3 px-4 text-xs font-bold text-black uppercase">Date</th>
              <th className="text-left py-3 px-4 text-xs font-bold text-black uppercase">Amount</th>
              <th className="text-left py-3 px-4 text-xs font-bold text-black uppercase">Transactions</th>
              <th className="text-left py-3 px-4 text-xs font-bold text-black uppercase">Status</th>
              <th className="text-center py-3 px-4 text-xs font-bold text-black uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSettlements.map((settlement) => (
              <React.Fragment key={settlement.id}>
                <tr className="border-b border-gray-300 hover:bg-gray-50 transition cursor-pointer">
                  <td className="py-3 px-4 text-black font-medium">{settlement.id}</td>
                  <td className="py-3 px-4 text-black">{settlement.date}</td>
                  <td className="py-3 px-4 text-black font-semibold">${settlement.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                  <td className="py-3 px-4 text-black">{settlement.transactions}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusColor(settlement.status)}`}>
                      {settlement.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => setExpandedRow(expandedRow === settlement.id ? null : settlement.id)}
                      className="p-2 hover:bg-gray-200 rounded-lg transition text-gray-600"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${expandedRow === settlement.id ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </td>
                </tr>

                {/* Expanded Details */}
                {expandedRow === settlement.id && (
                  <tr className="border-b border-gray-300 bg-gray-50">
                    <td colSpan="6" className="p-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-gray-600 text-sm mb-1">Gross Amount</p>
                          <p className="text-black font-semibold">${settlement.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm mb-1">Fees</p>
                          <p className="text-black font-semibold text-red-600">-${settlement.fees.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm mb-1">Net Amount</p>
                          <p className="text-black font-semibold text-green-600">${settlement.netAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm mb-1">Payment Method</p>
                          <p className="text-black font-semibold">{settlement.method}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <button className="px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-100 transition font-medium text-sm">
                          View Details
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-black rounded-lg hover:bg-gray-100 transition font-medium text-sm flex items-center gap-2">
                          <Download size={16} /> Download Receipt
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Settlement Details */}
      <div className="glass-card border border-gray-300 p-6">
        <h5 className="text-lg font-semibold text-black mb-4">Settlement Details</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h6 className="text-black font-semibold mb-3">Latest Settlement (STL-2024-001)</h6>
            <div className="space-y-2">
              <div className="flex justify-between text-black text-sm">
                <span>Settlement Date:</span>
                <span className="font-medium">December 15, 2024</span>
              </div>
              <div className="flex justify-between text-black text-sm">
                <span>Settlement Period:</span>
                <span className="font-medium">Dec 8 - Dec 14, 2024</span>
              </div>
              <div className="flex justify-between text-black text-sm">
                <span>Processing Time:</span>
                <span className="font-medium">1-2 Business Days</span>
              </div>
              <div className="flex justify-between text-black text-sm">
                <span>Status:</span>
                <span className="font-medium text-green-600">Completed</span>
              </div>
            </div>
          </div>

          <div>
            <h6 className="text-black font-semibold mb-3">Financial Summary</h6>
            <div className="space-y-2 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between text-black text-sm">
                <span>Total Revenue:</span>
                <span className="font-medium">$15,250.00</span>
              </div>
              <div className="flex justify-between text-black text-sm">
                <span>Processing Fees (1.0%):</span>
                <span className="font-medium">-$152.50</span>
              </div>
              <div className="border-t border-gray-300 pt-2 mt-2 flex justify-between text-black font-semibold">
                <span>Net Settlement:</span>
                <span className="text-green-600">$15,097.50</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settlement Schedule */}
      <div className="glass-card border border-gray-300 p-6">
        <h5 className="text-lg font-semibold text-black mb-4">Settlement Schedule</h5>
        <p className="text-black mb-4">Settlements are processed every 7 days</p>
        <div className="space-y-3">
          {[
            { date: 'Every Sunday', time: '11:59 PM EST', description: 'Settlement period ends' },
            { date: 'Next Monday', time: '2:00 PM EST', description: 'Settlement processing begins' },
            { date: 'Within 2 days', time: 'Varies', description: 'Funds transferred to bank account' }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-slate-900 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                {i + 1}
              </div>
              <div>
                <p className="text-black font-semibold">{item.date}</p>
                <p className="text-sm text-gray-600">{item.description} - {item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
