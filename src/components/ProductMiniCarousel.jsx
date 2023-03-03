import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import Image from "next/image";
import { urlFor } from "@/lib/SanityClient";


export function ProductMiniCarousel({miniCarouselImg, setMiniCarouselImg, productImgs}) {
    return (
        <>
            <Swiper id="productminicarousel" slidesPerView={4} spaceBetween={10} scrollbar={{ hide: false }} freeMode={true} pagination={{ clickable: true }} modules={[FreeMode, Scrollbar]} className="product_mini_slider">
                {productImgs?.map((e)=>{
                    return(
                        <SwiperSlide className="mini_slide_item cursor-pointer" key={e._key}>
                            <Image src={urlFor(e.asset._ref).url()} width='600' height='600' alt="min_carousel" onClick={()=>{setMiniCarouselImg(urlFor(e.asset._ref).url())}}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}