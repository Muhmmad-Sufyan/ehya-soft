import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const LAST_EDITED = {
  "/": "2026-04-16",
  "/about/": "2026-04-16",
  "/services/": "2026-04-16",
  "/portfolio/": "2026-04-16",
  "/contact/": "2026-04-16",
  "/privacy-policy/": "2025-03-27",
  "/terms-of-service/": "2025-03-27",
};

export default function sitemap() {
  return Object.entries(LAST_EDITED).map(([path, date]) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(date),
  }));
}
