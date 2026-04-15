import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const alt = "EhyaSoft — Premium Software Development Agency";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: "Software Development Agency",
    title: "Build bold products with EhyaSoft.",
    description:
      "We design, develop, and launch modern web, mobile, and AI-powered platforms for ambitious teams.",
  });
}
