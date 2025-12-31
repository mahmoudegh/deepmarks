import { useSnapshot } from "valtio";
import { type ChangeEvent, useState, useEffect } from "react";
import { questionsStore } from "@/features/onboarding/state/questions.state.ts";
import type { SerializableFile } from "@/models";

// Helper: Convert File to base64
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// Helper: Convert base64 to Blob
const base64ToBlob = (base64: string): Blob => {
  const arr = base64.split(",");
  const mime = arr[0].match(/:(.*?);/)?.[1] || "";
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

// Helper: Convert File to SerializableFile
const fileToSerializable = async (file: File): Promise<SerializableFile> => {
  const base64Data = await fileToBase64(file);
  return {
    name: file.name,
    type: file.type,
    size: file.size,
    lastModified: file.lastModified,
    data: base64Data,
  };
};

// Helper: Convert SerializableFile to File
const serializableToFile = (serializableFile: SerializableFile): File => {
  const blob = base64ToBlob(serializableFile.data);
  return new File([blob], serializableFile.name, {
    type: serializableFile.type,
    lastModified: serializableFile.lastModified,
  });
};

export const useSelectedFiles = () => {
  const { questions, activeQuestion } = useSnapshot(questionsStore.store);
  const [previews, setPreviews] = useState<{ [key: string]: string }>({});
  const serializableFiles = questions[activeQuestion - 1].answer.files;

  // Convert SerializableFile[] to File[] for component use
  const files = serializableFiles?.map(serializableToFile) || [];

  // console.log("questions", questions);

  // Generate previews on mount for existing files (use base64 data directly)
  useEffect(() => {
    serializableFiles?.forEach((serializableFile) => {
      if (
        serializableFile.type.startsWith("image/") &&
        !previews[serializableFile.name]
      ) {
        // For images, we can use the base64 data directly as preview
        setPreviews((prev) => ({
          ...prev,
          [serializableFile.name]: serializableFile.data,
        }));
      }
    });
  }, [serializableFiles]);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      const newFiles = Array.from(e.target.files || []);
      if (newFiles.length === 0) return;

      const currentQuestionFiles =
        questionsStore.store.questions[activeQuestion - 1].answer.files || [];

      // Convert File objects to SerializableFile
      const serializableFiles = await Promise.all(
        newFiles.map((file) => fileToSerializable(file))
      );

      // Store SerializableFile objects
      questionsStore.store.questions[activeQuestion - 1].answer.files = [
        ...currentQuestionFiles,
        ...serializableFiles,
      ];

      // Generate previews (reuse base64 data we already have)
      serializableFiles.forEach((serializableFile) => {
        if (serializableFile.type.startsWith("image/")) {
          setPreviews((prev) => ({
            ...prev,
            [serializableFile.name]: serializableFile.data,
          }));
        }
      });

      e.target.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  const removeFile = (fileName: string) => {
    const currentQuestion = questionsStore.store.questions[activeQuestion - 1];

    currentQuestion.answer.files = currentQuestion.answer.files?.filter(
      (file) => file.name !== fileName
    );

    setPreviews((prev) => {
      const newPreviews = { ...prev };
      delete newPreviews[fileName];
      return newPreviews;
    });
  };

  return {
    files,
    previews,
    removeFile,
    handleFileChange,
  };
};
