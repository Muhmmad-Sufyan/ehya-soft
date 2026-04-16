import Image from "next/image";

const services = [
  {
    id: "web-development",
    icon: "globe",
    title: "Web Development",
    heading: "What does web development look like at EhyaSoft?",
    description:
      "We build blazing-fast, SEO-optimized web applications using the latest frameworks and cloud infrastructure. Our sites are engineered for performance, accessibility, and conversion.",
    bullets: [
      "React, Next.js & Vue front-ends",
      "Full-stack Cloud architecture (AWS, GCP, Azure)",
      "Headless CMS & JAMstack integrations",
    ],
    image:
      "/web.png",
  },
  {
    id: "mobile-development",
    icon: "smartphone",
    title: "Mobile Experiences",
    heading: "How do you build apps that users actually love?",
    description:
      "From native iOS and Android to cross-platform solutions, we craft mobile apps that users love. Every interaction is designed for delight and built for reliability.",
    bullets: [
      "Native Swift & Kotlin development",
      "Cross-platform with Flutter & React Native",
      "Offline-first & real-time sync capabilities",
    ],
    image:
      "/mobile.png",
  },
  {
    id: "enterprise-software",
    icon: "terminal",
    title: "Custom Enterprise Software",
    heading: "When does custom enterprise software beat off-the-shelf?",
    description:
      "We architect and build mission-critical enterprise systems that streamline operations and unlock new revenue streams. Our solutions are secure, scalable, and maintainable.",
    bullets: [
      "Custom CRM & ERP platforms",
      "AI/ML-powered automation & analytics",
      "Scalable APIs & microservices architecture",
    ],
    image:
      "/software.png",
  },
  {
    id: "ui-ux-design",
    icon: "palette",
    title: "UI/UX Design Systems",
    heading: "Why start with UI/UX before engineering?",
    description:
      "Great products start with great design. We create cohesive design systems and pixel-perfect interfaces grounded in user research and modern design principles.",
    bullets: [
      "User research & journey mapping",
      "High-fidelity prototyping & interaction design",
      "Design system documentation & component libraries",
    ],
    image:
      "/uiux.png",
  },
  {
    id: "ai-agents",
    icon: "smart_toy",
    title: "AI Agents & Intelligent Automation",
    heading: "What do production-grade AI agents actually do?",
    description:
      "We build production-ready AI systems that go beyond basic chat experiences. From Agentic AI and autonomous agents to RAG pipelines and Graph RAG architectures, our solutions help businesses automate complex workflows, unlock connected knowledge, and deliver faster, smarter decisions at scale.",
    bullets: [
      "AI Agents for workflow automation",
      "RAG & Graph RAG knowledge systems",
      "Custom LLM applications & enterprise AI integration",
    ],
    image:
      "/agent.png",
  },
];

export default function ServicesDeepDive() {
  return (
    <section className="py-12 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 space-y-16 md:space-y-32">
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <div
              id={service.id}
              key={service.title}
              className={`scroll-mt-32 grid lg:grid-cols-2 gap-16 items-center ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`order-1   ${isReversed ? "lg:order-2" : "lg:order-1"}`}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} illustration`}
                  width={2750}
                  height={1950}
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  className="md:aspect-[16/9] w-full mx-auto object-contain"
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
                  <p className="text-sm font-bold uppercase tracking-widest text-primary">
                    {service.title}
                  </p>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-snug">
                  {service.heading || service.title}
                </h2>
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
