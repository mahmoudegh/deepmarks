// src/dialogs/BuyDomain.tsx
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useDialog } from "@/dialogs/useDialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { DialogDescription } from "@radix-ui/react-dialog";

const BuyDomain = () => {
  const { activeDialog, closeDialog, openDialog, dialogData } = useDialog();

  return (
    <Dialog
      open={activeDialog === "buyDomain"}
      onOpenChange={(open) => {
        if (!open) closeDialog();
      }}
    >
      <DialogContent className="flex flex-col gap-8 min-w-xl!">
        <div className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </div>
        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#FEF0C7] border-8 border-[#FFFAEB]">
          <img src={assets.alertTriangle} alt="alert-triangle" />
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold leading-7 text-[18px]">
            You’re about to leave this page and open a new tab
          </h3>
          <p className="text-gray-600 leading-5 text-[14px]">
            Do you want to save or discard changes?
          </p>
        </div>

        {/* actions */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Checkbox
              id="not_show_again"
              className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700 rounded-sm border border-gray-300"
            />
            <Label
              htmlFor="not_show_again"
              className="text-gray-700 font-medium leading-5 text-[14px]"
            >
              Don’t show again
            </Label>
          </div>
          <div className="flex items-center justify-between gap-2">
            <Button
              onClick={closeDialog}
              className="text-gray-700 text-[16px] font-semibold leading-6 rounded-lg bg-white py-2.5 px-[18px] border border-gray-300 cursor-pointer shadow-[0px_1px_2px_0px_#0A0D120D] hover:bg-white"
              size={"lg"}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                closeDialog();
                window.open(
                  "https://www.namecheap.com/",
                  "_blank",
                  "noopener,noreferrer"
                );
                openDialog("didYouBuy", dialogData);
              }}
              className="text-white text-[16px] font-semibold leading-6 rounded-lg bg-primary py-2.5 px-[18px] border border-gray-300 cursor-pointer shadow-[0px_1px_2px_0px_#0A0D120D] hover:bg-primary"
              size={"lg"}
            >
              Yes, go to domain
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BuyDomain;
