import React, { useState } from 'react';
import { Rocket } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-fuchsia-500">
              <Rocket className="h-5 w-5 text-white" />
            </span>
            <span className="font-semibold tracking-tight">Pixel Luminance Lab</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition-colors">{l.label}</a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/20 hover:bg-white/15">
              Start a Project
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/10"
            aria-label="Toggle menu"
            onClick={() => setOpen(v => !v)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2">
              {links.map(l => (
                <a key={l.href} href={l.href} className="rounded-md px-3 py-2 text-slate-200 hover:bg-white/10" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="rounded-md px-3 py-2 bg-white/10 text-white ring-1 ring-inset ring-white/20" onClick={() => setOpen(false)}>
                Start a Project
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
