import { useState, useRef, type FC } from "react";
import AppHeader from "@/features/onboarding/components/app-header/AppHeader";
import Results from "@/features/results/components/results/Results";
import ResultsTabs from "@/features/results/components/tabs/ResultsTabs";
import {
  Panel as ResizablePanel,
  PanelGroup as ResizablePanelGroup,
  PanelResizeHandle as ResizableHandle,
  type ImperativePanelHandle,
} from "react-resizable-panels";

const ResultsPage: FC = () => {
  const sidebarRef = useRef<ImperativePanelHandle>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isCollapsed, setIsCollapsed] = useState(true);
  console.log(isCollapsed);

  return (
    <>
      {/* <AppHeader sidebarRef={sidebarRef} isCollapsed={false} />
      <div className="flex">
        <div className="w-1/5 min-w-[300px]">
          <ResultsTabs />
        </div>
        <div className="w-4/5">
          <Results />
        </div>
      </div> */}
      <div className="h-screen! overflow-hidden!">
        <AppHeader sidebarRef={sidebarRef} isCollapsed={true} />
        <div
          style={{ height: "calc(100vh - 79px)" }}
          className="hidden lg:flex"
        >
          <ResizablePanelGroup
            direction="horizontal"
            style={{ transition: "width 3s ease-in-out" }}
            onLayout={(sizes) => {
              const collapsed = sizes[1] === 0;
              setIsCollapsed(collapsed);
            }}
          >
            <ResizablePanel
              className="relative"
              ref={sidebarRef}
              defaultSize={25}
              minSize={20}
              collapsible={true}
              collapsedSize={0}
              maxSize={30}
            >
              <ResultsTabs />
            </ResizablePanel>

            <ResizableHandle />

            <ResizablePanel style={{ overflowY: "auto" }} defaultSize={75}>
              <Results />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>

      {/* <div className="block lg:hidden">
        <AppHeader sidebarRef={sidebarRef} isCollapsed={isCollapsed} />
        <QuestionsStep />
      </div> */}
    </>
  );
};

export default ResultsPage;
