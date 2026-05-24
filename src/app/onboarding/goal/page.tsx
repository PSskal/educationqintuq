"use client";
import { useRouter } from "next/navigation";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { OnboardGoal } from "@/components/kintuq/screens-onboarding";

export default function OnboardGoalPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <OnboardGoal lang="en" onBack={() => router.push("/onboarding/motivation")} onNext={() => router.push("/onboarding/notifications")} />
    </KintuqScreen>
  );
}
