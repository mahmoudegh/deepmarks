import type { SerializableFile } from "./file.model.ts";

export type AnswerModel = {
  text: string; // ONLY textarea text
  suggestions: string[];
  files?: SerializableFile[];
};
