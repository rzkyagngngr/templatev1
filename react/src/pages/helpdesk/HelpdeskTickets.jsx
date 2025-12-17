import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

export default function HelpdeskTickets() {
  const [chartDataReady, setChartDataReady] = useState(true);

  // Stat cards data from sample
  const stats = [
    { label: 'Tickets Worked', value: '380', trend: '+8.5%', icon: 'ðŸ“Œ' },
    { label: 'Tickets Completed', value: '92', trend: '+8.5%', icon: 'âœ“' },
    { label: 'Hours Worked', value: '420:30 min', trend: '+00:01:05', icon: 'ðŸ•' }
  ];

  // Chart configuration for "Tickets By Status"
  const statusChartOptions = {
    chart: {
      type: 'pie',
      height: 305,
      dropShadow: {
        enabled: true,
        top: 4,
        left: 0,
        blur: 2,
        color: '#45404a2e',
        opacity: 0.35
      }
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    series: [44, 55, 41, 17, 15],
    labels: ['Close', 'Open', 'Assigned', 'Approved', 'Resolved'],
    colors: ['#0abb87', '#7367f0', '#ff9f43', '#fd3c97', '#41cbd8'],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      verticalAlign: 'middle',
      fontSize: '14px',
      offsetX: 0,
      offsetY: 5
    }
  };

  // Chart configuration for "Tickets By Request Type"
  const requestChartOptions = {
    chart: {
      type: 'bar',
      height: 275,
      toolbar: { show: false },
      dropShadow: {
        enabled: true,
        top: 5,
        left: 5,
        blur: 5,
        color: '#45404a2e',
        opacity: 0.35
      }
    },
    plotOptions: {
      bar: {
        barHeight: '50%',
        distributed: false,
        horizontal: true,
        endingShape: 'rounded'
      }
    },
    dataLabels: { enabled: false },
    series: [{ data: [40, 48, 70, 50, 80, 60, 90] }],
    colors: ['#506ee4'],
    xaxis: {
      categories: ['Upgrade Req.', 'Installation Req.', 'Code Req.', 'Bug Fix', 'Production', 'Web', 'Insurance']
    },
    stroke: { show: true, width: 1, colors: ['#fff'] },
    grid: { borderColor: '#f1f3fa', strokeDashArray: 4 }
  };

  // Sample tickets data
  const tickets = [
    { id: '#1236', customer: 'Donald Gardner', subject: 'Bug-report simply dummy text of the printing and typesetting', priority: 'Medium', status: 'New', responseTime: '14 min' },
    { id: '#3569', customer: 'Kevin J. Heal', subject: 'The application continuous is a long established fact that a reader.', priority: 'Critical', status: 'Solved', responseTime: '45 min' },
    { id: '#9874', customer: 'Frank M. Lyons', subject: 'See how it work start are many variations of passages of Lorem Ipsum available.', priority: 'Low', status: 'Open', responseTime: '1 hour' },
    { id: '#5412', customer: 'Robert C. Golding', subject: 'I can\'t upload file first line of Ipsum lorem ipsum dolor sit amet.', priority: 'Medium', status: 'New', responseTime: '2 hours' },
    { id: '#3258', customer: 'Hyman M. Cross', subject: 'How do i upgrade my profile?', priority: 'Low', status: 'Solved', responseTime: '4 hours' },
    { id: '#6636', customer: 'Phillip T. Morse', subject: 'Can i help you in this project?', priority: 'Critical', status: 'Open', responseTime: '4 hours' }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical':
        return 'bg-red-500/20 text-red-600';
      case 'Medium':
        return 'bg-yellow-500/20 text-yellow-600';
      case 'Low':
        return 'bg-blue-500/20 text-blue-600';
      default:
        return 'bg-gray-500/20 text-gray-600';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Solved':
        return 'bg-green-500/20 text-green-600';
      case 'New':
        return 'bg-yellow-500/20 text-yellow-600';
      case 'Open':
        return 'bg-blue-500/20 text-blue-600';
      default:
        return 'bg-gray-500/20 text-gray-600';
    }
  };

  return (
    <div className="w-full space-y-6 p-6">
      {/* Header */}
      <div>
        <h4 className="text-2xl font-bold text-black tracking-wide">Tickets</h4>
        <div className="text-sm text-black mt-2">
          <span>Glacia</span>
          <span className="mx-2">/</span>
          <span>Helpdesk</span>
          <span className="mx-2">/</span>
          <span className="text-black">Tickets</span>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-card p-6 border border-gray-300">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-black text-xs font-semibold uppercase tracking-widest">{stat.label}</p>
                <h4 className="text-4xl font-bold text-black my-3">{stat.value}</h4>
                <p className="text-black text-sm"><span className="text-green-600 font-semibold">{stat.trend}</span> up from Yesterday</p>
              </div>
              <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-3xl border border-gray-300">
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tickets By Status */}
        <div className="glass-card p-6 border border-gray-300">
          <h5 className="text-lg font-semibold text-black mb-4">Tickets By Status</h5>
          {chartDataReady && (
            <Chart
              options={statusChartOptions}
              series={statusChartOptions.series}
              type="pie"
              height={305}
            />
          )}
        </div>

        {/* Tickets By Request Type */}
        <div className="glass-card p-6 border border-gray-300">
          <h5 className="text-lg font-semibold text-black mb-4">Tickets By Request Type</h5>
          {chartDataReady && (
            <Chart
              options={requestChartOptions}
              series={requestChartOptions.series}
              type="bar"
              height={275}
            />
          )}
        </div>
      </div>

      {/* All Tickets Table */}
      <div className="glass-card p-6 border border-gray-300">
        <div className="flex justify-between items-center mb-6">
          <h5 className="text-lg font-semibold text-black">All Tickets</h5>
          <button className="bg-blue-600 hover:bg-blue-700 text-slate-900 text-sm px-4 py-2 rounded-md transition">
            Create Ticket
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-4 px-4 text-xs font-bold text-black uppercase">ID</th>
                <th className="text-left py-4 px-4 text-xs font-bold text-black uppercase">Customer</th>
                <th className="text-left py-4 px-4 text-xs font-bold text-black uppercase">Subject</th>
                <th className="text-left py-4 px-4 text-xs font-bold text-black uppercase">Priority</th>
                <th className="text-left py-4 px-4 text-xs font-bold text-black uppercase">Status</th>
                <th className="text-left py-4 px-4 text-xs font-bold text-black uppercase">Response Time</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-b border-gray-200 hover:bg-gray-100 transition">
                  <td className="py-4 px-4 text-black text-sm font-semibold">{ticket.id}</td>
                  <td className="py-4 px-4 text-black text-sm">{ticket.customer}</td>
                  <td className="py-4 px-4 text-black text-sm truncate max-w-xs">{ticket.subject}</td>
                  <td className="py-4 px-4">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-black text-sm">{ticket.responseTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
