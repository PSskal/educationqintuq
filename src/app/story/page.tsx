"use client";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { StoryMode } from "@/components/kintuq/screens-lessons-extra";

export default function StoryPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <StoryMode lang="en" onBack={() => router.push("/dashboard")} />
    </KintuqScreen>
  );
}
