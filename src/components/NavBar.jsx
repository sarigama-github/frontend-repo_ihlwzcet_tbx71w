import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Rocket, Menu } from 'lucide-react';

function NavBar() {
  const [open, setOpen] = React.useState(false);

  const linkBase = 'px-3 py-2 rounded-md text-sm font-medium transition-colors';
  const active = 'text-white bg-slate-800/60';
  const inactive = 'text-slate-300 hover:text-white hover:bg-slate-800/40';

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur border-b border-slate-800 bg-slate-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 grid place-items-center rounded-md bg-gradient-to-br from-blue-500 to-cyan-400">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-white">DataGen AI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
              Home
            </NavLink>
            <NavLink to="/features" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
              Features
            </NavLink>
            <NavLink to="/how-to-use" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
              How to Use
            </NavLink>
            <NavLink to="/pricing" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
              Pricing
            </NavLink>
            <NavLink to="/docs" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
              Docs
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a href="https://calendly.com/datagen-ai/demo" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md text-sm font-semibold bg-white text-slate-900 hover:bg-slate-200 transition-colors">
              Book a Demo
            </a>
            <a href="#demo" className="px-4 py-2 rounded-md text-sm font-semibold border border-slate-700 text-slate-200 hover:bg-slate-800 transition-colors">
              Try It Now
            </a>
          </div>

          <button aria-label="Open Menu" className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:bg-slate-800" onClick={() => setOpen((v) => !v)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-1">
              <NavLink onClick={() => setOpen(false)} to="/" end className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
                Home
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/features" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
                Features
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/how-to-use" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
                How to Use
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/pricing" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
                Pricing
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/docs" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
                Docs
              </NavLink>
              <a href="https://calendly.com/datagen-ai/demo" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className={`${linkBase} ${inactive}`}>Book a Demo</a>
              <a href="#demo" onClick={() => setOpen(false)} className={`${linkBase} ${inactive}`}>Try It Now</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
