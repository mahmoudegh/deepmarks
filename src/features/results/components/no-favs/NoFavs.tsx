import styles from "./NoFavs.module.css";
import { assets } from "@/assets/assets";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Share, List } from "lucide-react";

const NoFavs = () => {
  const navigate = useNavigate();
  return (
    <div className={styles["no__favs"]}>
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
          <Button size={"lg"} variant={"outline"} disabled>
            <List className="w-5! h-5!" /> Compare names
          </Button>
          <Button size={"lg"} variant={"outline"} disabled>
            <Share className="w-3.5! h-4!" /> Share
          </Button>
        </div>
      </div>
      <div className={styles["content"]}>
        <img
          className={styles["square-heart"]}
          src={assets.square_heart}
          alt="square_heart"
        />
        <div className="text-center mb-5">
          <h3>You have no favorite names yet</h3>
          <p>
            Start adding favorite names, they will appear and be saved here on
            this page
          </p>
        </div>
        <Button
          size={"lg"}
          variant={"outline"}
          onClick={() => navigate("/results")}
          className="cursor-pointer"
        >
          Start adding names
        </Button>
      </div>
    </div>
  );
};

export default NoFavs;
