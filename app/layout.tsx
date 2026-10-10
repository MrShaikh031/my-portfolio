import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Shaikh Tohid | Data Science & Web Development",
    template: "%s | Shaikh Tohid",
  },
  description:
    "Explore Shaikh Tohid's portfolio, technical skills, data science learning projects, and web development work.",
  applicationName: "Shaikh Tohid Portfolio",
  openGraph: {
    title: "Shaikh Tohid | Data Science & Web Development",
    description:
      "A portfolio showcasing Shaikh Tohid's work and learning journey in data science, web development, and creative technology.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
