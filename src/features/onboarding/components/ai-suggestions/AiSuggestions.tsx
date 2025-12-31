import styles from "./AiSuggestions.module.css";
import { assets } from "@/assets/assets";
import { useAnswer } from "@/features/onboarding/hooks";
import { useQuestion } from "@/features/onboarding/hooks";

export const AiSuggestions = () => {
  const { handleAiGeneratedAnswers } = useAnswer();
  const { activeQuestion, questions } = useQuestion();

  const currentQuestion = questions[activeQuestion - 1];

  return (
    <>
      {currentQuestion?.suggestions?.length > 0 && (
        <div className={styles["answer__ai-suggestions"]}>
          <div className={styles["answer__ai-suggestions-title"]}>
            <img src={assets.stars} alt="stars" />
            <h6 className="text-primary">AI SUGGESTIONS</h6>
          </div>
          <div
            className={`${styles["answer__ai-suggestions-wrapper"]} no-scrollbar`}
          >
            {currentQuestion.suggestions.map((item, index) => {
              const isSelected = currentQuestion.answer.text === item.desc;

              return (
                <div
                  key={index}
                  onClick={() => handleAiGeneratedAnswers(item.desc)}
                  className={`${styles["answer__ai-suggestions-pills"]} ${
                    isSelected
                      ? "bg-primary text-white border-primary"
                      : "bg-[#EFEFF0] text-[#2E2C2C] border-[#DCDCDC]"
                  }
                `}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
