import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";


export function ProductCarousel() {
    const repeat = [1,1,1,1,1,1,1,1];
    return (
        <>
            <Swiper
                id="productcarousel"
                slidesPerView={1}
                breakpoints={{
                    "@0.00": {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    "@0.75": {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    "@1.00": {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    "@1.50": {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                spaceBetween={10}
                autoplay={{
                delay: 1000,
                disableOnInteraction: true,
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Autoplay, Pagination]}
                className="product_mini_slider">
                {repeat.map((e,index)=>{
                    return(
                        <SwiperSlide className="mini_slide_item"><Image src='/imgs/hero04.jpg' width='600' height='600' />Slide {index}</SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}