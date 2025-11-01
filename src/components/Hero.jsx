import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0b0f]" aria-label="Hero">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(59,130,246,0.15),transparent),radial-gradient(40%_30%_at_80%_20%,rgba(168,85,247,0.12),transparent)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Clean, modern web design that converts.
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/70">
            We craft fast, aesthetic websites with immersive interactions and a focus on results. From landing pages to full brand experiences, we design to perform.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 shadow-lg shadow-indigo-500/20 transition-transform hover:scale-[1.02] active:scale-[0.99]"
            >
              Start a project
              <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M12.293 4.293a1 1 0 011.414 0l3.999 3.999a1 1 0 010 1.414l-3.999 3.999a1 1 0 11-1.414-1.414L14.586 10H3a1 1 0 010-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white/90 border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              See our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
