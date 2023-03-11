import React from 'react'
import { NavLink,Link } from 'react-router-dom';
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

const Menu = ({ open, setOpen }) => {

    return (
        <>
            <Div className={styles.wrapper} open={open}>

                <div className={styles.logo}>
                    <Link to="/" onClick={() => setOpen(false)}><img src={logo} alt="logo" /></Link> 
                </div>

                <ul className={styles.menu}>

                    <li>
                        <NavLink className={({ isActive }) =>isActive ? styles.active : ""} to="/" onClick={() => setOpen(false)}>Home</NavLink>
                    </li>

                    <li>
                        <NavLink className={({ isActive}) => isActive ? styles.active : ""} to="/products" onClick={() => setOpen(false)}>Products</NavLink>
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


                <NavLink className={({ isActive }) =>isActive ? styles.active : ""} to="/cart">
                    <FaShoppingCart />
                    <span>cart</span>
                </NavLink>

            </div>



        </>
    )

}

export default Menu
