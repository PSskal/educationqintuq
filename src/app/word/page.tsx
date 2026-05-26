"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { ResponsiveKintuqScreen } from "@/components/kintuq/Shell";
import { DailyWordScreen } from "@/components/kintuq/screens";
import { DailyWordCentered } from "@/components/kintuq/screens-centered";
import type { KintuqVocabularyItem } from "@/lib/kintuq-demo";

export default function WordPage() {
  const router = useRouter();
  const [word, setWord] = useState<KintuqVocabularyItem | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/kintuq/vocabulary")
      .then((res) => (res.ok ? res.json() : null))
      .then((payload) => alive && setWord(payload?.vocabulary?.[0] ?? null))
      .catch(() => alive && setWord(null));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <ResponsiveKintuqScreen
      tabBar
      mobile={<DailyWordScreen lang="en" onClose={() => router.push("/dashboard")} />}
      desktop={<DailyWordCentered lang="en" word={word} />}
    />
  );
}
