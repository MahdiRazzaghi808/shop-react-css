import React from 'react'
import styles from './Category.module.css'


import jewelry from '../../../asset/category/jewelery.png'
import electronics from '../../../asset/category/electronics.png'
import men from "../../../asset/category/men's clothing.png"
import women from "../../../asset/category/women's clothing.png"

const Category = () => {

  return (
    <div>

      <div className="container">
        <div className={styles.categories}>
          <h2>Category</h2>

          <div className={styles.wrapper}>

            <a className={styles.category}>


              <div>
                <img src={jewelry} alt="jewelry" />
              </div>
              <h3>jewelry</h3>
            </a>

            <a className={styles.category}>
              <div>
                <img src={electronics} alt="electronics" />
              </div>
              <h3>electronics</h3>
            </a>

            <a className={styles.category}>
              <div>
                <img src={women} alt="jewelry" />
              </div>
              <h3>women's clothing</h3>
            </a>

            <a className={styles.category}>
              <div>
                <img src={men} alt="jewelry" />
              </div>
              <h3>men's clothing</h3>
            </a>


          </div>

        </div>
      </div>
    </div>
  )

}
export default Category
