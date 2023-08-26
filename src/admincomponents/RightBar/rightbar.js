import "./rightbar.css"
import { Updates } from "./updates/update"
import { CustomerReview } from "./Customerreview/customerreview"
export function RightBar(){
    return(
        <div className="rightbar">
            <Updates/>
            <CustomerReview/>
        </div>
    )
}