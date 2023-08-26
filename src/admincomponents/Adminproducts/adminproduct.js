import { SideBar } from "../sidebar/sidebar"
import "./adminproduct.css"
import { Products } from "./products/products"

export function AdminProducts(){
    return(
        <div className="adminproduct">
        <div className="glassproduct">
            <SideBar/>
            <Products/>
        </div>
    </div>
    )
}