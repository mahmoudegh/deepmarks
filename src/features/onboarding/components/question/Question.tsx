import { Activity } from "react";
import styles from "./Question.module.css";
import { Button } from "@/components/ui/button.tsx";
import { Progress } from "@/components/ui/progress.tsx";
import { useQuestion } from "@/features/onboarding/hooks";
import { ArrowLeftIcon } from "lucide-react";

export const Question = () => {
  const { questions, activeQuestion, progress, showPrevBtn, onClickPrevBtn } =
    useQuestion();
  return (
    <section className={styles.question}>
      <div className={styles.question__progress}>
        <p className={styles["question__progress-text"]}>
          QUESTION {activeQuestion} OF {questions.length}
        </p>
        <Progress value={progress} />
      </div>
      <div className={styles.question__item}>
        <Activity mode={showPrevBtn ? "visible" : "hidden"}>
          <Button
            variant="secondary"
            className={styles["question__prev-btn"]}
            onClick={() => onClickPrevBtn()}
          >
            <ArrowLeftIcon size={24} />
          </Button>
        </Activity>
        <div className={styles["question__item-text"]}>
          <h3 className={`${styles.question__title} text-primary`}>
            {questions[activeQuestion - 1].text}
          </h3>
          <p className={styles.question__description}>
            {questions[activeQuestion - 1].description}
          </p>
        </div>
      </div>
    </section>
  );
};
