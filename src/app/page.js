import HeroSection from "@/components/home/HeroSection";
import TrustLogos from "@/components/home/TrustLogos";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import PortfolioSection from "@/components/home/PortfolioSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import IndustriesSection from "@/components/home/IndustriesSection";
import CTASection from "@/components/home/CTASection";
import { buildMetadata, pageUrl, JsonLd, SITE_URL } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "EhyaSoft | Premium Software Development Agency in Pakistan",
  description:
    "EhyaSoft builds high-performance web, mobile, and AI-powered software for startups and enterprises. Partner with a premium development agency based in Lahore, Pakistan.",
  path: "/",
});

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl("/")}#webpage`,
      url: pageUrl("/"),
      name: "EhyaSoft | Premium Software Development Agency",
      description:
        "EhyaSoft builds high-performance web, mobile, and AI-powered software for startups and enterprises.",
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "EhyaSoft Software Development",
      url: SITE_URL,
      areaServed: { "@type": "Country", name: "Worldwide" },
      provider: { "@id": `${SITE_URL}/#organization` },
      serviceType: [
        "Web Development",
        "Mobile App Development",
        "AI Agent Development",
        "UI/UX Design",
        "Enterprise Software",
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <HeroSection />
      {/* <TrustLogos /> */}
      {/* <ServicesGrid /> */}
      <PortfolioSection />
      <ProcessTimeline />
      <WhyChooseUs />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
