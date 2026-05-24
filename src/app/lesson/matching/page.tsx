"use client";
import { useRouter } from "next/navigation";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { LessonMatching } from "@/components/kintuq/screens-lessons-extra";

export default function LessonMatchingPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <LessonMatching lang="en" onClose={() => router.push("/dashboard")} />
    </KintuqScreen>
  );
}
