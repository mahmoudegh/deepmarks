import styles from "./Steps.module.css";
import { assets } from "@/assets/assets";

export const Steps = () => {
  return (
    <>
      <div className={`${styles.steps}`}>
        <img src={assets.stepSuccess} alt="step success" />
        <span className={`${styles["steps__first-step"]} text-primary`}>
          Create your project
        </span>
        <img src={assets.stepSpace} alt="step space" />
        <img src={assets.stepCurrent} alt="step current" />
        <span className={`${styles["steps__seconde-step"]} text-primary`}>
          Main Questions
        </span>
        <img src={assets.stepSpace} alt="step space" />
        <img src={assets.stepNext} alt="step next" />
        <span className={styles["steps__third-step"]}>Generate names</span>
      </div>
    </>
  );
};
