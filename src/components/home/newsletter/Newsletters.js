import React from 'react'
import styles from './Newsletters.module.css'
import storeImage from '../../../asset/newsletter.svg'
import { FaRegPaperPlane } from "react-icons/fa"

const Newsletters = () => {

  return (
    <div>
      <div className="container">
        <div className={styles.wrapper}>

          <div className={styles.sendBox}>

            <div className={styles.title}>
              <h4>Get the latest news</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatem dolore voluptates ipsum vero sapiente porro, sint iste veritatis animi nisi doloremque, assumenda tempore minima at hic a placeat praesentium!</p>
            </div>

            <div className={styles.input}>
              <input type="text" />
              <FaRegPaperPlane className={styles.send} />
            </div>

          </div>

          <div className={styles.image}>
            <img src={storeImage} alt="newsletter" />
          </div>


        </div>
      </div>
    </div>
  )

}
export default Newsletters
