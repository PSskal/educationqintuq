"use client";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { LessonCentered } from "@/components/kintuq/screens-centered";

export default function CenteredLessonPage() {
  return (
    <KintuqScreen wide>
      <LessonCentered lang="en" />
    </KintuqScreen>
  );
}
