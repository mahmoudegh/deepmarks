import { Paperclip } from "lucide-react";
import styles from "./Answer.module.css";
import { Activity } from "react";
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { useAnswer } from "@/features/onboarding/hooks";
import { SelectedFiles } from "@/features/onboarding/components/selected-files/SelectedFiles.tsx";
import { AiSuggestions } from "@/features/onboarding/components/ai-suggestions/AiSuggestions.tsx";
import { useQuestion } from "@/features/onboarding/hooks";
import Login from "@/features/onboarding/components/login/Login";
// import { openLogin } from "@/features/onboarding/state/auth.state";

export const Answer = () => {
  const { answer, fileInputRef, handleAttachClick, handleAnswerChange } =
    useAnswer();
  const { activeQuestion, onClickNextBtn } = useQuestion();

  const hasText = answer.text.trim() !== "";
  const hasSuggestions = answer.suggestions?.length > 0;

  return (
    <>
      <div className={styles.answer}>
        <AiSuggestions />
        <div className={styles["answer__textarea-wrapper"]}>
          <Textarea
            value={answer.text}
            onChange={handleAnswerChange}
            className={styles.answer__textarea}
            placeholder="Type information about your brand"
          />

          <div className={styles.answer__footer}>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleAttachClick}
              className={styles["answer__attach-btn"]}
            >
              <Paperclip className="w-3! h-4!" />
              Attach
            </Button>

            <div className="flex gap-2">
              {activeQuestion > 3 && (
                <Login isDirectLogin={false} isSkipToLogin={true} />
              )}

              {activeQuestion < 7 && (hasText || hasSuggestions) && (
                <Activity>
                  <img
                    src={assets.arrowUpBtn}
                    className="cursor-pointer"
                    onClick={() => onClickNextBtn()}
                  />
                </Activity>
              )}
            </div>
          </div>
        </div>

        <SelectedFiles fileInputRef={fileInputRef} />
      </div>

      <p className={`${styles.answer__note}`}>
        Deepmarks AI saves your answers automatically, you can check back
        anytime
      </p>
    </>
  );
};
