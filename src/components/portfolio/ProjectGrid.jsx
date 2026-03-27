"use client";

import Link from "next/link";

const projects = [
  {
    title: "AlifLaila Kids Digital Library",
    categoryId: ["mobile-apps","web-apps","dashboards"],
    tags: ["React Native", "Next.js", "Node.js", "MySQL", "AWS", "Laravel"],
    description:
      "A feature-rich storytelling and reading platform built with React Native and a robust backend, delivering an immersive experience for users worldwide.",
    image: "/project-images/aliflaila.png",
    link: "https://aliflaila.app/",
  },
  {
    title: "Ehya Classmate",
    categoryId: ["web-apps","mobile-apps","dashboards","ai-ml",'agentic-ai'],
    tags: ["React Native", "Next.js", "Node.js", "MongoDB", "AWS",],
    description:
      "An innovative education platform connecting students and teachers with smart tools for learning, collaboration, and classroom management.",
    image: "/project-images/classmate.png",
    link: "https://classmate.ehya.com.pk/",
  },
  {
    title: "FIELDx AI",
    categoryId: ["ai-ml","web-apps" ,"mobile-apps","dashboards","agentic-ai","rag-graphrag"],
    tags: ["React Native", "Next.js", "Node.js", "MySQL", "AWS"],
    description:
      "An AI-powered field operations platform that streamlines data collection, analysis, and team coordination for enterprises.",
    image: "/project-images/fieldx.jpeg",
    link: "https://fieldxai.com/",
  },
  {
    title: "Ittesaal - Journal of Connecting Discourses",
    categoryId: ["web-apps"],
    tags: ["Next.js", "Node.js", "MongoDB", "AWS"],
    description:
      "A peer-reviewed academic journal platform by Ehya Education Services, facilitating scholarly discourse and research publication.",
    image: "/project-images/ijcd.jpg",
    link: "https://journal.ehya.com.pk/ijcd",
  },
];

export default function ProjectGrid({ activeFilter }) {
  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categoryId.includes(activeFilter));

  if (filtered.length === 0) {
    return (
      <div className="text-center py-20 mb-20">
        <p className="text-slate-500 text-lg">
          No projects found for this category yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
      {filtered.map((project) => (
        <Link
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow"
        >
          <div className="aspect-[16/10] relative overflow-hidden bg-slate-100">
            <img
              alt={project.title}
              src={project.image}
              className="w-full h-full  transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <span className="px-6 py-2.5 bg-white text-primary font-bold rounded-full text-sm shadow-lg translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                Visit Website
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
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {project.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
