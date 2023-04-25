import { useRouter } from "next/router";
import { useEffect } from "react";


export function RouterDataControl(setNavRoute, setShowCart, cartItems, setCartItems, setTotalQuantities, setTotalPrice, setQuantity){
    const router = useRouter();
    useEffect(()=>{
        setShowCart(false);
        setNavRoute(router.route);
        setQuantity(1);
        if(cartItems.length <= 0){ // prevent bugs of qty or value of cart
            setTotalQuantities(0);
            setTotalPrice(0);
        }
    },[router.route]);
}