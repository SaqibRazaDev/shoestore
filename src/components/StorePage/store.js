import { useState } from "react";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import "./store.css"

export function StorePage(){
    const[search,setSearch] = useState("");
    let [Ads,setAds] = useState([]);

    useEffect(()=>{
        let coming=async()=>{
            let resp= await axios.get("/adData")
            setAds(resp.data)
        }
        coming()
    },[]);

    return(
        <>
        <div class="text-gray-600 body-font pt-4 relative ">
                <div className="text-center align-middle flex space-x-3 justify-center">
        <input type="text" placeholder="Seach Here" className="w-1/3 py-3 px-3 rounded-lg bg-blue-800 text-white border-blue-300 outline-none "  onChange={(event)=>{
            setSearch(event.target.value);
        }} />
        <button class="ml-4 inline-flex mr-auto text-white sm:text-2xl  bg-yellow-600 border-0 py-2  px-6 focus:outline-none  rounded text-lg">Search</button>
                </div>
        </div>
        <section id="All-Products">
        <h1>Top Rated Products</h1>
        <div class="container">
        {
            Ads
            .filter((val)=>{
                if(search == ""){
                    return val;
                }
                else if(val.title.toLowerCase().includes(search.toLowerCase())){
                    return val;
                }
            })
            .map((val)=>{
                return <>
                <div class="product-boxes">
                    <h1>{val.title}</h1>
                    <h3>Men Running Shoes </h3>
                    <div class="Review-box">
                        <h2>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar className="mr-2"></FaStar>5+
                        </h2>
                        {/* <span><FaShoppingCart></FaShoppingCart></span> */}
                    </div>
                    <h3> price: <span> ${val.adprice}</span></h3>
                    <Link to={"/details/"+val.id}><img src={val.adimg}/></Link>
                </div>
                    </>
            })
        }
        </div>

    </section>

        </>
    )
}


// Ads.map(function(data){

// })