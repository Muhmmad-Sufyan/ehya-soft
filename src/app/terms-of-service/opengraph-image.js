import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const alt = "EhyaSoft Terms of Service";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: "Terms of Service",
    title: "The agreement behind our work.",
    description:
      "Project terms, payment, intellectual property, warranties, and liability for our engagements.",
  });
}
