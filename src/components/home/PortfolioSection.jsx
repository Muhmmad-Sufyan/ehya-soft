import Link from "next/link";

export default function PortfolioSection() {
  const projects = [
    {
      image: "/project-images/aliflaila.png",
      tags: ["React Native", "Next.js", "Node.js", "MySQL", "AWS","Laravel"],
      title: "AlifLaila Kids Digital Library",
      link: "https://aliflaila.app/",
    },
    {
      image: "/project-images/classmate.png",
      tags: ["React Native", "Next.js", "Node.js", "MongoDB", "AWS"],
      title: "Ehya Classmate",
      link: "https://classmate.ehya.com.pk/",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-slate-900 mb-2 md:mb-4">Selected Works</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-xl">
              A glimpse into the high-end digital products we&apos;ve brought to life for our global clients.
            </p>
          </div>
          <Link className="font-bold flex items-center gap-2 group gradient-text text-sm md:text-base" href="/portfolio">
            View all projects
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <Link key={index} className="group cursor-pointer" href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-video mb-4 md:mb-6 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-500">
                <img alt={project.title} className="w-full h-full " src={project.image} />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-6 py-2 bg-white text-primary font-bold rounded-full">Visit</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2 md:mb-3">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-[10px] md:text-xs font-bold uppercase tracking-wider md:tracking-widest text-primary bg-blue-50 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
