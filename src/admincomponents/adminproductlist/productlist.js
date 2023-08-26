import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./produclist.css"
import { SideBar } from "../sidebar/sidebar";
import axios from "axios";
import { useState } from "react";


export function ProductList(){
    let {register,handleSubmit,formState:{errors}} = useForm();

    const Adform = (addata) =>{ 

        const adsData = new FormData();

        adsData.append("title", addata.title);
        adsData.append("adprice", addata.adprice) 
        adsData.append("adimg",addata.adimg[0]) ;


        axios.post("/productlist",adsData).then((resp)=>{
            toast.success("Your Ad Created Successfully");
        })
        console.log(adsData) ;
    }

    return(
        <>
        
        <div className="Analytics">
        <div className="Analyticsglass">
            <SideBar/>
            <div className="right-col">
            <form onSubmit={handleSubmit(Adform)}>
                    <h2>Put Ad Information</h2>
                    <input type="Text" placeholder="Enter Your Title"{...register("title",{required:true})}/>
                    {errors.title && errors.title.type == "required" ? <div className="error">Please Enter Your Tile</div> : ""}


                    <input type="Text" placeholder="Enter Your Description" {...register("description",{required:true,})}/>
                {errors.description && errors.description.type == "required" ? <div className="error">Please Enter Your Description</div> : ""}

                <input type="Text" placeholder="Enter Your Product Price" {...register("adprice",{required:true,})}/>
                {errors.description && errors.description.type == "required" ? <div className="error">Please Enter Your Product Price</div> : ""}

                <input type="file" placeholder="Select Picture" {...register("adimg",{required:true,})}/>
                {errors.description && errors.description.type == "required" ? <div className="error">Please Select Your Picture</div> : ""}
                <button className="listbtn"> List Product</button>
                </form>
            </div>

    </div>


        </div>
        
    </>
    )
}