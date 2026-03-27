export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
      title: "Technical Excellence",
      description: "Our team consists of senior engineers who prioritize code quality, scalability, and performance.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
      title: "On-Time Delivery",
      description: "We respect deadlines. Our agile process ensures your product reaches the market as planned.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
      title: "Transparent Partnership",
      description: "You are involved in every step. No hidden fees, no surprises, just honest collaboration.",
    },
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction", offsetTop: false },
    { value: "150+", label: "Projects Launched", offsetTop: true },
    { value: "12+", label: "Countries Reached", offsetTop: false },
    { value: "24/7", label: "Global Support", offsetTop: true },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Why Choose Us</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Businesses Choose{" "}
              <span className="gradient-text">EhyaSoft</span>
            </h2>
            <p className="text-slate-500 mb-12 text-lg leading-relaxed">
              We deliver results that matter. Here&apos;s what sets us apart from the rest.
            </p>
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-5 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white shadow-lg shadow-primary/20">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Stats */}
          <div>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl bg-white border border-slate-200 shadow-sm text-center hover:shadow-md hover:border-primary/30 transition-all duration-300 ${stat.offsetTop ? "mt-8" : ""}`}
                >
                  <div className="text-4xl font-extrabold gradient-text mb-2">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
