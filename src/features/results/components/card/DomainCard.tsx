import { useState } from "react";
import styles from "./DomainCard.module.css";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { assets } from "@/assets/assets";
import { useDialog } from "@/dialogs/useDialog";

interface CardProps {
  data: {
    id: string;
    suggested_name: string;
    label: string;
    domain_name: string;
    available_domains: string[];
    isFavName: boolean;
  };
  isFavPage: boolean;
  path: string;
}

const DomainCard = ({ data, isFavPage, path }: CardProps) => {
  const { suggested_name, label, domain_name, available_domains, isFavName } =
    data;
  const navigate = useNavigate();
  const [isFav, setIsFav] = useState(isFavName);
  const toggleFav = () => setIsFav((prev) => !prev);
  const { openDialog } = useDialog();
  return (
    <Card className={styles["Result__card"]}>
      <div className={styles["card__header"]}>
        <h3>{suggested_name}</h3>
        <div className={styles["images__wrapper"]}>
          <img
            src={isFav ? assets.heart_red : assets.heart_white}
            alt="favorite icon"
            className={styles["fav__icon"]}
            onClick={toggleFav}
          />
          {/* <img src={assets.arrow_down} alt="down arrow" /> */}
        </div>
      </div>

      <div className={`${styles["card__label"]} text-primary`}>{label}</div>
      <h3 className={styles["domain__name"]}>{domain_name}</h3>

      <div className={styles["available__domains"]}>
        <span className={styles["available__domains-wrapper"]}>
          <span className={styles["domain"]}>{available_domains[0]}</span>
          <span className={styles["available"]}>Available</span>
        </span>
        <span className={styles["more"]}>
          +{available_domains.length - 1} more
        </span>
      </div>
      <div className={styles["card__buttons"]}>
        {isFavPage && (
          <Button
            onClick={() => openDialog("buyDomain", data)}
            className={`${styles["buy__domain"]} bg-primary`}
          >
            Buy domain
          </Button>
        )}

        <Button className={styles["preview"]} onClick={() => navigate(path)}>
          Preview
        </Button>
      </div>
    </Card>
  );
};

export default DomainCard;
