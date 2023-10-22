import styles from "./FAQ.module.css";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { useRef, useState } from "react";

const FAQ = () => {
  return (
    <div className={styles.wrapper}>
      <p>FAQ</p>
      <div className={styles.content}>
        <div className={styles.titleDiv}>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
        <div className={styles.accordian}>
          {data.map(({ title }) => (
            <Card title={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ title }) => {
  const contentDiv = useRef(null);
  const [flag, setFlag] = useState(false);
  const handleClick = (e) => {
    setFlag(!flag);
  };
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardTitle} onClick={handleClick}>
        <p>{title}</p>
        {!flag ? <PlusIcon /> : null}
      </div>
      <div
        className={flag ? styles.cardContent : styles.cardContent1}
        ref={contentDiv}
      >
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequatduis enim velit mollit Exer.
        </p>
      </div>
    </div>
  );
};

const PlusIcon = () => {
  return (
    <div
      style={{
        width: "28px",
        height: "28px",
        backgroundColor: "#E3B748",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "14px"
      }}
    >
      <Plus />
    </div>
  );
};

const data = [
  {
    title: "Do I need a personal injury report?"
  },
  {
    title: "How much is my case worth?"
  },
  {
    title: "What should I do right after car accidect"
  },
  {
    title: "How much is my case worth?"
  }
];

export default FAQ;
