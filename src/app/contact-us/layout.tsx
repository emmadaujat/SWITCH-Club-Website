import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SWITCH RMIT — questions about membership, events, or sponsorships.",
};

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
