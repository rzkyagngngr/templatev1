import React from 'react';
import { Award, User, CheckCircle, Calendar } from 'lucide-react';

export default function TrainingCertificates() {
  const certificates = [
    { id: 'CERT-001', employee: 'John Smith', certification: 'Advanced React Certified', issueDate: '2025-01-10', expiryDate: '2027-01-10' },
    { id: 'CERT-002', employee: 'Sarah Lee', certification: 'Project Manager Pro', issueDate: '2024-12-15', expiryDate: '2026-12-15' },
    { id: 'CERT-003', employee: 'Mike Chen', certification: 'Data Analyst Expert', issueDate: '2024-11-20', expiryDate: '2026-11-20' },
    { id: 'CERT-004', employee: 'Emily Davis', certification: 'Digital Marketing Specialist', issueDate: '2025-01-05', expiryDate: '2027-01-05' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8">Training Certificates</h1>

        {/* Certificates List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {certificates.map((cert) => (
            <div key={cert.id} className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <Award className="w-6 h-6 text-black mt-1" />
                <div>
                  <p className="font-bold text-black">{cert.employee}</p>
                  <p className="text-gray-600 text-sm">{cert.certification}</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 text-sm"><strong>Issue Date:</strong> {cert.issueDate}</p>
                <p className="text-gray-600 text-sm"><strong>Expiry Date:</strong> {cert.expiryDate}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Status */}
        <div className="backdrop-blur-md bg-white/70 border border-gray-300 rounded-lg p-6">
          <h2 className="text-xl font-bold text-black mb-4">Status</h2>
          <p className="text-black">CREATED</p>
        </div>
      </div>
    </div>
  );
}
