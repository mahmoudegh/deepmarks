import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDialog } from "@/dialogs/useDialog";
import DomainCard from "@/features/results/components/card/DomainCard";
import { Domains } from "@/features/results/components/results/data";
import { RefreshCw } from "lucide-react";

const INITIAL_VISIBLE = 3;

type GenerateSimilarData = {
  id: string | number;
};

const GenerateSimilar = () => {
  const { activeDialog, closeDialog, dialogData } = useDialog();
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const location = useLocation();

  const generateData =
    dialogData && typeof dialogData === "object" && "id" in dialogData
      ? (dialogData as GenerateSimilarData)
      : null;

  const item = useMemo(
    () => Domains.find((d) => d.id === generateData?.id),
    [generateData?.id]
  );

  // close modal on route change
  useEffect(() => {
    if (activeDialog === "generateSimilar") {
      closeDialog();
      setVisibleCount(INITIAL_VISIBLE);
    }
  }, [location.pathname]);

  if (!item) return null;

  const total = item.similar.length;
  const canGenerateMore = visibleCount < total;

  return (
    <Dialog
      open={activeDialog === "generateSimilar"}
      onOpenChange={(open) => {
        if (!open) {
          closeDialog();
          setVisibleCount(INITIAL_VISIBLE);
        }
      }}
    >
      <DialogContent className="max-h-[calc(80vh + 28px)] overflow-y-auto no-scrollbar">
        <div className="hidden">
          <DialogTitle />
          <DialogDescription />
        </div>

        <div className="flex flex-col gap-3">
          <img
            onClick={() => {
              closeDialog();
              setVisibleCount(INITIAL_VISIBLE);
            }}
            className="cursor-pointer h-5 w-5"
            src={assets.back_arrow}
            alt="back_arrow"
          />

          <div className="h-6 bg-[#F5F5FF] rounded-2xl py-0.5 px-2.5 flex items-center justify-center font-medium text-[14px] leading-5 w-fit text-primary">
            {item.label}
          </div>

          <h3 className="text-gray-900 text-[24px] font-semibold leading-10">
            {item.domain_name}
          </h3>

          <p className="text-gray-600 text-[14px] leading-5 max-w-md">
            This name works because - We’re glad to have you onboard.
          </p>

          <div className="w-full h-[0.5px] bg-gray-300 mt-5 mb-3" />

          <div className="flex justify-between items-center">
            <span className="text-gray-900 font-medium text-[16px] leading-6">
              Similar names
            </span>

            <Button
              onClick={() => setVisibleCount((c) => c + 1)}
              disabled={!canGenerateMore}
              size="lg"
              variant="outline"
              className="cursor-pointer bg-white rounded-lg h-12 border text-gray-700"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Generate more
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-3">
            {item.similar.slice(0, visibleCount).map((similar_item) => (
              <DomainCard
                key={similar_item.id}
                isFavPage={false}
                data={similar_item}
                path={`/results/${item.id}/similar/${similar_item.id}`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GenerateSimilar;
