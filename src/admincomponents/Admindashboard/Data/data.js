import {
    UilEstate,
    UilClipboard,
    UilUser,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilMoneyWithdrawal,
    // UilContact

} from "@iconscout/react-unicons"
import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom"

export const SideBarData = [
    {
        // link:'/admindash',
        icon: UilEstate,
        heading:<Link to={'/admindash'}>Dashboard</Link>
    },
    {
        // link:'/adminorder',
        icon: UilClipboard,
        heading:<Link to={'/adminorder'}>Orders</Link>
    },
    {
        // link:'/adminorder',
        icon: UilUser,
        heading:<Link to={'/adminuser'}>Users</Link>
    },
    {
        // link:'/adminproducts',
        icon: UilPackage,
        heading:<Link to={'/adminproducts'}>Products</Link>
    },
    {
        // link:'/adminproductlist',
        icon: UilPackage,
        heading:<Link to={'/adminproductlist'}>List Product</Link>
    },
    {
        // link:'/adminanalytics',
        icon: UilChart,
        heading:<Link to={'/adminanalytics'}>Analytics</Link>
    },
]



// export const CardsData = [
//     {
//         title:"Sales",
//         color:{
//             backGround: "white",
//             boxShadow: "0px 10px 20px 0px #fff"
//         },
//         barvalue : "50",
//         value:"25,970",
//         png : UilUsdSquare,
//         series : [
//             {
//                 name:"Sales",
//                 data:[31,40,28,51,42,109,100]
//             }
//         ],
//     },
//     {
//         title:"Revenue",
//         color:{
//             backGround: "white",
//             boxShadow: "0px 10px 20px 0px #fff"
//         },
//         barvalue : "70",
//         value:"14,270",
//         png : UilMoneyWithdrawal,
//         series : [
//             {
//                 name:"Revenue",
//                 data:[10,110,58,30,72,40,40]
//             }
//         ],
//     },
//     {
//         title:"Expenses",
//         color:{
//             backGround: "white",
//             boxShadow: "0px 10px 20px 0px #fff"
//         },
//         barvalue : "60",
//         value:"4,379",
//         png : UilClipboard,
//         series : [
//             {
//                 name:"Expenses",
//                 data:[30,80,58,181,92,19,100]
//             }
//         ],
//     },

// ]


export const UserUpdate =[
    {
        img: <UilUser/>,
        name : "James Bond",
        product : "  has Ordered Apple Smart Watch",
        time: '45 Second ago'
    },
    {
        img: <UilUser/>,
        name : "Andrew Thomas",
        product : "  has Ordered Apple Smart Watch",
        time: '2 minutes ago'
    },
    {
        img:<UilUser/>,
        name : "Iron Man",
        product : "  has Ordered Apple Smart Watch",
        time: '20 minutes ago'
    },
    {
        img: <UilUser/>,
        name : "Brucelly",
        product : "  has Ordered Apple Smart Watch",
        time: '25 minutes ago'
    }
]