export default function ServicesGrid() {
  const services = [
    {
      title: "Web Development",
      description: "High-performance, responsive websites built with modern frameworks like React, Next.js, and Node.",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions for iOS and Android that provide seamless user experiences.",
    },
    {
      title: "Custom Software",
      description: "Bespoke enterprise software built to automate processes and solve your specific business challenges.",
    },
    {
      title: "UI/UX Design",
      description: "User-centric design that focuses on aesthetics, usability, and achieving your conversion goals.",
    },
    {
      title: "Startup MVP",
      description: "Speed to market. We build lean, scalable Minimum Viable Products to validate your idea fast.",
    },
    {
      title: "Digital Strategy",
      description: "Expert consulting to help you navigate the complex landscape of digital transformation.",
    },
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We offer comprehensive software development solutions tailored to help your business scale effortlessly in the digital era.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 glass-card"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors gradient-bg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
