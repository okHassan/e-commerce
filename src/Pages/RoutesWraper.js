import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import CartDrawer from '../Components/CartDware';

const RoutesWraper = () => {
  return (
    <div>
        <Header />
            <Outlet />
        <Footer />
        <CartDrawer />
    </div>
  )
}

export default RoutesWraper