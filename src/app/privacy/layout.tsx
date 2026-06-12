import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ACT Jubilant Canberra",
  description:
    "How ACT Jubilant collects, uses, and protects personal information for participants, families, and referrers.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
