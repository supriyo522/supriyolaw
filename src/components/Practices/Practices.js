import styles from "./Practices.module.css";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img5.jpeg";
import img6 from "../../assets/img6.jpeg";

const Practices = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Area of Practices</h2>
      <div className={styles.imageDiv}>
        <CustomImage url={`${img1}`} text="BUSINESS LAW" />
        <CustomImage url={`${img2}`} text="Partnership LAW" />
        <CustomImage url={`${img3}`} text="REAL ESTATE LAW" />
        <CustomImage url={`${img4}`} text="BUSINESS LAW" />
        <CustomImage url={`${img5}`} text="LANDLORD DISPUTES" />
        <CustomImage url={`${img6}`} text="ELDER ABUSE" />
      </div>
    </div>
  );
};

const CustomImage = ({ url, text }) => {
  return (
    <div
      className={styles.customImage}
      style={{
        background: `linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 50.52%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {text}
    </div>
  );
};

export default Practices;
