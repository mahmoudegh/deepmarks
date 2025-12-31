import styles from "./AppSidebar.module.css";
import { assets } from "@/assets/assets";
import { type ImperativePanelHandle } from "react-resizable-panels";
import { useRef, useEffect } from "react";
import { useQuestion } from "@/features/onboarding/hooks";

interface AppSidebarProps {
  sidebarRef: React.RefObject<ImperativePanelHandle | null>;
  isCollapsed: boolean;
}

const AppSidebar = ({ sidebarRef, isCollapsed }: AppSidebarProps) => {
  const { questions, activeQuestion } = useQuestion();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sidebarContentRef = useRef<HTMLDivElement | null>(null); // 👈 NEW REF

  useEffect(() => {
    if (isCollapsed) {
      videoRef.current?.pause();
    }
  }, [isCollapsed]);

  // 👇 Scroll sidebar to top when activeQuestion changes
  useEffect(() => {
    if (sidebarContentRef.current) {
      sidebarContentRef.current.scrollTop = 0;
    }
  }, [activeQuestion]);

  const closeSidebar = () => {
    if (!sidebarRef.current) return;
    sidebarRef.current.collapse();
  };

  return (
    <div className={styles.sidebar}>
      <img className={styles["sidebar__dots"]} src={assets.dots} alt="dots" />
      <div className={styles["sidebar__header"]}>
        <span className={styles["sidebar__help"]}>AI Help</span>
        <img
          onClick={closeSidebar}
          src={assets.close}
          className={styles["sidebar__close"]}
          alt="close"
        />
      </div>

      {/* 👇 Apply the ref here */}
      <div className={styles["sidebar__content"]} ref={sidebarContentRef}>
        {questions[activeQuestion - 1].ai_help.video_link.length > 0 && (
          <div className={styles["sidebar__video-wrapper"]}>
            <video
              ref={videoRef}
              src={questions[activeQuestion - 1].ai_help.video_link}
              className={styles["sidebar__video"]}
              controls
            />
          </div>
        )}

        {questions[activeQuestion - 1].ai_help.why_matters.length > 0 && (
          <div className={styles["sidebar__note"]}>
            <h3 className={`${styles["sidebar__note-title"]} text-primary`}>
              <img src={assets.note} alt="note" />
              <span>Why it matters</span>
            </h3>
            <p className={styles["sidebar__note-text"]}>
              {questions[activeQuestion - 1].ai_help.why_matters}
            </p>
          </div>
        )}

        {questions[activeQuestion - 1].ai_help.image_link && (
          <div className={styles["sidebar__note"]}>
            <img
              src={questions[activeQuestion - 1].ai_help.image_link}
              className="mb-5"
              alt="brand personality"
            />
          </div>
        )}

        {questions[activeQuestion - 1].ai_help.example.length > 0 && (
          <div className={styles["sidebar__note"]}>
            <h3 className={`${styles["sidebar__note-title"]} text-primary`}>
              <span>Example</span>
            </h3>
            <p className={styles["sidebar__note-text"]}>
              {questions[activeQuestion - 1].ai_help.example}
            </p>
          </div>
        )}

        {questions[activeQuestion - 1].ai_help.resources.length > 0 && (
          <div className={styles["sidebar__resources"]}>
            <h6>Resources</h6>
            <ul>
              {questions[activeQuestion - 1]?.ai_help.resources.map(
                (item, index) => (
                  <li key={index}>
                    <img src={assets.comment} alt="text" />
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.text}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppSidebar;
