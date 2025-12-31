import { type FC } from "react";
import { Answer } from "../answer/Answer.tsx";
import styles from "./QuestionsStep.module.css";
import { Question } from "@/features/onboarding/components/question/Question.tsx";
import { Steps } from "@/features/onboarding/components/steps/Steps.tsx";

export const QuestionsStep: FC = () => {
  return (
    <div className={styles.questions__step}>
      <Steps />
      <Question />
      <Answer />
    </div>
  );
};
