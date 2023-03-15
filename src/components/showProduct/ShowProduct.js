import React, { useContext } from 'react'

import { CartContext } from "../../context/CartContextProvider"

import { rate } from "../../helper/rate"

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

import styles from './ShowProduct.module.css'
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2'

const ShowProduct = ({ product }) => {

    const name = `${product.title.split(" ")[0]} ${product.title.split(" ")[1]}`
    let rating = rate(product.rating.rate);

    let { state, dispatch } = useContext(CartContext)

    const addCartHandler = product => {
        dispatch({ type: "ADD_ITEM", payload: product });
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: ':) به سبد خرید اضافه شد'
        })

    }

    return (
        <div className={styles.wrapper}>

            <div className={styles.image}>
                <img src={product.image} alt="popular" />
            </div>

            <div className={styles.description}>
                <div>
                    <h4>{name}</h4>
                    <p>{product.price}<span>$</span></p>
                </div>

                <div className={styles.star}>
                    {
                        rating[0].map((item, index) => <FaStar key={index} />)
                    }
                    {
                        rating[1] ? <FaStarHalfAlt /> : ""

                    }
                    {
                        rating[2].map((item, index) => <FaRegStar key={index} />)

                    }
                </div>

            </div>


            <div className={styles.add} >

                {
                    (state.selectedProduct.findIndex(item => item.id === product.id) !== -1) ? <Link to="/cart" className={styles.button} style={{ background: "#22c55e" }}>go cart</Link> : <button className={styles.button} onClick={() => addCartHandler(product)} style={{ background: "#2869ff" }}>add to cart</button>

                }
                <Link to={`/product/${product.id}`} className={styles.details}>details</Link>
            </div>


        </div>
    )

}

export default ShowProduct


