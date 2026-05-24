"use client";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { VocabLibrary } from "@/components/kintuq/screens-content";

export default function VocabularyPage() {
  return (
    <KintuqScreen tabBar>
      <VocabLibrary lang="en" />
    </KintuqScreen>
  );
}
