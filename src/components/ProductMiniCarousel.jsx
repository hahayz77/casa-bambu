import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import Image from "next/image";


export function ProductMiniCarousel() {
    const repeat = [1,1,1,1,1,1,1,1];
    return (
        <>
            <Swiper
                id="productminicarousel"
                slidesPerView={4}
                spaceBetween={10}
                scrollbar={{
                    hide: false,
                  }}
                freeMode={true}
                pagination={{
                clickable: true,
                }}
                modules={[FreeMode, Scrollbar]}
                className="product_mini_slider">
                {repeat.map((e,index)=>{
                    return(
                        <SwiperSlide className="mini_slide_item"><Image src='/imgs/hero04.jpg' width='600' height='600' /></SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}