import styles from "./Footer.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as PinterestIcon } from "../../assets/pinterest.svg";
import { ReactComponent as InstaIcon } from "../../assets/insta.svg";
import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Logo style={{ cursor: "pointer" }} />
        <div className={styles.links}>
          <p>Home</p>
          <p>Attorneys</p>
          <p>Practice Areas</p>
          <p>About Us</p>
        </div>
        <div className={styles.socialMediaHandles}>
          <InstaIcon style={{ cursor: "pointer" }} />
          <FacebookIcon style={{ cursor: "pointer" }} />
          <TwitterIcon style={{ cursor: "pointer" }} />
          <PinterestIcon style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div>
        <p>© 2020 Acme. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
