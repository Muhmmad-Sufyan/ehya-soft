import ServicesHero from "@/components/services/ServicesHero";
import ServicesDeepDive from "@/components/services/ServicesDeepDive";
import AgileMethodology from "@/components/services/AgileMethodology";
import ServicesCTA from "@/components/services/ServicesCTA";

const SITE_URL = "https://soft.ehya.com.pk";
const PAGE_URL = `${SITE_URL}/services/`;

export const metadata = {
  title: "Software Development Services | Web, Mobile & AI — EhyaSoft",
  description:
    "EhyaSoft delivers web, mobile, AI agent, UI/UX, and enterprise software development services built for scale, performance, and measurable business outcomes.",
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "EhyaSoft",
    title: "Software Development Services | EhyaSoft",
    description:
      "Web, mobile, AI, UI/UX, and enterprise software services engineered for performance and scale.",
    images: [{ url: `${SITE_URL}/favicon.svg`, width: 512, height: 512, alt: "EhyaSoft" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services | EhyaSoft",
    description:
      "Web, mobile, AI, UI/UX, and enterprise software services engineered for performance and scale.",
    images: [`${SITE_URL}/favicon.svg`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Software Development Services | EhyaSoft",
      description:
        "EhyaSoft's full service catalog: web, mobile, AI agents, UI/UX, and enterprise software.",
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}#services`,
      itemListElement: [
        { "@type": "Service", position: 1, name: "Web Development", url: `${PAGE_URL}#web-development`, provider: { "@id": `${SITE_URL}/#organization` } },
        { "@type": "Service", position: 2, name: "Mobile Experiences", url: `${PAGE_URL}#mobile-development`, provider: { "@id": `${SITE_URL}/#organization` } },
        { "@type": "Service", position: 3, name: "Custom Enterprise Software", url: `${PAGE_URL}#enterprise-software`, provider: { "@id": `${SITE_URL}/#organization` } },
        { "@type": "Service", position: 4, name: "UI/UX Design Systems", url: `${PAGE_URL}#ui-ux-design`, provider: { "@id": `${SITE_URL}/#organization` } },
        { "@type": "Service", position: 5, name: "AI Agents & Intelligent Automation", url: `${PAGE_URL}#ai-agents`, provider: { "@id": `${SITE_URL}/#organization` } },
      ],
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesHero />
      <ServicesDeepDive />
      <AgileMethodology />
      <ServicesCTA />
    </>
  );
}
