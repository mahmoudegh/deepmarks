import type { Question } from "@/models";
import { persist } from "valtio-persist";
import { IndexedDBStrategy } from "valtio-persist/indexed-db";
import { questions } from "@/features/onboarding/components/questions-step/data.ts";

export type QuestionsState = {
  questions: Question[];
  activeQuestion: number;
};

const initialState = {
  questions,
  activeQuestion: 1,
};

export const questionsStore = await persist<QuestionsState>(
  initialState,
  "questions",
  {
    storageStrategy: IndexedDBStrategy,
  }
);
