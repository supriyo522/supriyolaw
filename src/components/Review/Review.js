import styles from "./Review.module.css";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import "swiper/css";
import jane from "../../assets/jane.png";
import devon from "../../assets/devon.png";
import robert from "../../assets/robert.png";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0, 1);
  }, [data]);
};

const Review = () => {
  const [flag, setFlag] = useState(false);
  const swiper = useSwiper();
  return (
    <div className={styles.wrapper}>
      <div className={styles.cards}>
        <Swiper
          style={{ padding: "254px 20px 0px 20px" }}
          initialSlide={0}
          modules={[Navigation]}
          slidesPerView={"auto"}
          spaceBetween={40}
          allowTouchMove
        >
          <Controls data={data} />

          <div className={styles.heading}>
            <p>
              What says our <br /> happy Clients
            </p>
            <nav>
              <CarouselLeftNavigation />
              <CarouselRightNavigation />
            </nav>
          </div>

          {data.map((item, idx) => {
            // console.log(item)
            return (
              <SwiperSlide
                className={styles.slider}
                style={{ width: "auto" }}
                key={item.id}
              >
                {/* <Card data={item} type={type} /> */}
                <Card item={item} idx={idx} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

const Card = ({ item, idx }) => {
  return (
    <div
      className={styles.cardWrapper}
      style={idx % 2 !== 0 ? { background: "#2e2e2e" } : null}
    >
      <img src={item.img} alt={item.name} />
      <p>{item.name}</p>
      <p>Ceo of Hunt</p>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
        dolor do amet sint. Velit officia
      </p>
    </div>
  );
};

const data = [
  {
    img: jane,
    name: "Jane Cooper"
  },
  {
    img: devon,
    name: "Devon Lane"
  },
  {
    img: robert,
    name: "Robert Fox"
  },
  {
    img: jane,
    name: "Jane Cooper"
  },
  {
    img: devon,
    name: "Devon Lane"
  },
  {
    img: robert,
    name: "Robert Fox"
  },
  {
    img: jane,
    name: "Jane Cooper"
  },
  {
    img: devon,
    name: "Devon Lane"
  },
  {
    img: robert,
    name: "Robert Fox"
  }
];

export default Review;
