import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export type KintuqSession = {
  user: {
    id: string;
    name: string | null;
    email: string | null;
  };
} | null;

export async function getKintuqSession(): Promise<KintuqSession> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session?.user?.id) return null;
    return {
      user: {
        id: session.user.id,
        name: session.user.name ?? null,
        email: session.user.email ?? null,
      },
    };
  } catch {
    return null;
  }
}
