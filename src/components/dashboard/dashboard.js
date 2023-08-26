
import { Front } from "./front/front"
import { Hightlight } from "./Hightlights/highlight"
import { Popularsales } from "./popular sales/popularsale"
import { Cards } from "../Product Cards/card";
import { Footer } from "../Footer/footer";


export function Dashboard(){
    return(
        <>
        <Front></Front>
        <Hightlight></Hightlight>
        <Popularsales></Popularsales>
        <Cards></Cards>
        <Footer></Footer>
        </>
    )
}