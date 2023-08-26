import { Maindash } from "../maindash/maindash"
import "./admindash.css"
import { SideBar } from "../sidebar/sidebar"
import { RightBar } from "../RightBar/rightbar"

export function AdminDashboard(){
    return(
        <div className="Mainpage">
            <div className="glass">
                <SideBar/>
                <Maindash/>
                <RightBar/>
            </div>
        </div>
    )
}