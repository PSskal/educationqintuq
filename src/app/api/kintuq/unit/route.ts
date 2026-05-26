import { getActiveLesson, getUnits } from "@/lib/kintuq-data";
import { getKintuqSession } from "@/lib/kintuq-session";

export async function GET() {
  const session = await getKintuqSession();
  const [units, lesson] = await Promise.all([getUnits(session?.user.id), getActiveLesson()]);
  const unit = units.find((item) => item.id === lesson.unitId) ?? units[1] ?? units[0];
  return Response.json({ unit, lesson });
}
