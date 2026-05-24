"use client";
import "../../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { DashboardCentered } from "@/components/kintuq/screens-centered";

export default function CenteredDashboardPage() {
  return (
    <KintuqScreen wide>
      <DashboardCentered lang="en" />
    </KintuqScreen>
  );
}
