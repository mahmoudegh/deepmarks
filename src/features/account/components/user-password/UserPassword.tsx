import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useAccountSettings } from "@/features/account/hooks";
import { useDialog } from "@/dialogs/useDialog";

const UserPassword = () => {
  const { userInfo } = useAccountSettings();
  const { openDialog } = useDialog();
  return (
    <form
      //   onSubmit={handleSubmit}
      className="flex flex-col gap-6"
    >
      {/* Header */}
      <div>
        <h3 className="text-gray-900 font-semibold text-[18px]">Password</h3>
        <p className="text-gray-600 text-sm">
          Update your password and security details here.
        </p>
      </div>

      <Separator className="bg-gray-200" />

      {/* Email */}
      <div className="grid grid-cols-3 gap-6 max-w-4xl">
        <div>
          <p className="text-gray-700 font-semibold text-sm leading-5">
            Email address
          </p>
        </div>
        <div className="lg:col-span-2 col-span-3">
          <Input
            disabled
            defaultValue={userInfo?.email}
            className="rounded-lg h-11 bg-white px-3.5 py-2.5 border-gray-400 ring-0! outline-0! text-gray-900 text-[16px] leading-6 shadow-[0px_1px_2px_0px_#0A0D120D]"
          />
          <Button
            onClick={() =>
              openDialog("createPassword", { type: "change_email_address" })
            }
            size={"lg"}
            type="button"
            className="mt-2 text-gray-700 text-[16px] font-semibold leading-6 rounded-lg bg-white py-2.5 px-4.5 border border-gray-300 cursor-pointer shadow-[0px_1px_2px_0px_#0A0D120D] hover:bg-white"
          >
            Change email address
          </Button>
        </div>
      </div>
      <Separator className="bg-gray-200" />

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <Button
          size={"lg"}
          type="button"
          className="text-gray-700 text-[16px] font-semibold leading-6 rounded-lg bg-white py-2.5 px-4.5 border border-gray-300 cursor-pointer shadow-[0px_1px_2px_0px_#0A0D120D] hover:bg-white"
        >
          Cancel
        </Button>
        <Button
          onClick={() =>
            openDialog("createPassword", { type: "send_password_link" })
          }
          type="button"
          size={"lg"}
          className="text-white text-[16px] font-semibold leading-6 rounded-lg bg-primary py-2.5 px-4.5 border border-gray-300 cursor-pointer shadow-[0px_1px_2px_0px_#0A0D120D] hover:bg-primary"
        >
          Send password link
        </Button>
      </div>
    </form>
  );
};

export default UserPassword;
