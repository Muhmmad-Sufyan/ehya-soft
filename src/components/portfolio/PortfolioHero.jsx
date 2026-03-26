export default function PortfolioHero() {
  return (
    <section className="mb-16">
      <div className="max-w-3xl">
        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
          Our Portfolio
        </span>
        <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-[1.1]">
          Crafting the next{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
            digital frontier
          </span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          We partner with forward-thinking brands to build high-performance
          digital experiences that scale. From fintech disruption to AI-powered
          diagnostics.
        </p>
      </div>
    </section>
  );
}
