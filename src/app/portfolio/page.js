import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter";
import Testimonials from "@/components/portfolio/Testimonials";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";
import { buildMetadata, pageUrl, breadcrumb, JsonLd, SITE_URL } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Portfolio & Case Studies | EhyaSoft Software Development Work",
  description:
    "Explore EhyaSoft's portfolio of high-performance web apps, mobile apps, AI products, and custom enterprise platforms built for forward-thinking brands.",
  path: "/portfolio",
});

const portfolioUrl = pageUrl("/portfolio");
const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${portfolioUrl}#webpage`,
      url: portfolioUrl,
      name: "Portfolio & Case Studies | EhyaSoft",
      description:
        "A collection of software products and digital experiences designed and engineered by EhyaSoft.",
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      breadcrumb: { "@id": `${portfolioUrl}#breadcrumb` },
    },
    breadcrumb(
      [
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Portfolio", url: portfolioUrl },
      ],
      portfolioUrl
    ),
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={portfolioJsonLd} />
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
