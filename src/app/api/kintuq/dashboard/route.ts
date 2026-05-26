import { getDashboardData } from "@/lib/kintuq-data";
import { getKintuqSession } from "@/lib/kintuq-session";

export async function GET() {
  const session = await getKintuqSession();
  const data = await getDashboardData(session?.user ?? null);
  return Response.json(data);
}
