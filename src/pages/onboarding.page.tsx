import { type FC, useRef, useState } from "react";
import { QuestionsStep } from "@/features/onboarding/components/questions-step";
import {
  Panel as ResizablePanel,
  PanelGroup as ResizablePanelGroup,
  PanelResizeHandle as ResizableHandle,
  type ImperativePanelHandle,
} from "react-resizable-panels";
import AppHeader from "@/features/onboarding/components/app-header/AppHeader";
import AppSidebar from "@/features/onboarding/components/app-sidebar/AppSidebar";

const OnboardingPage: FC = () => {
  const sidebarRef = useRef<ImperativePanelHandle>(null);
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <div className="hidden lg:flex">
        <ResizablePanelGroup
          direction="horizontal"
          style={{ transition: "width 3s ease-in-out" }}
          onLayout={(sizes) => {
            const collapsed = sizes[1] === 0;
            setIsCollapsed(collapsed);
          }}
        >
          <ResizablePanel
            style={{ overflowY: "auto" }}
            defaultSize={75}
            className="max-h-screen"
          >
            <AppHeader sidebarRef={sidebarRef} isCollapsed={isCollapsed} />
            <QuestionsStep />
          </ResizablePanel>

          <ResizableHandle />

          <ResizablePanel
            className="h-screen"
            ref={sidebarRef}
            defaultSize={25}
            minSize={15}
            collapsible={true}
            collapsedSize={0}
            maxSize={40}
          >
            <AppSidebar sidebarRef={sidebarRef} isCollapsed={isCollapsed} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div className="block lg:hidden">
        <AppHeader sidebarRef={sidebarRef} isCollapsed={isCollapsed} />
        <QuestionsStep />
      </div>
    </>
  );
};

export default OnboardingPage;
