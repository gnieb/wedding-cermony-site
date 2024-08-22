// import { useState } from "react";
// import "./src/fonts/AnethaFaithSignaturecopy.otf"
import "../fonts/AnethaFaithSignaturecopy.otf"
import "../index.css";
import us1 from '../photos/us1.jpg'

console.log(us1)



export const Home = () => {

    return(
        <div className="flex">
            <div className="font-scripty text-9xl">THE MCCLARINS</div>
            <div className="w-1/2">
                <img src={us1} alt="us" />
            </div>
        </div>
    )
};
