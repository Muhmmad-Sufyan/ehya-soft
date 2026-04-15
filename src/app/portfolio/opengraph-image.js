import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const dynamic = "force-static";
export const alt = "EhyaSoft Portfolio — Selected work and case studies";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: "Portfolio",
    title: "Work that ships and scales.",
    description:
      "Case studies across SaaS, mobile apps, AI platforms, and digital products that move the needle.",
  });
}
