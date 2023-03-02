import React, { useState, useEffect } from 'react'


import ShowProduct from '../../showProduct/ShowProduct'

import axios from 'axios'

// style
import styles from "./Popular.module.css"


const Popular = () => {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        axios.all([
            axios.get('https://fakestoreapi.com/products/1'),
            axios.get('https://fakestoreapi.com/products/5'),
            axios.get('https://fakestoreapi.com/products/12'),
            axios.get('https://fakestoreapi.com/products/20')
        ])
            .then(
                response => setPopular(response.map(item => item.data))
            )
            .catch(error => console.log(error))
    }, [])





    return (
        <div>
            <div className="container">

                <h2 className={styles.title}>Popular</h2>


                <div className={styles.wrapper}>
                    {popular.map(item => <ShowProduct key={item.id} product={item}/>)}
                </div>


            </div>
        </div>
    )




}

export default Popular
