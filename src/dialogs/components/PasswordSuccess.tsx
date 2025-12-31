import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDialog } from "@/dialogs/useDialog";
import { CircleCheckBig } from "lucide-react";
import { useLogin } from "@/features/onboarding/hooks/useLogin";

export const PasswordSuccess = () => {
  const { activeDialog, closeDialog } = useDialog();
  const { logout } = useLogin();
  return (
    <Dialog
      open={activeDialog === "passwordSuccess"}
      onOpenChange={(open) => {
        if (!open) {
          closeDialog();
          logout();
        }
      }}
    >
      <DialogContent className="flex flex-col gap-8 max-w-md! ">
        <div className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="h-12 w-12 flex items-center justify-center border-8 border-[#ECFDF3] bg-[#D1FADF] rounded-full">
            <CircleCheckBig className="text-[#039855] h-5! w-5!" />
          </div>
          <h3 className="text-gray-900 text-[18px] font-semibold leading-7">
            Password changed successfully
          </h3>
          <p className="text-gray-600 text-sm leading-5 text-center">
            Your password has now been updated, you can now login using your new
            password
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
