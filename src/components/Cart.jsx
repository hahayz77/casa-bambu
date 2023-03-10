import Image from "next/image";
import { useStateContext } from "../context/StateContext";
import { DiscountToBRL } from "@/functions/DiscountToBRL";
import { PriceToBRL } from "@/functions/PriceToBRL";
import { InsideCartLogic } from "@/functions/InsideCartLogic";
import { urlFor } from "@/lib/SanityClient";


export function Cart() {
    const { showCart, setShowCart, cartItems, setCartItems, totalQuantities, setTotalQuantities, totalPrice, setTotalPrice } = useStateContext();
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
                                        <Image src={urlFor(e.image[0].asset._ref).url()} width="460" height="460" alt="cart_img"/>
                                    </div>
                                    <div className="cart_item_content">
                                        <div className="cart_item_title">{e.name}</div>
                                        <div className="cart_item_commands">
                                            <div className="qty_controls">
                                                <button className="cart_btn" onClick={() => InsideCartLogic(e, 'dec', cartItems, setCartItems, totalQuantities, setTotalQuantities, totalPrice, setTotalPrice )}> - </button>
                                                <span>{e.qty}</span>
                                                <button className="cart_btn" onClick={() => InsideCartLogic(e, 'inc', cartItems, setCartItems, totalQuantities, setTotalQuantities, totalPrice, setTotalPrice)}> + </button>
                                            </div>
                                            <span>R$ {e.discount > 0 ? DiscountToBRL(e) : PriceToBRL(e)} un</span>
                                        </div>
                                    <div className="cart_trash" onClick={() => InsideCartLogic(e, 'rem', cartItems, setCartItems, totalQuantities, setTotalQuantities, totalPrice, setTotalPrice)}><Image src='/trash.svg' width='30' height='30' alt="delete"/></div>
                                    </div>    
                                </div>
                            )}
                        )}
                        <div className="total_price">
                            <span>Total : </span>
                            <span>R$ {totalPrice}</span>
                            {/* <span>R$ {parseFloat(totalPrice).toFixed(2).replace('.',',')}</span> */}
                        </div>
                            {console.log(totalPrice)}
                        <div className="cart_buy_btn">
                            <button> Finalizar Comprar </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}