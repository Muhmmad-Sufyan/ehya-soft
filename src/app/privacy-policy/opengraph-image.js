import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const dynamic = "force-static";
export const alt = "EhyaSoft Privacy Policy";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: "Privacy Policy",
    title: "How we handle your data.",
    description:
      "Transparency on what we collect, how it's used, and the rights you have over your information.",
  });
}
