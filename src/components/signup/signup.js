import "./signup.css"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { FaKey } from "@react-icons/all-files/fa/FaKey";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify"
// import { useNavigation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


export function SignUp(){
    const {register,handleSubmit,formState:{errors}} =useForm();
    const nav = useNavigate();

    const signupdata =(Data)=>{

        if(Data.password == Data.cpassword ){
            Data.type = "Customer"
            
            axios.post("/signup", Data).then((res)=>{
                    
                    toast.success("User Created Successfully");
                    nav("/login");
            })
        }else{
            toast.warn("Password Dosn't Matched");
            
        }
        
        
    }
    return(
        // <div className="main">
        //     <div className="form">
        //         <div className="Form-Data">
        //             <h1>SIGN UP</h1>
        //             <form onSubmit={handleSubmit(signupdata)}>
        //                 <div className="content">
        //                     <FaUser className="icons"></FaUser>
        //                     <input type="text" placeholder="Enter Your Name" {...register("name",{required: true})}/>
        //                     {errors.name && errors.name.type =="validate" ? <div className="error">Alerady Exits</div> : ""}
        //                     {errors.name && errors.name.type == "required" ? <div className="error">Please Enter Your Name</div> : ""}
        //                 </div>
        //                 <div className="content">
        //                     <FaEnvelope className="icons"></FaEnvelope>
        //                     <input type="email" placeholder="Enter Your Email" {...register("email",{required: true})}/>
        //                     {errors.email && errors.email.type == "required" ? <div className="error">Please Enter Your Email</div> : ""}
        //                 </div>
        //                 <div className="content">
        //                     <FaKey className="icons"></FaKey>
        //                     <input type="password" placeholder="Enter Your Password" {...register("password",{required: true , minLength:6})}/>
        //                     {errors.password && errors.password.type =="minLength" ? <div className="error">Please Enter Min 8 Character</div> : ""}
        //                     {errors.password && errors.password.type == "required" ? <div className="error">Please Enter Your Password</div> : ""}
        //                 </div>
        //                 <div className="content">
        //                 <FaKey className="icons"></FaKey>
        //                     <input type="password" placeholder="Enter Confirmed Password" {...register("cpassword",{required: true , minLength:6})}/>
        //                     {errors.password && errors.password.type =="minLength" ? <div className="error">Please Enter Min 8 Character</div> : ""}
        //                     {errors.password && errors.password.type == "required" ? <div className="error">Please Enter Your Password</div> : ""}
        //                 </div>
        //                 <div className="Btns">
        //                     <button className="btne">SignUp</button>
        //                 </div>
        //             </form>
        //         </div>
        //         <div className="img-box">
        //             <img src="vector.png"/>
        //                     <a><Link className="link" to={"/login"}>I Have Already Acount?</Link></a>
        //         </div>
        //     </div>
        // </div>

        <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                Flowbite    
            </a> */}
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                    <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit(signupdata)}>
                        <div>
                            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="text" name="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Name" {...register("name",{required: true})}/>
                                  {errors.name && errors.name.type =="validate" ? <div className="error">Alerady Exits</div> : ""}
                                  {errors.name && errors.name.type == "required" ? <div className="error">Please Enter Your Name</div> : ""}
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" {...register("email",{required: true})}/>
                            {errors.email && errors.email.type == "required" ? <div className="error">Please Enter Your Email</div> : ""}
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  {...register("password",{required: true , minLength:6})}/>
                            {errors.password && errors.password.type =="minLength" ? <div className="error">Please Enter Min 8 Character</div> : ""}
                        </div>
                        <div>
                            <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("cpassword",{required: true , minLength:6})}/>
                              {errors.password && errors.password.type == "required" ? <div className="error">Please Enter Your Password</div> : ""}
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                            </div>
                            <div class="ml-3 text-sm">
                              <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blu-700 focus:ring-4 focus:outline-none focus:ring-blu-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blu-600 dark:hover:bg-blu-700 dark:focus:ring-blu-800">Create an account</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account?<Link className="link" to={"/login"}>Login Here</Link> <a class="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link class="font-medium text-primary-600 hover:underline dark:text-primary-500" className="link" to={"/login"}>Login Here</Link></a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section> 
    )
}
