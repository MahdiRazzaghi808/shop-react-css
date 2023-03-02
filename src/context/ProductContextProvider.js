import React, { createContext, useEffect, useState } from 'react'


// API
import { getData } from '../services/getData'

export const ProductsContext = createContext()


const ProductContextProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchApi = async () => {
            const fetchData = await getData("/products");
            setData(fetchData)
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
