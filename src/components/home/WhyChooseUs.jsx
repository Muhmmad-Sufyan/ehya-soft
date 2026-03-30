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
    <section className="py-12 md:py-24 text-white bg-gradient-to-b from-slate-900 to-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-8">Why Businesses Choose EhyaSoft</h2>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white border border-primary/30">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-tr from-primary/40 to-accent/20 rounded-3xl p-4 md:p-8 flex items-center justify-center border border-white/10 overflow-hidden">
              <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
                {stats.map((stat, index) => (
                  <div key={index} className={`p-4 md:p-8 glass-card !bg-white/5 rounded-2xl text-center ${stat.offsetTop ? "md:mt-8" : ""}`}>
                    <div className="text-2xl md:text-4xl font-extrabold mb-1">{stat.value}</div>
                    <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
