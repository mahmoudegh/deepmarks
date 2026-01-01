import { type FC } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import UserDetails from "@/features/account/components/user-details/UserDetails";
import UserPassword from "@/features/account/components/user-password/UserPassword";

const AccountSettingsPage: FC = () => {
  return (
    <div>
      <div className="flex w-full items-center gap-2">
        <SidebarTrigger className="cursor-pointer md:hidden main-sidebar-trigger" />
        <h3 className="text-gray-900 font-semibold text-[30px] leading-8 mb-1">
          Settings
        </h3>
      </div>
      <Tabs defaultValue="details">
        <TabsList className="flex items-center gap-4 h-10 pt-15 pb-4.5 border border-b-gray-200 border-l-0 border-r-0 border-t-0">
          <TabsTrigger
            value="details"
            className="pb-4 cursor-pointer text-gray-500 text-sm font-semibold leading-5 data-[state=active]:bg-white data-[state=active]:text-[#6941C6] border-b-2 border-b-transparent  data-[state=active]:border-b-2 data-[state=active]:border-b-[#6941C6] transition"
          >
            My details
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="pb-4 cursor-pointer text-gray-500 text-sm font-semibold leading-5 data-[state=active]:bg-white data-[state=active]:text-[#6941C6] border-b-2 border-b-transparent  data-[state=active]:border-b-2 data-[state=active]:border-b-[#6941C6] transition"
          >
            Password
          </TabsTrigger>
          <TabsTrigger
            value="plan"
            className="pb-4 cursor-pointer text-gray-500 text-sm font-semibold leading-5 data-[state=active]:bg-white data-[state=active]:text-[#6941C6] border-b-2 border-b-transparent  data-[state=active]:border-b-2 data-[state=active]:border-b-[#6941C6] transition"
          >
            Plan
          </TabsTrigger>
          <TabsTrigger
            value="billing"
            className="pb-4 cursor-pointer text-gray-500 text-sm font-semibold leading-5 data-[state=active]:bg-white data-[state=active]:text-[#6941C6] border-b-2 border-b-transparent  data-[state=active]:border-b-2 data-[state=active]:border-b-[#6941C6] transition"
          >
            Billing
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="pt-2">
          <UserDetails />
        </TabsContent>
        <TabsContent value="password" className="pt-2">
          <h3 className="text-gray-900 font-semibold text-[18px] leading-7">
            <UserPassword />
          </h3>
        </TabsContent>
        <TabsContent value="plan" className="pt-2">
          <h3 className="text-gray-900 font-semibold text-[18px] leading-7">
            Your plans
          </h3>
        </TabsContent>
        <TabsContent value="billing" className="pt-2">
          <h3 className="text-gray-900 font-semibold text-[18px] leading-7">
            Billing
          </h3>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AccountSettingsPage;
