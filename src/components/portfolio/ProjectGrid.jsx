import Link from "next/link";

const projects = [
  {
    title: "Aliflaila",
    tags: ["React Native", "Next.js", "Node.js", "MySQL", "AWS", "Laravel"],
    description: "A feature-rich storytelling and reading platform built with React Native and a robust backend, delivering an immersive experience for users worldwide.",
    image: "/project-images/aliflaila.png",
    link: "https://aliflaila.app/",
  },
  {
    title: "Ehya Classmate",
    tags: ["React Native", "Next.js", "Node.js", "MongoDB", "AWS"],
    description: "An innovative education platform connecting students and teachers with smart tools for learning, collaboration, and classroom management.",
    image: "/project-images/classmate.png",
    link: "https://classmate.ehya.com.pk/",
  },
  {
    title: "FieldX AI",
    tags: ["React Native", "Next.js", "Node.js", "MySQL", "AWS"],
    description: "An AI-powered field operations platform that streamlines data collection, analysis, and team coordination for enterprises.",
    image: "/project-images/fieldx.jpeg",
    link: "https://fieldxai.com/",
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
      {projects.map((project) => (
        <Link
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-shadow"
        >
          <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
            <img
              alt={project.title}
              src={project.image}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center">
              <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                View Case Study
              </span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
