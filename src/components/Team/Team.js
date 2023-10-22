import styles from "./Team.module.css";
import danial from "../../assets/danial.png";
import sanfole from "../../assets/sanfole.png";
import cesforila from "../../assets/cesforila.jpeg";
import colleen from "../../assets/colleen.png";
import haldone from "../../assets/haldone.jpeg";
import nik_jeo from "../../assets/nik_jeo.jpeg";
import { useState } from "react";

const Team = () => {
  const [clickedBtn, setClickedBtn] = useState("Sanfole");
  return (
    <div className={styles.wrapper}>
      <h1>Our Team</h1>
      <div className={styles.grid}>
        {data.map((item) => {
          return (
            <Card
              item={item}
              clickedBtn={clickedBtn}
              setClickedBtn={setClickedBtn}
            />
          );
        })}
      </div>
    </div>
  );
};

const Card = ({ item, clickedBtn, setClickedBtn }) => {
  return (
    <div
      onClick={() => setClickedBtn(item.name)}
      className={
        clickedBtn === item.name
          ? `${styles.cardWrapper} ${styles.clicked}`
          : styles.cardWrapper
      }
    >
      <img src={item.img} alt={item.name} />
      <div className={styles.cardContent}>
        <h3>{item.name}</h3>
        <p>{item.cases}</p>
      </div>
    </div>
  );
};

const data = [
  {
    img: danial,
    name: "Danial Def",
    cases: "301 Cases"
  },
  {
    img: sanfole,
    name: "Sanfole",
    cases: "850 Cases"
  },
  {
    img: cesforila,
    name: "Cesforila",
    cases: "470 Cases"
  },
  {
    img: colleen,
    name: "Colleen",
    cases: "180 Cases"
  },
  {
    img: haldone,
    name: "Haldone",
    cases: "212 Cases"
  },
  {
    img: nik_jeo,
    name: "Nik Jeo",
    cases: "350 Cases"
  }
];

export default Team;
