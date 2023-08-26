import "./header.css"
// import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FaShoppingBag } from "@react-icons/all-files/fa/FaShoppingBag";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




export function Header(){
    let nav = useNavigate();
let dispatch=useDispatch();

const userdata = useSelector(function(store){
            return store.userData.currentuser || {} ;
        });
        console.log(userdata);

// ............cartcounternum
let [count,setCount]=useState();

const cartproduct = useSelector(function(data){
  return data.userData.cartdata;
});
useEffect(function(){
  let items = 0;
  let data = cartproduct.map((data,index)=>{
    if(index >= 0){
      items +=1
    }
  });
  setCount(items);
})


    return(

      userdata.type == "admin" ? <>  </> : <>
<nav class="bg-blue-700 border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center">
      <img src="images/logo.png" class="h-10 mr-3" />
      {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}

  </a>
  <div class="flex md:order-2">
    <div class="flex">
      <button type="button" class="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{nav("/cartProducts")}}><FaShoppingBag class="icons -z-10 text-2xl "></FaShoppingBag></button>
      <span class="w-5 h-6  absolute text-center rounded-full text-white justify-center items-center bg-slate-700">{count}</span>
    </div>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    {userdata.name == undefined ? <>
      
      <li>
        <a  class="block py-2 pl-3 pr-4 text-white font-semibold text-2xl bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500" aria-current="page"><Link className="link" to={"/"}> Home</Link></a>
      </li>
      <li>
        <a  class="block py-2 pl-3 pr-4 text-white font-semibold text-2xl bg-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500" aria-current="page"><Link className="link" to={"/signup"}> Join Now</Link></a>
      </li>
      </> : <>
      <li>
{userdata.name && <span class="self-center text-white pr-8 justify-center items-center text-2xl font-semibold whitespace-nowrap dark:text-white ">Welcome, <b className="text-2xl">{userdata.name}</b></span>}
        {/* <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><Link className="link" to={"/"}> Home</Link></a> */}
      </li>
      <li>
        <a  class="block py-2 pl-3 pr-4 "><Link class="block py-2 pl-3 pr-4 text-white  font-semibold rounded text-2xl hover:bg-white hover:text-black md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to={"/"}> Home</Link></a>
      </li>
      <li>
        <a  class="block py-2 pl-3 pr-4 "><Link class="block py-2 pl-3 pr-4 text-white  font-semibold  rounded text-2xl hover:bg-white hover:text-black md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to={"/store"}> Store</Link></a>
      </li>
      <li>
        <a  class="block py-2 pl-3 pr-4 "><Link class="block py-2 pl-3 pr-4 text-white font-semibold  rounded text-2xl hover:bg-white hover:text-black md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to={"/login"} onClick={()=>
                                                                         dispatch({
                                                                          type:"del",
                                                                          payload:""
                                                                         })
                                                                      }> Logout</Link></a>
      </li>
      </>
      }
    </ul>
  </div>
  </div>
</nav>


 </>
    )
}







// {/* <header class="text-white bg-blue-700 sticky body-font">
// <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//   <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//       <img src="images/logo.png" className="relative w-32"/>
//   </a>
//   {userdata.name && <h1 className="items-center justify-center pl-10  ">Welcome, <b className="text-2xl">{userdata.name}</b></h1>}
//   <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
//   {userdata.name == undefined ? 
//   <>
//         <a class="mr-12 font-bold text-2xl hover:text-gray-900 "><Link className="link" to={"/"}> Home</Link></a>
//     <a class="mr-12 font-bold text-2xl hover:text-gray-900 "><Link className="link" to={"/signup"}> Join Now</Link></a>
//   </> :
//   <>
//     {/* <a class="mr-5 hover:text-gray-900"></a> */}
//     <a class="mr-12 font-bold text-2xl hover:text-gray-900 "><Link className="link" to={"/"}> Home</Link></a>
//     <a class="mr-12 font-bold text-2xl hover:text-gray-900 "><Link className="link" to={"/store"}> Store</Link></a>
//     <a class="mr-12 font-bold text-2xl hover:text-gray-900 " ><Link className="link" to={"/login"} onClick={()=>
//                                                                        dispatch({
//                                                                         type:"del",
//                                                                         payload:""
//                                                                        })
//                                                                     }> Logout</Link></a>
//     </>
//   }
//   </nav>
//   <button class="inline-flex items-center justify-center py-1 px-3 focus:outline-none text-3xl" onClick={()=>{nav("/cartProducts")}}>
//       <h1 className="items-center justify-center cunttag"><span className=" text-1/2 text-red-700 count"></span></h1>
//   <FaShoppingBag className="icons -z-10"></FaShoppingBag>
//   </button>
// </div>
// </header> */}