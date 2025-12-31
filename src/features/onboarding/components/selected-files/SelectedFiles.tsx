import { File, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { type FC, type RefObject } from "react";
import { useSelectedFiles } from "@/features/onboarding/hooks";

type SelectedFileProps = {
  fileInputRef: RefObject<HTMLInputElement | null>;
};

export const SelectedFiles: FC<SelectedFileProps> = ({ fileInputRef }) => {
  const { files, previews, removeFile, handleFileChange } = useSelectedFiles();
  // console.log("files", files);

  const getFileIcon = (file: File) => {
    if (file?.type === "application/pdf") {
      return <FileText className="h-4 w-4 text-red-500" />;
    }
    return <File className="h-4 w-4 text-gray-500" />;
  };
  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={handleFileChange}
        multiple
        accept="image/*,.pdf"
      />
      {files && files.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4 pl-7 pb-3">
          {files.map((file, index) => (
            <div key={index} className="relative group">
              {file?.type?.startsWith("image/") ? (
                // Image preview
                <div className="relative">
                  <img
                    src={previews[file?.name]}
                    alt={file?.name}
                    className="h-20 w-20 object-cover rounded-lg border"
                  />
                  <Button
                    size="icon"
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-6 w-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-white cursor-pointer bg-gray-500"
                    onClick={() => removeFile(file?.name)}
                  >
                    <X className="h-3 w-3 text-black" />
                  </Button>
                </div>
              ) : (
                // File name for PDFs and other files
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg border group-hover:bg-gray-100 transition-colors">
                  {getFileIcon(file)}
                  <span className="text-sm max-w-[150px] truncate">
                    {file?.name}
                  </span>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-5 w-5 ml-1"
                    onClick={() => removeFile(file?.name)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
