import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import CoreValues from "@/components/about/CoreValues";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import AboutCTA from "@/components/about/AboutCTA";
import FaqSection from "@/components/FaqSection";
import {
  buildMetadata,
  pageUrl,
  breadcrumb,
  faqPageSchema,
  JsonLd,
  SITE_URL,
} from "@/lib/seo";
import { ABOUT_FAQS } from "@/lib/faqs";

export const metadata = buildMetadata({
  title: "About EhyaSoft | Premium Software Development Team in Lahore",
  description:
    "Learn about EhyaSoft — a premium software development division of Ehya Education Services founded in 2019. Meet our leadership, explore our values, and see the flagship products we operate.",
  path: "/about",
});

const aboutUrl = pageUrl("/about");
const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${aboutUrl}#webpage`,
      url: aboutUrl,
      name: "About EhyaSoft",
      description:
        "EhyaSoft is a premium software development agency and division of Ehya Education Services, founded in 2019 in Lahore, Pakistan.",
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      breadcrumb: { "@id": `${aboutUrl}#breadcrumb` },
    },
    breadcrumb(
      [
        { name: "Home", url: `${SITE_URL}/` },
        { name: "About", url: aboutUrl },
      ],
      aboutUrl
    ),
    faqPageSchema(ABOUT_FAQS, aboutUrl),
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <AboutHero />
      <OurStory />
      <CoreValues />
      <LeadershipTeam />
      <FaqSection
        heading="What else should you know about EhyaSoft?"
        intro="Everything new clients and partners tend to ask before a first call."
        faqs={ABOUT_FAQS}
      />
      <AboutCTA />
    </>
  );
}
