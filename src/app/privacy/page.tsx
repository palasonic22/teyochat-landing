import type { Metadata } from "next";
import { LegalPage } from "@/components/sites/leedlime/interior-pages";

export const metadata: Metadata = {
  title: "Privacy Policy | Teyochat Prototype",
};

export default function Page() {
  return <LegalPage kind="privacy" />;
}
