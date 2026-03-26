import HeroSection from "@/components/home/HeroSection";
import TrustLogos from "@/components/home/TrustLogos";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import PortfolioSection from "@/components/home/PortfolioSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import IndustriesSection from "@/components/home/IndustriesSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
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
