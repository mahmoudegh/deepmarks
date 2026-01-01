import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { assets } from "@/assets/assets";
import { useNavigate, useLocation } from "react-router-dom";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search, Home, Settings, Layers, LifeBuoy, LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { authStore } from "@/features/onboarding/state/auth.state";
import { useSnapshot } from "valtio";
import { useLogin } from "@/features/onboarding/hooks/useLogin";
import { Progress } from "@/components/ui/progress";

const MainSidebar = () => {
  const snapshot = useSnapshot(authStore.store);
  const userInfo = snapshot.user;
  const { logout } = useLogin();
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar className="bg-white border border-r-gray-200 border-l-0 border-t-0 border-b-0">
      <SidebarHeader className="px-4 py-8 flex flex-row items-center justify-start">
        <img src={assets.logo} alt="logo" className="w-[150px]" />
      </SidebarHeader>
      <SidebarContent className="px-4 pb-4">
        <InputGroup className="h-11 bg-white border border-gray-300 focus-visible:ring-0! focus-visible:shadow-none! focus-visible:outline-0! ring-0! shadow-none! outline-0!">
          <InputGroupInput
            className="rounded-lg bg-white focus-visible:ring-0! focus-visible:shadow-none! focus-visible:outline-0! ring-0! shadow-none! outline-0!"
            placeholder="Search..."
          />
          <InputGroupAddon>
            <Search className="text-gray-500 w-5! h-5!" />
          </InputGroupAddon>
        </InputGroup>
        <SidebarMenu className="flex-1 flex flex-col justify-between py-4">
          <div className="flex flex-col gap-1">
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="py-2 px-3 h-10 rounded-md cursor-pointer"
              >
                <a
                  onClick={() =>
                    (window.location.href =
                      "https://golden-calendar-856822.framer.app/")
                  }
                >
                  <Home className="h-6! w-6! text-gray-500" />
                  <span className="text-gray-700 text-[16px] font-semibold leading-6">
                    Home
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className={`py-2 px-3 h-10 rounded-md cursor-pointer transition
      ${
        isActive("/projects")
          ? "bg-[#F9F5FF] text-[#6941C6] hover:bg-[#F9F5FF] hover:text-[#6941C6]"
          : "hover:bg-gray-100"
      }
    `}
              >
                <a onClick={() => navigate("/projects")}>
                  <Layers
                    className={`h-6! w-6! ${
                      isActive("/projects") ? "text-[#6941C6]" : "text-gray-500"
                    }`}
                  />
                  <span className="text-[16px] font-semibold leading-6">
                    Projects
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </div>
          <div className="flex flex-col gap-1">
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className={`py-2 px-3 h-10 rounded-md cursor-pointer transition
      ${
        isActive("/support")
          ? "bg-[#F9F5FF] text-[#6941C6] hover:bg-[#F9F5FF] hover:text-[#6941C6]"
          : "hover:bg-gray-100"
      }
    `}
              >
                <a onClick={() => navigate("/support")}>
                  <LifeBuoy
                    className={`h-6! w-6! ${
                      isActive("/support") ? "text-[#6941C6]" : "text-gray-500"
                    }`}
                  />
                  <span className="text-[16px] font-semibold leading-6">
                    Support
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className={`py-2 px-3 h-10 rounded-md cursor-pointer transition
      ${
        isActive("/account-settings")
          ? "bg-[#F9F5FF] text-[#6941C6] hover:bg-[#F9F5FF] hover:text-[#6941C6]"
          : "hover:bg-gray-100"
      }
    `}
              >
                <a onClick={() => navigate("/account-settings")}>
                  <Settings
                    className={`h-6! w-6! ${
                      isActive("/account-settings")
                        ? "text-[#6941C6]"
                        : "text-gray-500"
                    }`}
                  />
                  <span className="text-[16px] font-semibold leading-6">
                    Settings
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </div>
        </SidebarMenu>
        <div className="bg-[#F9F5FF] rounded-lg py-5 px-4 flex flex-col gap-4 ">
          <h4 className="text-[#6941C6] font-semibold text-sm leading-5">
            Get your brand designed by a professional team
          </h4>
          <p className="text-[#7F56D9] text-sm leading-5">
            Upgrade your plan to get a team dedicated to design and iterate on
            your branding and take you further
          </p>
          <Progress value={66} className="bg-[#F4EBFF]" />
          <div className="flex items-center gap-3">
            <span className="text-[#9E77ED] text-sm leading-5 font-semibold cursor-pointer">
              Dismiss
            </span>
            <span className="text-[#6941C6] text-sm leading-5 font-semibold cursor-pointer">
              Upgrade plan
            </span>
          </div>
        </div>
      </SidebarContent>
      <SidebarFooter className="px-4 py-0">
        <div className="flex items-start justify-between py-4 border border-t-gray-200 border-l-0 border-r-0 border-b-0">
          <div className="flex  items-center gap-2">
            <Avatar className="h-10 w-10  rounded-full">
              <AvatarImage src={userInfo?.avatar} />
              <AvatarFallback className="h-10 w-10 flex justify-center items-center text-white text-sm bg-primary">
                {(userInfo?.name ?? "")
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <div className="text-gray-900 text-sm font-semibold leading-5">
                {userInfo?.name}
              </div>
              <div className="text-gray-600 text-sm leading-5 font-normal">
                {userInfo?.email}
              </div>
            </div>
          </div>
          <LogOut
            className="cursor-pointer h-5! w-5! text-gray-500"
            onClick={() => logout()}
          />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default MainSidebar;
