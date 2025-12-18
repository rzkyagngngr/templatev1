import React from 'react';
import Chart from 'react-apexcharts';
import { TrendingUp, BarChart3, PieChart, Activity, AreaChart, LineChart, Radar, Clock } from 'lucide-react';

export default function ChartsApex() {
    // 1. Line Chart - Basic
    const lineChartOptions = {
        chart: { type: 'line', fontFamily: 'inherit', toolbar: { show: true } },
        colors: ['#3B82F6', '#10B981'],
        stroke: { curve: 'smooth', width: 3 },
        xaxis: { 
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            labels: { style: { colors: '#6B7280', fontSize: '12px' } }
        },
        yaxis: { labels: { style: { colors: '#6B7280' } } },
        grid: { borderColor: '#E5E7EB' },
        tooltip: { theme: 'light' }
    };
    const lineChartSeries = [
        { name: 'Sales', data: [30, 40, 35, 50, 49, 60] },
        { name: 'Revenue', data: [23, 11, 22, 27, 13, 22] }
    ];

    // 2. Spline Curve Line Chart
    const splineChartOptions = {
        chart: { type: 'line', fontFamily: 'inherit', toolbar: { show: true } },
        colors: ['#EC4899'],
        stroke: { curve: 'monotoneCubic', width: 3 },
        xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
        grid: { borderColor: '#E5E7EB' },
    };
    const splineChartSeries = [{ name: 'Performance', data: [10, 40, 35, 50, 49, 60] }];

    // 3. Line Chart with Data Points
    const pointsChartOptions = {
        chart: { type: 'line', fontFamily: 'inherit' },
        colors: ['#F59E0B'],
        stroke: { curve: 'smooth', width: 2 },
        markers: { size: 6, colors: ['#F59E0B'], strokeColors: '#fff', strokeWidth: 2 },
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    };
    const pointsChartSeries = [{ name: 'Data Points', data: [30, 40, 35, 50, 49, 60] }];

    // 4. Bar Chart
    const barChartOptions = {
        chart: { type: 'bar', fontFamily: 'inherit', toolbar: { show: true } },
        colors: ['#6366F1', '#8B5CF6'],
        xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
        dataLabels: { enabled: true }
    };
    const barChartSeries = [
        { name: 'Expected', data: [30, 40, 35, 50] },
        { name: 'Actual', data: [25, 42, 38, 48] }
    ];

    // 5. Horizontal Bar Chart
    const hbarChartOptions = {
        chart: { type: 'bar', fontFamily: 'inherit' },
        plotOptions: { bar: { horizontal: true } },
        colors: ['#10B981'],
        xaxis: { categories: ['Product A', 'Product B', 'Product C', 'Product D'] },
    };
    const hbarChartSeries = [{ name: 'Sales', data: [45, 52, 38, 45] }];

    // 6. Stacked Bar Chart
    const stackedBarOptions = {
        chart: { type: 'bar', fontFamily: 'inherit', stacked: true },
        colors: ['#3B82F6', '#8B5CF6', '#EC4899'],
        xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr'] },
    };
    const stackedBarSeries = [
        { name: 'Series A', data: [10, 15, 12, 18] },
        { name: 'Series B', data: [5, 8, 10, 12] },
        { name: 'Series C', data: [8, 10, 6, 9] }
    ];

    // 7. Area Chart
    const areaChartOptions = {
        chart: { type: 'area', fontFamily: 'inherit' },
        colors: ['#EC4899'],
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.1 } },
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        stroke: { curve: 'smooth' },
    };
    const areaChartSeries = [{ name: 'Website Analytics', data: [10, 40, 35, 50, 49, 60, 70] }];

    // 8. Stacked Area Chart
    const stackedAreaOptions = {
        chart: { type: 'area', fontFamily: 'inherit', stacked: true },
        colors: ['#3B82F6', '#10B981', '#F59E0B'],
        xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
        stroke: { curve: 'smooth' }
    };
    const stackedAreaSeries = [
        { name: 'Layer A', data: [10, 20, 15, 25, 30] },
        { name: 'Layer B', data: [5, 10, 8, 12, 15] },
        { name: 'Layer C', data: [8, 12, 10, 15, 20] }
    ];

    // 9. Pie Chart
    const pieChartOptions = {
        chart: { type: 'pie', fontFamily: 'inherit' },
        colors: ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B'],
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        tooltip: { theme: 'light' }
    };
    const pieChartSeries = [35, 25, 20, 20];

    // 10. Donut Chart
    const donutChartOptions = {
        chart: { type: 'donut', fontFamily: 'inherit' },
        colors: ['#10B981', '#06B6D4', '#F59E0B', '#EF4444'],
        labels: ['Segment 1', 'Segment 2', 'Segment 3', 'Segment 4'],
        plotOptions: { pie: { donut: { size: '65%' } } }
    };
    const donutChartSeries = [30, 25, 20, 25];

    // 11. Radial Bar Chart
    const radialOptions = {
        chart: { type: 'radialBar', fontFamily: 'inherit' },
        colors: ['#3B82F6', '#10B981', '#F59E0B'],
        plotOptions: { radialBar: { dataLabels: { name: { fontSize: '16px' }, value: { fontSize: '14px' } } } },
        labels: ['CPU', 'Memory', 'Disk']
    };
    const radialSeries = [67, 84, 54];

    // 12. Scatter Chart
    const scatterOptions = {
        chart: { type: 'scatter', fontFamily: 'inherit', toolbar: { show: true } },
        colors: ['#EC4899', '#3B82F6'],
        xaxis: { type: 'numeric', labels: { style: { colors: '#6B7280' } } },
        yaxis: { labels: { style: { colors: '#6B7280' } } }
    };
    const scatterSeries = [
        { name: 'Series A', data: [[10, 20], [20, 30], [30, 35], [40, 45], [50, 55]] },
        { name: 'Series B', data: [[15, 25], [25, 35], [35, 40], [45, 50], [55, 60]] }
    ];

    // 13. Bubble Chart
    const bubbleOptions = {
        chart: { type: 'bubble', fontFamily: 'inherit' },
        colors: ['#8B5CF6', '#F59E0B'],
        xaxis: { type: 'numeric' },
        yaxis: { labels: { style: { colors: '#6B7280' } } },
        plotOptions: { bubble: { scale: 1.5 } }
    };
    const bubbleSeries = [
        { name: 'Data A', data: [[10, 30, 20], [20, 40, 15], [30, 50, 25]] },
        { name: 'Data B', data: [[15, 35, 18], [25, 45, 22], [35, 55, 28]] }
    ];

    // 14. Heatmap
    const heatmapOptions = {
        chart: { type: 'heatmap', fontFamily: 'inherit' },
        plotOptions: { heatmap: { colorScale: { ranges: [
            { from: 0, to: 25, name: 'Low', color: '#D1D5DB' },
            { from: 26, to: 50, name: 'Medium', color: '#F59E0B' },
            { from: 51, to: 75, name: 'High', color: '#F97316' },
            { from: 76, to: 100, name: 'Critical', color: '#EF4444' }
        ]}}},
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] }
    };
    const heatmapSeries = [
        { name: 'Worker A', data: [20, 45, 60, 35, 70] },
        { name: 'Worker B', data: [30, 55, 50, 65, 75] },
        { name: 'Worker C', data: [40, 35, 70, 45, 55] }
    ];

    // 15. Candlestick Chart
    const candleOptions = {
        chart: { type: 'candlestick', fontFamily: 'inherit' },
        xaxis: { type: 'datetime' },
        yaxis: { labels: { style: { colors: '#6B7280' } } }
    };
    const candleSeries = [{
        name: 'Stock Price',
        data: [
            { x: new Date(2024, 0, 1), y: [100, 110, 95, 105] },
            { x: new Date(2024, 0, 2), y: [105, 115, 100, 110] },
            { x: new Date(2024, 0, 3), y: [110, 120, 108, 118] }
        ]
    }];

    // 16. Column Chart
    const columnOptions = {
        chart: { type: 'bar', fontFamily: 'inherit' },
        plotOptions: { bar: { columnWidth: '55%' } },
        colors: ['#06B6D4'],
        xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] }
    };
    const columnSeries = [{ name: 'Revenue', data: [30, 40, 35, 50, 49] }];

    // 17. Mixed Chart (Line + Column)
    const mixedOptions = {
        chart: { fontFamily: 'inherit', toolbar: { show: true } },
        colors: ['#3B82F6', '#EC4899'],
        xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
        yaxis: { title: { text: 'Values' } }
    };
    const mixedSeries = [
        { name: 'Line', type: 'line', data: [30, 40, 35, 50, 49] },
        { name: 'Column', type: 'column', data: [25, 35, 30, 45, 40] }
    ];

    // 18. Box Plot (Distribution)
    const boxOptions = {
        chart: { type: 'boxPlot', fontFamily: 'inherit' },
        colors: ['#10B981'],
        xaxis: { categories: ['Group A', 'Group B', 'Group C'] }
    };
    const boxSeries = [{
        name: 'Distribution',
        data: [
            { x: 'Group A', y: [10, 18, 25, 35, 45] },
            { x: 'Group B', y: [15, 22, 30, 40, 50] },
            { x: 'Group C', y: [12, 20, 28, 38, 48] }
        ]
    }];

    // 19. Range Area Chart
    const rangeAreaOptions = {
        chart: { type: 'rangeArea', fontFamily: 'inherit' },
        colors: ['#8B5CF6'],
        xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
        fill: { type: 'gradient' }
    };
    const rangeAreaSeries = [{
        name: 'Range',
        data: [
            { x: 'Jan', y: [20, 45] },
            { x: 'Feb', y: [25, 50] },
            { x: 'Mar', y: [22, 48] },
            { x: 'Apr', y: [28, 55] },
            { x: 'May', y: [30, 60] }
        ]
    }];

    // 20. Radar Chart
    const radarOptions = {
        chart: { type: 'radar', fontFamily: 'inherit' },
        colors: ['#3B82F6', '#EC4899'],
        xaxis: { categories: ['Speed', 'Quality', 'Reliability', 'Performance', 'Safety'] }
    };
    const radarSeries = [
        { name: 'Product A', data: [80, 70, 85, 75, 90] },
        { name: 'Product B', data: [75, 85, 80, 80, 85] }
    ];

    // 21. Polar Area Chart
    const polarOptions = {
        chart: { type: 'polarArea', fontFamily: 'inherit' },
        colors: ['#3B82F6', '#10B981', '#F59E0B', '#EC4899'],
        labels: ['Category A', 'Category B', 'Category C', 'Category D']
    };
    const polarSeries = [25, 35, 45, 30];

    // 22. TreeMap Chart
    const treemapOptions = {
        chart: { type: 'treemap', fontFamily: 'inherit' },
        colors: ['#3B82F6', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6'],
        plotOptions: { treemap: { enableShades: false } }
    };
    const treemapSeries = [{
        data: [
            { x: 'Segment A', y: 45 },
            { x: 'Segment B', y: 35 },
            { x: 'Segment C', y: 25 },
            { x: 'Segment D', y: 20 },
            { x: 'Segment E', y: 15 }
        ]
    }];

    // 23. Timeline Chart
    const timelineOptions = {
        chart: { type: 'rangeBar', fontFamily: 'inherit' },
        colors: ['#3B82F6', '#10B981', '#F59E0B'],
        xaxis: { type: 'datetime' },
        plotOptions: { bar: { horizontal: true } }
    };
    const timelineSeries = [{
        name: 'Task',
        data: [
            { x: 'Task 1', y: [new Date(2024, 0, 1).getTime(), new Date(2024, 0, 5).getTime()] },
            { x: 'Task 2', y: [new Date(2024, 0, 3).getTime(), new Date(2024, 0, 8).getTime()] },
            { x: 'Task 3', y: [new Date(2024, 0, 6).getTime(), new Date(2024, 0, 10).getTime()] }
        ]
    }];

    // 24. Waterfall Chart
    const waterfallOptions = {
        chart: { type: 'bar', fontFamily: 'inherit' },
        colors: ['#3B82F6'],
        xaxis: { categories: ['Start', 'Sales', 'Costs', 'Taxes', 'End'] }
    };
    const waterfallSeries = [{ name: 'Waterfall', data: [100, 30, -20, -15, 95] }];

    // 25. Funnel Chart
    const funnelOptions = {
        chart: { type: 'bar', fontFamily: 'inherit' },
        plotOptions: { bar: { horizontal: true } },
        colors: ['#3B82F6', '#06B6D4', '#10B981', '#F59E0B'],
        xaxis: { categories: ['Visitors', 'Leads', 'Customers', 'Revenue'] }
    };
    const funnelSeries = [{ name: 'Funnel', data: [1000, 450, 250, 150] }];

    // 26. Gradient Multi-line Chart
    const gradientLineOptions = {
        chart: { type: 'line', fontFamily: 'inherit' },
        colors: ['#3B82F6', '#10B981', '#F59E0B', '#EC4899'],
        stroke: { curve: 'smooth', width: 3 },
        fill: { type: 'gradient', gradient: { opacityFrom: 0.3, opacityTo: 0 } },
        xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] }
    };
    const gradientLineSeries = [
        { name: 'Series 1', data: [30, 40, 35, 50, 49, 60] },
        { name: 'Series 2', data: [23, 35, 30, 45, 40, 55] },
        { name: 'Series 3', data: [20, 30, 28, 40, 35, 50] },
        { name: 'Series 4', data: [25, 35, 32, 48, 45, 58] }
    ];


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full space-y-6">
                {/* Header */}
                <div>
                    <nav className="flex text-gray-600 text-sm mb-3">
                        <span className="hover:text-gray-900 cursor-pointer transition">Dashboard</span>
                        <span className="mx-2">/</span>
                        <span className="hover:text-gray-900 cursor-pointer transition">Charts</span>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900 font-semibold">Apex Charts</span>
                    </nav>
                    <h1 className="text-4xl font-bold text-gray-900">Apex Charts - 26 Chart Types</h1>
                    <p className="text-gray-600 mt-2">Complete collection of advanced charting styles and visualizations</p>
                </div>

                {/* Charts Grid - 26 Different Chart Types */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* 1. Line Chart */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">1. Line Chart</h3>
                        <p className="text-gray-600 text-sm mb-4">Multi-series trend line</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-blue-50/30 rounded-2xl border border-white/40">
                            <Chart options={lineChartOptions} series={lineChartSeries} type="line" height="100%" />
                        </div>
                    </div>

                    {/* 2. Spline Chart */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">2. Spline Curve</h3>
                        <p className="text-gray-600 text-sm mb-4">Smooth curve interpolation</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-pink-50/30 rounded-2xl border border-white/40">
                            <Chart options={splineChartOptions} series={splineChartSeries} type="line" height="100%" />
                        </div>
                    </div>

                    {/* 3. Line with Points */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">3. Line with Markers</h3>
                        <p className="text-gray-600 text-sm mb-4">Data point visualization</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-amber-50/30 rounded-2xl border border-white/40">
                            <Chart options={pointsChartOptions} series={pointsChartSeries} type="line" height="100%" />
                        </div>
                    </div>

                    {/* 4. Bar Chart */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">4. Bar Chart</h3>
                        <p className="text-gray-600 text-sm mb-4">Vertical bars comparison</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-indigo-50/30 rounded-2xl border border-white/40">
                            <Chart options={barChartOptions} series={barChartSeries} type="bar" height="100%" />
                        </div>
                    </div>

                    {/* 5. Horizontal Bar */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">5. Horizontal Bar</h3>
                        <p className="text-gray-600 text-sm mb-4">Horizontal bar layout</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-green-50/30 rounded-2xl border border-white/40">
                            <Chart options={hbarChartOptions} series={hbarChartSeries} type="bar" height="100%" />
                        </div>
                    </div>

                    {/* 6. Stacked Bar */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">6. Stacked Bar</h3>
                        <p className="text-gray-600 text-sm mb-4">Stacked series bars</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-indigo-50/30 rounded-2xl border border-white/40">
                            <Chart options={stackedBarOptions} series={stackedBarSeries} type="bar" height="100%" />
                        </div>
                    </div>

                    {/* 7. Area Chart */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">7. Area Chart</h3>
                        <p className="text-gray-600 text-sm mb-4">Gradient filled area</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-pink-50/30 rounded-2xl border border-white/40">
                            <Chart options={areaChartOptions} series={areaChartSeries} type="area" height="100%" />
                        </div>
                    </div>

                    {/* 8. Stacked Area */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">8. Stacked Area</h3>
                        <p className="text-gray-600 text-sm mb-4">Layered area chart</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-blue-50/30 rounded-2xl border border-white/40">
                            <Chart options={stackedAreaOptions} series={stackedAreaSeries} type="area" height="100%" />
                        </div>
                    </div>

                    {/* 9. Pie Chart */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">9. Pie Chart</h3>
                        <p className="text-gray-600 text-sm mb-4">Market share distribution</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-amber-50/30 rounded-2xl border border-white/40">
                            <Chart options={pieChartOptions} series={pieChartSeries} type="pie" height="100%" />
                        </div>
                    </div>

                    {/* 10. Donut Chart */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">10. Donut Chart</h3>
                        <p className="text-gray-600 text-sm mb-4">Donut with center space</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-green-50/30 rounded-2xl border border-white/40">
                            <Chart options={donutChartOptions} series={donutChartSeries} type="donut" height="100%" />
                        </div>
                    </div>

                    {/* 11. Radial Bar */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">11. Radial Bar</h3>
                        <p className="text-gray-600 text-sm mb-4">Circular gauge display</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-cyan-50/30 rounded-2xl border border-white/40">
                            <Chart options={radialOptions} series={radialSeries} type="radialBar" height="100%" />
                        </div>
                    </div>

                    {/* 12. Scatter Plot */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">12. Scatter Plot</h3>
                        <p className="text-gray-600 text-sm mb-4">X-Y correlation points</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-pink-50/30 rounded-2xl border border-white/40">
                            <Chart options={scatterOptions} series={scatterSeries} type="scatter" height="100%" />
                        </div>
                    </div>

                    {/* 13. Bubble Chart */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">13. Bubble Chart</h3>
                        <p className="text-gray-600 text-sm mb-4">Three-dimensional display</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-purple-50/30 rounded-2xl border border-white/40">
                            <Chart options={bubbleOptions} series={bubbleSeries} type="bubble" height="100%" />
                        </div>
                    </div>

                    {/* 14. Heatmap */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">14. Heatmap</h3>
                        <p className="text-gray-600 text-sm mb-4">Intensity color matrix</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-orange-50/30 rounded-2xl border border-white/40">
                            <Chart options={heatmapOptions} series={heatmapSeries} type="heatmap" height="100%" />
                        </div>
                    </div>

                    {/* 15. Candlestick */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">15. Candlestick</h3>
                        <p className="text-gray-600 text-sm mb-4">OHLC stock chart</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-red-50/30 rounded-2xl border border-white/40">
                            <Chart options={candleOptions} series={candleSeries} type="candlestick" height="100%" />
                        </div>
                    </div>

                    {/* 16. Column Chart */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">16. Column Chart</h3>
                        <p className="text-gray-600 text-sm mb-4">Vertical columns</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-cyan-50/30 rounded-2xl border border-white/40">
                            <Chart options={columnOptions} series={columnSeries} type="bar" height="100%" />
                        </div>
                    </div>

                    {/* 17. Mixed Chart */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">17. Mixed Chart</h3>
                        <p className="text-gray-600 text-sm mb-4">Line + Column combo</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-blue-50/30 rounded-2xl border border-white/40">
                            <Chart options={mixedOptions} series={mixedSeries} type="area" height="100%" />
                        </div>
                    </div>

                    {/* 18. Box Plot */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">18. Box Plot</h3>
                        <p className="text-gray-600 text-sm mb-4">Distribution analysis</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-green-50/30 rounded-2xl border border-white/40">
                            <Chart options={boxOptions} series={boxSeries} type="boxPlot" height="100%" />
                        </div>
                    </div>

                    {/* 19. Range Area */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">19. Range Area</h3>
                        <p className="text-gray-600 text-sm mb-4">High-low range band</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-purple-50/30 rounded-2xl border border-white/40">
                            <Chart options={rangeAreaOptions} series={rangeAreaSeries} type="rangeArea" height="100%" />
                        </div>
                    </div>

                    {/* 20. Radar Chart */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">20. Radar Chart</h3>
                        <p className="text-gray-600 text-sm mb-4">Multi-axis comparison</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-blue-50/30 rounded-2xl border border-white/40">
                            <Chart options={radarOptions} series={radarSeries} type="radar" height="100%" />
                        </div>
                    </div>

                    {/* 21. Polar Area */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">21. Polar Area</h3>
                        <p className="text-gray-600 text-sm mb-4">Polar coordinate plot</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-pink-50/30 rounded-2xl border border-white/40">
                            <Chart options={polarOptions} series={polarSeries} type="polarArea" height="100%" />
                        </div>
                    </div>

                    {/* 22. TreeMap */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">22. TreeMap</h3>
                        <p className="text-gray-600 text-sm mb-4">Hierarchical rectangles</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-green-50/30 rounded-2xl border border-white/40">
                            <Chart options={treemapOptions} series={treemapSeries} type="treemap" height="100%" />
                        </div>
                    </div>

                    {/* 23. Timeline */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">23. Timeline (Gantt)</h3>
                        <p className="text-gray-600 text-sm mb-4">Project timeline display</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-blue-50/30 rounded-2xl border border-white/40">
                            <Chart options={timelineOptions} series={timelineSeries} type="rangeBar" height="100%" />
                        </div>
                    </div>

                    {/* 24. Waterfall */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">24. Waterfall</h3>
                        <p className="text-gray-600 text-sm mb-4">Cumulative change flow</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-indigo-50/30 rounded-2xl border border-white/40">
                            <Chart options={waterfallOptions} series={waterfallSeries} type="bar" height="100%" />
                        </div>
                    </div>

                    {/* 25. Funnel */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">25. Funnel</h3>
                        <p className="text-gray-600 text-sm mb-4">Conversion funnel</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-amber-50/30 rounded-2xl border border-white/40">
                            <Chart options={funnelOptions} series={funnelSeries} type="bar" height="100%" />
                        </div>
                    </div>

                    {/* 26. Gradient Multi-line */}
                    <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl shadow-xl shadow-black/5 p-6 hover:shadow-2xl transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">26. Gradient Multi-Line</h3>
                        <p className="text-gray-600 text-sm mb-4">Multi-series gradient lines</p>
                        <div className="h-64 bg-gradient-to-br from-white/30 to-blue-50/30 rounded-2xl border border-white/40">
                            <Chart options={gradientLineOptions} series={gradientLineSeries} type="line" height="100%" />
                        </div>
                    </div>
                </div>

                {/* Chart Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { label: 'Chart Types', value: '26+', color: 'blue' },
                        { label: 'Data Series', value: 'Unlimited', color: 'green' },
                        { label: 'Customization', value: 'Full Control', color: 'purple' },
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
