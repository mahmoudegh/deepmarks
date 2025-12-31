import { useState } from "react";

const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const usePassword = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  /* -----------------------------
     Validation
  ----------------------------- */
  const validateEmail = (value: string) => {
    if (!value) return "Email is required";
    if (!EMAIL_REGEX.test(value)) return "Invalid email address";
    return "";
  };

  const validatePassword = (value: string) => {
    if (!value) return "Password is required";
    if (!PASSWORD_REGEX.test(value)) {
      return "Min 8 chars, 1 uppercase letter & 1 number";
    }
    return "";
  };

  const validateConfirmPassword = (value: string) => {
    if (!value) return "Confirm password is required";
    if (value !== password) return "Passwords do not match";
    return "";
  };

  /* -----------------------------
     Handlers
  ----------------------------- */
  const handleEmailChange = (value: string) => {
    setEmail(value);
    setErrors((prev) => ({
      ...prev,
      email: validateEmail(value),
    }));
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setErrors((prev) => ({
      ...prev,
      password: validatePassword(value),
    }));
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    setErrors((prev) => ({
      ...prev,
      confirmPassword: validateConfirmPassword(value),
    }));
  };

  /* -----------------------------
     Form validation
  ----------------------------- */
  const validateForm = (validateEmailField: boolean) => {
    const emailError = validateEmailField ? validateEmail(email) : "";
    const passwordError = validatePassword(password);
    const confirmError = validateConfirmPassword(confirmPassword);

    setErrors({
      email: emailError,
      password: passwordError,
      confirmPassword: confirmError,
    });

    return !emailError && !passwordError && !confirmError;
  };

  /* -----------------------------
     Reset
  ----------------------------- */
  const resetPasswords = () => {
    setPassword("");
    setConfirmPassword("");
    setErrors({});
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const setInitialEmail = (value: string) => {
    setEmail(value);
  };

  return {
    email,
    password,
    confirmPassword,
    errors,

    showPassword,
    showConfirmPassword,

    setShowPassword,
    setShowConfirmPassword,

    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,

    validateForm,
    resetPasswords,
    setInitialEmail,
  };
};
