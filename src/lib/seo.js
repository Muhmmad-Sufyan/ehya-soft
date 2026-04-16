import {
  WHATSAPP_NUMBER,
  WHATSAPP_LINK,
  BUSINESS_EMAIL,
  BUSINESS_ADDRESS_LINE,
  BUSINESS_CITY,
  BUSINESS_REGION,
  BUSINESS_POSTAL,
  BUSINESS_COUNTRY,
  BUSINESS_GEO,
  BUSINESS_FOUNDED,
  BUSINESS_EMPLOYEES_MIN,
  BUSINESS_EMPLOYEES_MAX,
} from "./constants";

export const SITE_URL = "https://soft.ehya.com.pk";
export const SITE_NAME = "EhyaSoft";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.svg`;

export function pageUrl(path = "/") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${clean.endsWith("/") ? clean : `${clean}/`}`;
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}) {
  const url = pageUrl(path);
  const og = {
    type,
    url,
    siteName: SITE_NAME,
    title,
    description,
  };
  const tw = {
    card: "summary_large_image",
    title,
    description,
  };
  if (image) {
    og.images = [{ url: image, width: 1200, height: 630, alt: SITE_NAME }];
    tw.images = [image];
  }
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: og,
    twitter: tw,
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS_ADDRESS_LINE,
  addressLocality: BUSINESS_CITY,
  addressRegion: BUSINESS_REGION,
  postalCode: BUSINESS_POSTAL,
  addressCountry: BUSINESS_COUNTRY,
};

const openingHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "19:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday", "Sunday"],
    opens: "00:00",
    closes: "00:00",
  },
];

const contactPoints = [
  {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: BUSINESS_EMAIL,
    url: WHATSAPP_LINK,
    availableLanguage: ["English", "Urdu"],
    areaServed: ["PK", "Worldwide"],
  },
  {
    "@type": "ContactPoint",
    contactType: "sales",
    email: BUSINESS_EMAIL,
    url: WHATSAPP_LINK,
    availableLanguage: ["English", "Urdu"],
    areaServed: "Worldwide",
  },
];

export const organizationSchema = {
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: "EhyaSoft (a division of Ehya Education Services)",
  alternateName: ["Ehya Soft", "EhyaSoft Pakistan"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/favicon.svg`,
    contentUrl: `${SITE_URL}/favicon.svg`,
    width: 512,
    height: 512,
    caption: "EhyaSoft logo",
  },
  image: `${SITE_URL}/favicon.svg`,
  description:
    "EhyaSoft is a premium software development agency based in Lahore, Pakistan. We build high-performance web apps, mobile apps, AI agents, and enterprise software for startups and businesses worldwide.",
  slogan: "Turning ideas into powerful digital products.",
  foundingDate: BUSINESS_FOUNDED,
  email: BUSINESS_EMAIL,
  telephone: `+${WHATSAPP_NUMBER}`,
  priceRange: "$$",
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS_GEO.latitude,
    longitude: BUSINESS_GEO.longitude,
  },
  hasMap: `https://www.google.com/maps?q=${BUSINESS_GEO.latitude},${BUSINESS_GEO.longitude}`,
  openingHoursSpecification: openingHours,
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: BUSINESS_EMPLOYEES_MIN,
    maxValue: BUSINESS_EMPLOYEES_MAX,
  },
  areaServed: [
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Place", name: "Worldwide" },
  ],
  knowsAbout: [
    "Web development",
    "Mobile app development",
    "React Native",
    "Next.js",
    "AI agents",
    "RAG",
    "GraphRAG",
    "UI/UX design",
    "Enterprise software",
  ],
  contactPoint: contactPoints,
  sameAs: [
    "https://www.linkedin.com/company/ehya-education-services/",
    "https://web.facebook.com/ehyaedu",
    "https://twitter.com/ehyaedu",
    "https://www.instagram.com/ehyaedu",
    "https://www.youtube.com/channel/UCeudFNeP-vMFkCtGUumC6zg",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Ehya Education Services",
    url: "https://ehya.com.pk/",
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

export function breadcrumb(items, pageId) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageId}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqPageSchema(faqs, pageId) {
  return {
    "@type": "FAQPage",
    "@id": `${pageId}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
