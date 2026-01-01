// src/dialogs/BuyDomain.tsx
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDialog } from "@/dialogs/useDialog";

const DidYouBuy = () => {
  const { activeDialog, closeDialog, openDialog, dialogData } = useDialog();

  return (
    <Dialog
      open={activeDialog === "didYouBuy"}
      onOpenChange={(open) => {
        if (!open) closeDialog();
      }}
    >
      <DialogContent className="flex flex-col gap-8 min-w-xl!">
        <div className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </div>
        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-100 border-8 border-gray-50">
          <img src={assets.help} alt="alert-triangle" className="h-5 w-5" />
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold leading-7 text-[18px]">
            {`Did you buy a domain for ${dialogData}?`}
          </h3>
          <p className="text-gray-600 leading-5 text-[14px]">
            If you’ve purchased any relevant domains to this name, click yes
          </p>
        </div>

        {/* actions */}
        <div className="flex justify-end items-center">
          <div className="flex items-center justify-between gap-2">
            <Button
              onClick={closeDialog}
              className="text-gray-700 text-[16px] font-semibold leading-6 rounded-lg bg-white py-2.5 px-[18px] border border-gray-300 cursor-pointer shadow-[0px_1px_2px_0px_#0A0D120D] hover:bg-white"
              size={"lg"}
            >
              No, Need more time
            </Button>
            <Button
              onClick={() => {
                closeDialog();
                openDialog("enterDomain", dialogData);
              }}
              className="text-white text-[16px] font-semibold leading-6 rounded-lg bg-primary py-2.5 px-[18px] border border-gray-300 cursor-pointer shadow-[0px_1px_2px_0px_#0A0D120D] hover:bg-primary"
              size={"lg"}
            >
              Yes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DidYouBuy;
