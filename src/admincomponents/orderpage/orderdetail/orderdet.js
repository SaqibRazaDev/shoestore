
import * as React from 'react';
import axios from "axios";
import { UserOrder } from './userorder/userorder';
import { useState, useEffect } from "react";
import {
  UilTrash
} from "@iconscout/react-unicons"
import { toast } from "react-toastify";

export function OrderPage() {
  const [data, setData] = useState([]);

  const [currentOrder, setCurrentOrder] = useState({cartproduct:[]});

  useEffect(() => {
    axios.get("/orderdata")
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);



  return (
    <div className="usersdata">
      <h1>Welcome To Order Details Page</h1>
      <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Order Details
                </th>
                <th scope="col" class="px-6 py-3">
                    Total Amount
                </th>
            </tr>
        </thead>
<tbody>
        { data.map((item,meraindex) => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {item.userdata.name}
                </th>
            <td class="px-6 py-4">{item.userdata.email}</td>
            <td class="px-6 py-4"><button onClick={()=>{
              setCurrentOrder(item);
            }} data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                            Details
                          </button></td>
            <td class="px-6 py-4">${item.userdata.Amount}</td>
          </tr>
          ))}
</tbody>
          </table>

          
          <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">
        {/* <!-- Modal content --> */}
        <div class="relative bg-slate-200 rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Order Details
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            {/* <!-- Order Details  --> */}
            <UserOrder currentOrder={currentOrder} />
        </div>
    </div>
</div>


      </div>
    </div>
  );
}