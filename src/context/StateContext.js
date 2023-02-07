import { RouterDataControl } from "@/functions/RouterDataControl";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ( { children } ) => {
    const teste = "UseContext()!";
    const [showCart, setShowCart] = useState(false);
    const [navRoute, setNavRoute] = useState("");
    const [cart, setCart] = useState([1,1,1,1,1,1]);
    const [miniCarousel, setMiniCarousel] = useState(['/imgs/hero01.jpg','/imgs/hero02.jpg','/imgs/hero03.jpg','/imgs/hero04.jpg','/imgs/hero05.jpg']);
    const [miniCarouselIndex, setMiniCarouselIndex] = useState(0);

    RouterDataControl(setNavRoute,setShowCart);

    return(
        <Context.Provider value={{
            teste,
            showCart, 
            setShowCart, 
            cart, 
            setCart,
            navRoute,
            miniCarousel,
            setMiniCarousel,
            miniCarouselIndex,
            setMiniCarouselIndex
        }}>
        {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);