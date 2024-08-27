// import { useState } from "react";
// import "./src/fonts/AnethaFaithSignaturecopy.otf"
import "../fonts/AnethaFaithSignaturecopy.otf"
import "../index.css";
import us1 from '../photos/us1.jpg'
import Timeline from "./Timeline";

// console.log(us1)



export const Home = () => {

    return(
        <div className="">
            <div className="z-40 relative w-screen font-scripty text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
                THE MCCLARINS
            </div>
            <div className=" z-10 relative w-screen font-scripty text-6xl sm:text-7xl md:text-8xl  lg:text-9xl">
                THE MCCLARINS
            </div>
            <div className="w-1/2 relative z-30 right-10 top-20 ">
                <img src={us1} alt="us" />
            </div>
            <div className="">
                <Timeline />
            </div>
        </div>
    )
};
