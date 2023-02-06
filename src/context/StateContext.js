import { RouterDataControl } from "@/functions/RouterDataControl";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ( { children } ) => {
    const teste = "UseContext()!";
    const [showCart, setShowCart] = useState(false);
    const [navRoute, setNavRoute] = useState("");
    const [cart, setCart] = useState([1,1,1,1,1,1]);

    
    RouterDataControl(setNavRoute,setShowCart);

    return(
        <Context.Provider value={{
            teste,
            showCart, 
            setShowCart, 
            cart, 
            setCart,
            navRoute,
        }}>
        {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);