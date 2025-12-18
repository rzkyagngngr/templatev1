import React, { useState } from 'react';
import { ChevronRight, Check, Crown } from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 1,
      name: 'Starter',
      price: billingCycle === 'monthly' ? 29 : 290,
      desc: 'Perfect for small projects',
      features: [
        'Up to 5 projects',
        '1GB storage',
        'Email support',
        'Basic analytics',
        'API access'
      ],
      highlighted: false,
      icon: '🚀'
    },
    {
      id: 2,
      name: 'Professional',
      price: billingCycle === 'monthly' ? 99 : 990,
      desc: 'For growing teams',
      features: [
        'Unlimited projects',
        '100GB storage',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Custom domain',
        'Team collaboration',
        'SSO'
      ],
      highlighted: true,
      icon: '⭐'
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Custom',
      desc: 'For large organizations',
      features: [
        'Everything in Pro',
        'Dedicated server',
        '24/7 support',
        'Custom integrations',
        'White-label solution',
        'Advanced security',
        'Performance SLA',
        'Dedicated account manager'
      ],
      highlighted: false,
      icon: '👑'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span className="text-gray-600">Glacia</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="text-gray-600">Pages</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Pricing</span>
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">Simple, Transparent Pricing</h1>
        <p className="text-gray-600 text-lg mb-8">Choose the perfect plan for your needs</p>

        {/* Billing Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-8 py-3 rounded-2xl font-semibold transition-all duration-300 ${
              billingCycle === 'monthly'
                ? 'backdrop-blur-xl bg-gradient-to-br from-blue-500/50 to-purple-500/50 text-white border border-white/50 shadow-lg'
                : 'text-gray-600'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-8 py-3 rounded-2xl font-semibold transition-all duration-300 ${
              billingCycle === 'annual'
                ? 'backdrop-blur-xl bg-gradient-to-br from-blue-500/50 to-purple-500/50 text-white border border-white/50 shadow-lg'
                : 'text-gray-600'
            }`}
          >
            Annual (Save 20%)
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map(plan => (
            <div
              key={plan.id}
              className={`transition-all duration-300 ${plan.highlighted ? 'md:scale-105' : ''}`}
            >
              <div className={`backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl ${plan.highlighted ? 'shadow-purple-300/50 ring-2 ring-offset-2 ring-purple-400' : 'shadow-blue-200/40'} overflow-hidden hover:shadow-2xl transition-all duration-300 p-8`}>
                {/* Badge */}
                {plan.highlighted && (
                  <div className="flex justify-center mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-gradient-to-r from-amber-400/50 to-orange-400/50 border border-white/50 rounded-full">
                      <Crown size={16} className="text-amber-600" />
                      <span className="text-sm font-bold text-amber-900">Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <span className="text-4xl mb-2">{plan.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.desc}</p>

                  {/* Price */}
                  <div className="mb-6">
                    {typeof plan.price === 'number' ? (
                      <>
                        <span className="text-5xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          ${plan.price}
                        </span>
                        <span className="text-gray-600 ml-2">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                      </>
                    ) : (
                      <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 rounded-2xl font-bold border transition-all duration-300 ${
                    plan.highlighted
                      ? 'backdrop-blur-xl bg-gradient-to-br from-blue-500/50 to-purple-500/50 text-white border-white/50 hover:shadow-lg hover:scale-105'
                      : 'backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 text-gray-900 border-white/60 hover:bg-white/40'
                  }`}>
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent mb-8" />

                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="p-1 backdrop-blur-xl bg-gradient-to-br from-emerald-400/50 to-teal-400/50 border border-white/50 rounded-lg flex-shrink-0 mt-0.5">
                        <Check size={16} className="text-emerald-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
