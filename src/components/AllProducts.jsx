import { useStateContext } from "@/context/StateContext";
import Image from "next/image";
import Link from "next/link";

export function AllProducts() {
    const { setShowCart } =  useStateContext();
    const repeat = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    return (
        <>
            <div id="all_products" className="bg-special">
            {repeat.map((e,index)=>{
                return(
                    <div className="products_wrapper">
                        <Link href={`/produto/Produto%20-%20${index+1}`}>
                            <div className="products_img">
                                <Image src='/imgs/hero05.jpg' width='600' height='600' alt="single_product"/>
                            </div>
                            <div className="products_content">
                                <span className="font-bold">Item {index+1}</span>
                                <span className="line-through">R$ 100,00</span>
                                <span>R$ 80,00</span> 
                            </div>
                            <span className="btn_products_add" onClick={()=>{setShowCart(true)}}>+</span>
                        </Link>
                    </div>
                    )
                })}
            </div>
        </>
    )
}