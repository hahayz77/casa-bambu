import { RouterDataControl } from "@/functions/RouterDataControl";
import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const StateContext = ( { children } ) => {
    const [showCart, setShowCart] = useState(false);
    const [navRoute, setNavRoute] = useState("");
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    
    RouterDataControl(setNavRoute, setShowCart, cartItems, setCartItems, setTotalQuantities, setTotalPrice);

    useEffect(() => {
        // Retrieve the count value from local storage if it exists
        if (typeof window !== 'undefined') {
          const storedCart = JSON.parse(window.localStorage.getItem('cart'));
          if (storedCart) {
            setCartItems(storedCart.cartItems);
            setTotalQuantities(storedCart.totalQuantities);
            setTotalPrice(storedCart.totalPrice);
          }
        }
      }, []);

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