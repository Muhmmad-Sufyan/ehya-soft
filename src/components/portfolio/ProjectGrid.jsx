"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const projects = [
  {
    title: "AlifLaila – Kids Digital Library",
    categoryId: ["mobile-apps", "web-apps", "dashboards"],
    tags: ["React Native", "Next.js", "Node.js", "MySQL", "Laravel"],
    description:
      "Our flagship edtech platform built from scratch, offering a comprehensive digital library for children. It features dedicated modules for kids, parents, and schools, combining interactive content, learning tools, and continuous platform support.",
    image: "/project-images/aliflaila.jpeg",
    link: "https://aliflaila.app/",
  },
  {
    title: "Ehya Classmate",
    categoryId: ["web-apps", "mobile-apps", "dashboards", "ai-ml", "agentic-ai"],
    tags: ["React Native", "Next.js", "Node.js"],
    description:
      "An AI-powered academic companion for secondary school students, designed for classrooms and self-study. It offers structured learning through textbook content, SLO-based practice, teacher notes, and progress tracking to support effective and personalized learning.",
    image: "/project-images/classmate.jpeg",
    link: "https://classmate.ehya.com.pk/",
  },
  {
    title: "FIELDx AI – Poultry Diagnosis Assistant",
    categoryId: ["ai-ml", "web-apps", "mobile-apps", "dashboards", "agentic-ai", "rag-graphrag"],
    tags: ["React Native", "Next.js", "Node.js", "MySQL"],
    description:
      "An AI-powered solution designed to assist poultry disease diagnosis and treatment planning. It analyzes symptoms and farm insights to deliver intelligent diagnostic support for faster, more informed decision-making.",
    image: "/project-images/fieldx.jpeg",
    link: "https://fieldxai.com/",
  },
  {
    title: "Ittesaal – Journal of Connecting Discourses",
    categoryId: ["web-apps"],
    tags: ["OJS"],
    description:
      "A digital academic journal platform for publishing peer-reviewed research in humanities, social sciences, and Islamic studies. It supports submissions, editorial workflows, and open-access publishing in a structured and accessible system.",
    image: "/project-images/ittesaal.jpeg",
    link: "https://journal.ehya.com.pk/ijcd",
  },
  // {
  //   title: "MediTrack – Hospital Management System",
  //   categoryId: ["web-apps", "dashboards"],
  //   tags: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
  //   description:
  //     "A comprehensive hospital management platform that streamlines patient records, appointment scheduling, billing, and staff coordination into a single unified dashboard for healthcare providers.",
  //   image: "/project-images/aliflaila.jpeg",
  //   link: "#",
  // },
  // {
  //   title: "ShopEase – E-Commerce Platform",
  //   categoryId: ["web-apps", "mobile-apps"],
  //   tags: ["React Native", "Next.js", "Stripe", "Node.js"],
  //   description:
  //     "A full-featured e-commerce solution with real-time inventory management, secure payment processing, and a seamless shopping experience across web and mobile devices.",
  //   image: "/project-images/classmate.jpeg",
  //   link: "#",
  // },
  // {
  //   title: "AgriSense – Smart Farm Monitoring",
  //   categoryId: ["ai-ml", "dashboards", "rag-graphrag"],
  //   tags: ["Python", "TensorFlow", "React", "MQTT"],
  //   description:
  //     "An IoT-powered smart farming dashboard that monitors soil health, weather patterns, and crop conditions in real-time using AI-driven analytics and sensor data integration.",
  //   image: "/project-images/fieldx.jpeg",
  //   link: "#",
  // },
  // {
  //   title: "LegalDesk – Case Management Suite",
  //   categoryId: ["web-apps", "dashboards"],
  //   tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
  //   description:
  //     "A digital case management platform for law firms, enabling efficient document handling, court date tracking, client communication, and billing in one centralized system.",
  //   image: "/project-images/ittesaal.jpeg",
  //   link: "#",
  // },
  // {
  //   title: "ChatBot Pro – AI Customer Support",
  //   categoryId: ["ai-ml", "agentic-ai", "rag-graphrag"],
  //   tags: ["Python", "LangChain", "Next.js", "OpenAI"],
  //   description:
  //     "An intelligent customer support chatbot powered by RAG and agentic AI that handles inquiries, resolves tickets, and escalates complex issues with context-aware responses.",
  //   image: "/project-images/aliflaila.jpeg",
  //   link: "#",
  // },
  // {
  //   title: "FleetSync – Vehicle Tracking System",
  //   categoryId: ["mobile-apps", "dashboards"],
  //   tags: ["React Native", "Node.js", "Google Maps", "Firebase"],
  //   description:
  //     "A real-time fleet management and vehicle tracking application providing route optimization, driver performance analytics, and live GPS monitoring for logistics companies.",
  //   image: "/project-images/classmate.jpeg",
  //   link: "#",
  // },
];

// Change this value to control how many cards show per page (e.g. 5, 6, 8)
const DEFAULT_ITEMS_PER_PAGE = 8;

export default function ProjectGrid({ activeFilter, itemsPerPage = DEFAULT_ITEMS_PER_PAGE, scrollRef }) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    scrollRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categoryId.includes(activeFilter));

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

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
    <div className="mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
        {paginated.map((project) => (
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
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <span className="px-6 py-2.5 bg-white text-primary font-bold rounded-full text-sm shadow-lg translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  Visit Website
                </span>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 sm:px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === page
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
