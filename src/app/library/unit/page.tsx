"use client";
import { useRouter } from "next/navigation";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { UnitDetail } from "@/components/kintuq/screens-content";

export default function UnitDetailPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <UnitDetail lang="en" onBack={() => router.push("/library")} onContinue={() => router.push("/lesson")} />
    </KintuqScreen>
  );
}
