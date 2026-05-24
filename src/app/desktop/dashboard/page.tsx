"use client";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { DashboardDesktop } from "@/components/kintuq/screens-desktop";

export default function DesktopDashboardPage() {
  return (
    <KintuqScreen wide>
      <DashboardDesktop lang="en" />
    </KintuqScreen>
  );
}
