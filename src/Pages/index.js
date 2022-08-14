import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";

import ProductRoute from './ProductRoute';
import HomePage from './HomePage';
import RoutesWraper from './RoutesWraper';


const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={ <RoutesWraper /> }>
            <Route index element={ <HomePage /> } />
            <Route path='/product/:id' element={ <ProductRoute /> } />
            <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem", textAlign: "center" }}>
                            <p>404 Page not found</p>
                        </main>
                    }
            />
        </Route>
    </Routes>
  )
}

export default Pages