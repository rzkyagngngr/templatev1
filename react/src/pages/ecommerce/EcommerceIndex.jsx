import React, { useState } from 'react';
export default function EcommerceIndex() {
    const products = [{ id: 1, name: 'Product 1', price: '$99.99', rating: 4.5, img: 'ðŸ“¦' }, { id: 2, name: 'Product 2', price: '$149.99', rating: 4.8, img: 'ðŸ“¦' }];
    return (<div className="w-full space-y-6"><div><h4 className="text-xl font-bold text-slate-900 tracking-wide">Ecommerce</h4><div className="text-sm text-slate-700 mt-1"><span>Glacia</span><span className="mx-2">/</span><span className="text-slate-900">Ecommerce</span></div></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{products.map((p) => (<div key={p.id} className="glass-card p-6"><div className="text-4xl mb-4">{p.img}</div><h5 className="text-slate-900 font-semibold mb-2">{p.name}</h5><div className="flex justify-between items-center"><span className="text-lg font-bold text-primary">{p.price}</span><span className="text-yellow-600">â˜… {p.rating}</span></div></div>))}</div></div>);
}
