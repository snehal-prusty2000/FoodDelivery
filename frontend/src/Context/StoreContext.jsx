import { createContext } from "react";
import { food_list } from "../Assets/assets";

// Context is a powerful tool that can be used to simplify and optimize the development
// experience when working with React and is especially useful when data needs to be shared across multiple components that are not directly related to each other

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const contextValue = {
        food_list 
    }
    return (
    <StoreContext.Provider value = {contextValue} >
        {props.children}
        </StoreContext.Provider >
    )
}

export default StoreContextProvider;