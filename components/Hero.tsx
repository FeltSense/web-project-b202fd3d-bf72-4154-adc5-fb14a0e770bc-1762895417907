import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
  {/* Sophisticated background pattern */}
  <div className="absolute inset-0 opacity-5">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="legal-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M50 0 L50 100 M0 50 L100 50" stroke="white" strokeWidth="0.5" fill="none"/>
          <circle cx="50" cy="50" r="2" fill="white"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#legal-pattern)"/>
    </svg>
  </div>

  {/* Elegant gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/40"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20 lg:py-0">
      
      {/* Left Content */}
      <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-amber-500/10 border border-amber-500/20 rounded-full backdrop-blur-sm">
          <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <span className="text-sm font-medium text-amber-100">Trusted by 2,500+ Clients Since 1998</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Expert Legal
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 mt-2">
              Counsel You
            </span>
            <span className="block mt-2">Can Trust</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Award-winning attorneys delivering exceptional results across corporate law, litigation, real estate, family law, immigration, and intellectual property matters.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6 border-y border-slate-700/50">
          <div className="text-center lg:text-left">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400">25+</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Years Experience</div>
          </div>
          <div className="text-center lg:text-left border-x border-slate-700/50">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400">98%</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Success Rate</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400">$2B+</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Recovered</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button 
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Free Consultation
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button 
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              document.getElementById('practice-areas')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-lg border-2 border-slate-700 backdrop-blur-sm transition-all duration-300 hover:bg-slate-700/50 hover:border-amber-500/50 hover:shadow-lg"
          >
            <span className="flex items-center justify-center gap-2">
              View Practice Areas
              <svg className="w-5 h-5 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Licensed in Multiple States</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>24/7 Emergency Support</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Confidential Consultations</span>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative lg:h-screen flex items-center justify-center">
        <div className="relative w-full max-w-lg lg:max-w-none">
          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Main image container */}
          <div className="relative z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 via-slate-800/50 to-transparent z-10"></div>
              <Image 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
                width={800}
                height={1000}
                alt="Professional attorneys in modern law office discussing legal strategy"
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Floating credential card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-slate-900/95 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                    <svg className="w-7 h-7 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"/>
                      <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-1">Recent Victory</h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      $47M settlement secured in complex corporate litigation case
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-slate-900"></div>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-900"></div>
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-slate-900"></div>
                      </div>
                      <span className="text-xs text-slate-400">Led by senior partners</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative corner accents */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-amber-500/30 rounded-tl-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-amber-500/30 rounded-br-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom scroll indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
    </svg>
  </div>
</div>
  );
}