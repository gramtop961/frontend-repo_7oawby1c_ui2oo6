import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been received.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let’s build something bright</h2>
          <p className="mt-2 text-slate-300">
            Tell us about your goals and we’ll get back within 1–2 business days.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-slate-300">Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:border-white/20 focus:outline-none"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:border-white/20 focus:outline-none"
                  placeholder="jane@brand.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm text-slate-300">Project details</label>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-slate-100 placeholder:text-slate-400 focus:border-white/20 focus:outline-none"
                placeholder="Tell us about your timeline, goals, and budget."
              />
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              >
                Send message
              </button>
              <p className="text-sm text-emerald-300/90">{status}</p>
            </div>
          </form>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-fuchsia-600/10 to-sky-500/20 p-6">
            <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 translate-x-1/4 rounded-full bg-fuchsia-500/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 left-0 h-72 w-72 -translate-x-1/3 rounded-full bg-indigo-500/30 blur-3xl" />
            <div className="relative">
              <h3 className="text-lg font-semibold">Why brands choose us</h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>— Pixel-perfect design systems</li>
                <li>— Motion-first approach to UX</li>
                <li>— SEO and performance obsessed</li>
                <li>— Collaborative and transparent process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
