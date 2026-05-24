"use client";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { ManifestoScreen } from "@/components/kintuq/screens-cultural";

export default function ManifestoPage() {
  const router = useRouter();
  return (
    <KintuqScreen>
      <ManifestoScreen lang="en" onBack={() => router.push("/")} />
    </KintuqScreen>
  );
}
