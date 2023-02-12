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
                id="productscarousel"
                slidesPerView={'auto'}
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
                modules={[FreeMode, Autoplay, Pagination]}>
                {repeat.map((e,index)=>{
                    return(
                        <SwiperSlide className="slide_item" key={index}>
							<Link href={`/produto/produto%20${index+1}`}>
								<div className="product_carousel_img">
									<Image src='/imgs/hero05.jpg' width='600' height='600' alt="slide_product"/>
								</div>
								<div className="product_carousel_content">
									<span className="font-bold">Item {index+1}</span>
									<span className="line-through">R$ 100,00</span>
									<span>R$ 90,00</span>
								</div>
							</Link>
							<Link href='#outrosprodutos'><span className="add_cart_carousel" onClick={()=>{setShowCart(true)}}>+</span></Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}