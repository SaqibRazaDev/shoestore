import "./maindash.css"
import { Cards } from "./Cards/cards"
import { OrderTable } from "./orderTable/table"

export function Maindash(){
    return(
        <div className="maindash">
            <h1>Dashboard</h1>
            <Cards />
            <OrderTable/>
        </div>
    )
}