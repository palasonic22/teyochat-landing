import type { Metadata } from "next";
import { ContactPage } from "@/components/sites/leedlime/interior-pages";

export const metadata: Metadata = { title: "Contact | Teyochat Prototype" };

export default function Page() {
  return <ContactPage />;
}
