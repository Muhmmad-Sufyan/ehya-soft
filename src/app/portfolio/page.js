import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter";
import Testimonials from "@/components/portfolio/Testimonials";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export const metadata = {
  title: "EhyaSoft | Portfolio & Case Studies",
  description:
    "Explore our portfolio of high-performance digital experiences built for forward-thinking brands.",
};

export default function PortfolioPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <PortfolioHero />
        <PortfolioFilter />
      </div>
      {/* <Testimonials /> */}
      <div className="max-w-7xl mx-auto px-6">
        <PortfolioCTA />
      </div>
    </>
  );
}
