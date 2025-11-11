'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
    {/* Main Footer Grid */}
    <div className="grid md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-12">
      {/* Company Section */}
      <div>
        <h3 className="text-white text-xl font-bold mb-6">Real Estate Pro</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Connecting dreams with properties. We&apos;re committed to finding your perfect home and maximizing your investment potential.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-blue-500 transition-colors">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-blue-500 transition-colors">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 002.856-3.51 10.02 10.02 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-blue-500 transition-colors">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="currentColor"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
            </svg>
          </a>
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-blue-500 transition-colors">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.422-.103.249-.129.597-.129.946v5.437h-3.554s.047-8.842 0-9.769h3.554v1.383c.43-.665 1.199-1.61 2.920-1.61 2.135 0 3.735 1.39 3.735 4.38v5.616zM5.337 9.341c-1.152 0-1.917-.762-1.917-1.716 0-.956.765-1.715 1.944-1.715 1.178 0 1.915.759 1.939 1.715 0 .954-.761 1.716-1.939 1.716zm1.581 11.111H3.656V9.683h3.262v10.769zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
        <nav className="space-y-2">
          <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Property Search</a>
          <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Home Valuation</a>
          <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Investment Analysis</a>
          <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Market Reports</a>
          <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Virtual Tours</a>
        </nav>
      </div>

      {/* Quick Links Section */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
        <nav className="space-y-2">
          <a href="/" className="block text-gray-400 hover:text-white transition-colors text-sm">Home</a>
          <a href="#about" className="block text-gray-400 hover:text-white transition-colors text-sm">About Us</a>
          <a href="#contact" className="block text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
          <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
        </nav>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Get In Touch</h3>
        <div className="space-y-4">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</p>
            <a href="mailto:hello@realestatepro.com" className="text-gray-300 text-sm hover:text-white transition-colors">
              hello@realestatepro.com
            </a>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Phone</p>
            <a href="tel:+1234567890" className="text-gray-300 text-sm hover:text-white transition-colors">
              +1 (234) 567-890
            </a>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Hours</p>
            <p className="text-gray-300 text-sm">Mon - Fri: 9AM - 6PM</p>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-800"></div>

    {/* Copyright Section */}
    <div className="pt-8 mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © 2025 Real Estate Pro. All rights reserved. | Crafted for excellence in real estate.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Sitemap</a>
          <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Accessibility</a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}