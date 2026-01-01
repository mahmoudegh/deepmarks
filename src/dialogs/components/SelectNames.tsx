import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDialog } from "@/dialogs/useDialog";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

type DialogItem = {
  id: string | number;
  isFavName: boolean;
  domain_name: string;
  label: string;
};

const SelectNames = () => {
  const { activeDialog, closeDialog, openDialog, dialogData } = useDialog();

  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

  const toggleSelect = (id: string | number, checked: boolean) => {
    setSelectedIds((prev) =>
      checked ? [...prev, id] : prev.filter((itemId) => itemId !== id)
    );
  };

  const items: DialogItem[] = Array.isArray(dialogData)
    ? (dialogData as DialogItem[])
    : [];

  return (
    <Dialog
      open={activeDialog === "selectNames"}
      onOpenChange={(open) => {
        if (!open) closeDialog();
      }}
    >
      <DialogContent className="flex flex-col gap-8 max-w-md!">
        <div className="hidden">
          <DialogTitle>Select Names</DialogTitle>
          <DialogDescription>Select names to share</DialogDescription>
        </div>

        <div className="max-h-[375px] overflow-y-auto no-scrollbar flex flex-col gap-4 pb-2 bg-white">
          {items
            .filter((item) => item.isFavName)
            .map((item) => (
              <Label
                key={item.id}
                className="cursor-pointer h-[72px] flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4
                has-aria-checked:border-[#D6BBFB] has-aria-checked:bg-[#F9F5FF]"
              >
                <div className="grid gap-1.5">
                  <p className="text-gray-700 has-[data-state=checked]:text-[#53389E] text-sm font-medium">
                    {item.domain_name}
                  </p>
                  <p className="text-gray-600 has-[data-state=checked]:text-[#7F56D9] text-sm">
                    {item.label}
                  </p>
                </div>

                <Checkbox
                  checked={selectedIds.includes(item.id)}
                  onCheckedChange={(checked) =>
                    toggleSelect(item.id, Boolean(checked))
                  }
                  className="rounded-full border-gray-300 bg-white h-4 w-4
                  data-[state=checked]:border-[#7F56D9]
                  data-[state=checked]:bg-[#7F56D9]
                  data-[state=checked]:text-white"
                />
              </Label>
            ))}
        </div>

        <div className="flex items-center justify-between gap-2">
          <Button
            onClick={closeDialog}
            className="w-1/2 text-gray-700 text-[16px] font-semibold leading-6 rounded-lg bg-white py-2.5 px-[18px] border border-gray-300"
            size="lg"
          >
            Cancel
          </Button>

          <Button
            disabled={selectedIds.length === 0}
            onClick={() => {
              closeDialog();
              openDialog("shareList", selectedIds);
            }}
            className="w-1/2 text-white text-[16px] font-semibold leading-6 rounded-lg py-2.5 px-[18px]
            bg-primary disabled:opacity-50 disabled:cursor-not-allowed"
            size="lg"
          >
            Share
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SelectNames;
