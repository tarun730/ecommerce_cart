import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { cartstate } from '../context/productContext';

const Cart = () => {

    const { state, dispatch } = cartstate();
    const { products, cart } = state
    // console.log(state);
    console.log(state);
    const removeProduct = (productId) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: { id: productId } });
    };
    const [total, settotal] = useState()

    useEffect(() => {
        settotal(cart.reduce((acc, cur) => acc + Number(cur.price), 0))
    }, [cart])
    return (


        <div className="pointer-events-auto w-screen max-w-md">


            <div className="flex h-full flex-col  bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                        <div className="text-lg font-medium text-gray-900">Shopping cart</div>
                        <div className="ml-3 flex h-7 items-center">

                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {cart.length == 0 ? <h1>empty</h1> : cart.map((product, index) => (
                                    <li key={index} className="flex py-6">
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <img
                                                src={product.image}
                                                alt={product.image}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div className="flex justify-between text-base text-left font-medium text-gray-900">
                                                    <h3>
                                                        {product.title}
                                                    </h3>
                                                    <p className="ml-4">${Math.floor(product.price)}</p>
                                                </div>
                                                {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                                            </div>
                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                {/* <p className="text-gray-500 flex items-center gap-4">  Qty <button className='text-xl text-gray-950'>    +    </button> {product.qty} <button className='text-xl text-gray-950'> - </button>  </p> */}

                                                <div className="flex">
                                                    <button
                                                        onClick={() => removeProduct(product.id)}
                                                        // onClick={
                                                        //     () => {
                                                        //         dispatch({ type: "REMOVE_FROM_CART", payload: products })
                                                        //     }}
                                                        className="font-medium  text-indigo-600 hover:text-indigo-500"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${Math.floor(total)}</p>
                    </div>
                  <p className="mt-0.5 text-sm text-gray-500"> Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                        <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                            Checkout
                        </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                            or
                            <Link to="/" > <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"

                            >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                            </button></Link> 
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Cart