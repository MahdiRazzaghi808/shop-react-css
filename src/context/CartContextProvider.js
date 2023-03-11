import React, { useReducer, createContext } from 'react';

const initialState = {
    selectedProduct: [],
    total: 0,
    checkout: false
}

const cartReducer = (state, action) => {
    console.log(action);
    // console.log(state);
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedProduct.find(item => item.id === action.payload.id)) {
                state.selectedProduct.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                checkout:false,
                selectedProduct: [...state.selectedProduct]
            }
        case "REMOVE_ITEM":
            const newSelectedProduct = state.selectedProduct.filter(item => item.id !== action.payload.id);
            
            console.log(newSelectedProduct);
            return {
                ...state,
                selectedProduct: [...newSelectedProduct]
            }
        case "INCREASE":
            const indexI = state.selectedProduct.findIndex(item => item.id === action.payload.id);
            state.selectedProduct[indexI].quantity++;
            return {
                ...state,
            }
        case "DECREASE":
            const indexD = state.selectedProduct.findIndex(item => item.id === action.payload.id);
            state.selectedProduct[indexD].quantity > 1 ? state.selectedProduct[indexD].quantity-- : state.selectedProduct[indexD].quantity = 1
            return {
                ...state,
            }
        case "CHECKOUT":
            return {
                selectedProduct: [],
                total: 0,
                checkout: true
            }
        case "CLEAR":
            return {
                selectedProduct: [],
                total: 0,
                checkout: false
            }
        default:
            return state;
    }
}

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;