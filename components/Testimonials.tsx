import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-24 overflow-hidden">
  {/* Decorative legal pattern background */}
  <div className="absolute inset-0 opacity-[0.02]">
    <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: '60px 60px'
    }}></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    {/* Section header */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        CLIENT TESTIMONIALS
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
        Trusted by Clients<br />
        <span className="text-slate-600">Across All Legal Matters</span>
      </h2>
      <p className="text-lg text-slate-600 leading-relaxed">
        Real outcomes from real clients. See how our legal expertise has made a tangible difference in complex cases and high-stakes negotiations.
      </p>
    </div>

    {/* Testimonials grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      {/* Testimonial 1 - Corporate Law */}
      <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
        
        <div className="relative">
          {/* Quote icon */}
          <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Testimonial text */}
          <p className="text-slate-700 leading-relaxed mb-8 text-base">
            "Our company faced a complex merger valued at <span className="font-semibold text-slate-900">$47 million</span> with potential regulatory hurdles. The team navigated us through <span className="font-semibold text-slate-900">18 months of negotiations</span>, secured all necessary approvals, and closed the deal <span className="font-semibold text-slate-900">3 weeks ahead of schedule</span>. Their corporate law expertise saved us an estimated <span className="font-semibold text-slate-900">$2.3 million in potential complications</span>."
          </p>

          {/* Client info */}
          <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                width={56} 
                height={56} 
                alt="Michael Chen"
                className="rounded-full object-cover ring-2 ring-slate-100"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 text-sm">Michael Chen</h4>
              <p className="text-slate-500 text-sm">CEO, TechVenture Solutions</p>
              <p className="text-xs text-slate-400 mt-0.5">Corporate Law · M&A</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 - Real Estate */}
      <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-slate-200 relative overflow-hidden lg:transform lg:scale-105">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-50 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
        
        {/* Featured badge */}
        <div className="absolute top-4 right-4 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full">
          FEATURED
        </div>

        <div className="relative">
          <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-slate-700 leading-relaxed mb-8 text-base">
            "A commercial property dispute threatened our <span className="font-semibold text-slate-900">$8.5 million investment</span>. The firm uncovered critical title defects the seller failed to disclose, negotiated a <span className="font-semibold text-slate-900">$1.2 million price reduction</span>, and resolved zoning complications that would have delayed our development by <span className="font-semibold text-slate-900">9 months</span>. Closed in <span className="font-semibold text-slate-900">45 days</span> with full legal protections in place."
          </p>

          <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" 
                width={56} 
                height={56} 
                alt="Sarah Martinez"
                className="rounded-full object-cover ring-2 ring-slate-100"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 text-sm">Sarah Martinez</h4>
              <p className="text-slate-500 text-sm">Principal, Martinez Development Group</p>
              <p className="text-xs text-slate-400 mt-0.5">Real Estate Law · Commercial</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 - Family Law */}
      <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 hover:border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-50 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
        
        <div className="relative">
          <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-slate-700 leading-relaxed mb-8 text-base">
            "During a difficult custody case, the firm prioritized my children&apos;s wellbeing while protecting my parental rights. They secured <span className="font-semibold text-slate-900">primary custody with a fair visitation schedule</span>, negotiated child support that was <span className="font-semibold text-slate-900">30% more equitable</span> than initial proposals, and handled everything with compassion during an emotional time. The mediation process took <span className="font-semibold text-slate-900">just 4 months</span> instead of years in court."
          </p>

          <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
            <div className="relative">
              <Image 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" 
                width={56} 
                height={56} 
                alt="Jennifer Thompson"
                className="rounded-full object-cover ring-2 ring-slate-100"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 text-sm">Jennifer Thompson</h4>
              <p className="text-slate-500 text-sm">Marketing Director</p>
              <p className="text-xs text-slate-400 mt-0.5">Family Law · Custody</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom testimonial - Immigration (Full width) */}
    <div className="group bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full"></div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-white/90 text-lg leading-relaxed mb-8">
              "After <span className="font-semibold text-white">two previous visa denials</span>, I was losing hope of bringing my family to the United States. This firm took on my case with determination, identified critical documentation gaps, and built an airtight application with <span className="font-semibold text-white">127 pages of supporting evidence</span>. They successfully appealed the decision, and my family received their visas in <span className="font-semibold text-white">just 6 months</span>. We&apos;re finally together after <span className="font-semibold text-white">3 years apart</span>."
            </p>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Image 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" 
                  width={64} 
                  height={64} 
                  alt="David Okonkwo"
                  className="rounded-full object-cover ring-4 ring-white/20"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-900"></div>
              </div>
              <div>
                <h4 className="font-semibold text-white text-base">David Okonkwo</h4>
                <p className="text-white/70 text-sm">Software Engineer, Global Tech Corp</p>
                <p className="text-xs text-white/50 mt-0.5">Immigration Law · Family Visa</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">98%</p>
                    <p className="text-white/60 text-sm">Success Rate</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">$180M+</p>
                    <p className="text-white/60 text-sm">Client Savings</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">2,400+</p>
                    <p className="text-white/60 text-sm">Cases Won</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Trust badges */}
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
      <div className="text-center">
        <p className="text-3xl font-bold text-slate-900 mb-1">25+</p>
        <p className="text-sm text-slate-600">Years Combined Experience</p>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold text-slate-900 mb-1">500+</p>
        <p className="text-sm text-slate-600">5-Star Reviews</p>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold text-slate-900 mb-1">98%</p>
        <p className="text-sm text-slate-600">Client Satisfaction</p>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold text-slate-900 mb-1">24/7</p>
        <p className="text-sm text-slate-600">Client Support</p>
      </div>
    </div>
  </div>
</section>
  );
}