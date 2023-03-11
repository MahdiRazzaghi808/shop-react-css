import React, { useContext } from 'react'

import { useParams } from 'react-router-dom'

// context
import { ProductsContext } from '../../context/ProductContextProvider'
// components
import ProductsMenu from './ProductsMenu'
import ShowProduct from '../showProduct/ShowProduct'
// style
import styles from './products.module.css'

const Products = (props) => {

    const products = useContext(ProductsContext);
    const params = useParams()


    if (products.all) {
        return (
            <div className={styles.main}>
                <div className="container">
                    <div className={styles.wrapper}>
                        <ProductsMenu />
                        <div className={styles.product}>
                            {
                                (params.category ? products[params.category] : products.all).map((product) => <ShowProduct key={product.id} product={product} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Products
