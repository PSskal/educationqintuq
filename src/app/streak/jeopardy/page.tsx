"use client";
import { useRouter } from "next/navigation";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { StreakInJeopardy } from "@/components/kintuq/screens-moments";

export default function StreakJeopardyPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <StreakInJeopardy lang="en" onClose={() => router.push("/dashboard")} />
    </KintuqScreen>
  );
}
