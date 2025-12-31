import styles from "./HorizontalFilter.module.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Slider } from "@/components/ui/slider";
import FilterSlider from "../slider/FilterSlider";

const HorizontalFilter = () => {
  return (
    <div className={styles["h-filter"]}>
      <div className={styles["filter__select"]}>
        <Select>
          <SelectTrigger className={styles["select-box"]}>
            <SelectValue placeholder="Style" />
          </SelectTrigger>
          <SelectContent className={styles["select-content"]}>
            <SelectGroup className={styles["select-group"]}>
              <SelectItem className={styles["select-item"]} value="all">
                All
              </SelectItem>
              <SelectItem className={styles["select-item"]} value="first">
                First item
              </SelectItem>
              <SelectItem className={styles["select-item"]} value="seconde">
                Seconde item
              </SelectItem>
              <SelectItem className={styles["select-item"]} value="third">
                third item
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className={styles["filter__select"]}>
        <Select>
          <SelectTrigger className={styles["select-box"]}>
            <SelectValue placeholder="Tone" />
          </SelectTrigger>
          <SelectContent className={styles["select-content"]}>
            <SelectGroup className={styles["select-group"]}>
              <SelectItem className={styles["select-item"]} value="all">
                All
              </SelectItem>
              <SelectItem className={styles["select-item"]} value="first">
                First item
              </SelectItem>
              <SelectItem className={styles["select-item"]} value="seconde">
                Seconde item
              </SelectItem>
              <SelectItem className={styles["select-item"]} value="third">
                third item
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className={styles["filter__select"]}>
        <Select>
          <SelectTrigger className={styles["select-box"]}>
            <SelectValue placeholder="Audience" />
          </SelectTrigger>
          <SelectContent className={styles["select-content"]}>
            <SelectGroup className={styles["select-group"]}>
              <SelectItem className={styles["select-item"]} value="all">
                All
              </SelectItem>
              <SelectItem className={styles["select-item"]} value="first">
                First item
              </SelectItem>
              <SelectItem className={styles["select-item"]} value="seconde">
                Seconde item
              </SelectItem>
              <SelectItem className={styles["select-item"]} value="third">
                third item
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-1/5 flex items-center">
        <FilterSlider />
      </div>

      {/* <div className={styles["filter__select-slide"]}>
        <Slider
          className={styles["filter-slider"]}
          defaultValue={[5]}
          max={10}
          step={1}
        />
      </div> */}
    </div>
  );
};

export default HorizontalFilter;
