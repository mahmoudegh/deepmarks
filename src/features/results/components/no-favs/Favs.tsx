import styles from "./Favs.module.css";
import { assets } from "@/assets/assets";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Share, List } from "lucide-react";
import DomainCard from "../card/DomainCard";
import { Domains } from "../results/data";
import { useDialog } from "@/dialogs/useDialog";

const Favs = () => {
  const navigate = useNavigate();
  const { openDialog } = useDialog();
  return (
    <div className={styles["favs"]}>
      <img
        onClick={() => navigate("/results")}
        className="cursor-pointer"
        src={assets.back_arrow}
        alt="back_arrow"
      />
      <div className={styles["header"]}>
        <div className={styles["title"]}>
          <h3>Favorites</h3>
          <p>Saved and liked names by you appear here</p>
        </div>
        <div className={styles["actions"]}>
          <Button size={"lg"} variant={"outline"}>
            <List className="w-5! h-5!" /> Compare names
          </Button>
          <Button
            size={"lg"}
            variant={"outline"}
            onClick={() => {
              openDialog("selectNames", Domains);
            }}
          >
            <Share className="w-4! h-4!" /> Share
          </Button>
        </div>
      </div>
      <div className={styles["results__content"]}>
        {Domains.filter((item) => item.isFavName === true).map((item) => (
          <div key={item.id} className={styles["result__item"]}>
            <DomainCard
              isFavPage={true}
              data={item}
              path={`/results/${item.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favs;
