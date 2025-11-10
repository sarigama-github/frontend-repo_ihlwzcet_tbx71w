import React from 'react';
import { Calendar, Mail, Twitter, Linkedin } from 'lucide-react';

const ConsultingFooter = () => {
  return (
    <footer id="consulting" className="bg-slate-950 text-white">
      <section className="border-t border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">Need expert analysis?</h3>
              <p className="mt-3 max-w-xl text-slate-300">
                Our data experts can help with modeling, advanced analytics, and custom dashboards tailored to your business.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 font-medium text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
              >
                <Calendar className="mr-2 h-4 w-4" /> Book a Consultation
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
              <h4 className="text-lg font-medium">Contact</h4>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-400"/> hello@datagen.ai</li>
                <li className="flex items-center gap-2"><Twitter className="h-5 w-5 text-blue-400"/> @datagen_ai</li>
                <li className="flex items-center gap-2"><Linkedin className="h-5 w-5 text-blue-400"/> DataGen AI</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row">
            <p>© {new Date().getFullYear()} DataGen AI. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#how" className="hover:text-white">How it works</a>
              <a href="#demo" className="hover:text-white">Demo</a>
              <a href="#" className="hover:text-white">Privacy</a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default ConsultingFooter;
