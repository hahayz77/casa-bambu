import { RouterDataControl } from "@/functions/RouterDataControl";
import { createContext, useContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'

const Context = createContext();

export const StateContext = ( { children } ) => {
    const [showCart, setShowCart] = useState(false);
    const [navRoute, setNavRoute] = useState("");
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    
    RouterDataControl(setNavRoute,setShowCart);


    return(
        <Context.Provider value={{
            showCart, 
            setShowCart, 
            cartItems, 
            setCartItems,
            totalQuantities,
            setTotalQuantities,
            totalPrice, 
            setTotalPrice,
            navRoute,
        }}>
        {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);