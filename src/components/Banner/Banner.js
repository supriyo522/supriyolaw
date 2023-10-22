import styles from "./Banner.module.css";
import { ReactComponent as MailIcon } from "../../assets/mail.svg";
import { ReactComponent as BannerImage } from "../../assets/banner_image.svg";

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentDiv}>
        <p>You don’t have to</p>
        <p>Fight them Alone.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <form className={styles.inputDiv}>
          <MailIcon style={{ opacity: 0.10000000149011612 }} />
          <input type="text" placeholder="Enter your email address" />
          <button type="submit">Let’s Talk</button>
        </form>
      </div>
      <div className={styles.imageDiv}>
        <BannerImage />
      </div>
    </div>
  );
};

export default Banner;
