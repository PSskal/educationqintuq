"use client";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { VoicesList } from "@/components/kintuq/screens-content";

export default function VoicesPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <VoicesList lang="en" onBack={() => router.push("/dashboard")} onOpenSpeaker={() => router.push("/voices/speaker")} />
    </KintuqScreen>
  );
}
