import { useStateContext } from "@/context/StateContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProductMiniCarousel } from "./ProductMiniCarousel";

export function Product(props) {
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
                        <ProductMiniCarousel />
                    </div>
                </div>
                <div className="product_content">
                    <span className="product_name">{props.name}</span>
                    <span className="product_price">R$ 100,00</span>
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
                    <div className="full_img transition-all duration-300">
                        <div className="mask_full_img" onClick={()=>{setFullImg(false)}}></div>
                        <figure><Image src={miniCarousel[miniCarouselIndex]} height='1000' width='1000' alt="mini_carousel"/></figure>
                    </div>
                    <span className="x_mask_full_img" onClick={()=>{setFullImg(false)}}> x </span>
                </>
            }
        </>
    )
}