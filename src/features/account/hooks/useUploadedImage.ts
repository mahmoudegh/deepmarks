import { useSnapshot } from "valtio";
import { type ChangeEvent, useEffect, useState, useRef } from "react";
import { accountStore } from "@/features/account/state/account.state";
import type { SerializableFile } from "@/models";

/* ----------------------------------
   Constants
---------------------------------- */

const ALLOWED_TYPES = [
  "image/svg+xml",
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/gif",
];

const MAX_WIDTH = 800;
const MAX_HEIGHT = 400;

/* ----------------------------------
   Helpers
---------------------------------- */

// File -> base64
const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

// base64 -> Blob
const base64ToBlob = (base64: string): Blob => {
  const arr = base64.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1] || "";
  const bstr = atob(arr[1]);
  const u8arr = new Uint8Array(bstr.length);

  for (let i = 0; i < bstr.length; i++) {
    u8arr[i] = bstr.charCodeAt(i);
  }

  return new Blob([u8arr], { type: mime });
};

// File -> SerializableFile
const fileToSerializable = async (file: File): Promise<SerializableFile> => {
  const data = await fileToBase64(file);

  return {
    name: file.name,
    type: file.type,
    size: file.size,
    lastModified: file.lastModified,
    data,
  };
};

// SerializableFile -> File (لو احتجته)
export const serializableToFile = (serializable: SerializableFile): File => {
  const blob = base64ToBlob(serializable.data);
  return new File([blob], serializable.name, {
    type: serializable.type,
    lastModified: serializable.lastModified,
  });
};

// Validate image dimensions
const validateImageDimensions = (file: File): Promise<boolean> =>
  new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img.width <= MAX_WIDTH && img.height <= MAX_HEIGHT);
    };

    img.onerror = () => resolve(false);
    img.src = url;
  });

/* ----------------------------------
   Hook
---------------------------------- */

export const useUploadedImage = () => {
  const { image } = useSnapshot(accountStore.store);
  const [preview, setPreview] = useState<string | undefined>();
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /* ----------------------------------
     Load preview from store
  ---------------------------------- */
  useEffect(() => {
    if (image?.type.startsWith("image/")) {
      setPreview(image.data);
    } else {
      setPreview(undefined);
    }
  }, [image]);

  /* ----------------------------------
     Handle Upload (ONE IMAGE ONLY)
  ---------------------------------- */
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;

      // ❌ type validation
      if (!ALLOWED_TYPES.includes(file.type)) {
        console.warn("Invalid file type");
        e.target.value = "";
        return;
      }

      // ❌ dimension validation
      const isValidDimensions = await validateImageDimensions(file);

      if (!isValidDimensions) {
        console.warn("Image exceeds 800x400");
        setError("Image must be at most 800×400 pixels.");
        e.target.value = "";
        return;
      }

      const serializableFile = await fileToSerializable(file);

      // ✅ clear error
      setError(null);

      // ✅ save ONE image
      accountStore.store.image = serializableFile;

      // ✅ preview
      setPreview(serializableFile.data);

      e.target.value = "";
    } catch (error) {
      console.error(error);
    }
  };

  /* ----------------------------------
     Remove Image
  ---------------------------------- */
  const removeImage = () => {
    accountStore.store.image = null;
    setPreview(undefined);
    setError(null);
  };

  return {
    image, // SerializableFile | null
    imageSrc: preview,
    handleFileChange,
    removeImage,
    error,
    fileInputRef,
  };
};
