"use client";
import { useRouter } from "next/navigation";
import "../../kintuq.css";
import { ResponsiveKintuqScreen } from "@/components/kintuq/Shell";
import { CompletionScreen } from "@/components/kintuq/screens";
import { CompletionCentered } from "@/components/kintuq/screens-centered";

export default function LessonCompletePage() {
  const router = useRouter();
  async function finishLesson() {
    await fetch("/api/kintuq/lesson", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId: "lesson-day-greetings-3" }),
    }).catch(() => null);
    router.push("/dashboard");
  }

  return (
    <ResponsiveKintuqScreen
      mobile={<CompletionScreen lang="en" onDone={finishLesson} />}
      desktop={<CompletionCentered lang="en" />}
    />
  );
}
