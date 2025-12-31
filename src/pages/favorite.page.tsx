import { useRef, type FC } from "react";
import AppHeader from "@/features/onboarding/components/app-header/AppHeader";
import type { ImperativePanelHandle } from "react-resizable-panels";
import NoFavs from "@/features/results/components/no-favs/NoFavs";
import Favs from "@/features/results/components/no-favs/Favs";
import { Domains } from "../features/results/components/results/data";

const FavoritePage: FC = () => {
  const sidebarRef = useRef<ImperativePanelHandle>(null);
  const favItems = Domains.filter((item) => item.isFavName === true);

  return (
    <>
      <AppHeader sidebarRef={sidebarRef} isCollapsed={false} />
      {favItems.length > 0 ? <Favs /> : <NoFavs />}
    </>
  );
};

export default FavoritePage;
