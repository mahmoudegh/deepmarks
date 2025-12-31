import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import styles from "./LoggedUser.module.css";
import { assets } from "@/assets/assets";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@/features/onboarding/hooks/useLogin";

export interface UserInfo {
  name?: string;
  email?: string;
  avatar?: string;
}

interface LoggedUserProps {
  userInfo: UserInfo | null;
}

const LoggedUser = ({ userInfo }: LoggedUserProps) => {
  const { logout } = useLogin();
  const navigate = useNavigate();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={styles["user__dropdown"]}>
        <div className={styles["user__dropdown-btn"]}>
          <Avatar className={styles["user__dropdown-avatar"]}>
            <AvatarImage src={userInfo?.avatar} />
            <AvatarFallback
              className={`${styles["user__dropdown-avatar-fallback"]} bg-primary`}
            >
              {(userInfo?.name ?? "")
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className={styles["user__dropdown-data"]}>
            <div className={styles["user__dropdown-name"]}>
              {userInfo?.name}
            </div>
            <div className={styles["user__dropdown-email"]}>
              {userInfo?.email}
            </div>
          </div>
        </div>
        <img className="hidden md:block" src={assets.caret} alt="caret" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className={styles["user-menu"]} sideOffset={20}>
        <DropdownMenuLabel>
          <div className={styles["user__dropdown-btn"]}>
            <Avatar className={styles["user__dropdown-avatar-sm"]}>
              <AvatarImage src={userInfo?.avatar} />
              <AvatarFallback
                className={`${styles["user__dropdown-avatar-fallback-sm"]} bg-primary`}
              >
                {(userInfo?.name ?? "")
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className={styles["user__dropdown-data-sm"]}>
              <div className={styles["user__dropdown-name-sm"]}>
                {userInfo?.name}
              </div>
              <div className={styles["user__dropdown-email-sm"]}>
                {userInfo?.email}
              </div>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-300 mb-0" />

        <DropdownMenuItem
          className={`${styles["menu-item"]} `}
          onClick={() => navigate("/projects")}
        >
          <img src={assets.folder} alt="projects" />
          <span>Projects</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className={`${styles["menu-item"]} `}
          onClick={() => navigate("/account-settings")}
        >
          <img src={assets.settings} alt="Settings" />
          <span>Settings</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className={`${styles["menu-item"]} `}
          onClick={() => navigate("/support")}
        >
          <img src={assets.help} alt="support" />
          <span>Support</span>
        </DropdownMenuItem>

        <DropdownMenuItem
          className={`${styles["menu-item"]} `}
          onClick={() => logout()}
        >
          <img src={assets.logout} alt="logout" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LoggedUser;
