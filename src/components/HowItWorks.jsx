import React from 'react';
import { Upload, Brain, BarChart3, Sparkles } from 'lucide-react';

const steps = [
  {
    title: 'Upload Data',
    desc: 'Bring CSVs, Excel files, APIs, or databases.',
    icon: Upload,
  },
  {
    title: 'AI Analyzes Metadata',
    desc: 'We detect schema, types, and relationships.',
    icon: Brain,
  },
  {
    title: 'Auto Dashboard',
    desc: 'Get interactive charts instantly.',
    icon: BarChart3,
  },
  {
    title: 'Instant Insights',
    desc: 'Actionable insights surfaced automatically.',
    icon: Sparkles,
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How It Works</h2>
          <p className="mt-3 text-slate-300">A simple 4-step flow from raw data to insights.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, desc, icon: Icon }) => (
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

export default HowItWorks;
