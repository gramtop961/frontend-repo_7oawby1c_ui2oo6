import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const LinkItem = ({ href, children }) => (
    <a
      href={href}
      className="relative px-3 py-2 text-sm text-white/90 hover:text-white transition-colors"
    >
      <span>{children}</span>
      <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
    </a>
  );

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 shadow-lg shadow-indigo-500/20" />
            <span className="font-semibold tracking-tight text-white">Pixel Luminance Lab</span>
          </a>

          <nav className="hidden md:flex items-center gap-2 group">
            <LinkItem href="#services">Services</LinkItem>
            <LinkItem href="#work">Work</LinkItem>
            <LinkItem href="#contact">Contact</LinkItem>
          </nav>

          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-2">
              <a href="#services" className="px-3 py-2 rounded-xl hover:bg-white/10 text-white">Services</a>
              <a href="#work" className="px-3 py-2 rounded-xl hover:bg-white/10 text-white">Work</a>
              <a href="#contact" className="px-3 py-2 rounded-xl hover:bg-white/10 text-white">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
