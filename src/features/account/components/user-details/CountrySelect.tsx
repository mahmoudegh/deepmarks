// import * as React from "react";
// import { Check, ChevronsUpDown } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { countryOptions } from "@/lib/countries";

// const CountrySelect = () => {
//   const [open, setOpen] = React.useState(false);
//   const [value, setValue] = React.useState<string>("");

//   const selectedCountry = countryOptions.find((c) => c.value === value);

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="cursor-pointer w-full justify-between rounded-lg h-11 bg-white px-3.5 py-2.5 border-gray-400 font-normal! text-gray-900 text-[16px] leading-6 shadow-[0px_1px_2px_0px_#0A0D120D]"
//         >
//           {selectedCountry ? (
//             <span className="flex items-center gap-2 ">
//               <span>{selectedCountry.flag}</span>
//               <span>{selectedCountry.label}</span>
//             </span>
//           ) : (
//             <span>Select country</span>
//           )}
//           <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//         </Button>
//       </PopoverTrigger>

//       <PopoverContent className="w-full p-0 bg-white px-3.5 py-2.5 border-gray-400  text-gray-900 text-[16px] leading-6 shadow-[0px_1px_2px_0px_#0A0D120D]">
//         <Command>
//           <CommandInput placeholder="Search country..." />
//           <CommandList>
//             <CommandEmpty>No country found.</CommandEmpty>

//             <CommandGroup>
//               {countryOptions.map((country) => (
//                 <CommandItem
//                   className="cursor-pointer hover:bg-gray-100"
//                   key={country.value}
//                   value={country.label}
//                   onSelect={() => {
//                     setValue(country.value);
//                     setOpen(false);
//                   }}
//                 >
//                   <span className="flex items-center gap-2">
//                     <span>{country.flag}</span>
//                     <span>{country.label}</span>
//                   </span>

//                   <Check
//                     className={cn(
//                       "ml-auto h-4 w-4",
//                       value === country.value ? "opacity-100" : "opacity-0"
//                     )}
//                   />
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// };

// export default CountrySelect;

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { countryOptions } from "@/lib/countries";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const CountrySelect = ({ value, onChange }: Props) => {
  const [open, setOpen] = React.useState(false);

  const selectedCountry = countryOptions.find((c) => c.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="cursor-pointer w-full justify-between rounded-lg h-11 bg-white px-3.5 py-2.5 border-gray-400 font-normal! text-gray-900 text-[16px] leading-6 shadow-[0px_1px_2px_0px_#0A0D120D]"
        >
          {selectedCountry ? (
            <span className="flex items-center gap-2">
              <span>{selectedCountry.flag}</span>
              <span>{selectedCountry.label}</span>
            </span>
          ) : (
            <span>Select country</span>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0 bg-white px-3.5 py-2.5 border-gray-400 text-gray-900 shadow-[0px_1px_2px_0px_#0A0D120D]">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>

            <CommandGroup>
              {countryOptions.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.label}
                  className="cursor-pointer hover:bg-gray-100"
                  onSelect={() => {
                    onChange(country.value);
                    setOpen(false);
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span>{country.flag}</span>
                    <span>{country.label}</span>
                  </span>

                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === country.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CountrySelect;
