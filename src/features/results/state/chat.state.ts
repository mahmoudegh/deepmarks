import type { Chat, OldChatItem } from "@/models/chat.model";
import { persist } from "valtio-persist";
import { IndexedDBStrategy } from "valtio-persist/indexed-db";

export type ChatState = {
  chat: Chat[];
  oldChat: OldChatItem[];
};

const initialState: ChatState = {
  chat: [],
  oldChat: [],
};

export const chatStore = await persist<ChatState>(initialState, "chat", {
  storageStrategy: IndexedDBStrategy,
});
