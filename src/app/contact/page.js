import ContactHero from "@/components/contact/ContactHero";
import MapSection from "@/components/contact/MapSection";
import ContactCTA from "@/components/contact/ContactCTA";
import { buildMetadata, pageUrl, breadcrumb, JsonLd, SITE_URL } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact EhyaSoft | Start Your Software Project Today",
  description:
    "Get in touch with EhyaSoft to discuss your web, mobile, or AI software project. Email soft@ehya.com.pk or visit our office at 101 N Block N Model Town, Lahore.",
  path: "/contact",
});

const contactUrl = pageUrl("/contact");
const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${contactUrl}#webpage`,
      url: contactUrl,
      name: "Contact EhyaSoft",
      description:
        "Contact EhyaSoft for software development projects, partnerships, and inquiries.",
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      breadcrumb: { "@id": `${contactUrl}#breadcrumb` },
    },
    breadcrumb(
      [
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Contact", url: contactUrl },
      ],
      contactUrl
    ),
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactJsonLd} />
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12 py-12 lg:py-24">
        <ContactHero />
      </main>
      {/* <MapSection /> */}
      <ContactCTA />
    </>
  );
}
