import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SWITCH RMIT",
    template: "%s | SWITCH RMIT",
  },
  description: "Society for women and gender diverse students in technology at RMIT University.",

  verification: {
    google: "Y2vUlyw2UedQfBVN1V0v0PJd3aiccccfrZId6c1m7O4",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
