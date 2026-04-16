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

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  email: "soft@ehya.com.pk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "101 N, Block N Model Town",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
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

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
