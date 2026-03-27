import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pb-32">
      <div className="hero-glow -top-40 -left-40 bg-blue-500/20"></div>
      <div className="hero-glow bottom-0 -right-20 opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Premium Software Studio
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
            Who We <span className="gradient-text">Are</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-10">
            We are digital innovators committed to transforming bold ideas into exceptional software experiences. Our team combines deep technical expertise with creative vision to deliver products that make a lasting impact.
          </p>
          <Link
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-custom hover:shadow-xl transition-all gradient-bg"
            href="#our-story"
          >
            <span className="material-symbols-outlined text-xl">explore</span>
            Explore Our Mission
          </Link>
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <img
            alt="EhyaSoft team collaborating"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0_VON0rsq1nRmJOjXrLQnTQQEebAlbaK466o0_ZwsrjyfmPVDjwqapEg5ZKQA7-IHFzv9EOA81wVY82YAeOREwKjLfa8REl0rWt-zZwi5BaYmxOhoI2GVvrmiWkRZqrmAW3F2ZaK-95t9SdhAdxOGtb24nQ8LGYC-OutGGDGZ_UjQB6f0pQeWaMaX6ywErK39Fw25k4D4tGGdYHp57ucAJWNfTltJQtcEfHXZc5ilvRiuxvTelDknhUuAsoWyYiirTY3PXBjAJMQ"
          />
        </div>
      </div>
    </section>
  );
}
