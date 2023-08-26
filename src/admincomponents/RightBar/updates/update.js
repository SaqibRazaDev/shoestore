import "./update.css"
import { UserUpdate } from "../../Admindashboard/Data/data"

export function Updates(){
    return(
        <div className="updates">
            <h2>Updates</h2>
            {
                UserUpdate.map((data)=>{
                return <div className="updte">
                   <span className="usericon">{data.img}</span>
                    <div className="noti">
                        <div>
                            <span>{data.name}</span>
                            <span>{data.product}</span>
                        </div>
                        <span>{data.time}</span>
                    </div>
                        </div>
                })
            }
        </div>
    )
}