import React, { useContext } from 'react'
import { CartContext } from "../../context/CartContextProvider"

import styles from './cart.module.css'

import Card from './card/Card'
import Total from "./Total"



const Cart = () => {
    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={styles.cart}>
            <div className="container">
                <div>
                    <Total />
                </div>
                <div className={styles.products}>
                    {
                        state.selectedProduct.map(item => < Card key={item.id} product={item} />)
                    }

                    {/* {console.log(state)} */}
                </div>
            </div>
        </div>
    )
}


export default Cart
