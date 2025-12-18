import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar, Doughnut, Radar, PolarArea, Bubble } from 'react-chartjs-2';
import { BarChart3, PieChart, TrendingUp } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

export default function ChartsChartjs() {
    // 1. Line Chart
    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Series 1',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                tension: 0.4,
            },
            {
                label: 'Series 2',
                data: [5, 10, 15, 8, 12, 9],
                borderColor: '#10B981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                tension: 0.4,
            },
        ],
    };

    // 2. Smooth Line Chart
    const smoothLineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Smooth Curve',
                data: [10, 25, 15, 30, 20, 35],
                borderColor: '#EC4899',
                backgroundColor: 'rgba(236, 72, 153, 0.15)',
                tension: 0.8,
                fill: true,
            },
        ],
    };

    // 3. Filled Area Chart
    const areaData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Area Chart',
                data: [30, 40, 35, 50, 49, 60, 70],
                borderColor: '#F59E0B',
                backgroundColor: 'rgba(245, 158, 11, 0.3)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    // 4. Multi-Line with Points
    const multiLineData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Revenue',
                data: [45, 52, 48, 65],
                borderColor: '#3B82F6',
                pointBackgroundColor: '#3B82F6',
                pointRadius: 5,
                pointHoverRadius: 7,
            },
            {
                label: 'Profit',
                data: [30, 35, 28, 40],
                borderColor: '#10B981',
                pointBackgroundColor: '#10B981',
                pointRadius: 5,
                pointHoverRadius: 7,
            },
        ],
    };

    // 5. Bar Chart
    const barData = {
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        datasets: [
            {
                label: 'Sales',
                data: [30, 40, 35, 50],
                backgroundColor: '#6366F1',
            },
            {
                label: 'Revenue',
                data: [25, 45, 40, 55],
                backgroundColor: '#8B5CF6',
            },
        ],
    };

    // 6. Stacked Bar Chart
    const stackedBarData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Series A',
                data: [10, 15, 12, 18, 20],
                backgroundColor: '#3B82F6',
            },
            {
                label: 'Series B',
                data: [5, 8, 10, 12, 15],
                backgroundColor: '#EC4899',
            },
            {
                label: 'Series C',
                data: [8, 10, 6, 9, 12],
                backgroundColor: '#10B981',
            },
        ],
    };

    // 7. Horizontal Bar
    const horizontalBarData = {
        labels: ['Metric 1', 'Metric 2', 'Metric 3', 'Metric 4'],
        datasets: [
            {
                label: 'Values',
                data: [45, 52, 38, 65],
                backgroundColor: '#F59E0B',
            },
        ],
    };

    // 8. Doughnut Chart
    const doughnutData = {
        labels: ['Direct', 'Referral', 'Social', 'Other'],
        datasets: [
            {
                data: [300, 150, 200, 100],
                backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'],
                borderColor: '#fff',
                borderWidth: 2,
            },
        ],
    };

    // 9. Pie Chart
    const pieData = {
        labels: ['Segment A', 'Segment B', 'Segment C', 'Segment D', 'Segment E'],
        datasets: [
            {
                data: [25, 20, 15, 25, 15],
                backgroundColor: ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981'],
                borderColor: '#fff',
                borderWidth: 2,
            },
        ],
    };

    // 10. Radar Chart
    const radarData = {
        labels: ['Speed', 'Quality', 'Reliability', 'Comfort', 'Safety'],
        datasets: [
            {
                label: 'Product A',
                data: [80, 70, 85, 75, 90],
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
            },
            {
                label: 'Product B',
                data: [75, 85, 80, 80, 85],
                borderColor: '#EC4899',
                backgroundColor: 'rgba(236, 72, 153, 0.2)',
            },
        ],
    };

    // 11. Polar Area Chart
    const polarData = {
        labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
        datasets: [
            {
                label: 'Metric',
                data: [25, 35, 45, 30, 40],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.5)',
                    'rgba(16, 185, 129, 0.5)',
                    'rgba(245, 158, 11, 0.5)',
                    'rgba(236, 72, 153, 0.5)',
                    'rgba(139, 92, 246, 0.5)',
                ],
                borderColor: ['#3B82F6', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6'],
                borderWidth: 2,
            },
        ],
    };

    // 12. Bubble Chart
    const bubbleData = {
        datasets: [
            {
                label: 'Dataset 1',
                data: [
                    { x: 10, y: 20, r: 5 },
                    { x: 15, y: 25, r: 8 },
                    { x: 20, y: 30, r: 12 },
                    { x: 25, y: 35, r: 10 },
                ],
                backgroundColor: 'rgba(59, 130, 246, 0.6)',
            },
            {
                label: 'Dataset 2',
                data: [
                    { x: 12, y: 22, r: 6 },
                    { x: 18, y: 28, r: 9 },
                    { x: 22, y: 32, r: 11 },
                ],
                backgroundColor: 'rgba(236, 72, 153, 0.6)',
            },
        ],
    };

    // 13. Mixed Bar & Line
    const mixedData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                type: 'bar',
                label: 'Bar Data',
                data: [30, 40, 35, 50, 49],
                backgroundColor: '#3B82F6',
            },
            {
                type: 'line',
                label: 'Line Data',
                data: [25, 35, 30, 45, 40],
                borderColor: '#EC4899',
                backgroundColor: 'rgba(236, 72, 153, 0.1)',
            },
        ],
    };

    // 14. Gradient Line
    const gradientLineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Gradient Series',
                data: [20, 35, 30, 45, 40, 55],
                borderColor: '#10B981',
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                    gradient.addColorStop(0, 'rgba(16, 185, 129, 0.5)');
                    gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
                    return gradient;
                },
                fill: true,
                tension: 0.4,
            },
        ],
    };

    // 15. Box Plot Simulation
    const boxPlotData = {
        labels: ['Group A', 'Group B', 'Group C'],
        datasets: [
            {
                label: 'Min',
                data: [10, 15, 12],
                backgroundColor: 'rgba(59, 130, 246, 0.3)',
            },
            {
                label: 'Avg',
                data: [25, 30, 28],
                backgroundColor: 'rgba(59, 130, 246, 0.6)',
            },
            {
                label: 'Max',
                data: [45, 50, 48],
                backgroundColor: 'rgba(59, 130, 246, 0.9)',
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: true, labels: { color: '#6B7280' } },
            tooltip: { backgroundColor: 'rgba(0,0,0,0.8)' },
        },
        scales: {
            y: { ticks: { color: '#6B7280' }, grid: { color: 'rgba(0,0,0,0.05)' } },
            x: { ticks: { color: '#6B7280' }, grid: { display: false } },
        },
    };

    const radarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { labels: { color: '#6B7280' } },
        },
        scales: {
            r: { ticks: { color: '#6B7280' }, grid: { color: 'rgba(0,0,0,0.1)' } },
        },
    };

    const polarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { labels: { color: '#6B7280' } },
        },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full space-y-6">
                <div>
                    <nav className="flex text-gray-600 text-sm mb-3">
                        <span className="hover:text-gray-900 cursor-pointer transition">Dashboard</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-gray-900 cursor-pointer transition">Charts</span>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-semibold">Chart.js</span>
                    </nav>
                    <h1 className="text-4xl font-bold text-gray-900">Chart.js - 15+ Chart Types</h1>
                    <p className="text-gray-600 mt-2">Comprehensive collection of Chart.js visualizations</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* 1. Line Chart */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">1. Line Chart</h3>
                        <p className="text-gray-600 text-sm mb-4">Multi-series trend line</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-blue-50/30 rounded-2xl border border-white/40">
                            <Line data={lineData} options={chartOptions} />
                        </div>
                    </div>

                    {/* 2. Smooth Line */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">2. Smooth Line</h3>
                        <p className="text-gray-600 text-sm mb-4">Smooth curve interpolation</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-pink-50/30 rounded-2xl border border-white/40">
                            <Line data={smoothLineData} options={chartOptions} />
                        </div>
                    </div>

                    {/* 3. Filled Area */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">3. Filled Area</h3>
                        <p className="text-gray-600 text-sm mb-4">Gradient filled area</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-amber-50/30 rounded-2xl border border-white/40">
                            <Line data={areaData} options={chartOptions} />
                        </div>
                    </div>

                    {/* 4. Multi-Line Points */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">4. Multi-Line Points</h3>
                        <p className="text-gray-600 text-sm mb-4">Data point markers</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-blue-50/30 rounded-2xl border border-white/40">
                            <Line data={multiLineData} options={chartOptions} />
                        </div>
                    </div>

                    {/* 5. Bar Chart */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">5. Bar Chart</h3>
                        <p className="text-gray-600 text-sm mb-4">Vertical bars comparison</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-indigo-50/30 rounded-2xl border border-white/40">
                            <Bar data={barData} options={chartOptions} />
                        </div>
                    </div>

                    {/* 6. Stacked Bar */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">6. Stacked Bar</h3>
                        <p className="text-gray-600 text-sm mb-4">Stacked series</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-purple-50/30 rounded-2xl border border-white/40">
                            <Bar data={stackedBarData} options={{ ...chartOptions, scales: { ...chartOptions.scales, x: { ...chartOptions.scales.x, stacked: true }, y: { ...chartOptions.scales.y, stacked: true } } }} />
                        </div>
                    </div>

                    {/* 7. Horizontal Bar */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">7. Horizontal Bar</h3>
                        <p className="text-gray-600 text-sm mb-4">Horizontal bars</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-orange-50/30 rounded-2xl border border-white/40">
                            <Bar data={horizontalBarData} options={{ ...chartOptions, indexAxis: 'y' }} />
                        </div>
                    </div>

                    {/* 8. Doughnut */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">8. Doughnut</h3>
                        <p className="text-gray-600 text-sm mb-4">Distribution view</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-green-50/30 rounded-2xl border border-white/40">
                            <Doughnut data={doughnutData} options={chartOptions} />
                        </div>
                    </div>

                    {/* 9. Pie Chart */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">9. Pie Chart</h3>
                        <p className="text-gray-600 text-sm mb-4">Market share</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-cyan-50/30 rounded-2xl border border-white/40">
                            <Doughnut data={pieData} options={chartOptions} />
                        </div>
                    </div>

                    {/* 10. Radar Chart */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">10. Radar Chart</h3>
                        <p className="text-gray-600 text-sm mb-4">Multi-axis comparison</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-blue-50/30 rounded-2xl border border-white/40">
                            <Radar data={radarData} options={radarOptions} />
                        </div>
                    </div>

                    {/* 11. Polar Area */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">11. Polar Area</h3>
                        <p className="text-gray-600 text-sm mb-4">Polar coordinates</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-pink-50/30 rounded-2xl border border-white/40">
                            <PolarArea data={polarData} options={polarOptions} />
                        </div>
                    </div>

                    {/* 12. Bubble Chart */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">12. Bubble Chart</h3>
                        <p className="text-gray-600 text-sm mb-4">Three-dimensional</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-purple-50/30 rounded-2xl border border-white/40">
                            <Bubble data={bubbleData} options={chartOptions} />
                        </div>
                    </div>

                    {/* 13. Mixed Chart */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">13. Mixed Chart</h3>
                        <p className="text-gray-600 text-sm mb-4">Bar + Line combo</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-indigo-50/30 rounded-2xl border border-white/40">
                            <Bar data={mixedData} options={chartOptions} />
                        </div>
                    </div>

                    {/* 14. Gradient Line */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">14. Gradient Line</h3>
                        <p className="text-gray-600 text-sm mb-4">Gradient fill</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-green-50/30 rounded-2xl border border-white/40">
                            <Line data={gradientLineData} options={chartOptions} />
                        </div>
                    </div>

                    {/* 15. Box Plot */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">15. Box Plot</h3>
                        <p className="text-gray-600 text-sm mb-4">Distribution analysis</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-red-50/30 rounded-2xl border border-white/40">
                            <Bar data={boxPlotData} options={{ ...chartOptions, scales: { ...chartOptions.scales, x: { ...chartOptions.scales.x, stacked: false } } }} />
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { label: 'Chart Types', value: '15+', color: 'blue' },
                        { label: 'React Support', value: 'Full', color: 'green' },
                        { label: 'Responsive', value: 'Always', color: 'purple' },
                    ].map((stat, idx) => {
                        const colorClass = {
                            blue: 'from-blue-400/20 to-blue-600/5 border-blue-200/40 text-blue-600',
                            green: 'from-green-400/20 to-green-600/5 border-green-200/40 text-green-600',
                            purple: 'from-purple-400/20 to-purple-600/5 border-purple-200/40 text-purple-600',
                        }[stat.color];
                        return (
                            <div key={idx} className={`backdrop-blur-2xl bg-gradient-to-br ${colorClass} border border-white/60 rounded-3xl p-6 shadow-xl shadow-black/5`}>
                                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
