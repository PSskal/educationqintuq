import prisma from "@/lib/prisma";
import {
  demoLesson,
  demoStats,
  demoUnits,
  demoVocabulary,
  type KintuqDashboardData,
  type KintuqLesson,
  type KintuqStats,
  type KintuqUnit,
  type KintuqVocabularyItem,
} from "@/lib/kintuq-demo";

type UserRow = { id: string; name: string | null; email: string | null };
type ProfileRow = { displayName: string; onboardingCompleted: boolean; dailyGoal: number } | null;
type UnitRow = {
  id: string;
  title: string;
  subtitleEn: string;
  subtitleEs: string;
  order: number;
  locked: boolean;
  tone: KintuqUnit["tone"];
  lessonsTotal: bigint | number;
  lessonsDone: bigint | number;
};
type LessonRow = {
  id: string;
  unitId: string;
  title: string;
  titleEn: string;
  titleEs: string;
  type: string;
  order: number;
  estimatedMinutes: number;
};
type StepRow = {
  id: string;
  kind: KintuqLesson["steps"][number]["kind"];
  order: number;
  quechua: string;
  translationEn: string;
  translationEs: string;
  ipa: string | null;
  voice: string | null;
  optionsJson: KintuqLesson["steps"][number]["options"] | string | null;
  culturalNoteEn: string | null;
  culturalNoteEs: string | null;
};
type VocabularyRow = {
  id: string;
  quechua: string;
  ipa: string | null;
  partOfSpeech: string | null;
  meaningEn: string;
  meaningEs: string;
  bodyEn: string | null;
  bodyEs: string | null;
  exampleQuechua: string | null;
  exampleEn: string | null;
  exampleEs: string | null;
  strength: number | null;
};

const toNumber = (value: bigint | number) => (typeof value === "bigint" ? Number(value) : value);

function parseOptions(value: StepRow["optionsJson"]) {
  if (!value) return undefined;
  if (typeof value === "string") return JSON.parse(value);
  return value;
}

export async function ensureLearningProfile(user: UserRow) {
  const name = user.name || user.email?.split("@")[0] || "Sara";
  await prisma.$executeRaw`
    INSERT INTO "profile" ("id", "userId", "displayName", "onboardingCompleted", "updatedAt")
    VALUES (${crypto.randomUUID()}, ${user.id}, ${name}, false, ${new Date()})
    ON CONFLICT ("userId") DO NOTHING
  `;
  await prisma.$executeRaw`
    INSERT INTO "user_stats" ("id", "userId", "xp", "streakDays", "updatedAt")
    VALUES (${crypto.randomUUID()}, ${user.id}, 0, 0, ${new Date()})
    ON CONFLICT ("userId") DO NOTHING
  `;
}

export async function getProfileState(user: UserRow) {
  try {
    await ensureLearningProfile(user);
    const rows = await prisma.$queryRaw<ProfileRow[]>`
      SELECT "displayName", "onboardingCompleted", "dailyGoal"
      FROM "profile"
      WHERE "userId" = ${user.id}
      LIMIT 1
    `;
    return rows[0] ?? { displayName: user.name ?? "Sara", onboardingCompleted: false, dailyGoal: 3 };
  } catch {
    return { displayName: user.name ?? "Sara", onboardingCompleted: true, dailyGoal: 3 };
  }
}

export async function completeOnboarding(user: UserRow, displayName?: string) {
  await ensureLearningProfile(user);
  await prisma.$executeRaw`
    UPDATE "profile"
    SET "displayName" = COALESCE(${displayName ?? null}, "displayName"),
        "onboardingCompleted" = true,
        "updatedAt" = ${new Date()}
    WHERE "userId" = ${user.id}
  `;
}

