"use client";
import "../kintuq.css";
import { KintuqScreen } from "@/components/kintuq/Shell";
import { ProfileScreen } from "@/components/kintuq/screens";

export default function ProfilePage() {
  return (
    <KintuqScreen tabBar>
      <ProfileScreen lang="en" />
    </KintuqScreen>
  );
}
