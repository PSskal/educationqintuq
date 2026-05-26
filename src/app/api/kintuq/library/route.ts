import { getUnits } from "@/lib/kintuq-data";
import { getKintuqSession } from "@/lib/kintuq-session";

export async function GET() {
  const session = await getKintuqSession();
  const units = await getUnits(session?.user.id);
  return Response.json({ units });
}
