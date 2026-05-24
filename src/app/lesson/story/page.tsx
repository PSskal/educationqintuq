"use client";
import { useRouter } from "next/navigation";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { LessonStory } from "@/components/kintuq/screens-lessons-extra";

export default function LessonStoryPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <LessonStory lang="en" onClose={() => router.push("/dashboard")} />
    </KintuqScreen>
  );
}
