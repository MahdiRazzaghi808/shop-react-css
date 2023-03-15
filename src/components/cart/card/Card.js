import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2'
import styles from './card.module.css'
import { FaTrashAlt } from "react-icons/fa";

import { CartContext } from "../../../context/CartContextProvider"


const Card = ({ product }) => {

    const { id, image, title, quantity, price } = product
    const name = `${title.split(" ")[0]} ${title.split(" ")[1]}`

    const { state, dispatch } = useContext(CartContext);

    const removeProductHandler = (product) => {
        Swal.fire({
            title: 'محصول حذف شود؟',
            showDenyButton: true,
            confirmButtonText: 'فعلا نه',
            denyButtonText: `بله`,
        }).then((result) => {
            if (result.isDenied) {
                Swal.fire({
                    icon: 'info',
                    text: 'محصول از سبد حذف شد',
                    confirmButtonText: 'باشه',
                })
                dispatch({ type: 'REMOVE_ITEM', payload: product });

            }
        })
    }

    return (
        <div className={styles.wrapper}>

            <img src={image} alt="product" />
            <h2><Link to={`/product/${+id}`}>{name}</Link></h2>
            <div className={styles.priceWrapper}>
                <p><span onClick={() => dispatch({ type: 'DECREASE', payload: product })}>-</span> <span>{quantity}</span> <span onClick={() => dispatch({ type: 'INCREASE', payload: product })}>+</span></p>
                <p>{(quantity * price).toFixed(2)}$</p>
            </div>

            <span onClick={() => removeProductHandler(product)}>
                <FaTrashAlt />
            </span>

        </div>
    )
}

export default Card
