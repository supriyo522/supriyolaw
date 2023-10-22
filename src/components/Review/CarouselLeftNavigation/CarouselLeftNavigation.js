import { useState, useEffect } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";
import { ReactComponent as LeftInactive } from "../../../assets/left_inactive.svg";
import { ReactComponent as RightActive } from "../../../assets/right_active.svg";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBegining, setIsBegining] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBegining(swiper.isBeginning);
    });
  }, [swiper.isBeginning, swiper]);
  return (
    <div>{isBegining ? <LeftInactive /> : <LeftActive swiper={swiper} />}</div>
  );
};

const LeftActive = ({ swiper }) => {
  return (
    <RightActive
      onClick={() => swiper.slidePrev()}
      style={{ transform: "rotate(-180deg)", cursor: "pointer" }}
    />
  );
};

export default CarouselLeftNavigation;
