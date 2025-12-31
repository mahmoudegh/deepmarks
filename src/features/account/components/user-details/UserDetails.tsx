import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useAccountSettings } from "@/features/account/hooks";
import { useUploadedImage } from "@/features/account/hooks";
import { UploadedImage } from "./UploadedImage";
import CountrySelect from "./CountrySelect";
import TimeZoneSelect from "./TimeZoneSelect";

const UserDetails = () => {
  const { fileInputRef, image } = useUploadedImage();
  const {
    MAX_CHARS,
    form,
    isDirty,
    userInfo,
    errors,
    handleChange,
    handleCancel,
    handleSubmit,
  } = useAccountSettings(image);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h3 className="text-gray-900 font-semibold text-[18px]">
          Personal info
        </h3>
        <p className="text-gray-600 text-sm">
          Update your photo and personal details here.
        </p>
      </div>

      <Separator className="bg-gray-200" />

      {/* Name */}
      <div className="grid grid-cols-3 gap-6 max-w-4xl">
        <div>
          <p className="text-gray-700 font-semibold text-sm leading-5">Name</p>
        </div>

        <div className="col-span-3 lg:col-span-2 flex gap-4">
          <div className="w-1/2">
            <Input
              placeholder="First name"
              value={form.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className={`w-full rounded-lg h-11 bg-white px-3.5 py-2.5 ring-0! outline-0! text-gray-900 text-[16px] leading-6 shadow-[0px_1px_2px_0px_#0A0D120D] ${
                errors.firstName ? "border-red-600" : "border-gray-400"
              }`}
            />
            {errors.firstName && (
              <p className="text-xs italic text-red-600 mt-0.5">
                {errors.firstName}
              </p>
            )}
          </div>
          <div className="w-1/2">
            <Input
              placeholder="Last name"
              value={form.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className={`w-full rounded-lg h-11 bg-white px-3.5 py-2.5 ring-0! outline-0! text-gray-900 text-[16px] leading-6 shadow-[0px_1px_2px_0px_#0A0D120D] ${
                errors.lastName ? "border-red-600" : "border-gray-400"
              }`}
            />
            {errors.lastName && (
              <p className="text-xs italic text-red-600 mt-0.5">
                {errors.lastName}
              </p>
            )}
          </div>
        </div>
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
        </div>
      </div>

      <Separator className="bg-gray-200" />

      {/* Photo */}
      <div className="grid grid-cols-3 gap-6 max-w-4xl">
        <div>
          <p className="text-gray-700 font-semibold text-sm leading-5">
            Your photo
          </p>
          <p className="text-sm text-gray-600 leading-5">
            This will be displayed on your profile.
          </p>
        </div>

        <div className="col-span-3 lg:col-span-2 flex gap-6">
          <UploadedImage
            fileInputRef={fileInputRef}
            loginImage={userInfo?.avatar}
            fallBack={userInfo?.name}
          />
        </div>
      </div>

      <Separator className="bg-gray-200" />

      {/* Country */}
      <div className="grid grid-cols-3 gap-6 max-w-4xl">
        <div>
          <p className="text-gray-700 font-semibold text-sm leading-5">
            Country
          </p>
        </div>
        <div className="lg:col-span-2 col-span-3">
          <CountrySelect
            value={form.country}
            onChange={(v) => handleChange("country", v)}
          />
        </div>
      </div>

      <Separator className="bg-gray-200" />

      {/* Timezone */}
      <div className="grid grid-cols-3 gap-6 max-w-4xl">
        <div>
          <p className="text-gray-700 font-semibold text-sm leading-5">
            Timezone
          </p>
        </div>
        <div className="lg:col-span-2 col-span-3">
          <TimeZoneSelect
            value={form.timezone}
            onChange={(v) => handleChange("timezone", v)}
          />
        </div>
      </div>

      <Separator className="bg-gray-200" />

      {/* Bio */}
      <div className="grid grid-cols-3 gap-6 max-w-4xl">
        <div>
          <p className="text-gray-700 font-semibold text-sm leading-5">Bio</p>
          <p className="text-sm text-gray-600 leading-5">
            Write a short introduction.
          </p>
        </div>

        <div className="lg:col-span-2 col-span-3">
          <Textarea
            maxLength={MAX_CHARS}
            rows={4}
            value={form.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
            className="rounded-lg min-h-30 bg-white px-3.5 py-2.5 border-gray-400 ring-0! outline-0! text-gray-900 text-[16px] leading-6 shadow-[0px_1px_2px_0px_#0A0D120D]"
            placeholder="Write a short introduction."
          />
          <p
            className={`mt-1 text-sm ${
              MAX_CHARS - form.bio.length === 0
                ? "text-red-600"
                : "text-gray-600"
            }`}
          >
            {MAX_CHARS - form.bio.length} characters left
          </p>
        </div>
      </div>

      <Separator className="bg-gray-200" />

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <Button
          size={"lg"}
          type="button"
          disabled={!isDirty}
          onClick={handleCancel}
          className="text-gray-700 text-[16px] font-semibold leading-6 rounded-lg bg-white py-2.5 px-4.5 border border-gray-300 cursor-pointer shadow-[0px_1px_2px_0px_#0A0D120D] hover:bg-white"
        >
          Cancel
        </Button>
        <Button
          size={"lg"}
          type="submit"
          disabled={!isDirty}
          className="text-white text-[16px] font-semibold leading-6 rounded-lg bg-primary py-2.5 px-4.5 border border-gray-300 cursor-pointer shadow-[0px_1px_2px_0px_#0A0D120D] hover:bg-primary"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default UserDetails;
