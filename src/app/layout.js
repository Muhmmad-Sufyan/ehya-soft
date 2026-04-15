import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  SITE_URL,
  SITE_NAME,
  organizationSchema,
  websiteSchema,
  JsonLd,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EhyaSoft | Premium Software Development Agency",
    template: "%s",
  },
  description:
    "EhyaSoft helps startups and businesses design, develop, and launch modern mobile apps, websites, and scalable software platforms.",
  alternates: {
    canonical: SITE_URL + "/",
    languages: {
      "en": SITE_URL + "/",
      "en-PK": SITE_URL + "/",
      "x-default": SITE_URL + "/",
    },
  },
  applicationName: SITE_NAME,
  generator: "Next.js",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "AI agents",
    "UI UX design",
    "enterprise software",
    "Next.js agency",
    "React development",
    "Lahore software company",
    "Pakistan software agency",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  icons: { icon: "/favicon.svg" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    title: "EhyaSoft | Premium Software Development Agency",
    description:
      "EhyaSoft helps startups and businesses design, develop, and launch modern mobile apps, websites, and scalable software platforms.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EhyaSoft | Premium Software Development Agency",
    description:
      "EhyaSoft helps startups and businesses design, develop, and launch modern mobile apps, websites, and scalable software platforms.",
    creator: "@ehyaedu",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`light ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" media="print" onLoad="this.media='all'" />
      </head>
      <body className={`${inter.className} font-sans text-slate-900 bg-white selection:bg-primary selection:text-white min-h-screen flex flex-col`}>
        <JsonLd data={{ "@context": "https://schema.org", "@graph": [organizationSchema, websiteSchema] }} />
        <Header />
        <main className="flex-1 overflow-hidden">{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
