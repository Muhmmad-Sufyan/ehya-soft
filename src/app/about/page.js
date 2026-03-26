import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import StatsSection from "@/components/about/StatsSection";
import CoreValues from "@/components/about/CoreValues";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About EhyaSoft | Premium Software Development",
  description:
    "Learn about EhyaSoft, a premium software development division of Ehya Education Services. Meet our team, explore our values, and discover our story.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      {/* <StatsSection /> */}
      <CoreValues />
      {/* <LeadershipTeam /> */}
      <AboutCTA />
    </>
  );
}
