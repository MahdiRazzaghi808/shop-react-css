import React, { useContext } from 'react'
import styles from "./total.module.css"


import {CartContext} from "../../context/CartContextProvider"
function Total() {
    const { state, dispatch } = useContext(CartContext);


    const totalHandler = (state) => {
        const sumTotalArray = state.selectedProduct.map((item) => item.quantity * item.price)
        return sumTotalArray.reduce((prev, next) => prev + next , 0)
    }
console.log(state);
    return (
        <div className={styles.total}>
            <p>Total: {totalHandler(state).toFixed(2)}$ </p>
            <div>
                <button onClick={() => dispatch({ type: 'CLEAR'})}>clear</button>
                <button onClick={() => dispatch({ type: 'CHECKOUT'})}>check out</button>
            </div>
        </div>
    )
}

export default Total
