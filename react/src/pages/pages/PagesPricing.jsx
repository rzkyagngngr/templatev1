import React from 'react';
import { ChevronRight, Check } from 'lucide-react';

export default function PagesPricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small projects',
      features: ['Up to 5 projects', 'Basic analytics', 'Email support', 'API access'],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'For growing teams',
      features: ['Unlimited projects', 'Advanced analytics', 'Priority support', 'API access', 'Team collaboration'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: ['Everything in Professional', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Advanced security'],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>Glacia</span>
          <ChevronRight size={16} />
          <span>Pages</span>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-semibold">Pricing</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Pricing Plans</h1>
      </div>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-sm transition-all ${
              plan.popular ? 'ring-2 ring-blue-600 scale-105' : ''
            }`}
          >
            {plan.popular && (
              <div className="bg-blue-600 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
              <span className="text-gray-600">{plan.period}</span>
            </div>
            <button
              className={`w-full py-2 rounded-md font-semibold text-sm mb-6 transition-colors ${
                plan.popular
                  ? 'bg-blue-600 text-slate-900 hover:bg-blue-700'
                  : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50'
              }`}
            >
              Get Started
            </button>
            <ul className="space-y-3">
              {plan.features.map((feature, featureIdx) => (
                <li key={featureIdx} className="flex items-center gap-2 text-sm text-gray-900">
                  <Check size={16} className="text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
