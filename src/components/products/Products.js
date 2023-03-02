import React, { useContext } from 'react'

// context
import { ProductsContext } from '../../context/ProductContextProvider'
// components
import ProductsMenu from './ProductsMenu'
import ShowProduct from '../showProduct/ShowProduct'
// style
import styles from './products.module.css'

const Products = (props) => {

    const products = useContext(ProductsContext);

    return (
        <div className={styles.main}>
            <div className="container">
                <div className={styles.wrapper}>
                    <ProductsMenu />
                    <div className={styles.product}>
                        {console.log(products)}
                        {

                            products.map((product) => <ShowProduct key={product.id} product={product}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Products
