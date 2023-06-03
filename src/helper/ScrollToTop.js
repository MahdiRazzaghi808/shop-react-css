import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();
  
    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })

    }, [pathname]);
  }
  
  export default ScrollToTop;