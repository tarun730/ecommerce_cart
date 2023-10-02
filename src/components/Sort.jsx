
import React, { useContext, useState } from 'react'
import { cartstate } from '../context/ProductContext'
const Sort = () => {

    const { state: { products,FillterProd }, dispatch } = cartstate();
    // const [checked,setchecked]= useState(false)
    // let options = [
    //     { value: 'hight to low', label: 'hight to low', checked: false },
    //     { value: 'low to high', label: 'low to high', checked: false },
    //     { value: 'high rating', label: 'high rating', checked: true },
    //     { value: 'low rating', label: 'low rating', checked: false },
    //     { value: 'green', label: 'Green', checked: false },
    //     { value: 'purple', label: 'Purple', checked: false },
    // ]
    let category = products.map((i) => i.category)
    function removeDuplicates(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
    let p = removeDuplicates(category)
    console.log("item");

    return (
        <div className="w-1/2 text-left p-4">
            {/* 2nd column  */}
            <div className="">
                <p className='bg-gray-100 p-2'>Category</p>

                <ul>
                    {p.map((i) => <li key={i}>
                         <button
                         className='text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800  focus:outline-none focus:bg-blue-700 focus:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'
                         onClick={()=>dispatch({ type: `${i}` , payload: products })} >{i}</button> 
                       
                       
                         </li>)}
                 
                    




                </ul>
                <button className='b' onClick={()=>dispatch({ type: "SET_PRODUCTS" , payload: products })} >RESET</button> 
            </div>

            {/* 3rd column  */}
            <div className="border-none bg-gray-100 p-2">
                <form action="#" className='flex flex-col gap-2'>
                    <label htmlFor="sort">Sort by</label>
                    <select
                    onChange={(e)=>{
                        console.log(e.target.value)
                        dispatch({ type: `${e.target.value}` , payload: FillterProd })}}
                        name="sort"
                        id="sort"
                        className=""
                    >

                        <option >Choose</option>
                        <option value="lowest" >Price(lowest)</option>
                        {/* <option value="#" disabled></option> */}
                        <option value="highest">Price(highest)</option>
                        {/* <option value="#" disabled></option> */}
                        <option value="a-z">a-z</option>
                        {/* <option value="#" disabled></option> */}
                        <option value="z-a">z-a</option>
                    </select>
                </form>
            </div>
        </div>

        // <div className="space-y-4 w-1/2">
        //     {options.map((option, optionIdx) => (
        //         <div key={option.value} className="flex items-center">
        //             <input
        //                 id={`${optionIdx}`}
        //                 name={`${optionIdx}[]`}
        //                 defaultValue={option.value}
        //                 type="checkbox"
        //                 defaultChecked={option.checked}
        //                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        //             />
        //             <label
        //                 htmlFor={`${optionIdx}`}
        //                 className="ml-3 text-sm text-gray-600"
        //             >
        //                 {option.label}
        //             </label>
        //         </div>
        //     ))}
        // </div>



    )
}

export default Sort