"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { ResponsiveKintuqScreen } from "@/components/kintuq/Shell";
import { LessonsLibrary } from "@/components/kintuq/screens-content";
import { LibraryCentered } from "@/components/kintuq/screens-centered";
import type { KintuqUnit } from "@/lib/kintuq-demo";

export default function LibraryPage() {
  const router = useRouter();
  const [units, setUnits] = useState<KintuqUnit[] | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/kintuq/library")
      .then((res) => (res.ok ? res.json() : null))
      .then((payload) => alive && setUnits(payload?.units ?? null))
      .catch(() => alive && setUnits(null));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <ResponsiveKintuqScreen
      tabBar
      mobile={<LessonsLibrary lang="en" units={units} onOpenUnit={() => router.push("/library/unit")} />}
      desktop={<LibraryCentered lang="en" units={units} />}
    />
  );
}
