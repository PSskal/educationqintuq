import { completeLessonForUser, getActiveLesson } from "@/lib/kintuq-data";
import { getKintuqSession } from "@/lib/kintuq-session";

export async function GET() {
  const lesson = await getActiveLesson();
  return Response.json({ lesson });
}

export async function POST(request: Request) {
  const session = await getKintuqSession();
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const body = (await request.json().catch(() => ({}))) as { lessonId?: string };
  await completeLessonForUser(session.user, body.lessonId);
  return Response.json({ ok: true });
}
