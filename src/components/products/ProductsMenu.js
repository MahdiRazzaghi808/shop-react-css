import React, { Component } from 'react'
import styles from './ProductsMenu.module.css'
import { Link, useParams } from 'react-router-dom'

const ProductsMenu = () => {
    const params = useParams()
    return (

        <div >
            <div className="container">
                <div className={styles.wrapper}>
                <ul className={styles.menu}>
                    <li>
                        <Link to="/products" className={params.category === undefined ? styles.active : styles.a}>All</Link>
                    </li>
                    <li>
                        <Link to="/products/jewelery" className={params.category === "jewelery" ? styles.active : styles.a}>jewelry</Link>
                    </li>
                    <li>
                        <Link to="/products/electronics" className={params.category === "electronics" ? styles.active : styles.a}>electronics</Link>
                    </li>
                    <li>
                        <Link to="/products/women's clothing" className={params.category === "women's clothing" ? styles.active : styles.a}>women's clothing</Link>
                    </li>
                    <li>
                        <Link to="/products/men's clothing" className={params.category === "men's clothing" ? styles.active : styles.a}>men's clothing</Link>
                    </li>
                </ul>
                </div>
           
            </div>
        </div >
    )

}

export default ProductsMenu
