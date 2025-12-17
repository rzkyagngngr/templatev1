import React, { useState } from 'react';
import { ChevronRight, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

export default function Tour() {
  const [currentStep, setCurrentStep] = useState(0);

  const tourSteps = [
    {
      title: 'Welcome to Glacia',
      description: 'Your comprehensive admin dashboard solution built with React and Tailwind CSS.',
      icon: 'ðŸ‘‹',
    },
    {
      title: 'Dashboard Overview',
      description: 'View all your key metrics and analytics in one centralized location.',
      icon: 'ðŸ“Š',
    },
    {
      title: 'Navigation Menu',
      description: 'Easily navigate between different sections with the intuitive sidebar menu.',
      icon: 'ðŸ§­',
    },
    {
      title: 'Components Library',
      description: 'Access a wide variety of pre-built components for your projects.',
      icon: 'ðŸŽ¨',
    },
    {
      title: 'Customization',
      description: 'Fully customizable with Tailwind CSS and React components.',
      icon: 'âš™ï¸',
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
          <span className="text-gray-900 font-semibold">Tour</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Product Tour</h1>
      </div>

      {/* Tour Guide */}
      <div className="max-w-2xl mx-auto">
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-8 shadow-sm text-center mb-6">
          <div className="text-6xl mb-4">{tourSteps[currentStep].icon}</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">{tourSteps[currentStep].title}</h2>
          <p className="text-gray-900 mb-6">{tourSteps[currentStep].description}</p>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex gap-2 justify-center">
              {tourSteps.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 w-8 rounded-full ${idx === currentStep ? 'bg-blue-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-600 mt-2">Step {currentStep + 1} of {tourSteps.length}</p>
          </div>

          {/* Navigation */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="px-4 py-2 bg-white border border-gray-300 text-gray-900 rounded-md hover:bg-gray-50 disabled:opacity-50 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentStep(Math.min(tourSteps.length - 1, currentStep + 1))}
              disabled={currentStep === tourSteps.length - 1}
              className="px-4 py-2 bg-blue-600 text-slate-900 rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center gap-2"
            >
              Next
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Tour Steps List */}
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tour Steps</h3>
          <div className="space-y-2">
            {tourSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                  idx === currentStep
                    ? 'bg-blue-100 border border-blue-300 text-gray-900'
                    : 'hover:bg-white/50 text-gray-900'
                }`}
              >
                <span className="font-medium">{step.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
