"use client";
import { useRouter } from "next/navigation";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { LessonType } from "@/components/kintuq/screens-lessons-extra";

export default function LessonTypePage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <LessonType lang="en" onClose={() => router.push("/dashboard")} />
    </KintuqScreen>
  );
}
