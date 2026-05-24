"use client";
import { useRouter } from "next/navigation";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { OnboardNotifications } from "@/components/kintuq/screens-onboarding";

export default function OnboardNotificationsPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <OnboardNotifications lang="en" onBack={() => router.push("/onboarding/goal")} onDone={() => router.push("/dashboard")} />
    </KintuqScreen>
  );
}
