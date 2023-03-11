import React, { createContext, useEffect, useState } from 'react'


// API
import { getData } from '../services/getData'
import { categoriesFunction } from "../helper/categories"

export const ProductsContext = createContext()


const ProductContextProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchApi = async () => {
            const fetchData = await getData("/products");
            const products = categoriesFunction(fetchData)
            products.all = fetchData
            setData(products)
        }

        fetchApi()

    }, [])


    return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductContextProvider
