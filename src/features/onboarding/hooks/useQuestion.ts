import { useSnapshot } from "valtio/react";
import { questionsStore } from "@/features/onboarding/state/questions.state.ts";

export const useQuestion = () => {
  const { questions, activeQuestion } = useSnapshot(questionsStore.store);
  const STEP_SIZE = 100 / questions.length;
  const progress = STEP_SIZE * activeQuestion;
  const showPrevBtn = activeQuestion > 1;
  const showNextBtn =
    activeQuestion < questions.length &&
    questions[activeQuestion - 1].answer.text;

  const onClickPrevBtn = () => {
    questionsStore.store.activeQuestion =
      questionsStore.store.activeQuestion - 1;
  };
  const onClickNextBtn = () => {
    if (questionsStore.store.activeQuestion <= 6) {
      questionsStore.store.activeQuestion =
        questionsStore.store.activeQuestion + 1;
    }
  };

  return {
    progress,
    questions,
    showNextBtn,
    showPrevBtn,
    activeQuestion,
    onClickNextBtn,
    onClickPrevBtn,
  };
};
