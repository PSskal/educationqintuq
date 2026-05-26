"use client";
import "../kintuq.css";
import { ResponsiveKintuqScreen } from "@/components/kintuq/Shell";
import { ProfileScreen } from "@/components/kintuq/screens";
import { ProfileCentered } from "@/components/kintuq/screens-centered";

export default function ProfilePage() {
  return (
    <ResponsiveKintuqScreen
      tabBar
      mobile={<ProfileScreen lang="en" />}
      desktop={<ProfileCentered lang="en" />}
    />
  );
}
