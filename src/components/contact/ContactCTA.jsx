import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-24 text-center">
      <div className="rounded-2xl md:rounded-[3rem] p-8 md:p-12 lg:p-24 relative overflow-hidden group gradient-bg">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        <div className="relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
            Ready to start your next project?
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12">
            Join over 500+ innovative companies using EhyaSoft&apos;s solutions
            to scale their digital infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="bg-white text-primary px-10 py-5 rounded-full text-lg font-black hover:bg-slate-100 transition-all shadow-xl shadow-black/10 vibrant-shadow">
              Book a Consultation
            </Link>
            <Link href="/portfolio" className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-black hover:bg-white/10 transition-all">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
