"use client";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { LessonScreen } from "@/components/kintuq/screens";

export default function LessonPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <LessonScreen lang="en" onClose={() => router.push("/dashboard")} onComplete={() => router.push("/lesson/complete")} />
    </KintuqScreen>
  );
}
