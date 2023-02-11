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
                            <div className="products_img">
                                <Link href={`/produto/Produto%20-%20${index+1}`}><Image src='/imgs/hero05.jpg' width='600' height='600' alt="single_product"/></Link>
                            </div>
                            <div className="products_content">
                                <span>Item {index+1}</span>
                                <span>R$ 100,00</span>
                            </div>
                            <span className="btn_products_add" onClick={()=>{setShowCart(true)}}>+</span>
                        </div>
                    )
                })}
            </div>
        </>
    )
}