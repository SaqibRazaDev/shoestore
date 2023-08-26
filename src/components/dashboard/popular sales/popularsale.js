import "./popularsale.css"
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
import { FaStar } from "@react-icons/all-files/fa/FaStar";


export function Popularsales(){
    return(
        <section id="popular-Sales">
        <h1>Popular Sales</h1>
        <div class="popularSales-box">
            <div class="popular">
                <div class="content">
                    <h1>Nike Addapt BB 2.0</h1>
                    <h3>Men Running Shoes </h3>
                    <div class="Review-box">
                        <h2><FaStar></FaStar>  4.9</h2>
                        <span><FaShoppingCart/></span>
                    </div>
                    <h3> price: <span> $200</span></h3>
                </div>
                <div class="img">
                    <img src="images/nike-adapt-bb.png"/>
                </div>
            </div>
            <div class="popular">
                <div class="content">
                    <h1>Nike Addapt BB 2.0</h1>
                    <h3>Men Running Shoes </h3>
                    <div class="Review-box">
                    <h2><FaStar></FaStar>  3+</h2>
                        <span><FaShoppingCart/></span>
                    </div>
                    <h3> price: <span> $200</span></h3>
                </div>
                <div class="img">
                    <img src="images/nike-air-red.png"/>
                </div>
            </div>
            <div class="popular">
                <div class="content">
                    <h1>Nike Martine Rose</h1>
                    <h3>Men Running Shoes </h3>
                    <div class="Review-box">
                    <h2><FaStar></FaStar>  4+</h2>
                        <span><FaShoppingCart/></span>
                    </div>
                    <h3> price: <span> $200</span></h3>
                </div>
                <div class="img">
                    <img src="images/nike-adapt-bb-smart.png"/>
                </div>
            </div>
        </div>
    </section>
    )
}