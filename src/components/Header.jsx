"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-custom flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <Link href="/" className="font-bold text-2xl tracking-tight text-slate-900">
              EhyaSoft
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <Link className="text-sm font-semibold text-slate-600 hover:text-accent transition-colors" href="/">Home</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-accent transition-colors" href="/about">About</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-accent transition-colors" href="/services">Services</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-accent transition-colors" href="/portfolio">Portfolio</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-accent transition-colors" href="/contact">Contact</Link>
          </div>
          <div className="hidden md:flex items-center">
            <Link className="gradient-bg text-white px-6 py-3 rounded-custom text-sm font-bold transition-all transform hover:scale-105 vibrant-shadow" href="/contact">
              Request a Quote
            </Link>
          </div>
          <div className="md:hidden">
            <button className="p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100">
          <div className="px-4 py-4 space-y-3">
            <Link className="block text-sm font-semibold text-slate-600 hover:text-accent transition-colors py-2" href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link className="block text-sm font-semibold text-slate-600 hover:text-accent transition-colors py-2" href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link className="block text-sm font-semibold text-slate-600 hover:text-accent transition-colors py-2" href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link className="block text-sm font-semibold text-slate-600 hover:text-accent transition-colors py-2" href="/portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
            <Link className="block text-sm font-semibold text-slate-600 hover:text-accent transition-colors py-2" href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link className="block gradient-bg text-white px-6 py-3 rounded-custom text-sm font-bold text-center vibrant-shadow" href="/contact" onClick={() => setMobileMenuOpen(false)}>Request a Quote</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
