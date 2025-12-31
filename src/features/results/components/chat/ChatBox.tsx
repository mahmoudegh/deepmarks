import { Paperclip } from "lucide-react";
import styles from "./ChatBox.module.css";
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { SelectedFiles } from "@/features/onboarding/components/selected-files/SelectedFiles.tsx";
import { AiSuggestions } from "@/features/onboarding/components/ai-suggestions/AiSuggestions.tsx";
import { useChat } from "@/features/results/hooks";
import { useEffect } from "react";
import { MessageBubble } from "./MessageBubble";
import { useSnapshot } from "valtio/react";
import { chatStore } from "@/features/results/state/chat.state.ts";

interface ChatBoxProps {
  showScrollBtn: boolean;
}

export const ChatBox = ({ showScrollBtn }: ChatBoxProps) => {
  const chatSnapshot = useSnapshot(chatStore.store);
  const {
    handleCopy,
    copiedIndex,
    cancelEdit,
    editingTarget,
    setEditValue,
    editValue,
    submitAnswerEdit,
    startEditAnswer,
    startEdit,
    chat,
    sendReply,
    isAiResponding,
    message,
    setMessage,
    submitEdit,
    bottomRef,
    fileInputRef,
    handleAttachClick,
  } = useChat();

  const AiLoader = () => (
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
    </div>
  );

  // Auto scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, bottomRef]);

  return (
    <div className="flex flex-col justify-between h-full">
      {/* Messages */}
      <div className="pl-6 pr-6 pb-6 space-y-6 overflow-y-auto ">
        {/* Questions */}
        {chatSnapshot.oldChat.map((question) => (
          <div key={question.id}>
            {question.answer?.text && (
              <div className="text-[16px] font-semibold text-black">
                {question.text}
              </div>
            )}

            {question.answer?.text && (
              <MessageBubble
                text={question.answer.text}
                isEditing={
                  editingTarget?.type === "question" &&
                  editingTarget.id === question.id
                }
                editValue={editValue}
                copied={copiedIndex === `question-${question.id}`}
                onEditStart={() =>
                  startEditAnswer(question.id, question.answer.text)
                }
                onEditCancel={cancelEdit}
                onEditSubmit={() => submitAnswerEdit(question.id)}
                onEditChange={setEditValue}
                onCopy={() =>
                  handleCopy(question.answer.text, `question-${question.id}`)
                }
              />
            )}
          </div>
        ))}

        {/* Chat messages */}
        <div>
          <h3 className="text-[16px] font-semibold text-black">
            Welcome back! .. You can continue your work here...
          </h3>

          {chatSnapshot.chat.map((item) => (
            <div key={item.id} className="space-y-3 relative group">
              <MessageBubble
                text={item.user_reply.text}
                isEditing={
                  editingTarget?.type === "chat" && editingTarget.id === item.id
                }
                editValue={editValue}
                copied={copiedIndex === item.id}
                onEditStart={() => startEdit(item.id, item.user_reply.text)}
                onEditCancel={cancelEdit}
                onEditSubmit={submitEdit}
                onEditChange={setEditValue}
                onCopy={() => handleCopy(item.user_reply.text, item.id)}
              />

              <div className="flex gap-2 items-center text-[16px] font-semibold text-black">
                {item.ai_reply.loading ? <AiLoader /> : item.ai_reply.text}
              </div>
            </div>
          ))}
        </div>

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="bg-white sticky bottom-0 left-0 right-0 pl-6 pr-6 pb-6">
        <div className="relative">
          {showScrollBtn && (
            <button
              onClick={() =>
                bottomRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#F5F5FF] text-primary p-4 flex items-center justify-center size-11 rounded-full z-20"
            >
              ↓
            </button>
          )}
        </div>

        <div className={styles.chatBox}>
          <AiSuggestions />

          <div className={styles["chatBox__textarea-wrapper"]}>
            <Textarea
              className={styles.chatBox__textarea}
              placeholder={
                isAiResponding ? "AI is responding..." : "Type anything"
              }
              value={message}
              disabled={isAiResponding}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (isAiResponding) return;

                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendReply();
                }
              }}
            />

            <div className={styles.chatBox__footer}>
              <Button variant="ghost" size="sm" onClick={handleAttachClick}>
                <Paperclip className="w-3 h-4" />
                Attach
              </Button>

              <img
                src={assets.arrowUpBtn}
                className={`cursor-pointer transition-opacity ${
                  isAiResponding ? "opacity-40 pointer-events-none" : ""
                }`}
                onClick={sendReply}
                alt="Send"
              />
            </div>
          </div>
          <SelectedFiles fileInputRef={fileInputRef} />
        </div>
      </div>
    </div>
  );
};
