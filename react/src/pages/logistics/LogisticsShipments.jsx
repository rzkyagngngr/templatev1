import React from 'react';
import { Package, Calendar, MapPin, User } from 'lucide-react';

export default function LogisticsShipments() {
  const shipments = [
    { id: 'SHIP-001', origin: 'New York', destination: 'Los Angeles', weight: '250 kg', date: '2025-12-15', status: 'In Transit' },
    { id: 'SHIP-002', origin: 'Chicago', destination: 'Miami', weight: '180 kg', date: '2025-12-14', status: 'Delivered' },
    { id: 'SHIP-003', origin: 'Boston', destination: 'Seattle', weight: '420 kg', date: '2025-12-16', status: 'Processing' },
    { id: 'SHIP-004', origin: 'Denver', destination: 'Phoenix', weight: '150 kg', date: '2025-12-13', status: 'Delivered' },
    { id: 'SHIP-005', origin: 'Portland', destination: 'San Diego', weight: '300 kg', date: '2025-12-16', status: 'Pending' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Pending': 'bg-yellow-100 text-yellow-700',
      'Processing': 'bg-blue-100 text-blue-700',
      'In Transit': 'bg-purple-100 text-purple-700',
      'Delivered': 'bg-green-100 text-green-700',
    };
    return colors[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black">Logistics Shipments</h1>
          <p className="text-black text-opacity-70 mt-2">CREATED</p>
        </div>

        {/* Shipments Table */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b border-gray-300">
                <tr>
                  <th className="px-6 py-4 text-left text-black font-semibold">Shipment ID</th>
                  <th className="px-6 py-4 text-left text-black font-semibold">Origin</th>
                  <th className="px-6 py-4 text-left text-black font-semibold">Destination</th>
                  <th className="px-6 py-4 text-left text-black font-semibold">Weight</th>
                  <th className="px-6 py-4 text-left text-black font-semibold">Date</th>
                  <th className="px-6 py-4 text-left text-black font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {shipments.map((shipment) => (
                  <tr key={shipment.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-black font-medium">{shipment.id}</td>
                    <td className="px-6 py-4 text-black">{shipment.origin}</td>
                    <td className="px-6 py-4 text-black">{shipment.destination}</td>
                    <td className="px-6 py-4 text-black">{shipment.weight}</td>
                    <td className="px-6 py-4 text-black">{shipment.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(shipment.status)}`}>
                        {shipment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
