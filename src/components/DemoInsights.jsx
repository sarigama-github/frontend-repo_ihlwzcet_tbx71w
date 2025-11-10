import React from 'react';
import { PlayCircle, LineChart, TrendingUp, ArrowRight } from 'lucide-react';

const DemoInsights = () => {
  return (
    <section id="demo" className="relative bg-slate-950 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">See It in Action</h2>
            <p className="mt-3 text-slate-300">
              Upload a file or connect a source and watch DataGen AI generate dashboards and insights automatically.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2"><LineChart className="mt-0.5 h-5 w-5 text-blue-400"/> Auto-built charts tailored to your data</li>
              <li className="flex items-start gap-2"><TrendingUp className="mt-0.5 h-5 w-5 text-blue-400"/> Narrative insights to highlight trends</li>
            </ul>
            <a href="#" className="mt-6 inline-flex items-center text-blue-400 hover:text-blue-300">
              Watch 30s demo <ArrowRight className="ml-2 h-4 w-4"/>
            </a>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-3 shadow-2xl">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-900">
                <div className="flex h-full items-center justify-center text-slate-400">
                  <PlayCircle className="h-16 w-16" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-3 text-xs text-slate-300">
                <div className="rounded-lg bg-slate-900/80 p-3">Sales increased by <span className="font-semibold text-green-400">25%</span> this month.</div>
                <div className="rounded-lg bg-slate-900/80 p-3">Top region: <span className="font-semibold text-blue-300">North America</span>.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoInsights;
