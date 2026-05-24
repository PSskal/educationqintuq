"use client";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { SplashScreen } from "@/components/kintuq/screens-onboarding";

export default function SplashPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <SplashScreen lang="en" onContinue={() => router.push("/onboarding")} />
    </KintuqScreen>
  );
}
