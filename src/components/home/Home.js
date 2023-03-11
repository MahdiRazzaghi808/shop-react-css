import React, { useEffect, useState } from 'react'

import Slideshow from '../slider/Slider'
import Popular from './popular/Popular'
import Category from './category/Category'
import Newsletters from './newsletter/Newsletters'


// banner images
import image1 from "../../asset/banner/1.jpeg"
import image2 from "../../asset/banner/2.jpg"
import image3 from "../../asset/banner/3.jpg"
import image1Sm from "../../asset/banner/3-sm.jpg"
import image2Sm from "../../asset/banner/1-sm.jpg"
import image3Sm from "../../asset/banner/2-sm.jpg"

import image4 from "../../asset/banner2/black1.jpg"
import image5 from "../../asset/banner2/black2.jpg"

import styles from './home.module.css'

const Home = () => {

    const [slideImages, srtSlideImages] = useState([])


    const slideImagesFunction = () => {
        if (window.innerWidth < 992) {
            srtSlideImages([{ url: [image1Sm] }, { url: [image2Sm] }, { url: [image3Sm] }])
        } else {
            srtSlideImages([{ url: [image1] }, { url: [image2] }, { url: [image3] }])

        }
    }




    useEffect(() => {
        slideImagesFunction()

    }, [])

 
    return (
        <div className={styles.wrapper}>

            <Slideshow image={slideImages} />

            <div className="container">
                <div className={styles.banner}>
                    <div><img src={image4} alt="banner" /></div>
                    <div> <img src={image5} alt="banner" /></div>
                </div>
            </div>

            <Popular />
            <Category />
            <Newsletters />
        </div>
    )
}


export default Home
