import React, { useEffect } from 'react';
import { Sparkles, Shield, Gauge, BarChart3, Zap, Settings } from 'lucide-react';

function FeaturesPage() {
  useEffect(() => {
    const title = 'Features — DataGen AI';
    document.title = title;
    const description = 'Explore DataGen AI features: instant dashboard generation, smart insights, security, and integrations.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Modeling',
      desc: 'Automatic schema detection, data typing, and relationship mapping with explainable steps.',
    },
    {
      icon: BarChart3,
      title: 'Auto-Generated Dashboards',
      desc: 'Beautiful, interactive dashboards built in seconds with recommended charts and KPIs.',
    },
    {
      icon: Gauge,
      title: 'Real-Time Insights',
      desc: 'Streaming metrics and anomaly alerts keep your team informed as data changes.',
    },
    {
      icon: Zap,
      title: 'Fast & Scalable',
      desc: 'Optimized pipelines designed to handle millions of rows without breaking a sweat.',
    },
    {
      icon: Settings,
      title: 'Integrations',
      desc: 'Connect CSV, Excel, databases, and APIs. Bring your own warehouse or lake.',
    },
    {
      icon: Shield,
      title: 'Security & Governance',
      desc: 'Row-level permissions, audit trails, and data residency controls you can trust.',
    },
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Powerful features, built for speed</h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">Everything you need to go from raw data to actionable dashboards, without the busywork.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-slate-700 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <h2 className="text-2xl font-semibold">Developer friendly</h2>
          <p className="mt-2 text-slate-300 max-w-3xl">Use our API to automate dataset onboarding, prompt the AI for custom KPIs, and export results to your data warehouse. Webhooks and SDKs for JS and Python are available.</p>
          <div className="mt-6 flex gap-3">
            <a className="px-4 py-2 rounded-md bg-white text-slate-900 font-semibold" href="#">Read the Docs</a>
            <a className="px-4 py-2 rounded-md border border-slate-700 text-slate-200" href="#">View API Examples</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesPage;
