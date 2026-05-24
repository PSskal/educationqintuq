"use client";
import { useRouter } from "next/navigation";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { VoicesDirectory } from "@/components/kintuq/screens-cultural";

export default function VoicesDirectoryPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <VoicesDirectory lang="en" onBack={() => router.push("/voices")} />
    </KintuqScreen>
  );
}
