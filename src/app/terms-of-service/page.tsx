import { redirect } from "next/navigation";

// Preserve the reference pathname while using the agreed shorter local route.
export default function Page() {
  redirect("/terms");
}
