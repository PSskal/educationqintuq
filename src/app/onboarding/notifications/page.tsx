"use client";
import { useRouter } from "next/navigation";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { OnboardNotifications } from "@/components/kintuq/screens-onboarding";

export default function OnboardNotificationsPage() {
  const router = useRouter();
  async function finishOnboarding() {
    await fetch("/api/kintuq/onboarding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    }).catch(() => null);
    router.push("/dashboard");
  }

  return (
    <KintuqScreen>
      <OnboardNotifications lang="en" onBack={() => router.push("/onboarding/goal")} onDone={finishOnboarding} />
    </KintuqScreen>
  );
}
