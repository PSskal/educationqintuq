"use client";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { Paywall } from "@/components/kintuq/screens-moments";

export default function PaywallPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <Paywall lang="en" onClose={() => router.push("/dashboard")} />
    </KintuqScreen>
  );
}
