import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import DemoInsights from './components/DemoInsights';
import ConsultingFooter from './components/ConsultingFooter';
import FeaturesPage from './components/FeaturesPage';
import HowToUsePage from './components/HowToUsePage';

function Home() {
  useEffect(() => {
    const title = 'DataGen AI — Turn Your Data Into Smart Dashboards in Seconds';
    document.title = title;

    const description =
      'DataGen AI builds interactive dashboards from CSV, Excel, APIs, or databases. AI reads metadata, analyzes your data, and generates insights—no coding required.';

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  return (
    <main className="font-inter text-slate-100">
      <Hero />
      <HowItWorks />
      <Features />
      <DemoInsights />
      <ConsultingFooter />
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/how-to-use" element={<HowToUsePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
