import { useStateContext } from "@/context/StateContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProductMiniCarousel } from "./ProductMiniCarousel";

export function Product({products}) {
    const { miniCarousel, miniCarouselIndex } = useStateContext();
    const [fullImg, setFullImg] = useState(false);

    return (
        <>
            <div id="product" className="product_container bg-special">
                <div className="product_image_container">
                    <div className="product_img">
                        <Link href='#nav' onClick={()=>{setFullImg(true)}}><Image src={miniCarousel[miniCarouselIndex]} height='1000' width='1000' alt="fullpage"></Image></Link>
                    </div>
                    <div className="mini_carousel">
                        <ProductMiniCarousel productImages={products[0].image}/>
                    </div>
                </div>
                <div className="product_content">
                    <span className="product_name">{products[0].name}</span>
                    <div className="product_prices">
                        <div className="prices_line">
                            <span className="product_price">R$ 100,00</span>
                            <span className="product_discount">R$ 90,00</span>
                        </div>
                        <div className="product_discount_container">
                            <figure className="product_discount_img"><Image src='/discount.svg' width='200' height='200'></Image></figure>
                            <span className="product_discount_text">-10%</span>
                        </div>
                    </div>
                    <span>product description</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti deserunt ex dicta quis! Fugiat numquam hic officia, at, quam omnis a, asperiores ducimus nemo libero recusandae dolorem laudantium iusto vel.</span>
                    <div className="product_controls">
                        <button>-</button>
                        <span className="px-4">1</span>
                        <button>+</button>
                    </div>
                    <button className="btn_cta bg-green bg-opacity-70 text-lg">Adicionar ao Carrinho</button>
                </div>
            </div>
            {fullImg && 
                <>
                    <div id="fullimg" className="full_img transition-all duration-300 modal-active">
                        <div className="mask_full_img" onClick={()=>{setFullImg(false)}}></div>
                        <figure><Image src={miniCarousel[miniCarouselIndex]} height='1000' width='1000' alt="mini_carousel"/></figure>
                    </div>
                    <span className="x_mask_full_img" onClick={()=>{setFullImg(false)}}> x </span>
                </>
            }
        </>
    )
}


export async function getStaticProps() { 
    const products = await client.fetch(`*[_type == "products"]`);

    return {
      props: {
        products
      }
    };
  }