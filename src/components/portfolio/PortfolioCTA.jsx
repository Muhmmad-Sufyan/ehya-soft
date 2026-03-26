export default function PortfolioCTA() {
  return (
    <section className="bg-slate-900 dark:bg-slate-950 rounded-3xl p-12 md:p-20 text-center mb-12">
      <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
        Ready to build the future together?
      </h3>
      <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
        Let&apos;s turn your vision into a world-class digital product. Our team
        is ready to deliver excellence.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/contact"
          className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all"
        >
          Start a Project
        </a>
        <a
          href="/contact"
          className="px-8 py-4 border border-slate-600 text-white font-bold rounded-full hover:bg-white/10 transition-all"
        >
          Book a Call
        </a>
      </div>
    </section>
  );
}
