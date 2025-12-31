import { proxy } from "valtio";

export type DialogName =
  | "buyDomain"
  | "generateSimilar"
  | "shareName"
  | "didYouBuy"
  | "enterDomain"
  | "selectNames"
  | "shareList"
  | "createPassword"
  | "passwordSuccess"
  | null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DialogData = Record<string, any> | null;

export const dialogsStore = proxy<{
  activeDialog: DialogName;
  dialogData: DialogData;
}>({
  activeDialog: null,
  dialogData: null,
});
