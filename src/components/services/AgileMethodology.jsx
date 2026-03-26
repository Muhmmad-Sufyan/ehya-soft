const steps = [
  {
    number: "01",
    icon: "lightbulb",
    title: "Discovery",
    description:
      "We dive deep into your business goals, target audience, and competitive landscape to define a clear product vision and strategy.",
  },
  {
    number: "02",
    icon: "draw",
    title: "Blueprint",
    description:
      "Our designers and architects create detailed wireframes, prototypes, and technical specifications that map out every feature and interaction.",
  },
  {
    number: "03",
    icon: "code",
    title: "Sprints",
    description:
      "We build in iterative two-week sprints with continuous integration, code reviews, and regular demos so you see progress in real time.",
  },
  {
    number: "04",
    icon: "rocket",
    title: "Launch",
    description:
      "We handle deployment, monitoring, and optimization to ensure a flawless launch, then provide ongoing support and iteration.",
  },
];

export default function AgileMethodology() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">
            Our Agile Methodology
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="glass-card rounded-2xl p-8 text-center hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-white text-2xl">
                  {step.icon}
                </span>
              </div>
              <span className="text-sm font-bold text-primary tracking-wide">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
