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
  },
  {
    title: "Ehya Classmate",
    categoryId: ["web-apps", "mobile-apps", "dashboards", "ai-ml", "agentic-ai"],
    tags: ["React Native", "Next.js", "Node.js"],
    description:
      "An AI-powered academic companion for secondary school students, designed for classrooms and self-study. It offers structured learning through textbook content, explanations, SLO-based practice, and progress tracking for effective learning.",
    image: "/project-images/classmate.jpeg",
    link: "https://classmate.ehya.com.pk/",
  },
  {
    title: "FIELDx AI – Poultry Diagnosis Assistant",
    categoryId: ["ai-ml", "web-apps", "mobile-apps", "dashboards", "agentic-ai", "rag-graphrag"],
    tags: ["React Native", "Next.js", "Node.js", "MySQL"],
    description:
      "An AI-powered solution designed to assist poultry disease diagnosis and treatment planning. It analyzes symptoms and farm insights to deliver intelligent diagnostic support for faster, more informed decision-making.",
    image: "/project-images/fieldx.jpeg",
    link: "https://fieldxai.com/",
  },
  {
    title: "Ittesaal – Journal of Connecting Discourses",
    categoryId: ["web-apps"],
    tags: ["OJS"],
    description:
      "A digital academic journal platform for publishing peer-reviewed research in humanities, social sciences, and Islamic studies. It supports submissions, editorial workflows, and open-access publishing in a structured and accessible system.",
    image: "/project-images/ittesaal.jpeg",
    link: "https://journal.ehya.com.pk/ijcd",
  },
];
