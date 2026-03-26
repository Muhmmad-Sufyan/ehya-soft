export default function CoreValues() {
  const values = [
    {
      icon: "code",
      title: "Technical Excellence",
      description:
        "We hold ourselves to the highest engineering standards, writing clean, maintainable, and performant code on every project.",
    },
    {
      icon: "psychology",
      title: "Innovation",
      description:
        "We embrace emerging technologies and creative problem-solving to deliver forward-thinking solutions that keep our clients ahead.",
    },
    {
      icon: "handshake",
      title: "Client Partnership",
      description:
        "We treat every client relationship as a true partnership, aligning our goals with theirs to ensure mutual success and long-term value.",
    },
    {
      icon: "trending_up",
      title: "Scalability",
      description:
        "We architect systems built to grow, ensuring that today's solution can seamlessly handle tomorrow's demands.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            What Drives Us
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
            Our Core <span className="gradient-text">Values</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="glass-card p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-white text-3xl">
                  {value.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
