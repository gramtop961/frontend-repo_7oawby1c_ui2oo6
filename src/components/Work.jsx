export default function Work() {
  const projects = [
    {
      title: 'AI SaaS Landing',
      tag: 'UX/UI',
      gradient: 'from-indigo-500 via-purple-500 to-cyan-400',
    },
    {
      title: 'E‑commerce Refresh',
      tag: 'Design',
      gradient: 'from-emerald-500 via-teal-400 to-cyan-400',
    },
    {
      title: 'Fintech Dashboard',
      tag: 'Product',
      gradient: 'from-orange-500 via-pink-500 to-rose-500',
    },
    {
      title: 'Creative Studio Site',
      tag: 'Web',
      gradient: 'from-sky-500 via-blue-500 to-indigo-500',
    },
  ];

  return (
    <section id="work" className="relative py-24 bg-[#080a10]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_40%_at_50%_-10%,rgba(99,102,241,0.10),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Selected work</h2>
          <p className="mt-3 text-white/70">A glimpse of projects focused on clarity, speed, and delightful details.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href="#"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
              <div className="relative aspect-[4/5] p-5 flex flex-col justify-end">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute -inset-20 bg-[conic-gradient(from_0deg,transparent,white,transparent)] opacity-0 group-hover:opacity-10 animate-spin-slow" />
                </div>
                <span className="inline-flex items-center rounded-full bg-black/40 text-white/90 border border-white/10 px-2.5 py-1 text-[11px] w-max backdrop-blur-md">{p.tag}</span>
                <h3 className="mt-3 text-white font-medium text-lg">{p.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>
    </section>
  );
}
