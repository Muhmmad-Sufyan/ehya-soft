import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="gradient-bg rounded-3xl p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Let&apos;s turn your vision into a world-class digital product.
            Schedule a free consultation and discover how EhyaSoft can
            accelerate your growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary font-bold rounded-custom hover:shadow-xl transition-all"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-custom hover:bg-white/10 transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
