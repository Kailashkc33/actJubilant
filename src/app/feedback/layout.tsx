import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback & Complaints | ACT Jubilant Canberra",
  description:
    "Share feedback or raise a concern with ACT Jubilant. We respond within two business days.",
  alternates: {
    canonical: "/feedback",
  },
};

export default function FeedbackLayout({ children }: { children: React.ReactNode }) {
  return children;
}