export async function getUnits(userId?: string): Promise<KintuqUnit[]> {
  try {
    const rows = await prisma.$queryRaw<UnitRow[]>`
      SELECT
        u."id",
        u."title",
        u."subtitleEn",
        u."subtitleEs",
        u."order",
        u."locked",
        u."tone",
        COUNT(l."id") AS "lessonsTotal",
        COUNT(up."id") FILTER (WHERE up."completed" = true) AS "lessonsDone"
      FROM "unit" u
      LEFT JOIN "lesson" l ON l."unitId" = u."id"
      LEFT JOIN "user_progress" up ON up."lessonId" = l."id" AND up."userId" = ${userId ?? ""}
      GROUP BY u."id"
      ORDER BY u."order" ASC
    `;
    if (!rows.length) return demoUnits;
    return rows.map((row) => ({
      id: row.id,
      order: row.order,
      title: row.title,
      subtitleEn: row.subtitleEn,
      subtitleEs: row.subtitleEs,
      locked: row.locked,
      tone: row.tone,
      lessonsTotal: toNumber(row.lessonsTotal),
      lessonsDone: toNumber(row.lessonsDone),
    }));
  } catch {
    return demoUnits;
  }
}

export async function getActiveLesson(): Promise<KintuqLesson> {
  try {
    const lessonRows = await prisma.$queryRaw<LessonRow[]>`
      SELECT "id", "unitId", "title", "titleEn", "titleEs", "type", "order", "estimatedMinutes"
      FROM "lesson"
      WHERE "id" = ${demoLesson.id}
      LIMIT 1
    `;
    const lesson = lessonRows[0];
    if (!lesson) return demoLesson;

    const stepRows = await prisma.$queryRaw<StepRow[]>`
      SELECT "id", "kind", "order", "quechua", "translationEn", "translationEs", "ipa", "voice", "optionsJson", "culturalNoteEn", "culturalNoteEs"
      FROM "lesson_step"
      WHERE "lessonId" = ${lesson.id}
      ORDER BY "order" ASC
    `;

    return {
      id: lesson.id,
      unitId: lesson.unitId,
      order: lesson.order,
      title: lesson.title,
      titleEn: lesson.titleEn,
      titleEs: lesson.titleEs,
      type: lesson.type,
      estimatedMinutes: lesson.estimatedMinutes,
      steps: stepRows.map((step) => ({
        id: step.id,
        order: step.order,
        kind: step.kind,
        quechua: step.quechua,
        translationEn: step.translationEn,
        translationEs: step.translationEs,
        ipa: step.ipa ?? undefined,
        voice: step.voice ?? undefined,
        options: parseOptions(step.optionsJson),
        culturalNoteEn: step.culturalNoteEn ?? undefined,
        culturalNoteEs: step.culturalNoteEs ?? undefined,
      })),
    };
  } catch {
    return demoLesson;
  }
}

export async function getVocabulary(userId?: string): Promise<KintuqVocabularyItem[]> {
  try {
    const rows = await prisma.$queryRaw<VocabularyRow[]>`
      SELECT
        vi."id", vi."quechua", vi."ipa", vi."partOfSpeech", vi."meaningEn", vi."meaningEs",
        vi."bodyEn", vi."bodyEs", vi."exampleQuechua", vi."exampleEn", vi."exampleEs",
        COALESCE(uv."strength", 0) AS "strength"
      FROM "vocabulary_item" vi
      LEFT JOIN "user_vocabulary" uv ON uv."vocabularyItemId" = vi."id" AND uv."userId" = ${userId ?? ""}
      ORDER BY vi."createdAt" ASC
    `;
    if (!rows.length) return demoVocabulary;
    return rows.map((row) => ({
      id: row.id,
      quechua: row.quechua,
      ipa: row.ipa ?? undefined,
      partOfSpeech: row.partOfSpeech ?? undefined,
      meaningEn: row.meaningEn,
      meaningEs: row.meaningEs,
      bodyEn: row.bodyEn ?? undefined,
      bodyEs: row.bodyEs ?? undefined,
      exampleQuechua: row.exampleQuechua ?? undefined,
      exampleEn: row.exampleEn ?? undefined,
      exampleEs: row.exampleEs ?? undefined,
      strength: row.strength ?? 0,
    }));
  } catch {
    return demoVocabulary;
  }
}

