import styles from "./Choose.module.css";
import { ReactComponent as GiftIcon } from "../../assets/gift_icon.svg";

const Choose = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Why Choose us?</h2>
      <div className={styles.container}>
        <Item successRate={98} />
        <Item successRate={100} special />
        <Item successRate={100} />
      </div>
    </div>
  );
};

const Item = ({ successRate, special = false }) => {
  return (
    <div
      className={
        special ? `${styles.giftWrapper} ${styles.special}` : styles.giftWrapper
      }
    >
      <GiftIcon />
      <h3>{`${successRate}% Success Rate`}</h3>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </p>
      <button>Read More</button>
    </div>
  );
};

export default Choose;
