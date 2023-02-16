import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import Image from "next/image";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";


export function ProductMiniCarousel({productImages}) {
    const { setMiniCarouselIndex, miniCarousel } = useStateContext();
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
                {productImages.map((e,index)=>{
                    return(
                        <SwiperSlide className="mini_slide_item" key={index}><Link href='#' onClick={()=>{setMiniCarouselIndex(index)}}><Image src={miniCarousel[index]} width='600' height='600' alt="min_carousel"/></Link></SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}