import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import StatsSection from "@/components/about/StatsSection";
import CoreValues from "@/components/about/CoreValues";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import AboutCTA from "@/components/about/AboutCTA";
import { buildMetadata, pageUrl, breadcrumb, JsonLd, SITE_URL } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About EhyaSoft | Premium Software Development Team in Lahore",
  description:
    "Learn about EhyaSoft — a premium software development division of Ehya Education Services. Meet our team, explore our values, and discover the story behind our work.",
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
        "EhyaSoft is a premium software development agency and division of Ehya Education Services.",
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
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <AboutHero />
      <OurStory />
      {/* <StatsSection /> */}
      <CoreValues />
      {/* <LeadershipTeam /> */}
      <AboutCTA />
    </>
  );
}
