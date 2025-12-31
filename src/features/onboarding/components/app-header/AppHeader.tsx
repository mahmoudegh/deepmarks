import { type ImperativePanelHandle } from "react-resizable-panels";
import styles from "./AppHeader.module.css";
import { assets } from "@/assets/assets";
import Login from "@/features/onboarding/components/login/Login.tsx";
import { authStore } from "@/features/onboarding/state/auth.state";
import LoggedUser from "@/features/onboarding/components/logged-user/LoggedUser";
import { useSnapshot } from "valtio";
import { useNavigate } from "react-router-dom";

interface AppHeaderProps {
  sidebarRef: React.RefObject<ImperativePanelHandle | null>;
  isCollapsed: boolean;
}

const AppHeader = ({ sidebarRef, isCollapsed }: AppHeaderProps) => {
  const navigate = useNavigate();
  const snapshot = useSnapshot(authStore.store);
  const toggleSidebar = () => {
    if (!sidebarRef.current) return;

    if (sidebarRef.current.isCollapsed()) {
      sidebarRef.current.expand();
    } else {
      sidebarRef.current.collapse();
    }
  };

  return (
    <div className={styles.header}>
      <img className={styles["header__logo"]} src={assets.logo} alt="logo" />
      <div className={styles["header__right-side"]}>
        {snapshot.isLoggedIn ? (
          <LoggedUser userInfo={authStore.store.user} />
        ) : (
          <Login isDirectLogin={true} isSkipToLogin={false} />
        )}
        {snapshot.isLoggedIn && (
          <button
            className={`${styles["header__get-professional-branding-button"]} bg-primary`}
          >
            <img src={assets.zapIcon} alt="zap-icon" />
            <span>Get professional branding</span>
          </button>
        )}

        {snapshot.isLoggedIn && (
          <button
            onClick={() => navigate("/results/favorite")}
            className={styles["header__theme-toggle-button"]}
          >
            <img src={assets.fav} alt="fav-icon" />
          </button>
        )}

        <img
          src={assets.themeToggle}
          className={styles["header__theme-toggle-button"]}
          alt="theme-toggle-button"
        />
        {isCollapsed && (
          <img
            src={assets.toggle}
            onClick={toggleSidebar}
            className={styles["header__layout-toggle-button"]}
            alt="toggle-button"
          />
        )}
      </div>
    </div>
  );
};

export default AppHeader;
