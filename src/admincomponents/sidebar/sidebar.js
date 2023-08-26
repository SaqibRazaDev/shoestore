import "./sidebar.css"
import { SideBarData } from "../Admindashboard/Data/data"
import {UilSignout} from "@iconscout/react-unicons"
import { useState } from "react"
import { Link } from "react-router-dom"

export function SideBar(){
    const [active ,setActive] = useState(0);
    return(
                <div className="sidebar">
            <div className="logo">
                <img  src="images/logo.png"/>
                <span>Nike</span>
            </div>
            <div className="menu">
                {
                    SideBarData.map((item,index)=>{
                        return <>
                        <div className={active == index ? "menu-item active" : "menu-item" } onClick={()=>setActive(index)}>
                            <item.icon/>
                            <span>{item.heading}</span>
                        </div>
                        </>
                    })
                }
                <div className="menu-item">
                    <Link to={"/login"}><UilSignout/></Link>
                </div>
            </div>
        </div>
    )
}

