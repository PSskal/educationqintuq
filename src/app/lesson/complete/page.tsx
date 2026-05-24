"use client";
import { useRouter } from "next/navigation";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { CompletionScreen } from "@/components/kintuq/screens";

export default function LessonCompletePage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <CompletionScreen lang="en" onDone={() => router.push("/dashboard")} />
    </KintuqScreen>
  );
}
