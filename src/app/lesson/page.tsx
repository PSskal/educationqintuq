"use client";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { ResponsiveKintuqScreen } from "@/components/kintuq/Shell";
import { LessonScreen } from "@/components/kintuq/screens";
import { LessonCentered } from "@/components/kintuq/screens-centered";

export default function LessonPage() {
  const router = useRouter();
  return (
    <ResponsiveKintuqScreen
      mobile={<LessonScreen lang="en" onClose={() => router.push("/dashboard")} onComplete={() => router.push("/lesson/complete")} />}
      desktop={<LessonCentered lang="en" />}
    />
  );
}
