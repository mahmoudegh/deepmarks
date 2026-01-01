// // import { proxy } from "valtio";

// // export type DialogName =
// //   | "buyDomain"
// //   | "generateSimilar"
// //   | "shareName"
// //   | "didYouBuy"
// //   | "enterDomain"
// //   | "selectNames"
// //   | "shareList"
// //   | "createPassword"
// //   | "passwordSuccess"
// //   | null;

// // // eslint-disable-next-line @typescript-eslint/no-explicit-any
// // export type DialogData = Record<string, any> | null;

// // export const dialogsStore = proxy<{
// //   activeDialog: DialogName;
// //   dialogData: DialogData;
// // }>({
// //   activeDialog: null,
// //   dialogData: null,
// // });

// import { proxy } from "valtio";

// /* =======================
//    Dialog-specific types
// ======================= */

// export type DialogItem = {
//   id: string | number;
//   isFavName: boolean;
//   domain_name: string;
//   label: string;
// };

// /* =======================
//    Dialog → Data mapping
// ======================= */

// export type DialogDataMap = {
//   buyDomain: { domain: string | null };
//   generateSimilar: { domainId: string | number };
//   shareName: { name: string };
//   didYouBuy: object | null;
//   enterDomain: object | null;
//   selectNames: DialogItem[];
//   shareList: (string | number)[];
//   createPassword: {
//     email: string;
//     type: string;
//   };
//   passwordSuccess: null;
// };

// /* =======================
//    Dialog name
// ======================= */

// export type DialogName = keyof DialogDataMap | null;

// /* =======================
//    Dialog data (typed)
// ======================= */

// export type DialogData<N extends DialogName = DialogName> =
//   N extends keyof DialogDataMap ? DialogDataMap[N] : null;

// /* =======================
//    Store
// ======================= */

// export const dialogsStore = proxy<{
//   activeDialog: DialogName;
//   dialogData: DialogData;
// }>({
//   activeDialog: null,
//   dialogData: null,
// });

import { proxy } from "valtio";

/* =======================
   Dialog name
======================= */

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

/* =======================
   Dialog data
   Accepts any type now
======================= */

export type DialogData = unknown | null;

/* =======================
   Store
======================= */

export const dialogsStore = proxy<{
  activeDialog: DialogName;
  dialogData: DialogData;
}>({
  activeDialog: null,
  dialogData: null,
});
