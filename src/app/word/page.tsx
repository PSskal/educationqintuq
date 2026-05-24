"use client";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { DailyWordScreen } from "@/components/kintuq/screens";

export default function WordPage() {
  const router = useRouter();
  return (
    <KintuqScreen tabBar>
      <DailyWordScreen lang="en" onClose={() => router.push("/dashboard")} />
    </KintuqScreen>
  );
}
