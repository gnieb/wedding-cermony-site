import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function Timeline () {
    return(
        
        <div className="m-5">
            <div className="text-5xl font-serif flex">THE</div>
            <div className="text-5xl font-serif flex">TIMELINE</div>
            {/* <div className="sm:pt-10 pt-8 w-full font-bold text-4xl flex justify-center sm:justify-start items-center">10.05.2024</div> */}
            <div className=" font-serif w-full text-2xl flex justify-center items-center"></div>
            {/* Event Timeline */}
            
            <div>
                <div className="flex pt-10 font-bold text-2xl justify-center ">CEREMONY STARTS</div>
                <div className="flex justify-center text-center items-center ">
                    <div className="sm:text-xl">
                        <p>1:30 PM</p>
                        <div className="flex">
                            <p className=""><FontAwesomeIcon icon={faLocationDot} /></p>
                            <div>
                                <p className="px-2 text-base lg:text-xl">Chapel Hill</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex pt-10 font-bold text-2xl w-full justify-center">SOCIAL HOUR</div>
                <div className="flex justify-center text-center items-center">
                    
                    <div className="sm:text-xl">
                        <p>3:30 PM</p>
                        <div className="flex">
                            <p className=""><FontAwesomeIcon icon={faLocationDot} /></p>
                            <div>
                                <p className="px-2 text-base lg:text-xl">The Greenhouse</p>
                                <p className="px-2 text-base lg:text-xl">at the Port of Rochester</p>
                            </div>
                        </div>
                        <a className="underline font-serif italic" rel="noreferrer" href="https://www.google.com/maps/dir//1000+N+River+St,+Rochester,+NY+14612/@43.2556887,-77.6901864,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89d6b79df3c5e215:0x3190c8b68dffa0e7!2m2!1d-77.6077857!2d43.2557183?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank">DIRECTIONS</a>
                        
                    </div>
                </div>
            </div>

            <div className="py-10">
                <div className="flex font-bold text-2xl w-full justify-center">RECEPTION</div>
                
                <div className="flex justify-center text-center items-center ">
                    
                    <div className="sm:text-xl">
                        <p>5:30 PM</p>
                        <div className="flex">
                            <p className=""><FontAwesomeIcon icon={faLocationDot} /></p>
                            <div>
                                <p className="px-2 text-base lg:text-xl">The Greenhouse</p>  
                                <p className="px-2 text-base lg:text-xl">at the Port of Rochester</p>
                            </div>    
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}