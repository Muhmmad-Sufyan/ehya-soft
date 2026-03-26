import ContactHero from "@/components/contact/ContactHero";
import MapSection from "@/components/contact/MapSection";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata = {
  title: "Contact Us - EhyaSoft",
};

export default function ContactPage() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-24">
        <ContactHero />
      </main>
      <MapSection />
      <ContactCTA />
    </>
  );
}
