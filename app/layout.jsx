import { Poppins, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";
import LangProvider from "../components/LangProvider";
import CursorTrail from "../components/CursorTrail";
import WhatsAppFloat from "../components/WhatsAppFloat";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Arrozy Adi Falaqi — UI/UX Designer",
  description:
    "UI/UX Designer with 2+ years of experience designing digital solutions for government and private sector clients. Based in Bandung, Indonesia.",
  keywords: [
    "UI/UX Designer",
    "Figma",
    "Bandung",
    "Portofolio",
    "Arrozy Adi Falaqi",
  ],
  openGraph: {
    title: "Arrozy Adi Falaqi — UI/UX Designer",
    description:
      "Designing user-centered digital experiences for government & private sector clients.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`light ${poppins.variable} ${dmSans.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <CursorTrail />
        <WhatsAppFloat />
        <ThemeProvider>
          <LangProvider>
            {children}
            <Analytics />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

