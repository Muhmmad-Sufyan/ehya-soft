import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const dynamic = "force-static";
export const alt = "About EhyaSoft — Our story, team, and engineering culture";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: "About EhyaSoft",
    title: "The team behind the software.",
    description:
      "Engineers, designers, and product thinkers building measurable outcomes for startups and enterprises.",
  });
}
