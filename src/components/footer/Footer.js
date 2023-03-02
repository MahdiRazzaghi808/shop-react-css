import React from 'react'
import styles from "./footer.module.css";

import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";






const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>

          <div className={styles.icons}>

            <a href="https://meet.google.com/">
              <FaTelegram />
            </a>
            <a href="https://meet.google.com/">
              <FaFacebook />
            </a>
            <a href="https://meet.google.com/">
              <FaTwitter />
            </a>
            <a href="https://meet.google.com/">
              <FaInstagramSquare />
            </a>

          </div>

          <div className={styles.explain}>

            <div >
              Info.Support.Marketing
            </div>

            <div>
              Terms of Use.Privacy Policy
            </div>

            <div >
              © 2023 made by MR
            </div>
          </div>

        </div>
      </div>
    </div>
  )

}
export default Footer
