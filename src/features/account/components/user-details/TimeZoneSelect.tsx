import * as React from "react";
import { Check, ChevronsUpDown, Clock } from "lucide-react";

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
import { timeZoneOptions } from "@/lib/timezones";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const TimeZoneSelect = ({ value, onChange }: Props) => {
  const [open, setOpen] = React.useState(false);

  const selected = timeZoneOptions.find((tz) => tz.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="cursor-pointer w-full justify-between rounded-lg h-11 bg-white px-3.5 py-2.5 border-gray-400 font-normal! text-gray-900 text-[16px] leading-6 shadow-[0px_1px_2px_0px_#0A0D120D]"
        >
          {selected ? (
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="truncate">{selected.label}</span>
              <span className="text-muted-foreground text-sm">
                ({selected.offset})
              </span>
            </span>
          ) : (
            "Select time zone"
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0 bg-white px-3.5 py-2.5 border-gray-400 text-gray-900 shadow-[0px_1px_2px_0px_#0A0D120D]">
        <Command>
          <CommandInput placeholder="Search time zone..." />
          <CommandList>
            <CommandEmpty>No time zone found.</CommandEmpty>

            <CommandGroup>
              {timeZoneOptions.map((tz) => (
                <CommandItem
                  key={tz.value}
                  value={`${tz.label} ${tz.offset}`}
                  className="cursor-pointer hover:bg-gray-100"
                  onSelect={() => {
                    onChange(tz.value);
                    setOpen(false);
                  }}
                >
                  <span className="flex items-center gap-2">
                    <span className="truncate">{tz.label}</span>
                    <span className="text-muted-foreground text-sm">
                      ({tz.offset})
                    </span>
                  </span>

                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === tz.value ? "opacity-100" : "opacity-0"
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

export default TimeZoneSelect;
