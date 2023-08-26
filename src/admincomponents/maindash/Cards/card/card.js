import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import "./card.css"
export function Card(props){
    const Png = props.png;
    return(
        <div className="CompactCard"
        style={{
            background : props.color.backGround,
            boxshadow : props.color.boxShadow,
        }
        }
        >
            <div className="radialbar">
                <CircularProgressbar
                value={props.barvalue}
                text={`${props.barvalue}%`}
                />
                <span>{props.title}</span>
            </div>
            <div className="Details">
                <Png/>
                <span>${props.value}</span>
                <span>Last 24 Hours</span>
            </div>
        </div>
    )
}