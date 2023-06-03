import React, { useEffect } from 'react';
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// 
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Product from "./components/product/Product"
import Cart from './components/cart/Cart';
import ScrollToTop from './helper/ScrollToTop';


function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />

        <Routes>

          <Route path='/product/:id' element={<Product />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/' element={<Home />} />

          <Route path='/*' element={<Navigate to="/" />} />
        </Routes>

        <Footer />

        <ScrollToTop />

      </CartContextProvider>
    </ProductContextProvider>
  )
}

export default App;
