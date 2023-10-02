import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'
import Sort from './components/Sort'
// import Cart from './components/Cart'
import Navbar from './components/Navbar'
// import ProductContext from './context/ProductContext'
// import { filterprovider } from './context/filterContext'

function App() {
  



  return (
    <>
    
    
<Navbar/>
    <div className='flex flex-row gap-6'>
    {/* <filterprovider> */}
      <Product />
      {/* </filterprovider> */}
        <Sort />

    </div>    
 
    
    </>
  )
}

export default App
