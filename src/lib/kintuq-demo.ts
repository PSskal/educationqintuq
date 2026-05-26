export type KintuqUnit = {
  id: string;
  order: number;
  title: string;
  subtitleEn: string;
  subtitleEs: string;
  locked: boolean;
  tone: "mountain" | "valley" | "sky" | "textile" | "night";
  lessonsTotal: number;
  lessonsDone: number;
};

export type KintuqLessonStep = {
  id: string;
  order: number;
  kind: "listen" | "choose" | "speak";
  quechua: string;
  translationEn: string;
  translationEs: string;
  ipa?: string;
  voice?: string;
  culturalNoteEn?: string;
  culturalNoteEs?: string;
  options?: Array<{ labelEn: string; labelEs: string; correct: boolean }>;
};

export type KintuqLesson = {
  id: string;
  unitId: string;
  order: number;
  title: string;
  titleEn: string;
  titleEs: string;
  estimatedMinutes: number;
  type: string;
  steps: KintuqLessonStep[];
};

export type KintuqVocabularyItem = {
  id: string;
  quechua: string;
  ipa?: string;
  partOfSpeech?: string;
  meaningEn: string;
  meaningEs: string;
  bodyEn?: string;
  bodyEs?: string;
  exampleQuechua?: string;
  exampleEn?: string;
  exampleEs?: string;
  strength: number;
};

export type KintuqStats = {
  xp: number;
  streakDays: number;
  todayCompleted: number;
  todayGoal: number;
};

export type KintuqDashboardData = {
  user: {
    id: string;
    name: string;
    email: string | null;
  };
  stats: KintuqStats;
  units: KintuqUnit[];
  activeLesson: KintuqLesson;
  dailyWord: KintuqVocabularyItem;
};

export const demoUnits: KintuqUnit[] = [
  { id: "unit-greetings", order: 1, title: "Napaykuy", subtitleEn: "Greetings", subtitleEs: "Saludos", locked: false, tone: "valley", lessonsTotal: 5, lessonsDone: 5 },
  { id: "unit-day-greetings", order: 2, title: "Allin pʼunchaw", subtitleEn: "Greetings of the day", subtitleEs: "Saludos del día", locked: false, tone: "mountain", lessonsTotal: 5, lessonsDone: 3 },
  { id: "unit-market", order: 3, title: "Qhatu", subtitleEn: "At the market", subtitleEs: "En el mercado", locked: false, tone: "sky", lessonsTotal: 6, lessonsDone: 0 },
  { id: "unit-food", order: 4, title: "Mikhuna", subtitleEn: "Andean food", subtitleEs: "Comida andina", locked: true, tone: "textile", lessonsTotal: 7, lessonsDone: 0 },
  { id: "unit-pacha", order: 5, title: "Pacha", subtitleEn: "Earth & time", subtitleEs: "Tierra y tiempo", locked: true, tone: "night", lessonsTotal: 8, lessonsDone: 0 },
];

export const demoLesson: KintuqLesson = {
  id: "lesson-day-greetings-3",
  unitId: "unit-day-greetings",
  order: 3,
  title: "Allin pʼunchaw",
  titleEn: "Greetings of the day",
  titleEs: "Saludos del día",
  estimatedMinutes: 5,
  type: "daily",
  steps: [
    {
      id: "step-allillanchu",
      order: 1,
      kind: "listen",
      quechua: "Allillanchu",
      translationEn: "How are you? (Are you well?)",
      translationEs: "¿Cómo estás? (¿Estás bien?)",
      ipa: "/a.ʊiLˈjan.tʃu/",
      voice: "María Quispe · San Blás",
      culturalNoteEn: "A common greeting at any time of day, used between equals.",
      culturalNoteEs: "Saludo común a cualquier hora, usado entre iguales.",
    },
    {
      id: "step-sumaq-punchaw",
      order: 2,
      kind: "choose",
      quechua: "Sumaq pʼunchaw",
      translationEn: "Beautiful day",
      translationEs: "Hermoso día",
      voice: "Tito Condori · Pisaq",
      options: [
        { labelEn: "Beautiful day", labelEs: "Hermoso día", correct: true },
        { labelEn: "Good night", labelEs: "Buenas noches", correct: false },
        { labelEn: "See you later", labelEs: "Hasta luego", correct: false },
        { labelEn: "Thank you", labelEs: "Gracias", correct: false },
      ],
    },
    {
      id: "step-sulpayki",
      order: 3,
      kind: "speak",
      quechua: "Sulpayki",
      translationEn: "Thank you",
      translationEs: "Gracias",
      voice: "María Quispe · San Blás",
    },
  ],
};

export const demoVocabulary: KintuqVocabularyItem[] = [
  {
    id: "vocab-munay",
    quechua: "Munay",
    ipa: "/ˈmu.naj/",
    partOfSpeech: "noun · verb",
    meaningEn: "love · will · to want",
    meaningEs: "amor · voluntad · querer",
    bodyEn: "In Andean philosophy, munay is one of three pillars of being — alongside yachay and llankʼay.",
    bodyEs: "En la filosofía andina, munay es uno de los tres pilares del ser — junto a yachay y llankʼay.",
    exampleQuechua: "Munaykim sunqoìmanta",
    exampleEn: "I love you from my heart",
    exampleEs: "Te amo desde mi corazón",
    strength: 0.55,
  },
  { id: "vocab-allillanchu", quechua: "Allillanchu", meaningEn: "How are you?", meaningEs: "¿Cómo estás?", strength: 1 },
  { id: "vocab-sulpayki", quechua: "Sulpayki", meaningEn: "Thank you", meaningEs: "Gracias", strength: 1 },
  { id: "vocab-sumaq", quechua: "Sumaq", meaningEn: "Beautiful", meaningEs: "Hermoso", strength: 0.85 },
  { id: "vocab-pacha", quechua: "Pacha", meaningEn: "Earth · time", meaningEs: "Tierra · tiempo", strength: 0.3 },
  { id: "vocab-yachay", quechua: "Yachay", meaningEn: "To know", meaningEs: "Saber", strength: 0.25 },
];

export const demoStats: KintuqStats = {
  xp: 1240,
  streakDays: 7,
  todayCompleted: 3,
  todayGoal: 3,
};
