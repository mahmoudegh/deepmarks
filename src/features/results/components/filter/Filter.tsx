import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import styles from "./Filter.module.css";
import { assets } from "@/assets/assets";
import FilterSlider from "./slider/FilterSlider";

const Filter = () => {
  return (
    <div className={styles["filter"]}>
      <div className={styles["filter__select"]}>
        <Label className={styles["select-label"]}>Style</Label>
        <Select>
          <SelectTrigger className={styles["select-box"]}>
            <SelectValue placeholder="All" />
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
        <Label className={styles["select-label"]}>Tone</Label>
        <Select>
          <SelectTrigger className={styles["select-box"]}>
            <SelectValue placeholder="All" />
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
        <Label className={styles["select-label"]}>Audience</Label>
        <Select>
          <SelectTrigger className={styles["select-box"]}>
            <SelectValue placeholder="All Audience" />
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
      <div className={styles["filter__select-slide"]}>
        <Label className={styles["select-label-length"]}>Length</Label>
        <div className="w-full flex items-center mb-4 mt-5">
          <FilterSlider />
        </div>
      </div>
      <div className={styles["filter__select"]}>
        <Label className={styles["select-label"]}>Character length</Label>
        <div className={styles["select__from-to"]}>
          <Select>
            <SelectTrigger className={styles["select-box-from"]}>
              <SelectValue placeholder="From" />
            </SelectTrigger>
            <SelectContent className={styles["select-content"]}>
              <SelectGroup className={styles["select-group"]}>
                <SelectItem className={styles["select-item"]} value="4">
                  4
                </SelectItem>
                <SelectItem className={styles["select-item"]} value="5">
                  5
                </SelectItem>
                <SelectItem className={styles["select-item"]} value="6">
                  6
                </SelectItem>
                <SelectItem className={styles["select-item"]} value="7">
                  7
                </SelectItem>
                <SelectItem className={styles["select-item"]} value="8">
                  8
                </SelectItem>
                <SelectItem className={styles["select-item"]} value="9">
                  9
                </SelectItem>
                <SelectItem className={styles["select-item"]} value="10">
                  10
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className={styles["select-box-to"]}>
              <SelectValue placeholder="To" />
            </SelectTrigger>
            <SelectContent className={styles["select-content"]}>
              <SelectGroup className={styles["select-group"]}>
                <SelectItem className={styles["select-item"]} value="4">
                  4
                </SelectItem>
                <SelectItem className={styles["select-item"]} value="5">
                  5
                </SelectItem>
                <SelectItem className={styles["select-item"]} value="6">
                  6
                </SelectItem>
                <SelectItem className={styles["select-item"]} value="7">
                  7
                </SelectItem>
                <SelectItem className={styles["select-item"]} value="8">
                  8
                </SelectItem>
                <SelectItem className={styles["select-item"]} value="9">
                  9
                </SelectItem>
                <SelectItem className={styles["select-item"]} value="10">
                  10
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className={styles["filter__select"]}>
        <Label className={styles["select-label"]}>Characters</Label>
        <Select>
          <SelectTrigger className={styles["select-box"]}>
            <SelectValue placeholder="EN English" />
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
      <img src={assets.filter_image} alt="filter_image" className="mt-5" />
    </div>
  );
};

export default Filter;
