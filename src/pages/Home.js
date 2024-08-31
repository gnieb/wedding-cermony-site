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
                    THE McCLARINS
                </div>
        
                <div className="w-1/2 absolute z-30 right-10 top-20 ">
                    <img src={us1} alt="us" />
                </div>
            </div>
            <div className="relative z-40 ">
            <div className="text-4xl sm:text-7xl text-darkO font-bold font-anetha">Welcome to Our Wedding!</div>
                <Timeline />
                
            </div>
            <div className="pb-10 md:py-10 text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-darkO font-anetha">Thank you for celebrating with us</div>
        </div>
    )
};
