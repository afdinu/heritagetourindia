import type { Metadata } from "next";
import "@css/bootstrap.min.css";
import "@css/all.min.css";
import "@css/animate.css";
import "@css/magnific-popup.css";
import "@css/meanmenu.css";
import "@css/swiper-bundle.min.css";
import "@css/nice-select.css";
import "@css/flacticon.css";
import "@css/main.css";
import "./globals.css";
import Preloader from "@/components/Preloader";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Heritage Tour Guide India | Private & Local Guided Tours",
  description:
    "Explore Delhi, Agra, Jaipur and more with Heritage Tour Guide India. Book a local tour guide or plan a private tour around your interests and schedule.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Preloader /> */}
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
