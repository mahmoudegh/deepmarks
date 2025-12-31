import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainSidebar from "@/sidebars/components/MainSidebar";
import CreatePassword from "@/dialogs/components/CreatePassword";
import { PasswordSuccess } from "@/dialogs/components/PasswordSuccess";

const AccountLayout = () => {
  return (
    <SidebarProvider
      className="overflow-x-hidden"
      style={
        {
          "--sidebar-width": "312px",
        } as React.CSSProperties
      }
    >
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <MainSidebar />

        {/* Account Pages */}
        <main className="py-8 px-8 md:w-[calc(100vw-312px)] w-screen bg-[#FDFDFD]">
          <Outlet />
          <CreatePassword />
          <PasswordSuccess />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AccountLayout;
