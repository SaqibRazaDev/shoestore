import { SideBar } from "../sidebar/sidebar"
import { UserJoin } from "./userjoin/joinuser"
import "./users.css"

export function UsersJoin(){
    return(
        <div className="Userspage">
        <div className="userglass">
            <SideBar/>
            <UserJoin/>
        </div>
    </div>
    )
}