import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/lib/SanityClient";


export function ProductCarousel({products}) {
    const { setShowCart } = useStateContext();
    const featured = products?.slice(0, 6); // Limit the number of products to carousel
    const productsSort = featured?.sort((a,b) => b._updatedAt.localeCompare(a._updatedAt));

    return (
        <>
            <Swiper
                id="productscarousel" slidesPerView={'auto'} spaceBetween={10} speed={800} autoplay={{ delay: 3000, disableOnInteraction: false, }} freeMode={true} pagination={{ clickable: true, }} modules={[FreeMode, Autoplay, Pagination]}>
                {productsSort?.map((e,index)=>{
                    return(
                        <SwiperSlide className="slide_item" key={e._id}>
							<Link href={`/produto/${e.slug.current}`}>
								<div className="product_carousel_img">
									<Image src={urlFor(e?.image[0]).url()} width='600' height='600' alt="slide_product"/>
								</div>
								<div className="product_carousel_content">
									<span className="font-bold">{e.name}</span>
									{e.discount > 0 ? <span className="line-through">R$ {parseFloat(e.price).toFixed(2).replace(".",",")}</span> : null}
                                    <span>R$ {parseFloat(parseFloat(e.price).toFixed(2)*(1-(e.discount)/100)).toFixed(2).replace(".",",")}</span>
                                </div>
                                { e.discount > 0 ? (
                                    <>
                                        <figure className="product_carousel_discount"><Image src='/discount.svg' width='200' height='200'></Image></figure>
                                        <span className="product_carousel_discount_text">-{e.discount}%</span>
                                    </>
                                ) : null}
							</Link>
							<Link href='#outrosprodutos'><span className="add_cart_carousel" onClick={()=>{setShowCart(true)}}>+</span></Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}