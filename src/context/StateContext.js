import { createContext, useContext } from "react";

const Context = createContext();

export const StateContext = ( { children } ) => {
    const teste = "UseContext()!";

    return(
        <Context.Provider value={{
            teste,
        }}>
        {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);