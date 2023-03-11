import React from 'react'
import styles from './Category.module.css'


import jewelry from '../../../asset/category/jewelery.svg'
import electronics from '../../../asset/category/electronics.svg'
import men from "../../../asset/category/men's clothing.svg"
import women from "../../../asset/category/women's clothing.svg"
import { Link } from 'react-router-dom'

const Category = () => {

  return (
    <div>

      <div className="container">
        <div className={styles.categories}>
          <h2>Category</h2>

          <div className={styles.wrapper}>

            <div className={styles.category}>
              <Link to="/products/jewelery" >


                <div>
                  <img src={jewelry} alt="jewelry" />
                </div>
                <h3>jewelry</h3>
              </Link>
            </div>

            <div className={styles.category}>
              <Link to="/products/electronics">
                <div>
                  <img src={electronics} alt="electronics" />
                </div>
                <h3>electronics</h3>
              </Link>
            </div>

            <div className={styles.category}>
              <Link to="/products/women's clothing" >
                <div>
                  <img src={women} alt="jewelry" />
                </div>
                <h3>women's clothing</h3>
              </Link>
            </div>

            <div className={styles.category}>
              <Link to="/products/men's clothing">
                <div>
                  <img src={men} alt="jewelry" />
                </div>
                <h3>men's clothing</h3>
              </Link>

            </div>



          </div>

        </div>
      </div>
    </div>
  )

}
export default Category
