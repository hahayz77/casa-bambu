import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { urlFor } from "@/lib/SanityClient";


export function Carousel({banners}) {
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
        {banners.map((e,index)=>{
          return(
            <SwiperSlide>
              <Image key={index} className="hero_item" src={urlFor(e.imagem).url()} height='2000' width='2000' alt="slide_img"/>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
}
