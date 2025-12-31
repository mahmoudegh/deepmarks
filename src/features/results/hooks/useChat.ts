import { useState, useRef, useEffect, useCallback } from "react";
import { useSnapshot } from "valtio";

import { useQuestion } from "@/features/onboarding/hooks";
import { useAnswer } from "@/features/onboarding/hooks";

import { questionsStore } from "@/features/onboarding/state/questions.state";
import { authStore } from "@/features/onboarding/state/auth.state";
import { chatStore } from "../state/chat.state";

import type { Chat } from "@/models/chat.model";

type EditingTarget =
  | { type: "question"; id: number }
  | { type: "chat"; id: string }
  | null;

export const useChat = () => {
  /* ------------------------------------------------------------------ */
  /* Snapshots */
  const chatSnap = useSnapshot(chatStore.store);
  const authSnap = useSnapshot(authStore.store);
  const questionsSnap = useSnapshot(questionsStore.store);

  /* ------------------------------------------------------------------ */
  /* Local state */
  const [copiedIndex, setCopiedIndex] = useState<string | number | null>(null);
  const [editingTarget, setEditingTarget] = useState<EditingTarget>(null);
  const [editValue, setEditValue] = useState("");
  const [isAiResponding, setIsAiResponding] = useState(false);
  const [message, setMessage] = useState("");
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  /* ------------------------------------------------------------------ */
  /* Refs */
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  /* ------------------------------------------------------------------ */
  /* External hooks */
  const { questions } = useQuestion();
  const { fileInputRef, handleAttachClick } = useAnswer();

  /* ------------------------------------------------------------------ */
  /* Init oldChat from questions (login only) */
  useEffect(() => {
    if (!authSnap.isLoggedIn) return;

    // Only initialize if oldChat is empty
    if (chatStore.store.oldChat.length === 0) {
      chatStore.store.oldChat = questionsSnap.questions.map((q) => ({
        id: q.id,
        text: q.text,
        answer: {
          text: q.answer.text,
          files: [...(q.answer.files ?? [])],
          suggestions: [...q.answer.suggestions],
        },
      }));
    }
  }, [authSnap.isLoggedIn, questionsSnap.questions]);

  /* ------------------------------------------------------------------ */
  /* Clipboard */
  const handleCopy = useCallback(async (text: string, key: string | number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(key);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch {
      // silent fail (same behavior)
    }
  }, []);

  /* ------------------------------------------------------------------ */
  /* Editing (Questions) */
  const startEditAnswer = useCallback((id: number, text: string) => {
    setEditingTarget({ type: "question", id });
    setEditValue(text);
  }, []);

  const updateAnswerText = useCallback((id: number, text: string) => {
    const item = chatStore.store.oldChat.find((q) => q.id === id);
    console.log("updateAnswerText item: ", item);
    if (!item) return;
    item.answer.text = text;
  }, []);

  const submitAnswerEdit = useCallback(
    (id: number) => {
      console.log("submitAnswerEdit id: ", id);
      console.log("submitAnswerEdit editValue: ", editValue);
      updateAnswerText(id, editValue);
      setEditingTarget(null);
      setEditValue("");
    },
    [editValue, updateAnswerText]
  );

  /* ------------------------------------------------------------------ */
  /* Editing (Chat) */
  const startEdit = useCallback((id: string, text: string) => {
    setEditingTarget({ type: "chat", id });
    setEditValue(text);
  }, []);

  const updateChatMessage = useCallback((id: string, text: string) => {
    const item = chatStore.store.chat.find((c) => c.id === id);
    if (!item) return;
    item.user_reply.text = text;
  }, []);

  const submitEdit = useCallback(() => {
    if (!editingTarget || editingTarget.type !== "chat") return;
    updateChatMessage(editingTarget.id, editValue);
    setEditingTarget(null);
    setEditValue("");
  }, [editingTarget, editValue, updateChatMessage]);

  const cancelEdit = useCallback(() => {
    setEditingTarget(null);
    setEditValue("");
  }, []);

  /* ------------------------------------------------------------------ */
  /* Send message */
  const sendReply = useCallback(() => {
    if (!message.trim() || isAiResponding) return;

    const counter = chatSnap.chat.length + 1;

    const newChatItem: Chat = {
      id: crypto.randomUUID(),
      user_reply: { text: message },
      ai_reply: { text: "", loading: true },
    };

    chatStore.store.chat.push(newChatItem);
    setMessage("");
    setIsAiResponding(true);

    setTimeout(() => {
      const last = chatStore.store.chat.at(-1);
      if (!last) return;

      last.ai_reply = {
        text: `${String(counter).padStart(2, "0")}__ this is static reply`,
        loading: false,
      };

      setIsAiResponding(false);
    }, 1000);
  }, [message, isAiResponding, chatSnap.chat.length]);

  /* ------------------------------------------------------------------ */
  return {
    showScrollBtn,
    setShowScrollBtn,
    message,
    setMessage,
    isAiResponding,
    setIsAiResponding,
    chat: chatSnap.chat,
    oldChat: chatSnap.oldChat,
    copiedIndex,
    editingTarget,
    setEditValue,
    editValue,
    handleCopy,
    submitAnswerEdit,
    startEditAnswer,
    cancelEdit,
    startEdit,
    submitEdit,
    sendReply,
    bottomRef,
    questions,
    fileInputRef,
    handleAttachClick,
    messagesRef,
  };
};
