"use client";
import { useEffect, useState } from "react";
import "../kintuq.css";
import { ResponsiveKintuqScreen } from "@/components/kintuq/Shell";
import { VocabLibrary } from "@/components/kintuq/screens-content";
import { VocabularyCentered } from "@/components/kintuq/screens-centered";
import type { KintuqVocabularyItem } from "@/lib/kintuq-demo";

export default function VocabularyPage() {
  const [vocabulary, setVocabulary] = useState<KintuqVocabularyItem[] | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/kintuq/vocabulary")
      .then((res) => (res.ok ? res.json() : null))
      .then((payload) => alive && setVocabulary(payload?.vocabulary ?? null))
      .catch(() => alive && setVocabulary(null));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <ResponsiveKintuqScreen
      tabBar
      mobile={<VocabLibrary lang="en" vocabulary={vocabulary} />}
      desktop={<VocabularyCentered lang="en" vocabulary={vocabulary} />}
    />
  );
}
