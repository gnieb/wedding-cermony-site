import "../fonts/AnethaFaithSignaturecopy.otf"
import "../index.css";
import us1 from '../photos/us1.jpg'
import BridalParty from "./BridalParty";
import Timeline2 from "./Timeline2.0";





export const Home = () => {

    return(
        <div className="w-screen">
            <div className="relative px-5 w-screen h-3/4">
                <div className="z-40 pt-64 relative w-screen font-scripty text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
                    THE 
                </div>
                <div className="z-40 relative w-screen font-scripty text-5xl sm:text-7xl md:text-8xl lg:text-9xl">
                    McCLARINS
                </div>
        
                <div className="w-1/2 absolute z-30 right-10 top-8 sm:top-20 ">
                    <img src={us1} alt="us" />
                </div>
            </div>
            <div  className="relative z-40 ">
            <div className="px-5 text-4xl sm:text-7xl text-darkO font-bold font-anetha">Welcome to Our Wedding!</div>
                
            </div>

            <div id="timeline" className="pt-10 sm:pt-[200px] lg:pt-[400px] xl:pt-[500px]">
                <Timeline2 />
            </div>

            {/* <div 
            id="timeline"
            className="pt-20">
                <Timeline />
            </div> */}
            
            <div 
            id="bridalparty"
            className="pt-20">
                <BridalParty />
            </div>
            <div className="pb-10 md:py-10 text-center text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-darkO font-anetha">Thank you for celebrating with us</div>
        </div>
    )
};
