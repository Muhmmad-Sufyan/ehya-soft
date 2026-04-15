import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const alt = "EhyaSoft Services — Web, Mobile, AI, UI/UX, Enterprise";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: "Services",
    title: "Engineering services built for scale.",
    description:
      "Web, mobile, AI agents, UI/UX, and enterprise software — delivered with performance and precision.",
  });
}
