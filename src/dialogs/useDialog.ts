// import { useSnapshot } from "valtio";
// import { useCallback, useState } from "react";
// import {
//   dialogsStore,
//   type DialogName,
//   type DialogData,
// } from "./dialogs.state";

// export const useDialog = () => {
//   const snap = useSnapshot(dialogsStore);

//   /* =======================
//      Dialog logic
//   ======================= */

//   const openDialog = <N extends DialogName>(name: N, data?: DialogData<N>) => {
//     dialogsStore.activeDialog = name;
//     dialogsStore.dialogData = data ?? null;
//   };

//   const closeDialog = () => {
//     dialogsStore.activeDialog = null;
//     dialogsStore.dialogData = null;
//   };

//   /* =======================
//      Copy to clipboard logic
//   ======================= */

//   const [isCopied, setIsCopied] = useState(false);

//   const copyToClipboard = useCallback(async (text: string) => {
//     try {
//       await navigator.clipboard.writeText(text);
//       setIsCopied(true);

//       setTimeout(() => {
//         setIsCopied(false);
//       }, 1500);
//     } catch (error) {
//       console.error("Copy failed:", error);
//       setIsCopied(false);
//     }
//   }, []);

//   return {
//     // dialog
//     activeDialog: snap.activeDialog,
//     dialogData: snap.dialogData,
//     openDialog,
//     closeDialog,

//     // clipboard
//     copyToClipboard,
//     isCopied,
//   };
// };

import { useSnapshot } from "valtio";
import { useCallback, useState } from "react";
import {
  dialogsStore,
  type DialogName,
  type DialogData,
} from "./dialogs.state";

export const useDialog = () => {
  const snap = useSnapshot(dialogsStore);

  /* =======================
     Dialog logic
  ======================= */

  const openDialog = (name: DialogName, data?: DialogData) => {
    dialogsStore.activeDialog = name;
    dialogsStore.dialogData = data ?? null;
  };

  const closeDialog = () => {
    dialogsStore.activeDialog = null;
    dialogsStore.dialogData = null;
  };

  /* =======================
     Copy to clipboard logic
  ======================= */

  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Copy failed:", error);
      setIsCopied(false);
    }
  }, []);

  return {
    // dialog
    activeDialog: snap.activeDialog,
    dialogData: snap.dialogData,
    openDialog,
    closeDialog,

    // clipboard
    copyToClipboard,
    isCopied,
  };
};
