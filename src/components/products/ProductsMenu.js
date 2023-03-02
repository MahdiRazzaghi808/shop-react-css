import React, { Component } from 'react'
import styles from './ProductsMenu.module.css'
import { Link } from 'react-router-dom'

const ProductsMenu = (props) => {

    return (

        <div >
            <div className="container">
                <ul className={styles.menu}>
                    <li>
                        <Link to="/products" className={props.active === undefined ? styles.active : styles.a}>All</Link>
                    </li>
                    <li>
                        <Link to="/products/jewelery" className={props.active === "jewelery" ? styles.active : styles.a}>jewelry</Link>
                    </li>
                    <li>
                        <Link to="/products/electronics" className={props.active === "electronics" ? styles.active : styles.a}>electronics</Link>

                    </li>
                    <li>
                        <Link to="/products/women's clothing" className={props.active === "women's clothing" ? styles.active : styles.a}>women's clothing</Link>
                    </li>
                    <li>
                        <Link to="/products/men's clothing" className={props.active === "men's clothing" ? styles.active : styles.a}>men's clothing</Link>
                    </li>
                </ul>
            </div>
        </div >
    )

}

export default ProductsMenu
