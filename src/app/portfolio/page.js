import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";
import {
  buildMetadata,
  pageUrl,
  breadcrumb,
  JsonLd,
  SITE_URL,
} from "@/lib/seo";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Portfolio & Case Studies | EhyaSoft Software Development Work",
  description:
    "Explore EhyaSoft's portfolio of high-performance web apps, mobile apps, AI products, and custom enterprise platforms built for forward-thinking brands.",
  path: "/portfolio",
});

const portfolioUrl = pageUrl("/portfolio");

const projectSchemas = PORTFOLIO_PROJECTS.map((p, i) => ({
  "@type": "SoftwareApplication",
  "@id": `${portfolioUrl}#project-${i + 1}`,
  name: p.title,
  url: p.link,
  applicationCategory: p.applicationCategory || "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description: p.description,
  creator: { "@id": `${SITE_URL}/#organization` },
  image: `${SITE_URL}${p.image}`,
  ...(p.stack && { keywords: p.stack.join(", ") }),
  ...(p.timeline && { dateCreated: p.timeline }),
}));

const projectItemList = {
  "@type": "ItemList",
  "@id": `${portfolioUrl}#projects`,
  name: "EhyaSoft Case Studies",
  itemListElement: PORTFOLIO_PROJECTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: { "@id": `${portfolioUrl}#project-${i + 1}` },
  })),
};

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
      mainEntity: { "@id": `${portfolioUrl}#projects` },
    },
    breadcrumb(
      [
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Portfolio", url: portfolioUrl },
      ],
      portfolioUrl,
    ),
    projectItemList,
    ...projectSchemas,
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={portfolioJsonLd} />
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <PortfolioHero />
        <PortfolioFilter />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <PortfolioCTA />
      </div>
    </>
  );
}
