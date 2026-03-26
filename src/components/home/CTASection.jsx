import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 px-4" id="quote">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative bg-primary p-12 lg:p-20 text-center">
        <div className="absolute inset-0 opacity-90 gradient-bg"></div>
        <div className="relative z-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-8">
            Have an Idea? Let&apos;s Build It Together.
          </h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
            Contact us today for a free consultation and project estimate.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-10 py-5 rounded-custom font-bold text-lg hover:shadow-2xl transition-all hover:scale-105 vibrant-shadow"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
