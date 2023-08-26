import { SideBar } from "../sidebar/sidebar"
import { AnalyticsChart } from "./analytics/analytics"
import "./analytic.css";

export function Analytics(){
    return(
        <div className="Analytics">
        <div className="Analyticsglass">
            <SideBar/>
            <AnalyticsChart/>
        </div>
    </div>
    )
}