// import { useState } from "react";
// import "./src/fonts/AnethaFaithSignaturecopy.otf"
import "../fonts/AnethaFaithSignaturecopy.otf"
import "../index.css";
import us1 from '../photos/us1.jpg'

console.log(us1)



export const Home = () => {

    return(
        <div className="flex">
            <div className="absolute z-50 w-screen font-scripty text-6xl sm:text-7xl md:text-8xl lg:text-9xl">THE MCCLARINS</div>
            <div className="absolute top-28 lg:top-40 z-10 w-screen font-scripty text-6xl sm:text-7xl md:text-8xl  lg:text-9xl">THE MCCLARINS</div>
            <div className="w-1/2 absolute z-20 right-10 top-20 ">
                <img src={us1} alt="us" />
            </div>
        </div>
    )
};
