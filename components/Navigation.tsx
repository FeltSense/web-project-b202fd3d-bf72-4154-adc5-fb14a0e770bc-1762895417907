'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.5 1.5H4a2 2 0 00-2 2v13a2 2 0 002 2h12a2 2 0 002-2v-9l-6.5-6z" />
            <path d="M10 1.5v6h6" fill="currentColor" opacity="0.2" />
          </svg>
        </div>
        <span className="text-lg font-semibold text-slate-900">Elevate Properties</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200">
          Home
        </Link>
        <a href="#about" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200">
          About
        </a>
        <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200">
          Contact
        </a>
      </div>

      {/* CTA Button - Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <button className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
          onClick={(e) => {
            const menu = document.getElementById('mobile-menu');
            if (menu) {
              menu.classList.toggle('hidden');
            }
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Navigation Menu */}
    <div id="mobile-menu" className="hidden md:hidden pb-4 border-t border-slate-200/50">
      <div className="space-y-2 pt-4">
        <Link href="/" className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
          Home
        </Link>
        <a href="#about" className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
          About
        </a>
        <a href="#contact" className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
          Contact
        </a>
        <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg hover:shadow-lg transition-all">
          Get Started
        </button>
      </div>
    </div>
  </div>
</nav>
  );
}