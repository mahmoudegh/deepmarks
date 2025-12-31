import React from "react";
import styles from "./Results.module.css";
import { assets } from "@/assets/assets";
import HorizontalFilter from "../filter/horizontal-filter/HorizontalFilter";
import { Domains } from "./data";
import DomainCard from "../card/DomainCard";

const Results = () => {
  return (
    <div className={styles["results"]}>
      <div className={styles["results__header"]}>
        <h6 className={styles["results__header-title"]}>Results</h6>
        <img className="cursor-pointer" src={assets.filter} alt="filter" />
      </div>
      <HorizontalFilter />
      <div className={styles["results__content"]}>
        {Domains.map((item) => (
          <div key={item.id} className={styles["result__item"]}>
            <DomainCard
              isFavPage={false}
              data={item}
              path={`/results/${item.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
