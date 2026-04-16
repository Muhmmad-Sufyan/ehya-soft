import HeroSection from "@/components/home/HeroSection";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import PortfolioSection from "@/components/home/PortfolioSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import IndustriesSection from "@/components/home/IndustriesSection";
import CTASection from "@/components/home/CTASection";
import FaqSection from "@/components/FaqSection";
import { buildMetadata, pageUrl, faqPageSchema, JsonLd, SITE_URL } from "@/lib/seo";
import { HOME_FAQS } from "@/lib/faqs";

export const metadata = buildMetadata({
  title: "EhyaSoft | Premium Software Development Agency in Pakistan",
  description:
    "EhyaSoft builds high-performance web, mobile, and AI-powered software for startups and enterprises. Partner with a premium development agency based in Lahore, Pakistan.",
  path: "/",
});

const homeUrl = pageUrl("/");
const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${homeUrl}#webpage`,
      url: homeUrl,
      name: "EhyaSoft | Premium Software Development Agency",
      description:
        "EhyaSoft builds high-performance web, mobile, and AI-powered software for startups and enterprises.",
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
    },
    faqPageSchema(HOME_FAQS, homeUrl),
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <HeroSection />
      <PortfolioSection />
      <ProcessTimeline />
      <WhyChooseUs />
      <IndustriesSection />
      <FaqSection
        heading="How does EhyaSoft work with new clients?"
        intro="Quick answers to what we hear most often before a first call."
        faqs={HOME_FAQS}
      />
      <CTASection />
    </>
  );
}
