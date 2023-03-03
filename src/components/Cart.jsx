import Image from "next/image";
import { useStateContext } from "../context/StateContext";
import { DiscountToBRL } from "@/functions/DiscountToBRL";
import { PriceToBRL } from "@/functions/PriceToBRL";


export function Cart() {
    const { cartItems, setShowCart, showCart, totalPrice } = useStateContext();
    return (
        <>
            <div className={`cart_menu ${showCart === true ? 'showcartmenu' : 'hidecartmenu'}`} >
                <div className={`mask_cart ${showCart === true ? 'showmask' : 'hidemask'}`} onClick={()=>{setShowCart(false)}}></div>
                <span onClick={()=>{setShowCart(false)}} className="x_cart"> x </span>
                <div className={`cart_container bg-special ${showCart === true ? 'showcart' : 'hidecart'}`}>
                    <div className="cart_header"><h1>Carrinho</h1></div>
                    <div className="cart_items">
                        {cartItems?.map((e)=>{
                            return(
                                <div className="item_cart" key={e._id}>
                                    <div className="cart_img">
                                        <Image src='/imgs/hero04.jpg' width="460" height="460" alt="cart_img"/>
                                    </div>
                                    <div className="cart_item_content">
                                        <div className="cart_item_title">{e.name}</div>
                                        <div className="cart_item_commands">
                                            <div className="qty_controls">
                                                <button className="cart_btn"> - </button>
                                                <span>{e.qty}</span>
                                                <button className="cart_btn"> + </button>
                                            </div>
                                            <span>R$ {e.discount > 0 ? DiscountToBRL(e) : PriceToBRL(e)}</span>
                                        </div>
                                    <div className="cart_trash"><Image src='/trash.svg' width='30' height='30' alt="delete"/></div>
                                    </div>    
                                </div>
                            )}
                        )}
                        <div className="total_price">
                            <span>Total : </span>
                            <span>R$ {totalPrice.toFixed(2).replace(".",",")}</span>
                        </div>
                        <div className="cart_buy_btn">
                            <button> Finalizar Comprar </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}