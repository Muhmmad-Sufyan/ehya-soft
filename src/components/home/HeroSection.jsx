import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="hero-glow -top-40 -left-40 bg-blue-500/20"></div>
      <div className="hero-glow bottom-0 -right-20 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Premier Software Solutions
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Turning Ideas Into <span className="gradient-text">Powerful Digital</span> Products
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              EhyaSoft helps startups and businesses design, develop, and launch modern mobile apps, websites, and scalable software platforms.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <Link className="px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-white font-bold rounded-custom hover:shadow-xl transition-all gradient-bg whitespace-nowrap" href="/contact">
                Start Your Project
              </Link>
              <Link className="px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-white border border-slate-200 text-slate-700 font-bold rounded-custom hover:bg-slate-50 transition-all whitespace-nowrap" href="/portfolio">
                View Portfolio
              </Link>
            </div>
          </div>
          {/* Visual Content */}
          <div className="relative lg:block">
            <div className="relative z-10 animate-float">
              {/* Main Featured UI Card */}
              <div className="glass-card p-6 rounded-2xl shadow-2xl border border-white/40">
                <div className="w-full h-64 bg-slate-100 rounded-xl mb-6 overflow-hidden">
                  <img
                    alt="Software Dashboard"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5HCDG7VCf-POehyyDYgifx_2IYEVRf_Dly9xxfUNSF8EjuwhsiW2YdA7U7ppKk_znUUW5Iz--9KGAaxm7F1wh7KrmlTPbRYRE1zLnS3WZ8IPm1wRvKdwzitt7RvLEjzy49gvESYUs6loIOTFJ8OI7BhYdfMedlr7JfqjnT307aI74mYnsbumQqGqD_Om4pUwgfO3c5FTaU6PMWBcsA5CkpLWlAeFDz-oF9w4TtGb0d6ZPkQ7sHhCTy9Dowc9Pt_sxXHuoErhMbgM"
                  />
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                  <div className="h-4 w-1/2 bg-slate-200 rounded"></div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 glass-card p-4 rounded-xl shadow-xl border border-white/50 w-40 animate-pulse-slow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="h-2 w-12 bg-slate-200 rounded"></div>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded"></div>
              </div>
              <div className="absolute -bottom-6 -left-10 glass-card p-4 rounded-xl shadow-xl border border-white/50 w-48">
                <div className="flex justify-between items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                    </svg>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs text-slate-400">Analytics</span>
                    <span className="block text-lg font-bold text-primary">+128%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
