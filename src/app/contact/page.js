import ContactHero from "@/components/contact/ContactHero";
import MapSection from "@/components/contact/MapSection";
import ContactCTA from "@/components/contact/ContactCTA";
import {
  buildMetadata,
  pageUrl,
  breadcrumb,
  faqPageSchema,
  JsonLd,
  SITE_URL,
} from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact EhyaSoft | Start Your Software Project Today",
  description:
    "Get in touch with EhyaSoft to discuss your web, mobile, or AI software project. Chat on WhatsApp, email soft@ehya.com.pk, or visit our office at 101 N Block N Model Town, Lahore.",
  path: "/contact",
});

const contactUrl = pageUrl("/contact");
const contactFaqs = [
  {
    q: "How can I start a project with EhyaSoft?",
    a: "Send a short brief to soft@ehya.com.pk or message us on WhatsApp. We reply within one business day with a scoping call proposal, a rough timeline, and a ballpark budget range so you can decide whether to proceed.",
  },
  {
    q: "Where is EhyaSoft's office located?",
    a: "We operate from 101 N, Block N, Model Town, Lahore, Punjab, Pakistan. Visitors are welcome by appointment Monday through Friday, 9:00 am to 7:00 pm PKT. The office is closed on Saturday and Sunday.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. Roughly half our active engagements are with clients outside Pakistan. We coordinate in English over email, WhatsApp, Slack, and scheduled video calls across GMT/EST/PST time zones.",
  },
];

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
    faqPageSchema(contactFaqs, contactUrl),
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactJsonLd} />
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-12 py-12 md:py-24">
        <ContactHero />
      </div>
      <MapSection />
      <ContactCTA />
    </>
  );
}
