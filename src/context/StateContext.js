import { createContext, useContext, useState, useEffect } from "react";
import { RouterDataControl } from '../functions/RouterDataControl'

const Context = createContext();

export const StateContext = ( { children } ) => {
    const teste = "UseContext()!";
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([1,1,1,1,1]);
    
    RouterDataControl(setShowCart);

    return(
        <Context.Provider value={{
            teste,
            showCart, 
            setShowCart, 
            cart, 
            setCart,
        }}>
        {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);