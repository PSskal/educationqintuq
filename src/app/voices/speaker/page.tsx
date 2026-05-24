"use client";
import { useRouter } from "next/navigation";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { SpeakerDetail } from "@/components/kintuq/screens-content";

export default function SpeakerPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <SpeakerDetail lang="en" onBack={() => router.push("/voices")} />
    </KintuqScreen>
  );
}
