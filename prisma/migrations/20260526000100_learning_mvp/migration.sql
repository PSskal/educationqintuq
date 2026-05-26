CREATE TABLE IF NOT EXISTS "profile" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "displayName" TEXT NOT NULL,
  "targetLanguage" TEXT NOT NULL DEFAULT 'qu',
  "uiLanguage" TEXT NOT NULL DEFAULT 'en',
  "dailyGoal" INTEGER NOT NULL DEFAULT 3,
  "onboardingCompleted" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "unit" (
  "id" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "subtitleEn" TEXT NOT NULL,
  "subtitleEs" TEXT NOT NULL,
  "order" INTEGER NOT NULL,
  "locked" BOOLEAN NOT NULL DEFAULT false,
  "tone" TEXT NOT NULL DEFAULT 'mountain',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "unit_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "lesson" (
  "id" TEXT NOT NULL,
  "unitId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "titleEn" TEXT NOT NULL,
  "titleEs" TEXT NOT NULL,
  "type" TEXT NOT NULL DEFAULT 'daily',
  "order" INTEGER NOT NULL,
  "estimatedMinutes" INTEGER NOT NULL DEFAULT 5,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "lesson_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "lesson_step" (
  "id" TEXT NOT NULL,
  "lessonId" TEXT NOT NULL,
  "kind" TEXT NOT NULL,
  "order" INTEGER NOT NULL,
  "quechua" TEXT NOT NULL,
  "translationEn" TEXT NOT NULL,
  "translationEs" TEXT NOT NULL,
  "ipa" TEXT,
  "voice" TEXT,
  "optionsJson" JSONB,
  "culturalNoteEn" TEXT,
  "culturalNoteEs" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "lesson_step_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "vocabulary_item" (
  "id" TEXT NOT NULL,
  "quechua" TEXT NOT NULL,
  "ipa" TEXT,
  "partOfSpeech" TEXT,
  "meaningEn" TEXT NOT NULL,
  "meaningEs" TEXT NOT NULL,
  "bodyEn" TEXT,
  "bodyEs" TEXT,
  "exampleQuechua" TEXT,
  "exampleEn" TEXT,
  "exampleEs" TEXT,
  "audioUrl" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "vocabulary_item_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "user_progress" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "lessonId" TEXT NOT NULL,
  "completed" BOOLEAN NOT NULL DEFAULT false,
  "xpEarned" INTEGER NOT NULL DEFAULT 0,
  "completedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "user_progress_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "user_vocabulary" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "vocabularyItemId" TEXT NOT NULL,
  "strength" DOUBLE PRECISION NOT NULL DEFAULT 0,
  "lastReviewedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "user_vocabulary_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "user_stats" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "xp" INTEGER NOT NULL DEFAULT 0,
  "streakDays" INTEGER NOT NULL DEFAULT 0,
  "lastActivityDate" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "user_stats_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "profile_userId_key" ON "profile"("userId");
CREATE UNIQUE INDEX IF NOT EXISTS "user_progress_userId_lessonId_key" ON "user_progress"("userId", "lessonId");
CREATE UNIQUE INDEX IF NOT EXISTS "user_vocabulary_userId_vocabularyItemId_key" ON "user_vocabulary"("userId", "vocabularyItemId");
CREATE UNIQUE INDEX IF NOT EXISTS "user_stats_userId_key" ON "user_stats"("userId");
CREATE INDEX IF NOT EXISTS "lesson_unitId_idx" ON "lesson"("unitId");
CREATE INDEX IF NOT EXISTS "lesson_step_lessonId_idx" ON "lesson_step"("lessonId");
CREATE INDEX IF NOT EXISTS "user_progress_lessonId_idx" ON "user_progress"("lessonId");
CREATE INDEX IF NOT EXISTS "user_vocabulary_vocabularyItemId_idx" ON "user_vocabulary"("vocabularyItemId");

ALTER TABLE "profile" ADD CONSTRAINT "profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "lesson_step" ADD CONSTRAINT "lesson_step_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "user_progress" ADD CONSTRAINT "user_progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "user_progress" ADD CONSTRAINT "user_progress_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "user_vocabulary" ADD CONSTRAINT "user_vocabulary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "user_vocabulary" ADD CONSTRAINT "user_vocabulary_vocabularyItemId_fkey" FOREIGN KEY ("vocabularyItemId") REFERENCES "vocabulary_item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "user_stats" ADD CONSTRAINT "user_stats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
