import React, { useEffect } from 'react';
import { Upload, Brain, LayoutDashboard, Lightbulb } from 'lucide-react';

function Step({ icon: Icon, title, desc, idx }) {
  return (
    <div className="relative rounded-xl border border-slate-800 bg-slate-900/40 p-6">
      <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-blue-600 text-white grid place-items-center text-sm font-bold">{idx}</div>
      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
    </div>
  );
}

function HowToUsePage() {
  useEffect(() => {
    const title = 'How to Use — DataGen AI';
    document.title = title;
    const description = 'Learn how to use DataGen AI in four simple steps: upload data, let AI analyze, auto-generate dashboards, and review insights.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  const steps = [
    { icon: Upload, title: 'Upload your data', desc: 'Connect CSV, Excel, databases, or APIs. We validate and profile your data automatically.' },
    { icon: Brain, title: 'AI analyzes', desc: 'We infer data types, relationships, and business entities while building a semantic model.' },
    { icon: LayoutDashboard, title: 'Dashboard generated', desc: 'Interactive charts and KPIs appear instantly, tailored to your dataset and goals.' },
    { icon: Lightbulb, title: 'Review insights', desc: 'Drill into trends, anomalies, and natural-language insights you can share with stakeholders.' },
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Get started in minutes</h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">A guided flow that keeps you in control. No code, no hassle.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Step key={s.title} idx={i + 1} {...s} />
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
          <h2 className="text-2xl font-semibold">Pro tips</h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-slate-300">
            <li>Include a date column for time-series insights and seasonality detection.</li>
            <li>Use consistent naming for entities like customer_id, order_id, and product_id.</li>
            <li>Provide a short goal like “optimize CAC” or “reduce churn” to tailor KPIs.</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a className="px-4 py-2 rounded-md bg-white text-slate-900 font-semibold" href="#">Watch a 3‑min demo</a>
            <a className="px-4 py-2 rounded-md border border-slate-700 text-slate-200" href="#">Book onboarding</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToUsePage;
