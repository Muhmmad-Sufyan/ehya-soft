"use client";

export const filters = [
  { id: "all", label: "All Projects" },
  { id: "web-apps", label: "Web Apps" },
  { id: "mobile-apps", label: "Mobile Apps" },
  { id: "dashboards", label: "Dashboards" },
  { id: "agentic-ai", label: "Agentic AI" },
  { id: "rag-graphrag", label: "RAG/GraphRAG" },
  { id: "ai-ml", label: "AI & ML" },
];

export default function FilterChips({ activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={
            activeFilter === filter.id
              ? "px-6 py-2 rounded-full bg-primary text-white text-sm font-bold"
              : "px-6 py-2 rounded-full bg-slate-200 text-slate-600 text-sm font-semibold hover:bg-primary/10 hover:text-primary transition-all"
          }
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
