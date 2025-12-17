import React from 'react';
import { Badge } from '@/components/ui/badge';

export default function REPayments() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black">Payments</h1>
          <Badge className="bg-green-500 =">CREATED</Badge>
        </div>
        
        <div className="backdrop-blur-md bg-white/30 border border-gray-300 rounded-2xl p-8 shadow-lg">
          <p className="text-black text-lg">Payments Content</p>
        </div>
      </div>
    </div>
  );
}
