import { useRef, type FC } from "react";
import AppHeader from "@/features/onboarding/components/app-header/AppHeader";
import type { ImperativePanelHandle } from "react-resizable-panels";
import { Domains } from "../features/results/components/results/data";
import { useParams } from "react-router-dom";
import { assets } from "@/assets/assets";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Share, RefreshCw } from "lucide-react";
import styles from "../features/results/components/card/DomainCard.module.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDialog } from "@/dialogs/useDialog";

const SingleResultsPage: FC = () => {
  const { openDialog } = useDialog();
  const sidebarRef = useRef<ImperativePanelHandle>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <AppHeader sidebarRef={sidebarRef} isCollapsed={false} />
      <div className="w-full px-8 py-6">
        <img
          onClick={() => navigate("/results")}
          className="cursor-pointer mb-3"
          src={assets.back_arrow}
          alt="back_arrow"
        />
        {Domains.filter((item) => item.id === id).map((item) => (
          <div key={item.id}>
            <div className="flex flex-col gap-3">
              <div className="h-6 bg-[#F5F5FF] rounded-2xl py-0.5 px-2.5 flex items-center justify-center font-medium text-[14px] leading-5 w-fit text-primary">
                {item.label}
              </div>
              <h3 className="text-gray-900 text-[24px] font-semibold leading-10">
                {item.domain_name}
              </h3>
              <p className="text-gray-600 text-[14px] leading-5 max-w-md">
                This name works because - We’re glad to have you onboard. Here
                are some quick tips to get you up and running.
              </p>
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => openDialog("buyDomain", item)}
                  className="h-12 w-fit text-white cursor-pointer rounded-lg border border-[#00005C] py-3 px-5 gap-2 items-center justify-center text-[16px] font-semibold leading-6 bg-primary shadow-[0px 1px 2px 0px #0a0d120d]"
                >
                  Buy domain
                </Button>

                <Button
                  onClick={() => openDialog("shareName")}
                  size={"lg"}
                  variant={"outline"}
                  className="cursor-pointer bg-white rounded-lg h-12 border text-gray-700 text-[16px] leading-6 font-semibold border-gray-300 py-3 px-5 shadow-[0px 1px 2px 0px #0a0d120d]"
                >
                  <Share className="w-5! h-5!" /> Share
                </Button>
                <Button
                  onClick={() => openDialog("generateSimilar", { id: item.id })}
                  size={"lg"}
                  variant={"outline"}
                  className="cursor-pointer bg-white rounded-lg h-12 border text-gray-700 text-[16px] leading-6 font-semibold border-gray-300 py-3 px-5 shadow-[0px 1px 2px 0px #0a0d120d]"
                >
                  <RefreshCw className="w-5! h-5!" /> Generate similar
                </Button>
              </div>
              <div className="w-full border border-gray-200 my-3"></div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-gray-900 text-[16px] font-medium leading-6">
                Domains
              </h3>

              <div className={styles["available__domains"]}>
                {item.available_domains.map((domain, index) => (
                  <span
                    key={index}
                    className={styles["available__domains-wrapper"]}
                  >
                    <span className={styles["domain"]}>{domain}</span>
                    <span className={styles["available"]}>Available</span>
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#2E2C2C] text-[14px] leading-5">
                  Powered by
                </span>
                <img src={assets.namecheap} alt="namecheap" />
              </div>
              <div className="w-full border border-gray-200 mb-3 mt-1"></div>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-gray-900 text-[16px] font-medium leading-6">
                Why this name fits
              </h3>
              <div className="h-6 bg-[#F5F5FF] rounded-2xl py-0.5 px-2.5 flex items-center justify-center font-medium text-[14px] leading-5 w-fit text-primary">
                {item.label}
              </div>
              <Tabs defaultValue={item.tabs[0].title} className="max-w-7xl">
                <TabsList className="flex items-center gap-4">
                  {item.tabs.map((tab, index) => (
                    <TabsTrigger
                      key={index}
                      value={tab.title}
                      className="text-gray-600 font-bold cursor-pointer capitalize data-[state=active]:bg-transparent data-[state=active]:text-gray-800 text-[14px] leading-5"
                    >
                      {tab.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {item.tabs.map((tab, index) => (
                  <TabsContent key={index} value={tab.title}>
                    <p className="text-gray-600 text-[14px] leading-5">
                      {tab.text}
                    </p>
                  </TabsContent>
                ))}
              </Tabs>
              <div className="w-full border border-gray-200 mb-3 mt-1"></div>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-gray-900 text-[16px] font-medium leading-6">
                Branding opportunities
              </h3>
              <div className="flex items-center gap-3">
                <img
                  className="cursor-pointer"
                  src={assets.dashboard_mockup_2}
                  alt="branding opportunities"
                />
                <img
                  className="cursor-pointer"
                  src={assets.dashboard_mockup_1}
                  alt="branding opportunities"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleResultsPage;
