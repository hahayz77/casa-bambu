import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";


export function ProductCarousel() {
  const { setShowCart } = useStateContext();
    const repeat = [1,1,1,1,1,1,1,1];
    return (
        <>
            <h1 className="title" id="outrosprodutos">Outros Produtos</h1>
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
                speed={800}
                autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Autoplay, Pagination]}
                className="product_mini_slider">
                {repeat.map((e,index)=>{
                    return(
                        <SwiperSlide className="mini_slide_item">
                          <div className="product_carousel_img">
                            <Link href='#outrosprodutos'><Image src='/imgs/hero05.jpg' width='600' height='600' /></Link>
                          </div>
                          <div className="product_carousel_content">
                            <span>Item {index+1}</span>
                            <span>R$ 100,00</span>
                          </div>
                          <Link href='#outrosprodutos'><span className="add_cart_carousel" onClick={()=>{setShowCart(true)}}>+</span></Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}