import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const alt = "Contact EhyaSoft — Let's build something great together";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: "Contact",
    title: "Let's build something great.",
    description:
      "Tell us about your project — we reply within one business day with a clear next step.",
  });
}
