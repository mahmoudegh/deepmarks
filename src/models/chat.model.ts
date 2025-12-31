import type { AnswerModel } from "./answer.model.ts";

export type OldChatItem = {
  id: number;
  text: string;
  answer: AnswerModel;
};

export type Chat = {
  id: string;
  old_chat?: OldChatItem[];
  ai_reply: {
    text: string;
    loading?: boolean;
  };
  user_reply: {
    text: string;
  };
};
