import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDialog } from "@/dialogs/useDialog";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useAccountSettings } from "@/features/account/hooks";
import { usePassword } from "@/features/account/hooks/usePassword";
import { useEffect } from "react";

const CreatePassword = () => {
  const { activeDialog, closeDialog, dialogData, openDialog } = useDialog();
  const { userInfo } = useAccountSettings();

  const {
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
  } = usePassword();

  /* -----------------------------
     Init email on dialog open
  ----------------------------- */
  useEffect(() => {
    if (activeDialog === "createPassword" && userInfo?.email) {
      setInitialEmail(userInfo.email);
    }
  }, [activeDialog]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const shouldValidateEmail = dialogData?.type !== "send_password_link";

    if (!validateForm(shouldValidateEmail)) return;

    console.log("CHANGE PASSWORD PAYLOAD:", {
      email,
      password,
    });

    closeDialog();
    resetPasswords();
    openDialog("passwordSuccess");
  };

  return (
    <Dialog
      open={activeDialog === "createPassword"}
      onOpenChange={(open) => {
        if (!open) {
          closeDialog();
          resetPasswords();
        }
      }}
    >
      <DialogContent className="flex flex-col gap-8 max-w-md!">
        <div className="hidden">
          <DialogTitle />
          <DialogDescription />
        </div>

        {/* Head */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="bg-[#F4EBFF] border-8 border-[#F9F5FF] rounded-full h-11.5 w-11.5 flex items-center justify-center">
            <Lock className="text-primary w-6! h-6!" />
          </div>
          <h3 className="text-gray-900 text-[18px] font-semibold leading-7">
            Create new password
          </h3>
          <p className="text-gray-600 text-sm leading-5">
            Enter your password to make this change.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Email */}
          <div>
            <Label className="text-gray-700 font-medium text-sm leading-5 mb-1">
              Email address
            </Label>

            <Input
              disabled={dialogData?.type === "send_password_link"}
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              className={`rounded-lg h-11 bg-white px-3.5 py-2.5  ring-0! outline-0! text-gray-900 text-[16px] leading-6 shadow-[0px_1px_2px_0px_#0A0D120D] ${
                errors.email ? "border-red-600" : "border-gray-400"
              }`}
            />

            {errors.email && (
              <p className="text-xs italic text-red-600 mt-0.5">
                {errors.email}
              </p>
            )}
          </div>

          {/* New password */}
          <div>
            <Label className="text-gray-700 font-medium text-sm leading-5 mb-1">
              New password
            </Label>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  const value = e.target.value;
                  handlePasswordChange(value);
                  if (!value) setShowPassword(false);
                }}
                className={`rounded-lg h-11 bg-white px-3.5 py-2.5  ring-0! outline-0! text-gray-900 text-[16px] leading-6 shadow-[0px_1px_2px_0px_#0A0D120D] ${
                  errors.password ? "border-red-600" : "border-gray-400"
                }`}
              />

              <button
                type="button"
                disabled={!password}
                onClick={() => setShowPassword((v) => !v)}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                  !password
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-500"
                }`}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-xs italic text-red-600 mt-0.5">
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm password */}
          <div>
            <Label className="text-gray-700 font-medium text-sm leading-5 mb-1">
              Confirm new password
            </Label>

            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => {
                  const value = e.target.value;
                  handleConfirmPasswordChange(value);
                  if (!value) setShowConfirmPassword(false);
                }}
                className={`rounded-lg h-11 bg-white px-3.5 py-2.5  ring-0! outline-0! text-gray-900 text-[16px] leading-6 shadow-[0px_1px_2px_0px_#0A0D120D] ${
                  errors.confirmPassword ? "border-red-600" : "border-gray-400"
                }`}
              />

              <button
                type="button"
                disabled={!confirmPassword}
                onClick={() => setShowConfirmPassword((v) => !v)}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                  !confirmPassword
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-500"
                }`}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {errors.confirmPassword && (
              <p className="text-xs italic text-red-600 mt-0.5">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-between gap-3 mt-2">
            <Button
              type="button"
              onClick={() => {
                closeDialog();
                resetPasswords();
              }}
              size={"lg"}
              className="text-center w-1/2 text-gray-700 text-[16px] font-semibold leading-6 rounded-lg bg-white py-2.5 px-4.5 border border-gray-300 cursor-pointer shadow-[0px_1px_2px_0px_#0A0D120D] hover:bg-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size={"lg"}
              className="text-center w-1/2 text-white text-[16px] font-semibold leading-6 rounded-lg bg-primary py-2.5 px-4.5 border border-gray-300 cursor-pointer shadow-[0px_1px_2px_0px_#0A0D120D] hover:bg-primary"
            >
              Change password
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePassword;
