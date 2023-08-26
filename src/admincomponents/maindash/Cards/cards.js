// import { CardsData } from "../../Admindashboard/Data/data"
import "./cards.css"
import { Card } from "./card/card"
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
import { useEffect ,useState } from "react"
import axios from "axios"

export function Cards(){
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get("/orderdata")
        .then(response => {
          console.log(response.data);
          setData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
  let Sales = 0;
  let Revenue = 0;
    const Data = data.map((data)=>{
          Sales += +data.items;
          Revenue += +data.Amount;

    })

    const CardsData = [
        {
            title:"Sales",
            color:{
                backGround: "white",
                boxShadow: "0px 10px 20px 0px #fff"
            },
            barvalue : Sales,
            value: Sales,
            png : UilUsdSquare,
            series : [
                {
                    name:"Sales",
                    data:[31,40,28,51,42,109,100]
                }
            ],
        },
        {
            title:"Revenue",
            color:{
                backGround: "white",
                boxShadow: "0px 10px 20px 0px #fff"
            },
            barvalue : Sales*1.5,
            value: Revenue,
            png : UilMoneyWithdrawal,
            series : [
                {
                    name:"Revenue",
                    data:[10,110,58,30,72,40,40]
                }
            ],
        },
        {
            title:"Expenses",
            color:{
                backGround: "white",
                boxShadow: "0px 10px 20px 0px #fff"
            },
            barvalue : Sales/2,
            value:Revenue/2,
            png : UilClipboard,
            series : [
                {
                    name:"Expenses",
                    data:[30,80,58,181,92,19,100]
                }
            ],
        },
    
    ]
    
    return(
        <div className="Cards">
            {
                CardsData.map((card,id)=>{
                    return(
                        <div className="parentcontainer">
                            <Card 
                            title={card.title}
                            png= {card.png}
                            series = {card.series}
                            barvalue = {card.barvalue}
                            value = {card.value}
                            color ={card.color}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}