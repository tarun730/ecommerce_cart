import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { cartstate } from '../context/productContext'

const Navbar = () => {
    const {state:{cart},dispatch} = cartstate();
  return (
    <div >
<nav className=" m-4 bg-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    
    <h1 className='font-bold '>SHOPHERE</h1>
    
    
      <ul className="font-medium ">
    
        <Link to="Cart"> <li
           className="inline text-gray-900 ">Cart - {cart.length}
        </li></Link>
       
      
      </ul>
  
  </div>
</nav>

        
    </div>
  )
}

export default Navbar