import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap() {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/", priority: 0.9, changeFrequency: "monthly" },
    { path: "/portfolio/", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact/", priority: 0.7, changeFrequency: "yearly" },
    { path: "/privacy-policy/", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-of-service/", priority: 0.3, changeFrequency: "yearly" },
  ];
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
