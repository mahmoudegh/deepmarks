import { Button } from "@/components/ui/button";
import { Projects } from "@/features/projects/components/data";
import ProjectCard from "@/features/projects/components/ProjectCard";
import { Plus } from "lucide-react";
import { type FC } from "react";

const ProjectsPage: FC = () => {
  return (
    <div className="bg-[#FDFDFD]">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-900 text-[30px] leading-9.5 font-semibold">
            Projects
          </h3>
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
