export default function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your goals, market, and user requirements.",
      gradient: false,
    },
    {
      number: "02",
      title: "Design",
      description: "Crafting intuitive interfaces and robust system architectures.",
      gradient: false,
    },
    {
      number: "03",
      title: "Build",
      description: "Developing your solution using clean, efficient code.",
      gradient: true,
    },
    {
      number: "04",
      title: "Launch",
      description: "Thorough testing followed by a seamless production release.",
      gradient: false,
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="process">
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">Our Process</h2>
          <p className="text-slate-600">From initial concept to final deployment, we follow a proven methodology.</p>
        </div>
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200"></div>
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-slate-50 z-10 relative ${
                    step.gradient ? "gradient-bg" : "bg-white"
                  }`}
                >
                  <span className={`text-2xl font-bold ${step.gradient ? "text-white" : "text-primary"}`}>
                    {step.number}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-slate-500 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
