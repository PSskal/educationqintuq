import { getVocabulary } from "@/lib/kintuq-data";
import { getKintuqSession } from "@/lib/kintuq-session";

export async function GET() {
  const session = await getKintuqSession();
  const vocabulary = await getVocabulary(session?.user.id);
  return Response.json({ vocabulary });
}
