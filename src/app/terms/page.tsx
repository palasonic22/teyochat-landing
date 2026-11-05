import type { Metadata } from "next";
import { LegalPage } from "@/components/sites/leedlime/interior-pages";

export const metadata: Metadata = {
  title: "Terms of Service | Teyochat Prototype",
};

export default function Page() {
  return <LegalPage kind="terms" />;
}
