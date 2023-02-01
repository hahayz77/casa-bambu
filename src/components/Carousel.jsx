import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

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
          <img className="hero_item" src="/imgs/hero01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="hero_item" src="/imgs/hero02.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="hero_item" src="/imgs/hero03.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="hero_item" src="/imgs/hero04.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="hero_item" src="/imgs/hero05.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
