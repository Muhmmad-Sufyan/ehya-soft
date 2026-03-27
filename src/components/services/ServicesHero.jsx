export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pb-32">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 blur-3xl pointer-events-none">
        <div className="hero-glow -top-40 -right-40 bg-blue-500/20"></div>
        <div className="hero-glow bottom-0 -left-20 opacity-50"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Expertise &amp; Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Architecting the{" "}
            <span className="gradient-text">Next Generation</span> of Tech.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            We combine high-end Silicon Valley aesthetics with robust
            engineering to deliver digital experiences that scale. From vision to
            deployment, we are your product partners.
          </p>
        </div>
      </div>
    </section>
  );
}
