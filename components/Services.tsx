export default function Services() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 overflow-hidden">
  {/* Decorative Elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2"></div>
  
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header */}
    <div className="max-w-3xl mx-auto text-center mb-20">
      <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-5 py-2 mb-6">
        <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
        <span className="text-sm font-semibold text-amber-900 tracking-wide uppercase">Areas of Practice</span>
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
        Comprehensive Legal
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">Excellence</span>
      </h2>
      <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
        Multi-disciplinary expertise to protect your interests and achieve your legal objectives with proven results
      </p>
    </div>

    {/* Featured Primary Services */}
    <div className="grid lg:grid-cols-2 gap-8 mb-12 max-w-7xl mx-auto">
      {/* Corporate Law - Featured */}
      <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative p-8 lg:p-10">
          <div className="flex items-start justify-between mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Premier Practice</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-amber-700 transition-colors">
            Corporate Law & Business Transactions
          </h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Strategic counsel for mergers, acquisitions, contract negotiations, corporate governance, and regulatory compliance. We protect your business interests from formation through exit.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>M&A transactions exceeding $500M</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Complex contract drafting & negotiation</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Securities law & SEC compliance</span>
            </div>
          </div>
          <button className="group/btn flex items-center gap-2 text-amber-700 font-semibold hover:gap-4 transition-all">
            <span>Schedule Consultation</span>
            <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Litigation - Featured */}
      <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative p-8 lg:p-10">
          <div className="flex items-start justify-between mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <span className="bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Trial Proven</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
            Litigation & Dispute Resolution
          </h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Aggressive representation in commercial litigation, employment disputes, and civil matters. Our trial attorneys have secured favorable verdicts and settlements exceeding $250M.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <svg className="w-5 h-5 text-slate-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>95% success rate in trial verdicts</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <svg className="w-5 h-5 text-slate-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Complex commercial disputes</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <svg className="w-5 h-5 text-slate-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Arbitration & mediation expertise</span>
            </div>
          </div>
          <button className="group/btn flex items-center gap-2 text-slate-700 font-semibold hover:gap-4 transition-all">
            <span>Case Evaluation</span>
            <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* Secondary Services Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {/* Real Estate Law */}
      <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Real Estate Law</h4>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          Commercial & residential transactions, property disputes, zoning, title issues, and leasing agreements.
        </p>
        <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold group-hover:gap-3 transition-all">
          <span>Learn More</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Family Law */}
      <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-rose-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">Family Law</h4>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          Divorce, child custody, spousal support, prenuptial agreements, and domestic matters handled with sensitivity.
        </p>
        <div className="flex items-center gap-2 text-rose-600 text-sm font-semibold group-hover:gap-3 transition-all">
          <span>Learn More</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Immigration Law */}
      <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">Immigration Law</h4>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          Visas, green cards, citizenship, deportation defense, and asylum cases with proven success rates.
        </p>
        <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold group-hover:gap-3 transition-all">
          <span>Learn More</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Intellectual Property */}
      <div className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">Intellectual Property</h4>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          Patent, trademark, copyright protection, licensing, and IP litigation for innovators and creators.
        </p>
        <div className="flex items-center gap-2 text-purple-600 text-sm font-semibold group-hover:gap-3 transition-all">
          <span>Learn More</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>

    {/* Stats Bar */}
    <div className="mt-20 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-8 lg:p-12 max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div className="text-center">
          <div className="text-4xl lg:text-5xl font-bold text-amber-400 mb-2">500+</div>
          <div className="text-slate-300 text-sm font-medium">Cases Won</div>
        </div>
        <div className="text-center border-l border-slate-700 sm:border-l-0 lg:border-l">
          <div className="text-4xl lg:text-5xl font-bold text-amber-400 mb-2">$250M+</div>
          <div className="text-slate-300 text-sm font-medium">Client Recoveries</div>
        </div>
        <div className="text-center border-l border-slate-700">
          <div className="text-4xl lg:text-5xl font-bold text-amber-400 mb-2">25+</div>
          <div className="text-slate-300 text-sm font-medium">Years Experience</div>
        </div>
        <div className="text-center border-l border-slate-700">
          <div className="text-4xl lg:text-5xl font-bold text-amber-400 mb-2">98%</div>
          <div className="text-slate-300 text-sm font-medium">Client Satisfaction</div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="mt-20 text-center max-w-3xl mx-auto">
      <div className="bg-gradient-to-br from-amber-50 to-slate-50 rounded-2xl p-10 lg:p-12 border border-amber-200">
        <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
          Ready to Discuss Your Legal Matter?
        </h3>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Free initial consultation to assess your case and determine the best legal strategy
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-700 hover:to-amber-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Book Free Consultation
          </button>
          <button className="bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold border-2 border-slate-300 hover:border-amber-600 hover:text-amber-700 transition-all">
            View Our Attorneys
          </button>
        </div>
        <p className="text-sm text-slate-500 mt-6">
          All consultations are confidential and protected by attorney-client privilege
        </p>
      </div>
    </div>
  </div>
</section>
  );
}