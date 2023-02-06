import Image from "next/image";
import { ProductMiniCarousel } from "./ProductMiniCarousel";

export function Product(props) {
    return (
        <>
            <div className="product_container bg-special">
                <div className="product_image_container">
                    <div className="product_img">
                        <Image src='/imgs/hero03.jpg' height='1000' width='1000'></Image>
                    </div>
                    <div className="mini_carousel">
                        <ProductMiniCarousel/>
                    </div>
                </div>
                <div className="product_content">
                    <span className="product_name">{props.name}</span>
                    <span><span>R$</span> price</span>
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
        </>
    )
}