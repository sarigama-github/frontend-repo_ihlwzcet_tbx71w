import React, { useEffect } from 'react';
import { BookOpen, Settings, Database, BarChart3, Shield } from 'lucide-react';

function SidebarLink({ href, label }) {
  return (
    <a href={href} className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:text-white hover:bg-slate-800/40">
      {label}
    </a>
  );
}

function DocsPage() {
  useEffect(() => {
    const title = 'Docs — DataGen AI';
    document.title = title;
    const description = 'Documentation for DataGen AI: getting started, connecting data, generating dashboards, and security.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  const sections = [
    { id: 'getting-started', icon: BookOpen, title: 'Getting started' },
    { id: 'connect-data', icon: Database, title: 'Connect your data' },
    { id: 'build-dashboards', icon: BarChart3, title: 'Generate dashboards' },
    { id: 'settings', icon: Settings, title: 'Project settings' },
    { id: 'security', icon: Shield, title: 'Security' },
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-20 h-max rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <div className="mb-2 text-xs uppercase tracking-wider text-slate-400">Docs</div>
            <nav className="space-y-1">
              {sections.map((s) => (
                <SidebarLink key={s.id} href={`#${s.id}`} label={s.title} />
              ))}
            </nav>
            <div className="mt-4 border-t border-slate-800 pt-4">
              <a href="https://calendly.com/datagen-ai/demo" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-900">
                Book a live demo
              </a>
            </div>
          </aside>

          {/* Content */}
          <div className="space-y-12">
            <header className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <h1 className="text-3xl font-bold">DataGen AI Documentation</h1>
              <p className="mt-2 text-slate-300">Follow these guides to connect data sources and generate AI-powered dashboards in minutes.</p>
            </header>

            {sections.map(({ id, icon: Icon, title }) => (
              <section key={id} id={id} className="scroll-mt-24 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold">{title}</h2>
                </div>
                {id === 'getting-started' && (
                  <div className="mt-3 text-slate-300 text-sm leading-relaxed">
                    Create a workspace, upload a CSV or connect a database, and describe your goal (e.g., reduce churn). DataGen AI will build a semantic model and a starter dashboard for you.
                  </div>
                )}
                {id === 'connect-data' && (
                  <div className="mt-3 text-slate-300 text-sm leading-relaxed">
                    Supported sources include CSV, Excel, Postgres, MySQL, and REST APIs. After connecting, we profile your dataset and detect relationships automatically.
                  </div>
                )}
                {id === 'build-dashboards' && (
                  <div className="mt-3 text-slate-300 text-sm leading-relaxed">
                    Use natural language to request KPIs and charts. The system generates visualizations and explanations that you can customize and share.
                  </div>
                )}
                {id === 'settings' && (
                  <div className="mt-3 text-slate-300 text-sm leading-relaxed">
                    Manage projects, add teammates, and configure refresh schedules. Export results to your warehouse via scheduled jobs.
                  </div>
                )}
                {id === 'security' && (
                  <div className="mt-3 text-slate-300 text-sm leading-relaxed">
                    Enable SSO, configure row-level permissions, and review audit logs. Choose the appropriate data residency region for compliance needs.
                  </div>
                )}
              </section>
            ))}

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="flex flex-wrap gap-3">
                <a href="/features" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900">Explore features</a>
                <a href="https://calendly.com/datagen-ai/demo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-800">Book onboarding</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DocsPage;
