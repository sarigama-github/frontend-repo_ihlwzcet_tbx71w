import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-20 md:pb-16 lg:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-slate-800/60 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10">
              New • AI-powered dashboards
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Turn Your Data Into Smart Dashboards in Seconds
            </h1>
            <p className="max-w-xl text-slate-300">
              DataGen AI reads your data, understands its structure, and auto-builds interactive dashboards with actionable insights—no code required.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#demo"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-medium text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Try It Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#consulting"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/20 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Contact Our Team
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-slate-400">
              <div>
                • CSV • Excel • API • Databases
              </div>
              <div className="hidden md:block">No setup • No code</div>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px]">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
