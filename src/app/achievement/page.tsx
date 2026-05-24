"use client";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { AchievementUnlocked } from "@/components/kintuq/screens-moments";

export default function AchievementPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <AchievementUnlocked lang="en" onClose={() => router.push("/dashboard")} />
    </KintuqScreen>
  );
}
