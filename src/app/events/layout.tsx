import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "See what SWITCH has been up to and what's coming next — socials, workshops, and networking events at RMIT.",
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
