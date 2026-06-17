import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation | ACT Jubilant Canberra",
  description:
    "Request a consultation with ACT Jubilant in Canberra. Tell us a good time to chat about support, fit, and next steps.",
  alternates: {
    canonical: "/consultation",
  },
};

export default function ConsultationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
