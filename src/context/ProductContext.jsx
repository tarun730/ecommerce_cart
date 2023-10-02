import { createContext, useContext, useEffect, useReducer, useState } from "react";
import React from 'react';
import cartReducer from "./reducers";

export const Appcontext = createContext();

const ProductContext = ({ children }) => {
  const [item, setItem] = useState([]);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setItem(data);
        
        dispatch({ type: "SET_PRODUCTS", payload: data }); // Update products in the reducer
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [

      
// {id: 2, title: 'Mens Casual Premium Slim Fit T-Shirts ', price: 22.3, description: 'Slim-fitting style, contrast raglan long sleeve, t…e round neckline includes a three-button placket.', category: "men's clothing"},

// {id: 3, title: 'Mens Cotton Jacket', price: 55.99, description: 'great outerwear jackets for Spring/Autumn/Winter, …and or son in this thanksgiving or Christmas Day.', category: "men's clothing"}



    ],
    FillterProd:[]
  });

  return <Appcontext.Provider value={{ state, dispatch }}>{children}</Appcontext.Provider>;
}

export default ProductContext;

export const cartstate = () => {
  return useContext(Appcontext);
}

