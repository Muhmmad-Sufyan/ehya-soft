import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-bg rounded-3xl p-8 md:p-12 lg:p-20 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Have an Idea? Let&rsquo;s Build It Together.
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
              Whether you need a full product team or specialized expertise, we are ready to turn your vision into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                className="px-8 py-4 bg-white text-primary font-bold rounded-custom hover:shadow-xl hover:bg-slate-50 transition-all"
                href="/contact"
              >
                Work With Us
              </Link>
              <Link
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-custom hover:bg-white/10 transition-all"
                href="/contact"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
