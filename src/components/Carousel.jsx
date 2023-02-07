import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


export function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={600}
        effect={"fade"}
        autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="carousel w-full"
      >
        <SwiperSlide>
          <Image className="hero_item" src="/imgs/hero01.jpg" height='2000' width='2000' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="hero_item" src="/imgs/hero02.jpg" height='2000' width='2000' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="hero_item" src="/imgs/hero03.jpg" height='2000' width='2000' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="hero_item" src="/imgs/hero04.jpg" height='2000' width='2000' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="hero_item" src="/imgs/hero05.jpg" height='2000' width='2000' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
