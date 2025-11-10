import React from 'react';
import { Zap, Sliders, PieChart, ShieldCheck, Settings } from 'lucide-react';

const features = [
  {
    title: 'AI Intelligence',
    desc: 'Automatic schema detection, chart suggestions, and narratives.',
    icon: Zap,
  },
  {
    title: 'Customizable',
    desc: 'Tweak visuals, metrics, and layouts to match your workflow.',
    icon: Sliders,
  },
  {
    title: 'Interactive Visuals',
    desc: 'Drill-down, filter, and segment across dashboards.',
    icon: PieChart,
  },
  {
    title: 'Secure by Design',
    desc: 'Enterprise-grade privacy and role-based access.',
    icon: ShieldCheck,
  },
  {
    title: 'Connect Anything',
    desc: 'CSV, Excel, APIs, Postgres, MySQL, MongoDB, and more.',
    icon: Settings,
  },
];

const Features = () => {
  return (
    <section className="relative bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Key Features</h2>
          <p className="mt-3 text-slate-300">Simplicity, speed, and AI-driven clarity.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-white/20">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 ring-1 ring-inset ring-blue-500/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
