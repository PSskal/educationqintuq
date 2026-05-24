"use client";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { OnboardWelcome } from "@/components/kintuq/screens-onboarding";

export default function OnboardingPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <OnboardWelcome lang="en" onBegin={() => router.push("/onboarding/motivation")} onHaveAccount={() => router.push("/login")} />
    </KintuqScreen>
  );
}
