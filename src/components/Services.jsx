import { Rocket, Code2, Palette } from 'lucide-react';

const services = [
  {
    title: 'Creative Strategy',
    icon: Palette,
    desc: 'Brand systems, visual identity, and design direction that feel premium and coherent.',
    gradient: 'from-pink-500/30 via-fuchsia-500/30 to-purple-500/30',
  },
  {
    title: 'Web Design + UX',
    icon: Rocket,
    desc: 'Conversion-focused layouts, responsive design, and micro-interactions your users love.',
    gradient: 'from-indigo-500/30 via-sky-500/30 to-cyan-400/30',
  },
  {
    title: 'Web Development',
    icon: Code2,
    desc: 'Fast, accessible builds with modern stacks. SEO-ready and analytics integrated.',
    gradient: 'from-emerald-500/30 via-teal-500/30 to-cyan-500/30',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#07080c]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_40%_at_20%_10%,rgba(59,130,246,0.12),transparent),radial-gradient(40%_30%_at_80%_0%,rgba(236,72,153,0.10),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">What we do</h2>
          <p className="mt-3 text-white/70">End-to-end design and build for brands that want to look sharp and move fast.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, icon: Icon, desc, gradient }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 overflow-hidden backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity blur-2xl bg-gradient-to-br ${gradient}`} />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white shadow-inner">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
                <div className="mt-5 inline-flex items-center text-sm text-white/90">
                  <span className="group-hover:translate-x-1 transition-transform">Learn more</span>
                  <svg className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M12.293 4.293a1 1 0 011.414 0l3.999 3.999a1 1 0 010 1.414l-3.999 3.999a1 1 0 11-1.414-1.414L14.586 10H3a1 1 0 010-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
