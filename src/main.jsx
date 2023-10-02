import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Cart from './components/Cart.jsx'
import App from './App.jsx'
import './index.css'
import ProductContext from './context/ProductContext'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Cart",
    element: <Cart/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ProductContext>
     <RouterProvider router={router} />
     </ProductContext>
  </React.StrictMode>,
)
