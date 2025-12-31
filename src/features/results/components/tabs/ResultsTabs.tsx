import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import styles from "./ResultsTabs.module.css";
import Filter from "../filter/Filter";
import { ChatBox } from "../chat/ChatBox";
import { useChat } from "../../hooks/useChat";
// import { assets } from "@/assets/assets";

const ResultsTabs = () => {
  const { messagesRef, showScrollBtn, setShowScrollBtn } = useChat();
  return (
    <div
      ref={messagesRef}
      onScroll={() => {
        if (!messagesRef.current) return;

        const el = messagesRef.current;

        const distanceFromBottom =
          el.scrollHeight - (el.scrollTop + el.clientHeight);

        setShowScrollBtn(distanceFromBottom > 100);
      }}
      className={`${styles["results__tabs"]} no-scrollbar`}
    >
      {/* <img className={styles["sidebar__dots"]} src={assets.dots} alt="dots" /> */}
      <Tabs defaultValue="chat" className={styles["tabs"]}>
        <TabsList className={styles["results__tabs-list"]}>
          <div className={styles["results__tabs-btn-wrapper"]}>
            <TabsTrigger
              value="filters"
              className={`${styles["results__tabs-btn"]} border border-gray-300 border-t-0 border-b-0 border-l-0`}
            >
              Filters
            </TabsTrigger>
            <TabsTrigger
              value="chat"
              className={`${styles["results__tabs-btn"]}`}
            >
              Chat history
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent value="filters">
          <Filter />
        </TabsContent>
        <TabsContent value="chat">
          <ChatBox showScrollBtn={showScrollBtn} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResultsTabs;
