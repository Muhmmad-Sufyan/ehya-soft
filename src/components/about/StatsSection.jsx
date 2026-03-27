export default function StatsSection() {
  const stats = [
    { value: "50+", label: "Global Experts" },
    { value: "150+", label: "Projects Delivered" },
    { value: "10+", label: "Years Experience" },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="p-8">
              <div className="text-6xl font-extrabold gradient-text mb-3">
                {stat.value}
              </div>
              <p className="text-lg text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
