import React, { useContext } from 'react'
import styles from "./total.module.css"
import Swal from 'sweetalert2'
import { CartContext } from "../../context/CartContextProvider"
function Total() {
    const { state, dispatch } = useContext(CartContext);


    const totalHandler = (state) => {
        const sumTotalArray = state.selectedProduct.map((item) => item.quantity * item.price)
        return sumTotalArray.reduce((prev, next) => prev + next, 0)
    }

    const removeAllHandler = () => {
        if (state.selectedProduct.length) {

            Swal.fire({
                text: 'Remove all products?',
                showDenyButton: true,
                confirmButtonText: 'Not yet',
                denyButtonText: `Yes`,
            }).then((result) => {
                if (result.isDenied) {
                    Swal.fire({
                        icon: 'info',
                        text: 'All products have been removed',
                    })
                    dispatch({ type: 'CLEAR' })

                }
            })
        } else {
            Swal.fire({
                icon: 'error',
                text: 'Your shopping cart is empty :(',
            })
        }

    }

    const checkOutHandler = () => {
        if (state.selectedProduct.length) {
            Swal.fire({
                icon: 'success',
                text: 'Payment was successful :))',
            })
            dispatch({ type: 'CHECKOUT' })
        } else {
            Swal.fire({
                icon: 'error',
                text: 'Your shopping cart is empty :(',
            })
        }
    }

    return (
        <div className={styles.total}>
            <p>Total: {totalHandler(state).toFixed(2)}$ </p>
            <div>
                <button onClick={() => removeAllHandler()}>clear</button>
                <button onClick={() => checkOutHandler()}>check out</button>
            </div>
        </div>
    )
}

export default Total
