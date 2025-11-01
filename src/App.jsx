import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} Pixel Luminance Lab — All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
