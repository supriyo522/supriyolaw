import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.firstDiv}>
        <p>
          Let’s Introduce <br /> Ourself
        </p>
      </div>
      <div className={styles.secondDiv}>
        <h3>Criminal Lawyer</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
