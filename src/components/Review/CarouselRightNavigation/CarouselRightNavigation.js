import { useState, useEffect } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import { ReactComponent as LeftInactive } from "../../../assets/left_inactive.svg";
import { ReactComponent as RightActive } from "../../../assets/right_active.svg";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    console.log(swiper);
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper.isEnd, swiper]);
  return (
    <div>
      {isEnd ? (
        <RightInactive />
      ) : (
        <RightActive
          style={{ cursor: "pointer" }}
          onClick={() => swiper.slideNext()}
        />
      )}
    </div>
  );
};

const RightInactive = () => {
  return <LeftInactive style={{ transform: "rotate(180deg)" }} />;
};

export default CarouselRightNavigation;
