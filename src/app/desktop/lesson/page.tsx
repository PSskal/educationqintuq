"use client";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { LessonDesktop } from "@/components/kintuq/screens-desktop";

export default function DesktopLessonPage() {
  return (
    <KintuqScreen wide>
      <LessonDesktop lang="en" />
    </KintuqScreen>
  );
}
