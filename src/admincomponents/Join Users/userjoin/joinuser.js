import "./joinuser.css"
import * as React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import {
  UilTrash
} from "@iconscout/react-unicons"
import { toast } from "react-toastify";

export function UserJoin() {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios.get('/userdata')
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
      <h1>Welcome To Users Data</h1>
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
                    Password
                </th>
                <th scope="col" class="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
<tbody>
        { data.map((item,meraindex) => (
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {item.type == "admin" ? null : <>
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {item.name}
                </th>
            <td class="px-6 py-4">{item.email}</td>
            <td class="px-6 py-4">{item.password}</td>
            <td class="px-6 py-4" onClick={()=>{
              axios.delete("/usersdel?anc="+item._id).then(res=>{
                console.log(res);
              })
                data.splice(meraindex,1);
                setData([...data]);
                toast.warning("User Deleted Successfully")}}
                
                ><UilTrash/></td>
                </>}
                </tr>
          ))}
</tbody>
          </table>
      </div>
    </div>
  );
}