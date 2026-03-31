"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PORTFOLIO_PROJECTS, PORTFOLIO_ITEMS_PER_PAGE } from "@/lib/constants";

export default function ProjectGrid({ activeFilter, itemsPerPage = PORTFOLIO_ITEMS_PER_PAGE, scrollRef }) {
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
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.categoryId.includes(activeFilter));

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
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
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
