import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const FilterSlider = () => {
  const [value, setValue] = useState(50);

  return (
    <Slider
      className="bg-gray-200 rounded-sm cursor-pointer h-2"
      value={[value]}
      onValueChange={(val) => setValue(val[0])}
      max={100}
      min={1}
      step={1}
    />
  );
};

export default FilterSlider;
