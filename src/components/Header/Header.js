import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Logo style={{ cursor: "pointer" }} />
      <div className={styles.midDiv}>
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
      </div>
      <button>Contact Now</button>
    </div>
  );
};

export default Header;
