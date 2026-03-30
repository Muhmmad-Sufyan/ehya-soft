"use client";

import { useState, useRef } from "react";
import FilterChips from "./FilterChips";
import ProjectGrid from "./ProjectGrid";

export default function PortfolioFilter() {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef(null);

  return (
    <div ref={sectionRef} className="scroll-mt-8">
      <FilterChips activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <ProjectGrid activeFilter={activeFilter} scrollRef={sectionRef} />
    </div>
  );
}
