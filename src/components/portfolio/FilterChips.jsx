export default function FilterChips() {
  const filters = [
    { label: "All Projects", active: true },
    { label: "Web Apps", active: false },
    { label: "Mobile", active: false },
    { label: "Cloud", active: false },
    { label: "AI & ML", active: false },
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.label}
          className={
            filter.active
              ? "px-6 py-2 rounded-full bg-primary text-white text-sm font-bold"
              : "px-6 py-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-semibold hover:bg-primary/10 hover:text-primary transition-all"
          }
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
