
import { useNavigate } from "react-router-dom";
import { useDispatch  ,useSelector} from "react-redux";
import {Link} from "react-router-dom"

export function Front(){
    return(
<section class="text-gray-600 body-font py-4 relative">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-5xl text-5xl mb-4 font-bold mx-auto text-gray-900 text-center">Play With Electric Nike <br/> Adapt 2.0 Sneakers      </h1>
      <p class="mb-8 leading-relaxed text-center">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center mx-auto">
        <button class="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg"><Link to={"/signup"}>Join Now</Link></button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2  px-6 focus:outline-none hover:bg-gray-200  rounded text-lg">Explore</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 before:w-1/2 h-1/2 rounded-full bg-blue-700">
      <img class="object-cover object-center rounded -rotate-12 transition-1 hover:-rotate-0" alt="hero" src="images/hero.png"/>
    </div>
  </div>
</section>
    )
}