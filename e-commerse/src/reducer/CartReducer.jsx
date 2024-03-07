import React from 'react'

const CartReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            const {id, color, amount, data} = action.payload
            //tackle existing product

            let existingProduct = state.cart.find((curr) => {
                return curr.id == id + color;
            });
            if(existingProduct){
                let updatedProduct = state.cart.map((curr) => {
                    if(curr.id == id + color) {
                        let newAmount = curr.amount + amount;
                        return{
                            ...curr,
                            amount: newAmount,
                        }
                    }else {
                        return curr;
                    }
                });
                return{
                    ...state,
                    cart: updatedProduct,
                }
            }else{
            const cartProduct = {
                id:id + color,
                name:data.name,
                color,
                amount,
                image: data.image[0].url,
                price: data.price,
                max:data.stock,
            }
            return{
                ...state,
                cart: [...state.cart, cartProduct]
            };
            }
        case "DECREASE_VALUE":
            let updatedDecreaseProduct = state.cart.map((curr) => {
                if(curr.id == action.payload){
                    let decAmount = curr.amount - 1;
                    if(decAmount <= 0){
                        decAmount = 1;
                    }
                    return{
                        ...curr,
                        amount: decAmount,
                    };
                } else {
                    return curr;
                }
            })
            return {
                ...state,
                cart: updatedDecreaseProduct
            }
        case "INCREASE_VALUE":
            let updatedIncreseProduct = state.cart.map((curr) => {
                if(curr.id == action.payload){
                    let IncreAmount = curr.amount + 1;
                    if(IncreAmount >= curr.max){
                        IncreAmount = curr.max;
                    }
                    return{
                        ...curr,
                        amount: IncreAmount,
                    };
                } else {
                    return curr;
                }
            })
            return {
                ...state,
                cart: updatedIncreseProduct
            }
            case "CART_TOTAL_PRICE":

                let total_Price = state.cart.reduce((initial, curr) => {
                    let {price, amount} = curr;
                    initial = initial + (price * amount);
                    return initial
                }, 0)

                return {
                    ...state,
                    total_Price,
                }

        case "CART_TOTAL_ITEMS":
            let updatedCartVal = state.cart.reduce((initial, curr) =>{
                let {amount} = curr;

                initial = initial + amount;
                return initial;
            }, 0);

            return{
                ...state,
                total_Items: updatedCartVal,
            }

        case "ROMOVE_ITEM":
            let updatedCart = state.cart.filter((curr) => curr.id !== action.payload)
            return {
                ...state, 
                cart: updatedCart,
            }
        case "CLEAR_CART":
            return{
                ...state,
                cart: [],
            }

    }
    return state;
}


export default CartReducer