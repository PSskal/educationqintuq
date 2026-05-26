"use client";
import { useRouter } from "next/navigation";
import "../../kintuq.css";
import { ResponsiveKintuqScreen } from "@/components/kintuq/Shell";
import { UnitDetail } from "@/components/kintuq/screens-content";
import { UnitDetailCentered } from "@/components/kintuq/screens-centered";

export default function UnitDetailPage() {
  const router = useRouter();
  return (
    <ResponsiveKintuqScreen
      mobile={<UnitDetail lang="en" onBack={() => router.push("/library")} onContinue={() => router.push("/lesson")} />}
      desktop={<UnitDetailCentered lang="en" />}
    />
  );
}
