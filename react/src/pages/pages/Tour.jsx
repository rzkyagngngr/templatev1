import React, { useState } from 'react';
import { ChevronRight, Play, CheckCircle, Zap, Grid, Settings, ArrowRight, ArrowLeft, SkipForward } from 'lucide-react';

export default function Tour() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const tourSteps = [
    {
      title: 'Welcome to Glacia',
      description: 'Your comprehensive admin dashboard solution built with React and Tailwind CSS. Let\'s explore the key features that make Glacia powerful.',
      icon: Play,
      color: 'from-blue-400 to-blue-600',
      detail: 'Get started with our interactive tour'
    },
    {
      title: 'Dashboard Overview',
      description: 'View all your key metrics and analytics in one centralized location. Monitor performance, track trends, and make data-driven decisions.',
      icon: Grid,
      color: 'from-indigo-400 to-indigo-600',
      detail: 'Real-time analytics and metrics'
    },
    {
      title: 'Navigation & Sidebar',
      description: 'Easily navigate between different sections with the intuitive sidebar menu. Access all your apps, pages, and tools from one place.',
      icon: Zap,
      color: 'from-purple-400 to-purple-600',
      detail: 'Lightning-fast navigation'
    },
    {
      title: 'Component Library',
      description: 'Access a wide variety of pre-built, professionally designed components for your projects. Build faster with reusable elements.',
      icon: Grid,
      color: 'from-pink-400 to-pink-600',
      detail: 'Ready-to-use components'
    },
    {
      title: 'Customization & Theming',
      description: 'Fully customizable with Tailwind CSS and React components. Create your perfect dashboard with flexible design options.',
      icon: Settings,
      color: 'from-emerald-400 to-emerald-600',
      detail: 'Tailor to your needs'
    },
  ];

  const CurrentIcon = tourSteps[currentStep].icon;
  const progress = ((currentStep + 1) / tourSteps.length) * 100;

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    setIsCompleted(true);
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto">
          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-green-200/40 overflow-hidden p-12 text-center hover:shadow-2xl transition-all duration-300">
            <div className="mb-6 flex justify-center">
              <div className="p-4 backdrop-blur-xl bg-gradient-to-br from-emerald-400/50 to-emerald-600/50 border border-white/50 rounded-3xl shadow-lg">
                <CheckCircle size={64} className="text-emerald-600" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">Tour Complete!</h2>
            <p className="text-gray-700 mb-8 text-lg">You've explored all the key features of Glacia. You're ready to get started!</p>
            
            <button
              onClick={handleRestart}
              className="px-8 py-3 backdrop-blur-xl bg-gradient-to-br from-blue-500/50 to-blue-600/50 border border-white/50 rounded-2xl text-white font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Restart Tour
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span className="text-gray-600">Glacia</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="text-gray-600">Pages</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Tour</span>
      </div>

      {/* Page Title */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">Product Tour</h1>
        <p className="text-gray-600">Discover all the amazing features of Glacia</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Tour Card */}
        <div className="lg:col-span-2">
          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 overflow-hidden group hover:shadow-2xl transition-all duration-300">
            
            {/* Feature Banner */}
            <div className={`h-40 bg-gradient-to-br ${tourSteps[currentStep].color} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-6 backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl">
                  <CurrentIcon size={64} className="text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">
                  {tourSteps[currentStep].title}
                </h2>
                <p className="text-sm text-blue-600 font-medium">{tourSteps[currentStep].detail}</p>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {tourSteps[currentStep].description}
              </p>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-gray-600">Step {currentStep + 1} of {tourSteps.length}</span>
                  <span className="text-xs font-medium bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="w-full h-2 backdrop-blur-xl bg-white/30 border border-white/40 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="px-4 py-2.5 backdrop-blur-xl bg-white/50 border border-white/60 rounded-2xl text-gray-700 font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <ArrowLeft size={16} />
                  Previous
                </button>
                
                <button
                  onClick={handleSkip}
                  className="flex-1 px-4 py-2.5 backdrop-blur-xl bg-white/50 border border-white/60 rounded-2xl text-gray-700 font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <SkipForward size={16} />
                  Skip
                </button>

                <button
                  onClick={handleNext}
                  className="px-4 py-2.5 backdrop-blur-xl bg-gradient-to-br from-blue-500/50 to-blue-600/50 border border-white/50 rounded-2xl text-white font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  {currentStep === tourSteps.length - 1 ? (
                    <>
                      <CheckCircle size={16} />
                      Complete
                    </>
                  ) : (
                    <>
                      Next
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Tour Steps */}
        <div className="space-y-4">
          <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-purple-200/40 p-6 sticky top-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Tour Steps</h3>
            <div className="space-y-2">
              {tourSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentStep(idx)}
                    className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-300 ${
                      idx === currentStep
                        ? 'backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-purple-400/50 border border-white/50 shadow-lg'
                        : 'backdrop-blur-xl bg-white/30 border border-white/40 hover:bg-white/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${idx === currentStep ? 'bg-white/30' : 'bg-white/20'}`}>
                        <Icon size={16} className={idx === currentStep ? 'text-blue-700' : 'text-gray-600'} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium ${idx === currentStep ? 'text-blue-900' : 'text-gray-900'} truncate`}>
                          {step.title}
                        </p>
                        <p className="text-xs text-gray-600">Step {idx + 1}</p>
                      </div>
                      {idx < currentStep && (
                        <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
