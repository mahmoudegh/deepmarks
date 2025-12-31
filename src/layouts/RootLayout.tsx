// src/layouts/RootLayout.tsx
import { Outlet } from "react-router-dom";

import BuyDomain from "@/dialogs/components/BuyDomain";
import GenerateSimilar from "@/dialogs/components/GenerateSimilar";
import ShareName from "@/dialogs/components/ShareName";
import DidYouBuy from "@/dialogs/components/DidYouBuy";
import EnterDomain from "@/dialogs/components/EnterDomain";
import SelectNames from "@/dialogs/components/SelectNames";
import ShareList from "@/dialogs/components/ShareList";

const RootLayout = () => {
  return (
    <>
      {/* Pages */}
      <Outlet />

      {/* Global Dialogs */}
      <BuyDomain />
      <DidYouBuy />
      <EnterDomain />
      <GenerateSimilar />
      <ShareName />
      <ShareList />
      <SelectNames />
    </>
  );
};

export default RootLayout;
