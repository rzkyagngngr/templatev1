import { useState, useEffect, useRef } from 'react';
import { Zap, Sparkles, ArrowRight, ChevronRight, Layers, Code, Shield, Palette, Layout, Smartphone } from 'lucide-react';

// Scroll reveal hook with IntersectionObserver
function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.15, ...options });

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [ref, isInView];
}

// Reveal component for scroll animations
function Reveal({ children, delay = 0, className = '' }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function PagesStarter() {
  const highlights = [
    { icon: Layers, label: 'Components', value: '200+ ready' },
    { icon: Shield, label: 'Security', value: 'Enterprise grade' },
    { icon: Layout, label: 'Responsive', value: 'Mobile first' },
  ];

  const features = [
    {
      icon: Palette,
      title: 'Beautiful design',
      description: 'Pixel-perfect interface with smooth animations and transitions that delight users at every interaction.',
    },
    {
      icon: Zap,
      title: 'Lightning fast',
      description: 'Optimized for performance with lazy loading, code splitting, and efficient rendering.',
    },
    {
      icon: Smartphone,
      title: 'Mobile ready',
      description: 'Fully responsive design that works seamlessly on all devices and screen sizes.',
    },
    {
      icon: Shield,
      title: 'Secure by design',
      description: 'Built with security best practices and regular updates to protect your users.',
    },
    {
      icon: Layers,
      title: 'Modular structure',
      description: 'Clean, organized codebase that makes customization and maintenance a breeze.',
    },
    {
      icon: Code,
      title: 'Developer friendly',
      description: 'Well-documented code with TypeScript support and modern development tools.',
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span className="text-gray-600">Glacia</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="text-gray-600">Pages</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="text-blue-600 font-semibold">Starter</span>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <Reveal>
          <div className="backdrop-blur-3xl bg-white/70 rounded-[2.5rem] border border-white/60 shadow-2xl overflow-hidden">
            <div className="p-10 md:p-16">
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-white/60 text-sm font-bold shadow-lg">
                    <Sparkles size={16} className="text-blue-600" />
                    <span className="text-blue-700">Liquid Glass Design System</span>
                  </span>
                </div>

                <div className="mb-8 flex justify-center">
                  <div className="p-5 backdrop-blur-xl bg-white/60 border border-white/70 rounded-3xl shadow-2xl">
                    <Zap size={52} className="text-blue-600" />
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900">
                  Build dashboards
                  <br />
                  <span className="text-blue-600">
                    that feel magical
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mt-6 max-w-3xl leading-relaxed">
                  A stunning starter template featuring liquid glass morphism and fluid animations.
                  Built with precision for modern web applications.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group px-8 py-4 rounded-2xl text-white font-bold shadow-2xl bg-blue-600 hover:bg-blue-700 hover:scale-105 motion-safe:transition-all duration-300">
                    <span className="flex items-center gap-2">
                      Explore the template 
                      <ArrowRight size={18} className="group-hover:translate-x-1 motion-safe:transition-transform" />
                    </span>
                  </button>
                  <button className="px-8 py-4 rounded-2xl text-gray-800 font-bold shadow-xl bg-white/70 backdrop-blur-xl border border-white/80 hover:bg-white/80 hover:scale-105 motion-safe:transition-all duration-300">
                    View components
                  </button>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                  {highlights.map((h, idx) => {
                    const Icon = h.icon;
                    return (
                      <Reveal key={h.label} delay={150 + idx * 120} className="h-full">
                        <div className="h-full rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 p-6 text-left shadow-xl hover:shadow-2xl motion-safe:transition-all duration-300">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">
                              <Icon size={20} className="text-white" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-gray-600 uppercase tracking-wide">{h.label}</div>
                              <div className="text-sm font-bold text-gray-900 mt-0.5">{h.value}</div>
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto mb-20">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Key features
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mt-4">A showcase of the template's main strengths.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={i * 100}>
                <div className="group h-full rounded-3xl backdrop-blur-2xl bg-white/85 border border-white/60 p-8 shadow-xl hover:shadow-2xl motion-safe:transition-all duration-500 hover:scale-105">
                  <div className="mb-4">
                    <div className="inline-flex p-4 rounded-2xl bg-blue-600 shadow-lg group-hover:scale-110 motion-safe:transition-transform duration-300">
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Architecture / starter blueprint */}
      <div className="max-w-6xl mx-auto mb-20">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-3xl backdrop-blur-2xl bg-white/90 border border-white/60 p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">
                  <Layers size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Starter blueprint</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                A clean structure that scales: routing, layout composition, and page-level sections you can remix.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { title: 'Layout-first', desc: 'One layout drives navigation and page spacing.' },
                  { title: 'Page sections', desc: 'Hero → Features → CTA, tuned for real product messaging.' },
                  { title: 'Motion-safe', desc: 'Scroll animations respect reduced-motion preferences.' },
                ].map((item, idx) => (
                  <Reveal key={item.title} delay={150 + idx * 100}>
                    <div className="rounded-2xl bg-white/90 backdrop-blur-xl border border-white/60 p-5 shadow-lg hover:shadow-xl motion-safe:transition-all">
                      <div className="text-sm font-bold text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-600 mt-1.5">{item.desc}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="rounded-3xl backdrop-blur-2xl bg-white/90 border border-white/60 p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">
                  <Code size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Drop-in sections</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                This page is intentionally built from reusable patterns: glass card, KPI row, feature grid, and CTA.
              </p>

              <div className="mt-6 rounded-2xl bg-gray-900 text-gray-100 border border-white/10 overflow-hidden shadow-xl">
                <div className="px-5 py-3 text-xs font-bold text-gray-300 border-b border-white/10">
                  Example structure
                </div>
                <pre className="px-5 py-5 text-sm leading-relaxed overflow-auto font-mono">
                  {`<Page>
  <Hero />
  <Highlights />
  <FeatureGrid />
  <Blueprint />
  <CTA />
</Page>`}
                </pre>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto mb-8">
        <Reveal>
          <div className="backdrop-blur-3xl bg-white/90 rounded-[2.5rem] border border-white/60 p-12 md:p-16 text-center shadow-2xl">
            <div className="mb-6 flex justify-center">
              <div className="p-4 rounded-full bg-blue-600 shadow-2xl">
                <Sparkles size={32} className="text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-gray-900">
              Ready to build something amazing?
            </h2>
            <p className="text-gray-700 mt-4 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Use this starter as your foundation and create beautiful, professional web applications with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-10 py-4 rounded-2xl text-white font-bold shadow-2xl bg-blue-600 hover:bg-blue-700 hover:scale-105 motion-safe:transition-all duration-300">
                <span className="flex items-center justify-center gap-2">
                  Start building now
                  <ArrowRight size={18} className="group-hover:translate-x-1 motion-safe:transition-transform" />
                </span>
              </button>
              <button className="px-10 py-4 rounded-2xl text-gray-800 font-bold shadow-xl bg-white/80 backdrop-blur-xl border-2 border-white hover:bg-white hover:scale-105 motion-safe:transition-all duration-300">
                View documentation
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
