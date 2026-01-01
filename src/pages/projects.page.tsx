import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Projects } from "@/features/projects/components/data";
import ProjectCard from "@/features/projects/components/ProjectCard";
import { Plus } from "lucide-react";
import { type FC } from "react";

const ProjectsPage: FC = () => {
  return (
    <div className="bg-[#FDFDFD]">
      {/* Header */}
      <div className="flex sm:flex-row flex-col sm:justify-between gap-4 sm:gap-0 items-start">
        <div>
          <div className="flex w-full items-center gap-2">
            <SidebarTrigger className="cursor-pointer md:hidden main-sidebar-trigger" />
            <h3 className="text-gray-900 font-semibold text-[30px] leading-8 mb-1">
              Projects
            </h3>
          </div>
          <p className="text-gray-600 text-sm leading-5">
            Manage your projects and create new business names for your brand
            here
          </p>
        </div>
        <Button
          variant="outline"
          size="lg"
          className="bg-primary rounded-lg text-white cursor-pointer border border-primary h-10 text-sm font-semibold leading-5"
        >
          <Plus className="h-5! w-5! text-white!" /> Create a new brand name
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 pt-8">
        {Projects.map((project) => (
          <div key={project.id}>
            <ProjectCard data={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
