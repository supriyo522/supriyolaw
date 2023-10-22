import styles from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Subscribe Our Newsletter</h1>
      <form>
        <input type="text" placeholder="Name:" />
        <input type="text" placeholder="Enter your Email:" />
        <input type="submit" value="SEND" />
      </form>
    </div>
  );
};

export default NewsLetter;
