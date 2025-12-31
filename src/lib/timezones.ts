export type TimeZoneOption = {
  value: string;
  label: string;
  offset: string;
};

const getOffset = (timeZone: string) => {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    timeZoneName: "shortOffset",
  });

  const parts = formatter.formatToParts(date);
  const offsetPart = parts.find((p) => p.type === "timeZoneName");
  return offsetPart?.value.replace("GMT", "UTC") ?? "UTC";
};

export const timeZoneOptions: TimeZoneOption[] = Intl.supportedValuesOf(
  "timeZone"
).map((tz) => ({
  value: tz,
  label: tz.replace("_", " "),
  offset: getOffset(tz),
}));
