"use client";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { ShareableCard } from "@/components/kintuq/screens-cultural";

export default function ShareablePage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <ShareableCard lang="en" onClose={() => router.push("/dashboard")} />
    </KintuqScreen>
  );
}
