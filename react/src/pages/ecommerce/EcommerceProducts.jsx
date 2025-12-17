import React, { useState } from 'react';

export default function EcommerceProducts() {
  const products = [
    {
      id: 1,
      name: 'Fever Gun',
      category: 'Electric',
      price: 49.00,
      originalPrice: 99.00,
      discount: '50% off',
      rating: 4.5,
      image: 'fever-gun.png'
    },
    {
      id: 2,
      name: 'N95 Mask',
      category: 'Covid Safety',
      price: 9.00,
      originalPrice: 18.00,
      discount: '50% off',
      rating: 4.5,
      image: 'n95-mask.png'
    },
    {
      id: 3,
      name: 'Imported VR Box',
      category: 'Entertainment',
      price: 39.00,
      originalPrice: 99.00,
      discount: '50% off',
      rating: 4.5,
      image: 'vr-box.png'
    },
    {
      id: 4,
      name: 'Night Lamp',
      category: 'Lighting',
      price: 29.00,
      originalPrice: 59.00,
      discount: '50% off',
      rating: 4.5,
      image: 'night-lamp.png'
    }
  ];

  return (
    <div className="w-full space-y-6 p-6">
      {/* Header */}
      <div>
        <h4 className="text-2xl font-bold text-black">Products</h4>
        <div className="text-sm text-gray-600 mt-2">Glacia / Ecommerce / Products</div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="glass-card border border-gray-300 rounded-lg overflow-hidden">
            {/* Discount Badge */}
            <div className="relative">
              <div className="bg-red-500 text-slate-900 text-xs font-bold py-2 px-3 absolute top-0 right-0 z-10">
                {product.discount}
              </div>
              <div className="h-32 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-400">Product Image</div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <p className="text-xs text-gray-600 uppercase">{product.category}</p>
              <h4 className="text-sm font-semibold text-black mt-2">{product.name}</h4>

              {/* Price */}
              <div className="mt-3 flex items-center gap-2">
                <span className="text-lg font-bold text-black">${product.price.toFixed(2)}</span>
                <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
              </div>

              {/* Rating */}
              <div className="mt-2 flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-yellow-500">â˜…</span>
                ))}
                <span className="text-yellow-500">â˜†</span>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full mt-4 py-2 bg-blue-500 text-slate-900 font-semibold rounded hover:bg-blue-600">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
