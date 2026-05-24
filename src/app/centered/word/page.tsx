"use client";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { DailyWordCentered } from "@/components/kintuq/screens-centered";

export default function CenteredWordPage() {
  return (
    <KintuqScreen wide>
      <DailyWordCentered lang="en" />
    </KintuqScreen>
  );
}
