import "./products.css"
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function Products(){
    const [ads, setAds] = useState([]);

    useEffect(() => {
        axios.get("/adData")
            .then(response => {
                console.log(response.data);
                setAds(response.data); 
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    console.log(ads);

    return(
        <section id="All-Producted">
        <h1>Top Rated Products</h1>
        <div class="container">
        {ads.length > 0 ? (
            <>
        {
            ads.map((data)=>{
                return <>
            <div class="product-boxed">
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
                </div>
                <h3> price: <span> ${data.adprice}</span></h3>
                <Link to={"/details/"+data._id}><img src={data.adimg}/></Link>
        </div>
                </>
            })
        }
        </>
        ) : (
            <p>Loading...</p>
        )}
        </div>

    </section>
    )
}