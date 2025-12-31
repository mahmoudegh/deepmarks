import { useSnapshot } from "valtio/react";
import { type ChangeEvent, useRef } from "react";
import { questionsStore } from "@/features/onboarding/state/questions.state.ts";

export const useAnswer = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { questions, activeQuestion } = useSnapshot(questionsStore.store);
  const answer = questions[activeQuestion - 1].answer;

  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  const handleAnswerChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    questionsStore.store.questions[activeQuestion - 1].answer.text =
      e.target.value;
  };

  const handleAiGeneratedAnswers = (answer: string) => {
    questionsStore.store.questions[activeQuestion - 1].answer.text = answer;
  };

  return {
    answer,
    fileInputRef,
    handleAttachClick,
    handleAnswerChange,
    handleAiGeneratedAnswers,
  };
};
