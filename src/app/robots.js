import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export const INDEXNOW_KEY = "5a217dd75804a4662b27bc34d8759840";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
