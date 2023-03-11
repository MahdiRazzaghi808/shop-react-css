import React, { useContext, useState } from 'react'
import { ProductsContext } from "../../context/ProductContextProvider"
import { CartContext } from "../../context/CartContextProvider"

import { counter } from "../../helper/counter"
import { rate } from '../../helper/rate'

import styles from './product.module.css'

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


import { useParams } from 'react-router-dom';

const Product = () => {
    const params = useParams()
    const id = params.id;

    const products = useContext(ProductsContext).all
    const product = products[id - 1];


    let rating = rate(product.rating.rate);

    const { state, dispatch } = useContext(CartContext);

    const { image, title, description, price } = product;
    const [flag, setFlag] = useState(state.selectedProduct.some(product => product.id === +id));

    const showPriceHandler = () => {
        dispatch({ type: "ADD_ITEM", payload: product });
        setFlag(true);
    }

    const removeProduct = () => {
        dispatch({ type: "REMOVE_ITEM", payload: product });
        setFlag(false);
    }

    const quantity = counter(state.selectedProduct, product.id) ? counter(state.selectedProduct, product.id).quantity : 0

    return (
        <div >
            <div className="container">
                <div className={styles.card}>
                    <div className={styles.image}>
                        {<img src={image} alt="product" />}
                    </div>

                    <div className={styles.explain}>
                        <h3>
                            {title}
                        </h3>


                        <p className={styles.description}>
                            {description}
                        </p>

                        <div className={styles.star}>
                            <div>
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
                            <div className={styles.price}>

                                <p>
                                    {price}$
                                </p>

                                <div style={{ display: flag ? "flex" : "none" }}>
                                    <span onClick={() => dispatch({ type: "DECREASE", payload: product })} >-</span >
                                    <span>{quantity}</span>
                                    <span onClick={() => dispatch({ type: "INCREASE", payload: product })} >+</span >
                                </div>
                            </div>
                        </div>




                        <div className={styles.showPrice}>
                            {
                                !flag ?
                                    <div onClick={showPriceHandler}>
                                        <span >add Cart</span>
                                    </div>
                                    :
                                    <div onClick={removeProduct} style={{ background: "#e40613" }}>
                                        <span >remove cart</span>
                                    </div>

                            }
                        </div>



                    </div>

                </div>
            </div>
        </div>
    )

}

export default Product



// style={this.state.count <= 1 ? { color: "#e1e1e1" } : ""} className={styles.arrow}