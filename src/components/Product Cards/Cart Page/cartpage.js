import { useState } from "react"
import "./cartpage.css"
import { useDispatch, useSelector } from "react-redux";
import {
  UilTrash, UilCheck
} from "@iconscout/react-unicons"
import { toast } from "react-toastify";
import axios from "axios";

export function CartPage(){
  let dispatch = useDispatch();
  
  const cartproduct = useSelector(function(data){
    return data.userData.cartdata;
  });

    const userdata = useSelector(function(store){
      return store.userData.currentuser || {} ;
  });

    let Amount = 0;
    let items = 0;
    
    let data = cartproduct.map((data,index)=>{
      Amount += data.totalAmount;
      if(index >= 0){
        items +=1
      }
    })
    let totalAmount = Amount + 4 ;

    const confirm =()=>{

      if(userdata){
        // cartproduct.Amount = Amount
        // cartproduct.items = items
        const orderData = {
          Amount : Amount,
          items:items,
          delivered : false,
          cartproduct: cartproduct,
          userdata: userdata._id
        };
        toast.success("Your Order send Successfully ");
        
        axios.post("/confirmorder",orderData).then((res)=>{
          console.log(res);
        });
      }else{
        toast.warning("Please login first")
      }

    }

    return(
      <div class="h-auto bg-gray-300">
      <div class="py-12">
        
      
        <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
            <div class="md:flex ">
                <div class="w-full p-4 px-5 py-5">
    
                  <div class="md:grid md:grid-cols-3 gap-2 ">
    
                    <div class="col-span-2 p-5">
    
                      <h1 class="text-xl font-medium ">Shopping Cart</h1>

                      <div class="flex justify-between items-center pt-6 mt-6 border-t">
                      <div class="pr-4">
            <span class="text-[15p] font-medium">Product Name</span>
          </div>
          <div class="pr-4">
            <span class="text-[15p] font-medium">Quantity</span>
          </div>
          <div class="pr-4">
            <span class="text-[15p] font-medium">Price</span>
          </div>
          <div class="pr-4">
            <span class="text-[15p] font-medium">Delete</span>
          </div>
                      </div>


  {cartproduct.map((data,meraindex)=>{ 
  return (
    <div class="flex justify-between items-center pt-6 mt-6 border-t">

      <div class="flex items-center">
        <img src={data.adimg} width="60" class="rounded-full" />

        <div class="flex flex-col ml-3">
          <span class="text-md font-medium w-24 overflow-visible">{data.title}</span>
          {/* <span class="text-xs font-light text-gray-400">#{data._id}</span> */}
        </div>
      </div>
        {/* <div class="flex justify-center items-center"> */}
          <div class="pr-8 flex cursor-pointer">
            {/* <span class="font-semibold" onClick={()=> count==0 ? null : setCount(count-1)}>-</span> */}
            <span class="text-[15p] pr-3 font-semibold w-24 text-center md:text-center m-auto ">{data.counts}</span>
            {/* <span class="font-semibold" onClick={()=> setCount(count+1)}>+</span> */}
          </div>

          <div class="pr-8">
            <span class="text-[15p] font-medium">${data.adprice}</span>
          </div>

          <div>
            <i class="fa fa-close text-xs font-medium"></i>
          </div>
        {/* </div> */}
        <span class="pr-4" onClick={()=>{
          cartproduct.splice(meraindex,1);
          dispatch({
            type:"Del-Ad",
            payload:meraindex
          })
        }}>
        <UilTrash  />
        </span>

</div>
    );
  })}

                    </div>

                    {/* ..................Subtotal... */}

                    <div class=" p-5 bg-gray-800 rounded overflow-hidden">
    
                      <span class="text-xl font-medium text-gray-100 block pb-3">Product Details</span>

                      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-auto">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Total Item</p>
          <p class="text-gray-700">{items}</p>
        </div>
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">${Amount}</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping </p>
          <p class="text-gray-700">$4.00</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">${totalAmount} USD</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-20 mt-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Check Out
</button>
<div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-96 max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Order Confirmation
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-6 flex space-y-6 justify-center items-center">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  You Want to Confirm Your Order  </p>   <UilCheck/> 
            </div>
            {/* <!-- Modal footer --> */}
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={confirm}>I accept</button>
                <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>
      </div>
    
                      
                    </div>
    
                    
                  </div>
                  
                   
               </div>
            </div>
        </div>
        </div>
    </div>
    )
}
