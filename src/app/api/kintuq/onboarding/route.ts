import { completeOnboarding } from "@/lib/kintuq-data";
import { getKintuqSession } from "@/lib/kintuq-session";

export async function POST(request: Request) {
  const session = await getKintuqSession();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const body = (await request.json().catch(() => ({}))) as { displayName?: string };
  await completeOnboarding(session.user, body.displayName);
  return Response.json({ ok: true });
}
