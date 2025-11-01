import React from 'react';
import { Rocket, Code, Palette } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Launch-ready Websites',
    desc: 'Fast, accessible, SEO-optimized sites that look stunning on every device.',
  },
  {
    icon: Palette,
    title: 'Brand & Visual Design',
    desc: 'Art direction, design systems, and polished UI that elevates your brand.',
  },
  {
    icon: Code,
    title: 'Interactive 3D & Motion',
    desc: 'Spline-powered scenes and microinteractions that make experiences memorable.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">What we do</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              From concept to ship — we design, build, and animate premium web experiences.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl transition hover:border-white/20 hover:bg-white/[0.06]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
