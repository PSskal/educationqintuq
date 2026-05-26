import { redirect } from "next/navigation";
import { getProfileState } from "@/lib/kintuq-data";
import { getKintuqSession } from "@/lib/kintuq-session";

export default async function PostLoginPage() {
  const session = await getKintuqSession();
  if (!session) redirect("/login");

  const profile = await getProfileState(session.user);
  redirect(profile.onboardingCompleted ? "/dashboard" : "/onboarding");
}
