import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | ACT Jubilant Canberra",
  description:
    "Frequently asked questions about ACT Jubilant NDIS support services in Canberra and the ACT.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
