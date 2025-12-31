import { type FC, type RefObject } from "react";
import { useUploadedImage } from "@/features/account/hooks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CloudUpload } from "lucide-react";

type UploadedImageProps = {
  fileInputRef: RefObject<HTMLInputElement | null>;
  loginImage: string | "" | undefined;
  fallBack: string | "" | undefined;
};

export const UploadedImage: FC<UploadedImageProps> = ({
  fileInputRef,
  loginImage,
  fallBack,
}) => {
  const { imageSrc, removeImage, handleFileChange, error } = useUploadedImage();

  return (
    <>
      <div className="relative w-fit">
        <Avatar
          className="h-16 w-16 cursor-pointer transition"
          onClick={() => fileInputRef.current?.click()}
        >
          <AvatarImage src={!imageSrc ? loginImage : imageSrc} />
          <AvatarFallback className="bg-primary text-white">
            {(fallBack ?? "")
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </AvatarFallback>
        </Avatar>

        {/* Upload logic */}
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept="image/svg+xml,image/png,image/jpeg,image/jpg,image/gif"
        />

        {/* Remove button */}
        {imageSrc && (
          <button
            onClick={removeImage}
            className="absolute -top-1 -right-1 bg-black text-white cursor-pointer rounded-full h-5 w-5 flex items-center justify-center text-xs"
          >
            ✕
          </button>
        )}
      </div>
      <div className="w-full">
        <div className="gap-3 flex items-center justify-center flex-col h-32 flex-1 rounded-lg bg-white px-3.5 py-2.5 border-gray-400 ring-0! outline-0! text-gray-900 text-[16px] leading-6 shadow-[0px_1px_2px_0px_#0A0D120D] border text-center">
          <div className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 border-6 border-gray-50">
            <CloudUpload className="h-5! w-5! text-gray-600" />
          </div>
          <p className="text-sm font-normal leading-5 text-gray-600">
            <span
              onClick={() => fileInputRef.current?.click()}
              className="text-primary font-semibold cursor-pointer"
            >
              Click to upload
            </span>{" "}
            or drag and drop
            <br />
            SVG, PNG, JPG or GIF (max. 800×400px)
          </p>
        </div>
        {error && (
          <p className="mt-1 text-xs text-red-600 italic font-light">{error}</p>
        )}
      </div>
    </>
  );
};
