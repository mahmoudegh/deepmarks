import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Pencil, Copy, Check } from "lucide-react";

interface MessageBubbleProps {
  text: string;
  isEditing: boolean;
  editValue: string;
  copied: boolean;
  onEditStart: () => void;
  onEditCancel: () => void;
  onEditSubmit: () => void;
  onEditChange: (v: string) => void;
  onCopy: () => void;
}

export const MessageBubble = ({
  text,
  isEditing,
  editValue,
  copied,
  onEditStart,
  onEditCancel,
  onEditSubmit,
  onEditChange,
  onCopy,
}: MessageBubbleProps) => {
  return (
    <div
      className={`${
        isEditing &&
        "p-3 bg-gray-50 w-full max-w-full border-[0.5px] border-[#DCDCDC] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] overflow-hidden"
      } relative group ml-auto w-fit max-w-3/4 space-y-2 mt-5 `}
    >
      {isEditing ? (
        <>
          <Textarea
            value={editValue}
            onChange={(e) => onEditChange(e.target.value)}
            autoFocus
            className="focus-visible:ring-0 resize-none border-0 bg-transparent shadow-none p-0"
          />

          <div className="flex gap-2 justify-end">
            <Button
              className="rounded-full bg-white text-black cursor-pointer border-[0.5px] border-[#DCDCDC] "
              size="sm"
              variant="ghost"
              onClick={onEditCancel}
            >
              Cancel
            </Button>
            <Button
              className="rounded-full bg-primary text-white cursor-pointer"
              size="sm"
              onClick={onEditSubmit}
            >
              Send
            </Button>
          </div>
        </>
      ) : (
        <div className="text-[14px] leading-5 rounded-2xl p-5 bg-gray-50 wrap-break-word">
          {text}
        </div>
      )}

      {!isEditing && (
        <div
          className="
            flex gap-3 text-xs text-gray-500 justify-end
            opacity-0 group-hover:opacity-100
            translate-y-1 group-hover:translate-y-0
            transition-all duration-150
          "
        >
          <button
            onClick={onEditStart}
            className="flex items-center gap-1 hover:text-black cursor-pointer"
          >
            <Pencil className="w-3 h-3 " />
            Edit
          </button>

          <button
            onClick={onCopy}
            className="flex items-center gap-1 hover:text-black cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-green-600" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                Copy
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
