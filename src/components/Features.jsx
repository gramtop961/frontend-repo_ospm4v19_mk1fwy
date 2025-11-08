import React from 'react';
import { Zap, Shield, Globe2, MonitorUp } from 'lucide-react';

const items = [
  {
    icon: Zap,
    title: 'Fast Match',
    desc: 'Instantly pair with someone new with our quick, smart matching demo.',
  },
  {
    icon: MonitorUp,
    title: 'HD Video',
    desc: 'Crisp preview videos and smooth transitions for a premium feel.',
  },
  {
    icon: Shield,
    title: 'Secure',
    desc: 'Privacy-first demo with no real connections or tracking.',
  },
  {
    icon: Globe2,
    title: 'Worldwide Users',
    desc: 'Designed to feel global — friendly and welcoming for everyone.',
  },
];

function Features() {
  return (
    <section id="how-it-works" className="relative py-20 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/60 to-transparent pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Premium Features</h2>
          <p className="mt-3 text-gray-600">
            Everything you expect from a modern video calling platform—presented as a smooth demo.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-xl transition-all">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-fuchsia-500 to-sky-500 text-white shadow-lg">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
