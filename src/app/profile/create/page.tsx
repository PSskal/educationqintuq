import { redirect } from "next/navigation";
import { getProfileState } from "@/lib/kintuq-data";
import { getKintuqSession } from "@/lib/kintuq-session";

export default async function CreateProfilePage() {
  const session = await getKintuqSession();
  if (!session) redirect("/signup");

  const profile = await getProfileState(session.user);
  redirect(profile.onboardingCompleted ? "/dashboard" : "/onboarding");
}
