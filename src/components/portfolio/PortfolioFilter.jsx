"use client";

import { useState } from "react";
import FilterChips from "./FilterChips";
import ProjectGrid from "./ProjectGrid";

export default function PortfolioFilter() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <>
      <FilterChips activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <ProjectGrid activeFilter={activeFilter} />
    </>
  );
}
