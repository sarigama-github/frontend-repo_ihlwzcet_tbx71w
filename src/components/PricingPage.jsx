import React, { useEffect } from 'react';
import { Check, Shield, Zap, Rocket } from 'lucide-react';

function Tier({ name, price, period = 'mo', bullets = [], highlight = false, ctaLabel = 'Start free', ctaHref = '#', note }) {
  return (
    <div className={`rounded-2xl border ${highlight ? 'border-blue-500/60' : 'border-slate-800'} bg-slate-900/40 p-6 flex flex-col`}>\n      <div className="flex items-baseline justify-between">\n        <h3 className="text-xl font-semibold">{name}</h3>\n        {highlight && <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">Most Popular</span>}\n      </div>\n      <div className="mt-4">\n        <div className="text-4xl font-bold">{price}<span className="text-lg font-medium text-slate-400">/{period}</span></div>\n        {note && <p className="mt-1 text-sm text-slate-400">{note}</p>}\n      </div>\n      <ul className="mt-6 space-y-3 text-sm text-slate-200">\n        {bullets.map((b) => (\n          <li key={b} className="flex items-start gap-3">\n            <Check className="h-5 w-5 text-green-400 shrink-0" />\n            <span>{b}</span>\n          </li>\n        ))}\n      </ul>\n      <div className="mt-6 grid grid-cols-1 gap-3">\n        <a href={ctaHref} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold ${highlight ? 'bg-white text-slate-900' : 'bg-slate-800 text-white hover:bg-slate-700'} transition-colors`}>{ctaLabel}</a>\n        <a href="https://calendly.com/datagen-ai/demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold border border-slate-700 text-slate-200 hover:bg-slate-800 transition-colors">Book a live demo</a>\n      </div>\n    </div>\n  );
}

function PricingPage() {
  useEffect(() => {
    const title = 'Pricing — DataGen AI';
    document.title = title;
    const description = 'Simple, transparent pricing for teams of all sizes. Start free and scale with usage-based plans.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  const tiers = [
    {
      name: 'Starter',
      price: '$0',
      bullets: [
        'Up to 2 datasets',
        'Auto-generated dashboards',
        'Basic insights',
        'Email support',
      ],
      ctaLabel: 'Get started',
      ctaHref: '/how-to-use',
    },
    {
      name: 'Pro',
      price: '$49',
      bullets: [
        'Unlimited datasets',
        'Advanced insights & alerts',
        'Team collaboration',
        'Priority support',
      ],
      highlight: true,
      ctaLabel: 'Upgrade to Pro',
      ctaHref: 'https://buy.stripe.com/test_123456789',
      note: 'Billed monthly. Cancel anytime.',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      bullets: [
        'SSO & advanced security',
        'VPC / on-prem options',
        'Custom SLAs',
        'Dedicated support',
      ],
      ctaLabel: 'Contact sales',
      ctaHref: 'mailto:sales@datagen.ai',
    },
  ];

  const perks = [
    { icon: Shield, title: 'Security first', desc: 'SSO, audit logs, and data residency controls available on upper tiers.' },
    { icon: Zap, title: 'Fast and scalable', desc: 'Optimized to handle millions of rows with sub-second query times.' },
    { icon: Rocket, title: 'AI that explains', desc: 'Every insight is paired with a rationale so you can trust the outcome.' },
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Straightforward pricing</h1>
          <p className="mt-4 text-slate-300">Choose a plan that fits. Start for free and upgrade when you need to collaborate and scale.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <Tier key={t.name} {...t} />
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {perks.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPage;
