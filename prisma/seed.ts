import "dotenv/config";
import prisma from "../src/lib/prisma";
import { demoLesson, demoUnits, demoVocabulary } from "../src/lib/kintuq-demo";

async function main() {
  const now = new Date();

  for (const unit of demoUnits) {
    await prisma.$executeRaw`
      INSERT INTO "unit" ("id", "title", "subtitleEn", "subtitleEs", "order", "locked", "tone", "updatedAt")
      VALUES (${unit.id}, ${unit.title}, ${unit.subtitleEn}, ${unit.subtitleEs}, ${unit.order}, ${unit.locked}, ${unit.tone}, ${now})
      ON CONFLICT ("id") DO UPDATE SET
        "title" = EXCLUDED."title",
        "subtitleEn" = EXCLUDED."subtitleEn",
        "subtitleEs" = EXCLUDED."subtitleEs",
        "order" = EXCLUDED."order",
        "locked" = EXCLUDED."locked",
        "tone" = EXCLUDED."tone",
        "updatedAt" = EXCLUDED."updatedAt"
    `;
  }

  await prisma.$executeRaw`
    INSERT INTO "lesson" ("id", "unitId", "title", "titleEn", "titleEs", "type", "order", "estimatedMinutes", "updatedAt")
    VALUES (${demoLesson.id}, ${demoLesson.unitId}, ${demoLesson.title}, ${demoLesson.titleEn}, ${demoLesson.titleEs}, ${demoLesson.type}, ${demoLesson.order}, ${demoLesson.estimatedMinutes}, ${now})
    ON CONFLICT ("id") DO UPDATE SET
      "unitId" = EXCLUDED."unitId",
      "title" = EXCLUDED."title",
      "titleEn" = EXCLUDED."titleEn",
      "titleEs" = EXCLUDED."titleEs",
      "type" = EXCLUDED."type",
      "order" = EXCLUDED."order",
      "estimatedMinutes" = EXCLUDED."estimatedMinutes",
      "updatedAt" = EXCLUDED."updatedAt"
  `;

  for (const step of demoLesson.steps) {
    await prisma.$executeRaw`
      INSERT INTO "lesson_step" ("id", "lessonId", "kind", "order", "quechua", "translationEn", "translationEs", "ipa", "voice", "optionsJson", "culturalNoteEn", "culturalNoteEs", "updatedAt")
      VALUES (${step.id}, ${demoLesson.id}, ${step.kind}, ${step.order}, ${step.quechua}, ${step.translationEn}, ${step.translationEs}, ${step.ipa ?? null}, ${step.voice ?? null}, ${step.options ? JSON.stringify(step.options) : null}::jsonb, ${step.culturalNoteEn ?? null}, ${step.culturalNoteEs ?? null}, ${now})
      ON CONFLICT ("id") DO UPDATE SET
        "kind" = EXCLUDED."kind",
        "order" = EXCLUDED."order",
        "quechua" = EXCLUDED."quechua",
        "translationEn" = EXCLUDED."translationEn",
        "translationEs" = EXCLUDED."translationEs",
        "ipa" = EXCLUDED."ipa",
        "voice" = EXCLUDED."voice",
        "optionsJson" = EXCLUDED."optionsJson",
        "culturalNoteEn" = EXCLUDED."culturalNoteEn",
        "culturalNoteEs" = EXCLUDED."culturalNoteEs",
        "updatedAt" = EXCLUDED."updatedAt"
    `;
  }

  for (const item of demoVocabulary) {
    await prisma.$executeRaw`
      INSERT INTO "vocabulary_item" ("id", "quechua", "ipa", "partOfSpeech", "meaningEn", "meaningEs", "bodyEn", "bodyEs", "exampleQuechua", "exampleEn", "exampleEs", "updatedAt")
      VALUES (${item.id}, ${item.quechua}, ${item.ipa ?? null}, ${item.partOfSpeech ?? null}, ${item.meaningEn}, ${item.meaningEs}, ${item.bodyEn ?? null}, ${item.bodyEs ?? null}, ${item.exampleQuechua ?? null}, ${item.exampleEn ?? null}, ${item.exampleEs ?? null}, ${now})
      ON CONFLICT ("id") DO UPDATE SET
        "quechua" = EXCLUDED."quechua",
        "ipa" = EXCLUDED."ipa",
        "partOfSpeech" = EXCLUDED."partOfSpeech",
        "meaningEn" = EXCLUDED."meaningEn",
        "meaningEs" = EXCLUDED."meaningEs",
        "bodyEn" = EXCLUDED."bodyEn",
        "bodyEs" = EXCLUDED."bodyEs",
        "exampleQuechua" = EXCLUDED."exampleQuechua",
        "exampleEn" = EXCLUDED."exampleEn",
        "exampleEs" = EXCLUDED."exampleEs",
        "updatedAt" = EXCLUDED."updatedAt"
    `;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
