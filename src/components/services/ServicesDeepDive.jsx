const services = [
  {
    icon: "globe",
    title: "Web Development",
    description:
      "We build blazing-fast, SEO-optimized web applications using the latest frameworks and cloud infrastructure. Our sites are engineered for performance, accessibility, and conversion.",
    bullets: [
      "React, Next.js & Vue front-ends",
      "Full-stack Cloud architecture (AWS, GCP, Azure)",
      "Headless CMS & JAMstack integrations",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4B2spXqbMMNAQtGHDxff5Bc5tkkoKC5kMVPPZEJGX5xhl7mgWCgsAT9foWREVafyxRua2oqfY-MleC8KCqZRH_UbIl8mwQC3T-yRkn-mDjzfKZQ0S1Wr5dEB-F7ZBP4UBsErb2M6qA6vgO42qQZaUKUbTe5lwPykdvlNwd3Hncle7XM9l9TmpkOj2TtigLPVA3SzQt3laQMA_21GRJe3iR3qwgqnNfjzVjOWYCUhXhqww-WihNPUS71B370V7zaQxy-htPTdlcss",
  },
  {
    icon: "smartphone",
    title: "Mobile Experiences",
    description:
      "From native iOS and Android to cross-platform solutions, we craft mobile apps that users love. Every interaction is designed for delight and built for reliability.",
    bullets: [
      "Native Swift & Kotlin development",
      "Cross-platform with Flutter & React Native",
      "Offline-first & real-time sync capabilities",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyCAxegtuILIJF8z_z0OAbbSw7HNZpP3JprFHm9Vdos8HTfbhARlM5abcCSjRW_-NKBdk3qHCxvnJk8M9SkKP66SIHEMvev3hQS6bOjqW49BGt3V8ZChd8S4UAlGB7FYynxYukTNQQVIHYFNHCBkNf8UbqBGZBSO5nO-4XdEx5ak80m6F9T1tBJXWffkEPArjuWWgpI-IdWd1QhmVu3iTDO8iJmcxMJ2Rt1mZRHO_B2F_ZjApxmPk1Ts39QhwhTm6x7lPPQifDtQM",
  },
  {
    icon: "terminal",
    title: "Custom Enterprise Software",
    description:
      "We architect and build mission-critical enterprise systems that streamline operations and unlock new revenue streams. Our solutions are secure, scalable, and maintainable.",
    bullets: [
      "Custom CRM & ERP platforms",
      "AI/ML-powered automation & analytics",
      "Scalable APIs & microservices architecture",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALM8f8k_0R3yPFdDnIqdAm5XamPfd5JEN05VYtbmfSXjFrheLWDRlYscYA47oWefrFp8_aiQFbMYdg3AdtIXTufyaLkNjFPfGAekRU8fy0W7H6p0qzeENAlJm_kGn-_t_wm_bUyM1GZ86e60wsLfFi-5QFdEmwSI_J4mE5WkYWDnd1i8h4sCs-gamg3W_lrBjTwCDyoFoXR6JANQ5F9DcUU0nS70Fb-5duVWPDB-aQBt1dok-RsfodwX7Q0jHFEbxwpT7Ga8NJxL4",
  },
  {
    icon: "palette",
    title: "UI/UX Design Systems",
    description:
      "Great products start with great design. We create cohesive design systems and pixel-perfect interfaces grounded in user research and modern design principles.",
    bullets: [
      "User research & journey mapping",
      "High-fidelity prototyping & interaction design",
      "Design system documentation & component libraries",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPbTKSsVdqmR7VojAYu-HHdWEwI26fzLOLAB9WvtWrxhR47ILuuMsz9gwRi6_CSjbH5ZYUYWmhheJN__6SL4CNWin8jwov-4zleNcbmXwdGZ-xxyvzYROZvzqC-h7-8pSppwQcnaLwW8dVy--46XjSdjK4vDGfVtYan4Bbf1GdYoM0Rcf94oLF4e4fwwnoDqvlRcgZj3Mtx7KFLYMcegaQxW5Kcna-zYhOnHg3KNwnnGGJhtqSA1dKmmS9edHPug_KIJdEcwD3A_o",
  },
];

export default function ServicesDeepDive() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div
              key={service.title}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`order-1 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
              >
                <div
                  className="glass-card aspect-video rounded-2xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
              </div>

              {/* Content */}
              <div
                className={`order-2 ${isReversed ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-3xl text-primary">
                    {service.icon}
                  </span>
                  <h3 className="text-3xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-green-500 mt-0.5">
                        check_circle
                      </span>
                      <span className="text-slate-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
