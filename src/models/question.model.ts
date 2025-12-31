import type { AnswerModel } from "./answer.model.ts";

export type Question = {
  id: number;
  text: string;
  answer: AnswerModel;
  description: string;
  suggestions: Array<{ title: string; desc: string }>;
  ai_help: {
    video_link: string;
    why_matters: string;
    image_link: string;
    example: string;
    resources: Array<{
      text: string;
      link: string;
    }>;
  };
};
