// src/dialogs/BuyDomain.tsx
import { assets } from "@/assets/assets";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDialog } from "@/dialogs/useDialog";
// import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link2Icon, Copy, Check } from "lucide-react";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

const ShareList = () => {
  const { activeDialog, closeDialog, copyToClipboard, isCopied } = useDialog();
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <Dialog
      open={activeDialog === "shareList"}
      onOpenChange={(open) => {
        if (!open) closeDialog();
      }}
    >
      <DialogContent className="flex flex-col gap-8 max-w-md!">
        <div className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </div>
        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#D1FADF] border-8 border-[#ECFDF3]">
          <img
            src={assets.checkCircle}
            alt="alert-triangle"
            className="h-5 w-5"
          />
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold leading-7 text-[18px] mb-2">
            Share list with friends
          </h3>
          <p className="text-gray-600 leading-5 text-[14px]">
            This list will be shared. Team members will be able to see this list
            and provide feedback.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Label
            htmlFor="domain"
            className="text-gray-700 font-medium leading-5 text-[14px]"
          >
            Link
          </Label>

          <ButtonGroup className="h-11">
            {/* protocol */}
            <ButtonGroupText className="border border-gray-300" asChild>
              <Label
                className="text-gray-500 text-[16px] leading-6"
                htmlFor="url"
              >
                https://
              </Label>
            </ButtonGroupText>

            {/* input */}
            <InputGroup className="h-11 border border-gray-300 ring-0 shadow-none outline-0">
              <InputGroupInput
                tabIndex={-1}
                onFocus={(e) => e.target.blur()}
                id="url"
                value={shareUrl.replace("https://", "")}
                readOnly
                className="bg-white focus-visible:ring-0! focus-visible:shadow-none! focus-visible:outline-0! ring-0! shadow-none! outline-0!"
              />
              <InputGroupAddon align="inline-end">
                <Link2Icon className="text-gray-400" />
              </InputGroupAddon>
            </InputGroup>

            {/* copy button */}
            <ButtonGroupText
              className="border border-gray-300 cursor-pointer"
              aria-label="Copy"
              title="Copy"
              onClick={() => copyToClipboard(shareUrl)}
            >
              {isCopied ? (
                <span className="flex items-center gap-2 text-[#6750A4]">
                  <Check /> Copied
                </span>
              ) : (
                <span className="flex items-center gap-2 text-[#6750A4]">
                  <Copy /> Copy
                </span>
              )}
            </ButtonGroupText>
          </ButtonGroup>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareList;
