import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Heart, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  data: {
    id: string;
    plan: string;
    name: string;
    desc: string;
    date: string;
    fav_count: string;
  };
}

const ProjectCard = ({ data }: CardProps) => {
  const navigate = useNavigate();
  const { plan, date, name, desc, fav_count } = data;
  return (
    <div className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-4 flex flex-col gap-2.5 ">
      <div
        className={`${
          plan === "FREE PLAN"
            ? "bg-[#E9E9E9] text-[#747B7E]"
            : "text-[#BB80FF] bg-[#F7F0FF]"
        } p-2 rounded-sm  font-semibold text-xs w-fit`}
      >
        {plan}
      </div>
      <div className="flex items-center gap-2 text-[#94A3B8] font-semibold text-xs">
        <CalendarDays className="h-4! w-4!" />
        {date}
      </div>
      <h3 className="text-[#1E293B] font-bold text-[16px] line-clamp-1">
        {name}
      </h3>
      <p className="text-[#94A3B8] text-xs leading-[140%] line-clamp-3 h-12.5">
        {desc}
      </p>
      <Separator className="bg-[#E2E8F0] my-2" />
      <div className="flex items-center gap-1 text-[#94A3B8]">
        <Heart className="h-4.5! w-4.5!" />
        <span className="text-xs font-semibold">{fav_count} Favorites</span>
      </div>
      <Separator className="bg-[#E2E8F0] my-2" />
      <Button
        onClick={() => navigate("/results")}
        size="lg"
        className="bg-white cursor-pointer h-10 flex justify-center items-center border border-gray-300 rounded-lg shadow-[0px_1px_2px_0px_#0A0D120D] py-2.5 px-4 text-gray-700 font-semibold text-sm leading-5 hover:bg-white hover:opacity-70 transition"
      >
        Go to project
      </Button>
      <Button
        disabled={plan === "FREE PLAN" ? false : true}
        size="lg"
        className={`${
          plan === "FREE PLAN"
            ? "bg-white border-[#CAAA6A] text-[#C09134] hover:bg-white hover:opacity-70 transition"
            : "bg-[#D9D9D9] shadow-[0px_1px_2px_0px_#0A0D120D] border-gray-300 text-[#8C8C8C80;]"
        } cursor-pointer h-10 flex justify-center items-center border rounded-lg py-2.5 px-4 font-semibold text-sm leading-5`}
      >
        <Zap fill={plan === "FREE PLAN" ? "#C09134" : "transparent"} />
        <span>Upgrade plan</span>
      </Button>
    </div>
  );
};

export default ProjectCard;
