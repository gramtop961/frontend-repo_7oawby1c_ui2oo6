import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6K1gO3z1h3cMOzjT/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient accents that do not block interaction */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/30 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-500/30 blur-3xl"></div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pt-28 sm:pt-36 text-center">
        <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur px-6 py-5 shadow-xl">
          <p className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-slate-200">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            We craft luminous digital experiences
          </p>
        </div>

        <h1 className="mt-6 max-w-3xl bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-6xl">
          Design, motion, and web engineered to shine
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
          Premium websites and interactive 3D that feel alive. We blend design, code, and motion for brands that want to glow.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-100"
          >
            Start a project
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Explore services
          </a>
        </div>
      </div>
    </section>
  );
}
