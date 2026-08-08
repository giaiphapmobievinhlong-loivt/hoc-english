export type SkillType = 'listening' | 'speaking' | 'reading' | 'writing';
export type DifficultyLevel = 1 | 2 | 3 | 4 | 5;

export interface Phrase {
  id: string;
  english: string;
  vietnamese: string;
  phonetic?: string;
  audioUrl?: string;
  category: string;
}

export interface DialogLine {
  speaker: 'you' | 'other';
  speakerLabel: string;
  text: string;
  vietnamese?: string;
  audioUrl?: string;
}

export interface Dialog {
  id: string;
  title: string;
  titleVi: string;
  situation: string;
  situationVi: string;
  level: DifficultyLevel;
  lines: DialogLine[];
  keyPoints: string[];
}

export interface VocabularyItem {
  id: string;
  word: string;
  partOfSpeech: string;
  definition: string;
  definitionVi: string;
  example: string;
  exampleVi: string;
  phonetic: string;
  audioUrl?: string;
}

export interface ReadingPassage {
  id: string;
  title: string;
  titleVi: string;
  content: string;
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface WritingPrompt {
  id: string;
  title: string;
  titleVi: string;
  instructions: string;
  instructionsVi: string;
  sampleAnswer: string;
  keyPhrases: string[];
}

export interface Context {
  id: string;
  title: string;
  titleVi: string;
  description: string;
  descriptionVi: string;
  icon: string;
  level: DifficultyLevel;
  phrases: Phrase[];
  dialogs: Dialog[];
  vocabulary: VocabularyItem[];
  readingPassages: ReadingPassage[];
  writingPrompts: WritingPrompt[];
}

export interface Topic {
  id: string;
  title: string;
  titleVi: string;
  description: string;
  descriptionVi: string;
  icon: string;
  coverColor: string;
  contexts: Context[];
}

export interface UserProgress {
  topicId: string;
  contextId: string;
  skill: SkillType;
  completedItems: string[];
  score: number;
  lastStudied: string;
}
