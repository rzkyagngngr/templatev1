
import React, { useState } from 'react';
import { Line, Doughnut, Bar, RadialBar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler,
    RadialLinearScale
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Filler,
    RadialLinearScale
);

// --- Sub-View: Reports (Strict adherence to analytics-reports.html) ---
const ReportsView = () => {
    // Live Visits Pie Chart Data
    const liveVisitsData = {
        labels: ['Organic', 'Direct', 'Campaign'],
        datasets: [{
            data: [55, 28, 17],
            backgroundColor: ['#0ea5e9', '#6b7280', '#f59e0b'],
            borderWidth: 0,
        }]
    };
    const liveVisitsOptions = {
        cutout: '70%',
        plugins: { legend: { display: false } }
    };

    return (
        <div className="container-fluid">
            {/* Page Title */}
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="float-end">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Metrica</a></li>
                                <li className="breadcrumb-item"><a href="#">Analytics</a></li>
                                <li className="breadcrumb-item active">Reports</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Reports</h4>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Visitors By country</h4>
                        </div>
                        <div className="card-body position-relative">
                            <img src="/assets/images/small/svg-map.svg" alt="" className="img-fluid" />
                            {/* Placeholder for map overlays */}
                            <div className="absolute top-10 left-10 p-1 bg-white shadow-sm rounded">India / 2201</div>
                            <div className="absolute top-10 right-10 p-1 bg-white shadow-sm rounded">USA / 3201</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Live Visits Our New Site / Traffic Sources</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="h-48 flex items-center justify-center">
                                        <Doughnut data={liveVisitsData} options={liveVisitsOptions} />
                                    </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                    <h4 className="text-2xl font-bold">80</h4>
                                    <h6 className="text-sm font-medium mb-3">Right Now</h6>
                                    <div className="progress mb-2 rounded h-2 overflow-hidden flex bg-gray-200">
                                        <div className="bg-primary w-[55%]" role="progressbar" aria-label="Organic"></div>
                                        <div className="bg-secondary w-[28%]" role="progressbar" aria-label="Direct"></div>
                                        <div className="bg-warning w-[17%]" role="progressbar" aria-label="Campaign"></div>
                                    </div>
                                    <ul className="list-unstyled mb-0 space-y-2 text-sm">
                                        <li className="flex items-center gap-2"><i className="mdi mdi-circle-medium text-primary"></i> Organic</li>
                                        <li className="flex items-center gap-2"><i className="mdi mdi-circle-medium text-secondary"></i> Direct</li>
                                        <li className="flex items-center gap-2"><i className="mdi mdi-circle-medium text-warning"></i> Campaign</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mt-4">
                        <div className="card-header">
                            <h4 className="card-title">Top 3 Country</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {[
                                    { country: 'USA', visits: '50,289', change: '2.5%', flag: '/assets/images/flags/us_flag.jpg' },
                                    { country: 'Germany', visits: '50,289', change: '1.2%', flag: '/assets/images/flags/germany_flag.jpg' },
                                    { country: 'Spain', visits: '50,289', change: '0.8%', flag: '/assets/images/flags/spain_flag.jpg' }
                                ].map((item, index) => (
                                    <div className="col-lg-4" key={index}>
                                        <div className="media flex items-center">
                                            <img src={item.flag} className="me-2 thumb-xs w-8 h-8 rounded-full" alt="..." />
                                            <div className="media-body align-self-center">
                                                <div className="coin-bal">
                                                    <h4 className="m-0 text-lg font-bold">{item.visits}</h4>
                                                    <p className="text-muted mb-0 text-xs">{item.country} . Last Month <span className="text-emerald-500">{item.change} <i className="mdi mdi-arrow-up"></i></span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Social Report</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-sm table-bordered mb-0">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Network</th>
                                            <th>Sessions</th>
                                            <th>Con.Rate</th>
                                            <th>Avg.Time</th>
                                            <th>Bounce Rate</th>
                                            <th>%Change</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { name: 'Google', sessions: 4541, rate: '3.2%', time: '3:20', bounce: '57.8%', change: '17.8%', icon: 'google', color: 'text-red-500', up: true },
                                            { name: 'Yahoo', sessions: 1522, rate: '4.2%', time: '4:20', bounce: '62.8%', change: '-12.8%', icon: 'yahoo', color: 'text-blue-500', up: false },
                                            { name: 'UC Browser', sessions: 1292, rate: '3.2%', time: '5:20', bounce: '33.8%', change: '17.8%', icon: 'web', color: 'text-pink-500', up: true },
                                            { name: 'Facebook', sessions: 2241, rate: '4.9%', time: '2:20', bounce: '48.8%', change: '17.8%', icon: 'facebook', color: 'text-blue-600', up: true },
                                            { name: 'Twitter', sessions: 6806, rate: '3.2%', time: '3:20', bounce: '57.8%', change: '-11.8%', icon: 'twitter', color: 'text-sky-500', up: false },
                                            { name: 'LinkedIn', sessions: 4541, rate: '3.2%', time: '3:20', bounce: '52.8%', change: '17.8%', icon: 'linkedin', color: 'text-blue-700', up: true },
                                            { name: 'Pinterest', sessions: 3542, rate: '8.2%', time: '6:20', bounce: '61.8%', change: '23.8%', icon: 'pinterest', color: 'text-red-500', up: true },
                                            { name: 'Google+', sessions: 1124, rate: '9.2%', time: '4:10', bounce: '20.8%', change: '-9.8%', icon: 'google-plus', color: 'text-red-600', up: false },
                                            { name: 'Instagram', sessions: 3521, rate: '1.2%', time: '6:45', bounce: '66.2%', change: '34.8%', icon: 'instagram', color: 'text-pink-600', up: true },
                                            { name: 'WhatsApp', sessions: 96547, rate: '9.2%', time: '1:20', bounce: '57.8%', change: '48.8%', icon: 'whatsapp', color: 'text-green-500', up: true },
                                            { name: 'Other', sessions: 3214, rate: '6.2%', time: '4:40', bounce: '36.8%', change: '11.8%', icon: 'google-play', color: 'text-yellow-500', up: true },
                                        ].map((row, i) => (
                                            <tr key={i}>
                                                <td><i className={`mdi mdi-${row.icon} ${row.color} me-1 font-18`}></i>{row.name}</td>
                                                <td>{row.sessions}</td>
                                                <td>{row.rate}</td>
                                                <td>{row.time}</td>
                                                <td>{row.bounce}</td>
                                                <td>{row.change} <i className={`mdi mdi-arrow-${row.up ? 'up' : 'down'}-drop-circle-outline ${row.up ? 'text-success' : 'text-danger'} ml-1`}></i></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Sub-View: Customers (Strict adherence to analytics-customers.html) ---
const CustomersView = () => {
    // Chart options strictly mimicking sample appearance
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } },
        elements: { point: { radius: 0 } }
    };

    const growthData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{ data: [10, 25, 30, 50, 40, 60], borderColor: '#0ea5e9', borderWidth: 2, fill: true, backgroundColor: 'rgba(14, 165, 233, 0.1)', tension: 0.4 }]
    };

    const newCustomersData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{ data: [10, 20, 15, 25, 20, 30], borderColor: '#10b981', borderWidth: 2, borderDash: [5, 5], fill: false, tension: 0.4 }]
    };

    // Returning Customers Bar Chart
    const returningData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{ data: [10, 15, 20, 25, 30, 25], backgroundColor: '#14b8a6', borderRadius: 4 }]
    };

    // Bounce Rate Radial (Simulated with Doughnut for simplicitly as ChartJS radial is complex)
    const bounceData = {
        labels: ['Bounce'],
        datasets: [{ data: [50, 50], backgroundColor: ['#8b5cf6', '#e2e8f0'], borderWidth: 0 }]
    };

    return (
        <div className="container-fluid">
            {/* Page Title */}
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="float-end">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Metrica</a></li>
                                <li className="breadcrumb-item"><a href="#">Analytics</a></li>
                                <li className="breadcrumb-item active">Customers</li>
                            </ol>
                        </div>
                        <h4 className="page-title">Customers</h4>
                    </div>
                </div>
            </div>

            {/* Charts Row */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Customers Growth</h4>
                        </div>
                        <div className="card-body">
                            <div className="h-64">
                                <Line data={growthData} options={{ ...chartOptions, scales: { y: { grid: { color: '#f1f5f9' } }, x: { grid: { display: false } } } }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col align-self-center">
                                    <h6 className="font-15 m-0 mb-1">Returning Customers</h6>
                                    <p className="text-muted mb-0">Last Month : 150 <i className="mdi mdi-menu-up text-success"></i></p>
                                </div>
                                <div className="col-auto align-self-center">
                                    <div className="h-10 w-24">
                                        <Bar data={returningData} options={chartOptions} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col align-self-center">
                                    <h6 className="font-15 m-0 mb-1">New Customers</h6>
                                    <p className="text-muted mb-0">Last Month : 10 <i className="mdi mdi-menu-down text-danger"></i></p>
                                </div>
                                <div className="col-auto align-self-center">
                                    <div className="h-10 w-24">
                                        <Line data={newCustomersData} options={chartOptions} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col align-self-center">
                                    <h6 className="font-15 m-0 mb-1">Bounce Rate</h6>
                                    <p className="text-muted mb-0">Last Month : 50% <i className="mdi mdi-menu-up text-success"></i></p>
                                </div>
                                <div className="col-auto align-self-center">
                                    <div className="h-10 w-10">
                                        <Doughnut data={bounceData} options={{ cutout: '70%', plugins: { legend: { display: false } } }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Customers Details Table */}
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Customers Details</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Ext.</th>
                                            <th>City</th>
                                            <th>Start Date</th>
                                            <th>Completion</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { name: 'Unity Pugh', ext: 9958, city: 'Curicó', date: '2005/02/11', completion: '37%' },
                                            { name: 'Theodore Duran', ext: 8971, city: 'Dhanbad', date: '1999/04/07', completion: '97%' },
                                            { name: 'Kylie Bishop', ext: 3147, city: 'Norman', date: '2005/09/08', completion: '63%' },
                                            { name: 'Willow Gilliam', ext: 3497, city: 'Amqui', date: '2009/29/11', completion: '30%' },
                                            { name: 'Blossom Dickerson', ext: 5018, city: 'Kempten', date: '2006/11/09', completion: '17%' },
                                            { name: 'Elliott Snyder', ext: 3925, city: 'Enines', date: '2006/03/08', completion: '57%' },
                                            { name: 'Castor Pugh', ext: 9488, city: 'Neath', date: '2014/23/12', completion: '93%' },
                                            { name: 'Pearl Carlson', ext: 6231, city: 'Cobourg', date: '2014/31/08', completion: '100%' },
                                            { name: 'Deirdre Bridges', ext: 1579, city: 'Eberswalde-Finow', date: '2014/26/08', completion: '44%' },
                                        ].map((row, i) => (
                                            <tr key={i}>
                                                <td><img src={`/assets/images/users/user-${(i % 10) + 1}.jpg`} alt="" className="thumb-sm rounded-circle me-2" />{row.name}</td>
                                                <td>{row.ext}</td>
                                                <td>{row.city}</td>
                                                <td>{row.date}</td>
                                                <td>{row.completion}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Analytics({ view = 'reports' }) {
    return (
        <div className="page-content-tab">
            {view === 'reports' && <ReportsView />}
            {view === 'customers' && <CustomersView />}
        </div>
    );
}
