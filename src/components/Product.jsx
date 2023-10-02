import React from 'react'
import ShimmerUI from './ShimmerUI'
// import api from '../assets/API'
import  { cartstate } from '../context/ProductContext'
const Product = () => {

const {state,dispatch} = cartstate();

let {products,cart,FillterProd}=state

    //  FillterProd=products;

console.log(products);
console.log(FillterProd);
const addToCartById = (productId) => {
    const productToAdd = FillterProd.find(item => item.id === productId);
    if (productToAdd) {
      dispatch({ type: "ADD_TO_CART", payload: productToAdd });
    }
  };

    return FillterProd.length==0 ? <ShimmerUI/> :
    //  FillterProd.length==0 ? FillterProd=products :
      
    (
        <>
            <div className="mt-6 grid grid-cols-1 drop-shadow-lg gap-x-6 gap-y-10  sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {FillterProd.map((product) => (
                    <div key={product.id}>
                    <div  className="group relative ">
                        <div className="aspect-h-1  aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                                src={product.image}
                                alt={product.id}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>

                        <div className="p-4 flex justify-between ">
                            <div className='text-left '>
                                <h3 className="text-sm w-1/2 text-gray-700">
                                    <a href={product.id}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.title}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500"> ⭐ {product.rating.rate}</p>
                            </div>
                            <p className="text-sm font-medium w-[130px] text-gray-900"> $ {Math.floor(product.price) }</p>
                        </div>
                       
                    </div>
 <button
        
                            onClick={()=>addToCartById(product.id)}
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Add to bag
                        </button>
                    </div>
                ))}

            </div>
        </>
    )
}

export default Product