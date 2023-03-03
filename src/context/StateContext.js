import { AddOnCart } from "@/functions/AddOnCart";
import { CartLogic } from "@/functions/CartLogic";
import { RouterDataControl } from "@/functions/RouterDataControl";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ( { children } ) => {
    const teste = "UseContext()!";

    const [showCart, setShowCart] = useState(false);
    const [navRoute, setNavRoute] = useState("");
    RouterDataControl(setNavRoute,setShowCart);

    const [cartItems, setCartItems] = useState([]);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    return(
        <Context.Provider value={{
            teste,
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