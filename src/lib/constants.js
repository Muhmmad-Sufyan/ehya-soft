// ─── Business Contact ────────────────────────────────────────────────────────
// WhatsApp click-to-chat. Format: country code + number, no symbols.
export const WHATSAPP_NUMBER = "923424174775";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_DISPLAY = "+92 342 4174775";

export const BUSINESS_EMAIL = "soft@ehya.com.pk";
export const BUSINESS_ADDRESS_LINE = "101 N, Block N Model Town";
export const BUSINESS_CITY = "Lahore";
export const BUSINESS_REGION = "Punjab";
export const BUSINESS_POSTAL = "54700";
export const BUSINESS_COUNTRY = "PK";
export const BUSINESS_GEO = { latitude: 31.477792, longitude: 74.305911 };
export const BUSINESS_FOUNDED = "2019";
export const BUSINESS_EMPLOYEES_MIN = 10;
export const BUSINESS_EMPLOYEES_MAX = 25;
export const BUSINESS_HOURS_DISPLAY = "Mon–Fri 9:00 am – 7:00 pm (Sat & Sun closed)";
export const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2840.0031779546766!2d74.3059110742421!3d31.47779209231747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903352639a951%3A0xa814510ed3c78839!2sEhyaSoft!5e1!3m2!1sen!2s!4v1776332938223!5m2!1sen!2s";
export const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=EhyaSoft+Lahore&destination_place_id=ChIJUallOTUDGTkROYjH0w5RFKg";

// ─── reCAPTCHA Keys ──────────────────────────────────────────────────────────
export const RECAPTCHA_SITE_KEY = "6Lfo-Z0sAAAAALXzKCh1ogzFpscJ8IBITbZ3larP";
export const RECAPTCHA_SECRET_KEY = "6Lfo-Z0sAAAAAFs9qCfdZI_-aImHedIJqKmQr03H";

// ─── Contact API ─────────────────────────────────────────────────────────────
export const CONTACT_API_BASE_URL = "https://ees-api.ehya.com.pk";
export const CONTACT_API_ENDPOINT = "/api/contact-gateway-x9p2k7-submit-3f1d8c";
export const CONTACT_API_TOKEN = "ehya-contact-server-token-9f2c7d4a1b6e8k3m";
export const CONTACT_RECEIVER_EMAIL = "soft@ehya.com.pk";

// ─── Portfolio ───────────────────────────────────────────────────────────────

// Change this value to control how many cards show per page (e.g. 5, 6, 8)
export const PORTFOLIO_ITEMS_PER_PAGE = 8;

export const PORTFOLIO_PROJECTS = [
  {
    title: "AlifLaila – Kids Digital Library",
    categoryId: ["mobile-apps", "web-apps", "dashboards"],
    tags: ["React Native", "Next.js", "Node.js", "MySQL", "Laravel"],
    description:
      "Our flagship edtech platform built from scratch, offering a comprehensive digital library for children. It features dedicated modules for kids, parents, and schools, combining interactive content, learning tools, and continuous platform support.",
    image: "/project-images/aliflaila.jpeg",
    link: "https://aliflaila.app/",
    industry: "EdTech (Early Childhood)",
    timeline: "2023 – ongoing",
    stack: ["React Native", "Next.js", "Node.js", "Laravel", "MySQL"],
    outcome:
      "Three synced experiences (kids, parents, schools) shipped with an always-on content pipeline and weekly release cadence.",
    applicationCategory: "EducationalApplication",
  },
  {
    title: "Ehya Classmate",
    categoryId: ["web-apps", "mobile-apps", "dashboards", "ai-ml", "agentic-ai"],
    tags: ["React Native", "Next.js", "Node.js"],
    description:
      "An AI-powered academic companion for secondary school students, designed for classrooms and self-study. It offers structured learning through textbook content, explanations, SLO-based practice, and progress tracking for effective learning.",
    image: "/project-images/classmate.jpeg",
    link: "https://classmate.ehya.com.pk/",
    industry: "EdTech (Secondary Education)",
    timeline: "2024 – ongoing",
    stack: ["React Native", "Next.js", "Node.js", "RAG pipelines"],
    outcome:
      "Delivered SLO-linked practice and AI explanations across Punjab textbook boards, measurable per-student progress tracking.",
    applicationCategory: "EducationalApplication",
  },
  {
    title: "FIELDx AI – Smart Poultry Diagnosis & Farm Health Assistant",
    categoryId: ["ai-ml", "web-apps", "mobile-apps", "dashboards", "agentic-ai", "rag-graphrag"],
    tags: ["React Native", "Next.js", "Node.js", "MySQL"],
    description:
      "An advanced diagnostic assistant for poultry veterinarians, consultants, and farm managers. FIELDx analyzes symptoms, farm data, and clinical observations to diagnose diseases faster, plan accurate treatments, and maintain complete digital visit records in one mobile app.",
    image: "/project-images/fieldx.jpeg",
    link: "https://fieldxai.com/",
    industry: "AgriTech / Veterinary Diagnostics",
    timeline: "2024 – ongoing",
    stack: ["React Native", "Next.js", "Node.js", "MySQL", "GraphRAG"],
    outcome:
      "Faster symptom-to-diagnosis decisions for vets and farm managers, with structured visit records, treatment planning, and complete digital farm-history capture in a single mobile app.",
    applicationCategory: "HealthApplication",
  },
  {
    title: "Ittesaal – Journal of Connecting Discourses",
    categoryId: ["web-apps"],
    tags: ["OJS"],
    description:
      "A digital academic journal platform for publishing peer-reviewed research in humanities, social sciences, and Islamic studies. It supports submissions, editorial workflows, and open-access publishing in a structured and accessible system.",
    image: "/project-images/ittesaal.jpeg",
    link: "https://journal.ehya.com.pk/ijcd",
    industry: "Academic Publishing",
    timeline: "2023 – ongoing",
    stack: ["Open Journal Systems (OJS)", "PHP", "MySQL"],
    outcome:
      "End-to-end editorial workflow with DOI-ready article pipeline, open-access publication, and peer-review management.",
    applicationCategory: "BusinessApplication",
  },
];
