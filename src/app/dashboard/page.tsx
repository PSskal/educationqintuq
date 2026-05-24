"use client";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { Dashboard } from "@/components/kintuq/screens";

export default function DashboardPage() {
  const router = useRouter();
  return (
    <KintuqScreen tabBar>
      <Dashboard lang="en" onStart={() => router.push("/lesson")} onWord={() => router.push("/word")} />
    </KintuqScreen>
  );
}
