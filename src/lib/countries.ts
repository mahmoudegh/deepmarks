import countries from "world-countries";

export type CountryOption = {
  value: string;
  label: string;
  flag: string;
};

export const countryOptions: CountryOption[] = countries
  .map((country) => ({
    value: country.cca2.toLowerCase(),
    label: country.name.common,
    flag: country.flag,
  }))
  .sort((a, b) => a.label.localeCompare(b.label));
