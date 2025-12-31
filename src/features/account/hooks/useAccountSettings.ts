import { useEffect, useMemo, useState } from "react";
import { useSnapshot } from "valtio";
import { authStore } from "@/features/onboarding/state/auth.state";
import type { SerializableFile } from "@/models";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  country: string;
  timezone: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const NAME_REGEX = /^[A-Za-z\s]+$/;

export const useAccountSettings = (image?: SerializableFile | null) => {
  const MAX_CHARS = 275;
  const snapshot = useSnapshot(authStore.store);
  const userInfo = snapshot.user;

  const initialState: FormState = useMemo(
    () => ({
      firstName: userInfo?.first_name || "",
      lastName: userInfo?.last_name || "",
      email: userInfo?.email || "",
      bio: "",
      country: "",
      timezone: "",
    }),
    [userInfo]
  );

  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});

  /* -----------------------------
     Dirty detection
  ----------------------------- */
  const isDirty = useMemo(
    () => JSON.stringify(form) !== JSON.stringify(initialState),
    [form, initialState]
  );

  useEffect(() => {
    setForm(initialState);
    setErrors({});
  }, [initialState]);

  /* -----------------------------
     Validation
  ----------------------------- */
  const validateField = (key: keyof FormState, value: string) => {
    let error = "";

    if (key === "firstName" || key === "lastName") {
      if (!value.trim()) {
        error = "This field is required";
      } else if (!NAME_REGEX.test(value)) {
        error = "Only letters are allowed";
      }
    }

    setErrors((prev) => ({
      ...prev,
      [key]: error,
    }));

    return !error;
  };

  const validateForm = () => {
    const results = [
      validateField("firstName", form.firstName),
      validateField("lastName", form.lastName),
    ];

    return results.every(Boolean);
  };

  /* -----------------------------
     Handlers
  ----------------------------- */
  const handleChange = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));

    // live validation
    if (key === "firstName" || key === "lastName") {
      validateField(key, value);
    }
  };

  const handleCancel = () => {
    setForm(initialState);
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const payload = {
      ...form,
      image,
    };

    console.log("SUBMITTED DATA:", payload);
  };

  return {
    MAX_CHARS,
    form,
    errors,
    isDirty,
    userInfo,
    handleChange,
    handleCancel,
    handleSubmit,
  };
};
