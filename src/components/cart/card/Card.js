import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import styles from './card.module.css'
import { FaTrashAlt } from "react-icons/fa";

import { CartContext } from "../../../context/CartContextProvider"

const Card = ({ product }) => {
    const { id, image, title, quantity, price } = product
    const name = `${title.split(" ")[0]} ${title.split(" ")[1]}`
    const { state, dispatch } = useContext(CartContext)
    return (
        <div className={styles.wrapper}>

            <img src={image} alt="product" />
            <h2><Link to={`/product/${+id}`}>{name}</Link></h2>
            <div className={styles.priceWrapper}>
                <p><span onClick={() => dispatch({ type: 'DECREASE', payload: product })}>-</span> <span>{quantity}</span> <span onClick={() => dispatch({ type: 'INCREASE', payload: product })}>+</span></p>
                <p>{(quantity * price).toFixed(2)}$</p>
            </div>

            <span onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: product })}>
                <FaTrashAlt />
            </span>

        </div>
    )
}

export default Card
