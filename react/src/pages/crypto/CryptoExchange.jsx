import React from 'react';
export default function CryptoExchange() {
    const rates = [{ pair: 'BTC/USD', price: '$42,500', change: '+5.2%' }, { pair: 'ETH/USD', price: '$2,250', change: '+3.8%' }, { pair: 'XRP/USD', price: '$0.85', change: '-1.2%' }];
    return (<div className="w-full space-y-6"><div><h4 className="text-xl font-bold text-slate-900 tracking-wide">Crypto Exchange</h4><div className="text-sm text-slate-700 mt-1"><span>Glacia</span><span className="mx-2">/</span><span>Crypto</span><span className="mx-2">/</span><span className="text-slate-900">Exchange</span></div></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{rates.map((r) => (<div key={r.pair} className="glass-card p-6"><p className="text-slate-700 text-sm font-medium">{r.pair}</p><p className="text-2xl font-bold text-slate-900 mt-2">{r.price}</p><p className={`text-sm mt-2 ${r.change.startsWith('+') ? 'text-success' : 'text-danger'}`}>{r.change}</p></div>))}</div></div>);
}
