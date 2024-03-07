import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";


const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("userCart");
    // if (localCartData == []) {
    //     return [];
    // } else {
    //     return JSON.parse(localCartData);
    // }

    const parsedData = JSON.parse(localCartData);
    if(!Array.isArray(parsedData)) return [];
    return parsedData;
};

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_Items: "",
    total_Price: "",
    shipping_Fee: 25000,
}


const CartProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    
    
    const addToCart = (id, color, amount, data) => {
        dispatch({type:"ADD_TO_CART", payload: {id, color, amount, data}})
    }

    const increment = (id) => {
        dispatch({type: "INCREASE_VALUE", payload: id})
    }

    const decrement = (id) => {
        dispatch({type: "DECREASE_VALUE", payload: id})
    }
    
    const clearCart = () => {
        dispatch({type:"CLEAR_CART"});
    }


    useEffect(() => {
        dispatch({type:"CART_TOTAL_ITEMS"})
        dispatch({type:"CART_TOTAL_PRICE"})
        localStorage.setItem("userCart", JSON.stringify(state.cart));
    },[state.cart])
    

    const removeItem = (id) => {
        dispatch({type: "ROMOVE_ITEM", payload: id})
    }
    return <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, increment, decrement}} >{children}</CartContext.Provider>
}


const useCartContext = () => {
   return useContext(CartContext);
}


export {CartProvider, useCartContext};