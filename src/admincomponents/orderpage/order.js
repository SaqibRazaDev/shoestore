import { SideBar } from "../sidebar/sidebar"
import { OrderPage } from "./orderdetail/orderdet" 

export function OrderDetails(){
    return(
        <div className="Userspage">
        <div className="userglass">
            <SideBar/>
            <OrderPage/>
        </div>
    </div>
    )
}