export async function getStats(userId?: string): Promise<KintuqStats> {
  if (!userId) return demoStats;
  try {
    const rows = await prisma.$queryRaw<Array<{ xp: number; streakDays: number; todayCompleted: bigint | number }>>`
      SELECT
        COALESCE(us."xp", 0) AS "xp",
        COALESCE(us."streakDays", 0) AS "streakDays",
        COUNT(up."id") FILTER (WHERE up."completed" = true AND DATE(up."completedAt") = CURRENT_DATE) AS "todayCompleted"
      FROM "user_stats" us
      LEFT JOIN "user_progress" up ON up."userId" = us."userId"
      WHERE us."userId" = ${userId}
      GROUP BY us."xp", us."streakDays"
      LIMIT 1
    `;
    const row = rows[0];
    if (!row) return demoStats;
    return {
      xp: row.xp,
      streakDays: row.streakDays,
      todayCompleted: Math.max(toNumber(row.todayCompleted), demoStats.todayCompleted),
      todayGoal: 3,
    };
  } catch {
    return demoStats;
  }
}

export async function completeLessonForUser(user: UserRow, lessonId = demoLesson.id) {
  const now = new Date();
  await ensureLearningProfile(user);
  await prisma.$transaction(async (tx) => {
    await tx.$executeRaw`
      INSERT INTO "user_progress" ("id", "userId", "lessonId", "completed", "xpEarned", "completedAt", "updatedAt")
      VALUES (${crypto.randomUUID()}, ${user.id}, ${lessonId}, true, 30, ${now}, ${now})
      ON CONFLICT ("userId", "lessonId") DO UPDATE SET
        "completed" = true,
        "xpEarned" = GREATEST("user_progress"."xpEarned", 30),
        "completedAt" = COALESCE("user_progress"."completedAt", EXCLUDED."completedAt"),
        "updatedAt" = EXCLUDED."updatedAt"
    `;
    await tx.$executeRaw`
      INSERT INTO "user_stats" ("id", "userId", "xp", "streakDays", "lastActivityDate", "updatedAt")
      VALUES (${crypto.randomUUID()}, ${user.id}, 30, 1, ${now}, ${now})
      ON CONFLICT ("userId") DO UPDATE SET
        "xp" = CASE
          WHEN DATE(COALESCE("user_stats"."lastActivityDate", TIMESTAMP '1970-01-01')) = CURRENT_DATE THEN "user_stats"."xp"
          ELSE "user_stats"."xp" + 30
        END,
        "streakDays" = CASE
          WHEN DATE(COALESCE("user_stats"."lastActivityDate", TIMESTAMP '1970-01-01')) = CURRENT_DATE THEN "user_stats"."streakDays"
          WHEN DATE(COALESCE("user_stats"."lastActivityDate", TIMESTAMP '1970-01-01')) = CURRENT_DATE - INTERVAL '1 day' THEN "user_stats"."streakDays" + 1
          ELSE 1
        END,
        "lastActivityDate" = EXCLUDED."lastActivityDate",
        "updatedAt" = EXCLUDED."updatedAt"
    `;
    for (const item of demoVocabulary.slice(0, 3)) {
      await tx.$executeRaw`
        INSERT INTO "user_vocabulary" ("id", "userId", "vocabularyItemId", "strength", "lastReviewedAt", "updatedAt")
        VALUES (${crypto.randomUUID()}, ${user.id}, ${item.id}, 0.65, ${now}, ${now})
        ON CONFLICT ("userId", "vocabularyItemId") DO UPDATE SET
          "strength" = GREATEST("user_vocabulary"."strength", EXCLUDED."strength"),
          "lastReviewedAt" = EXCLUDED."lastReviewedAt",
          "updatedAt" = EXCLUDED."updatedAt"
      `;
    }
  });
}

export async function getDashboardData(user?: UserRow | null): Promise<KintuqDashboardData> {
  const [units, lesson, vocabulary, stats] = await Promise.all([
    getUnits(user?.id),
    getActiveLesson(),
    getVocabulary(user?.id),
    getStats(user?.id),
  ]);
  return {
    user: {
      id: user?.id ?? "demo",
      name: user?.name || "Sara",
      email: user?.email ?? null,
    },
    stats,
    units,
    activeLesson: lesson,
    dailyWord: vocabulary[0] ?? demoVocabulary[0],
  };
}
