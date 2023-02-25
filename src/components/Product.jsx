import { useStateContext } from "@/context/StateContext";
import Image from "next/image";
import { useState } from "react";
import { ProductMiniCarousel } from "./ProductMiniCarousel";
import { useRouter } from "next/router"
import { urlFor } from "@/lib/SanityClient";


export function Product({products}) {
    const [fullImg, setFullImg] = useState(false);
    const router = useRouter();
    const { query : { slug } } = router;
    const product = products.find(e=> e.slug.current === slug);
    const [miniCarouselImg, setMiniCarouselImg] = useState(urlFor(product.image[0].asset._ref).url());

    return (
        <>
            <div id="product" className="product_container bg-special">
                <div className="product_image_container">
                    <div className="product_img cursor-pointer">
                        <Image onClick={()=>{setFullImg(true)}} src={miniCarouselImg} height='1000' width='1000' alt="fullpage"></Image>
                    </div>
                    <div className="mini_carousel">
                        <ProductMiniCarousel miniCarouselImg={miniCarouselImg} setMiniCarouselImg={setMiniCarouselImg} productImgs={product.image}/>
                    </div>
                </div>
                <div className="product_content">
                    <span className="product_name">{product.name}</span>
                    <div className="product_prices">
                        <div className="prices_line">
                            {product.discount > 0 ? <span className="product_price">R$ {parseFloat(product.price).toFixed(2).replace(".",",")}</span> : null}
                            <span className="product_discount">R$ {parseFloat(parseFloat(product.price).toFixed(2)*(1-(product.discount)/100)).toFixed(2).replace(".",",")}</span>
                        </div>
                        <div className="product_discount_container">
                            { product.discount > 0 ? (
                                <>
                                            <figure className="product_discount_img"><Image src='/discount.svg' width='200' height='200'></Image></figure>
                                            <span className="product_discount_text">-{product.discount}%</span>
                                        </>
                                    ) : null}
                        </div>
                    </div>
                    <span>Detalhes do Produto</span>
                    <span>{product.details}</span>
                    <div className="product_controls">
                        <button>-</button>
                        <span className="px-4">{product.qty}</span>
                        <button>+</button>
                    </div>
                    <button className="btn_cta bg-green bg-opacity-70 text-lg">Adicionar ao Carrinho</button>
                </div>
            </div>
            {fullImg && 
                <>
                    <div id="fullimg" className="full_img transition-all duration-300 modal-active">
                        <div className="mask_full_img" onClick={()=>{setFullImg(false)}}></div>
                        <figure><Image src={miniCarouselImg} height='1000' width='1000' alt="mini_carousel"/></figure>
                    </div>
                    <span className="x_mask_full_img" onClick={()=>{setFullImg(false)}}> x </span>
                </>
            }
        </>
    )
}