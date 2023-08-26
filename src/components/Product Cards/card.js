import "./card.css"
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export function Cards(){
    let [Ads,setAds] = useState([]);


    useEffect(()=>{
        let coming=async()=>{
            let resp= await axios.get("/adData")
            setAds(resp.data)
        }
        coming();
    },[]);

    return(
        <section id="All-Products">
        <h1>Top Rated Products</h1>
        <div class="container">
        {
            Ads.map(function(data){
                return <>
            <div class="product-boxes">
                <h1>{data.title}</h1>
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
                <h3> price: <span> ${data.adprice}</span></h3>
                <Link to={"/details/"+data._id}><img src={data.adimg}/></Link>
        </div>
                </>
            })
        }
        </div>

    </section>
    )
}