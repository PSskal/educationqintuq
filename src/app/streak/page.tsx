"use client";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { StreakCalendar } from "@/components/kintuq/screens-moments";

export default function StreakPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <StreakCalendar lang="en" onBack={() => router.push("/profile")} />
    </KintuqScreen>
  );
}
