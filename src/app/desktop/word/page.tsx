"use client";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { DailyWordDesktop } from "@/components/kintuq/screens-desktop";

export default function DesktopWordPage() {
  return (
    <KintuqScreen wide>
      <DailyWordDesktop lang="en" />
    </KintuqScreen>
  );
}
