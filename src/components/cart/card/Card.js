import React, { useContext } from 'react'
import styles from './card.module.css'
import { FaTrashAlt } from "react-icons/fa";

import { CartContext } from "../../../context/CartContextProvider"

const Card = ({ product }) => {
    const { image, title, quantity, price } = product
    const name = `${title.split(" ")[0]} ${title.split(" ")[1]}`
    const { state, dispatch } = useContext(CartContext)
    return (
        <div className={styles.wrapper}>

            <img src={image} alt="product" />
            <h2>{name}</h2>
            <p>{quantity}</p>
            <p>{(quantity * price).toFixed(2)}</p>
            <span onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: product })}>
                <FaTrashAlt />
            </span>

        </div>
    )
}

export default Card
