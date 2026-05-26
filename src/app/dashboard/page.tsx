"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../kintuq.css";
import { ResponsiveKintuqScreen } from "@/components/kintuq/Shell";
import { Dashboard } from "@/components/kintuq/screens";
import { DashboardCentered } from "@/components/kintuq/screens-centered";
import type { KintuqDashboardData } from "@/lib/kintuq-demo";

export default function DashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<KintuqDashboardData | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/kintuq/dashboard")
      .then((res) => (res.ok ? res.json() : null))
      .then((payload) => alive && setData(payload))
      .catch(() => alive && setData(null));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <ResponsiveKintuqScreen
      tabBar
      mobile={<Dashboard lang="en" data={data} onStart={() => router.push("/lesson")} onWord={() => router.push("/word")} />}
      desktop={<DashboardCentered lang="en" data={data} />}
    />
  );
}
