import React from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

import logo from "../../asset/logo.svg"

import styled from 'styled-components'
import styles from './menu.module.css';


const Div = styled.div`
@media (max-width: 992px){
      transform:${props => props.open ? "translateX(0)" : "translateX(100%)"}
}

`

const Menu = ({ open }) => {

    return (
        <>
            <Div className={styles.wrapper} open={open}>

                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                </div>

                <ul className={styles.menu}>

                    <li>
                        <Link to="/" >Home</Link>
                    </li>

                    <li>
                        <Link to="/products">Products</Link>
                    </li>

                    <li>
                        <a href="#">Support</a>
                    </li>

                    <li>
                        <a href="#">About Us</a>
                    </li>
                </ul>

                <div>
                    <FaUserAlt />
                    <span>account</span>
                </div>

            </Div>
            <div className={styles.user}>
                <Link to="/">
                    <FaUserAlt />
                    <span>account</span>
                </Link>


                <Link to="/cart">
                    <FaShoppingCart />
                    <span>cart</span>
                </Link>

            </div>



        </>
    )

}

export default Menu
