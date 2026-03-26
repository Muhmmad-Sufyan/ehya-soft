export default function MapSection() {
  return (
    <section className="w-full h-[450px] relative bg-slate-200 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background-light dark:from-background-dark to-transparent z-10 h-32" />
      <img
        alt="Minimalist grayscale world map"
        className="w-full h-full object-cover filter grayscale contrast-125 opacity-50"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmWNbntjc8cYFziXNtqcYw0qvqddHEBqlKaODB4tXybHcbCoUHz2gmrBZlGfBL6OldtYDVMKBgPahYfts1qpkByYrQ-RVO1OL7B0TdKiM3aJEEupUvg4u6ExzBVl6DWYvtXqoksbAGDofxAoqTapUyRDAgzO1yS8cvctK9NK9HfFW3i74YPFKwc32_71S7Rg2tvdGUFpWedWuZ08aI7TWq_STTDPvsTKHgWckxW0MELcBufHEOqsO2XyFTCH74pE6zSPg9RfIx0JY"
      />
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="bg-primary/20 p-4 rounded-full animate-pulse">
          <div className="gradient-bg p-4 rounded-full shadow-2xl vibrant-shadow">
            <span className="material-symbols-outlined text-white text-3xl">
              location_on
            </span>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent z-10 h-32" />
    </section>
  );
}
