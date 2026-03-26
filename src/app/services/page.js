import ServicesHero from "@/components/services/ServicesHero";
import ServicesDeepDive from "@/components/services/ServicesDeepDive";
import AgileMethodology from "@/components/services/AgileMethodology";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Our Services - EhyaSoft",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDeepDive />
      <AgileMethodology />
      <ServicesCTA />
    </>
  );
}
