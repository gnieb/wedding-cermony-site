// import { useState } from "react";
// import "./src/fonts/AnethaFaithSignaturecopy.otf"
import "../fonts/AnethaFaithSignaturecopy.otf"
import "../index.css";
import us1 from '../photos/us1.jpg'
import Timeline from "./Timeline";

// console.log(us1)



export const Home = () => {

    return(
        <div className="w-screen">
            <div className="relative w-screen h-3/4">
                <div className="z-40 relative w-screen font-scripty text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
                    THE MCCLARINS
                </div>
            
                <div className=" z-10  font-scripty text-5xl sm:text-7xl md:text-8xl  lg:text-9xl">
                    THE MCCLARINS
                </div>
                <div className="w-1/2 absolute z-30 right-10 top-10 ">
                    <img src={us1} alt="us" />
                </div>
            </div>
            <div className="relative z-40 left-16 ">
                <Timeline />
            </div>
            <div className="text-4xl font-anetha">Enjoy!</div>
        </div>
    )
};
