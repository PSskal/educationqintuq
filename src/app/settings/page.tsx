"use client";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { SettingsScreen } from "@/components/kintuq/screens-settings";

export default function SettingsPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <SettingsScreen lang="en" onBack={() => router.push("/profile")} />
    </KintuqScreen>
  );
}
