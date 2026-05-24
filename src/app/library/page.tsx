"use client";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { LessonsLibrary } from "@/components/kintuq/screens-content";

export default function LibraryPage() {
  const router = useRouter();
  return (
    <KintuqScreen tabBar>
      <LessonsLibrary lang="en" onOpenUnit={() => router.push("/library/unit")} />
    </KintuqScreen>
  );
}
