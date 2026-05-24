"use client";
import { useRouter } from "next/navigation";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { OnboardMotivation } from "@/components/kintuq/screens-onboarding";

export default function OnboardMotivationPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <OnboardMotivation lang="en" onBack={() => router.push("/onboarding")} onNext={() => router.push("/onboarding/goal")} />
    </KintuqScreen>
  );
}
