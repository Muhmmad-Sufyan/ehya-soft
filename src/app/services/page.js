import ServicesHero from "@/components/services/ServicesHero";
import ServicesDeepDive from "@/components/services/ServicesDeepDive";
import AgileMethodology from "@/components/services/AgileMethodology";
import ServicesCTA from "@/components/services/ServicesCTA";
import FaqSection from "@/components/FaqSection";
import {
  buildMetadata,
  pageUrl,
  breadcrumb,
  faqPageSchema,
  JsonLd,
  SITE_URL,
} from "@/lib/seo";
import { SERVICES_FAQS } from "@/lib/faqs";

export const metadata = buildMetadata({
  title: "Software Development Services | Web, Mobile & AI — EhyaSoft",
  description:
    "EhyaSoft delivers web, mobile, AI agent, UI/UX, and enterprise software development services built for scale, performance, and measurable business outcomes.",
  path: "/services",
});

const servicesUrl = pageUrl("/services");

const SERVICE_ENTRIES = [
  { id: "web-development", name: "Web Development" },
  { id: "mobile-development", name: "Mobile Experiences" },
  { id: "enterprise-software", name: "Custom Enterprise Software" },
  { id: "ui-ux-design", name: "UI/UX Design Systems" },
  { id: "ai-agents", name: "AI Agents & Intelligent Automation" },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${servicesUrl}#webpage`,
      url: servicesUrl,
      name: "Software Development Services | EhyaSoft",
      description:
        "EhyaSoft's full service catalog: web, mobile, AI agents, UI/UX, and enterprise software.",
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      breadcrumb: { "@id": `${servicesUrl}#breadcrumb` },
    },
    breadcrumb(
      [
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Services", url: servicesUrl },
      ],
      servicesUrl
    ),
    {
      "@type": "ItemList",
      "@id": `${servicesUrl}#services`,
      name: "EhyaSoft Services",
      itemListElement: SERVICE_ENTRIES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          "@id": `${servicesUrl}#${s.id}-service`,
          name: s.name,
          url: `${servicesUrl}#${s.id}`,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: [
            { "@type": "Country", name: "Pakistan" },
            { "@type": "Place", name: "Worldwide" },
          ],
        },
      })),
    },
    faqPageSchema(SERVICES_FAQS, servicesUrl),
  ],
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd} />
      <ServicesHero />
      <ServicesDeepDive />
      <AgileMethodology />
      <FaqSection
        heading="What should you know before choosing EhyaSoft?"
        intro="The most common questions clients ask about our services, process, and pricing."
        faqs={SERVICES_FAQS}
      />
      <ServicesCTA />
    </>
  );
}
