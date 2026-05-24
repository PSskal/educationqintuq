"use client";
import { useRouter } from "next/navigation";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { PronunciationDeep } from "@/components/kintuq/screens-lessons-extra";

export default function LessonPronunciationPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <PronunciationDeep lang="en" onClose={() => router.push("/dashboard")} />
    </KintuqScreen>
  );
}
