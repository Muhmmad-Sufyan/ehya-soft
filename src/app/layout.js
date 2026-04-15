import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://soft.ehya.com.pk"),
  title: "EhyaSoft | Premium Software Development Agency",
  description: "EhyaSoft helps startups and businesses design, develop, and launch modern mobile apps, websites, and scalable software platforms.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`light ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block" />
      </head>
      <body className={`${inter.className} font-sans text-slate-900 bg-white selection:bg-primary selection:text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 overflow-hidden">{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
