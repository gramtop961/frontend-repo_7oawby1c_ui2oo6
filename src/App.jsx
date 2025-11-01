import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';

function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#07080c]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(30%_30%_at_70%_-10%,rgba(59,130,246,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white">Let’s build something great</h2>
            <p className="mt-3 text-white/70">Tell us about your project and timeline. We’ll get back within 24 hours.</p>
            <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="col-span-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Your name" />
              <input type="email" className="col-span-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Email" />
              <input className="sm:col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Company / Brand" />
              <textarea rows="4" className="sm:col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Project details" />
              <div className="sm:col-span-2 flex items-center justify-between gap-3">
                <p className="text-xs text-white/50">By sending, you agree to our privacy policy.</p>
                <button type="button" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 shadow-lg shadow-indigo-500/20 transition-transform hover:scale-[1.02] active:scale-[0.99]">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-[#07080c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Pixel Luminance Lab. All rights reserved.</p>
          <div className="text-white/50 text-sm">Made with care and clean code.</div>
        </div>
      </footer>
    </div>
  );
}
