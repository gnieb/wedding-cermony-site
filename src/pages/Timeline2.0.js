import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChurch } from "@fortawesome/free-solid-svg-icons"
// import { faBowlFood } from "@fortawesome/free-solid-svg-icons"
import { faCheese } from "@fortawesome/free-solid-svg-icons"
import { faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons"
// import { faMugSaucer } from "@fortawesome/free-solid-svg-icons"
import { faIcons } from "@fortawesome/free-solid-svg-icons"
import { faCamera } from "@fortawesome/free-solid-svg-icons"
import { faUtensils } from "@fortawesome/free-solid-svg-icons"
import { faMusic } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faCarSide } from "@fortawesome/free-solid-svg-icons"


export default function Timeline2 () {
    return (
        <section className=" min-h-screen flex justify-center pt-20">
            <div className="w-80">
                <h2 className="font-serif text-5xl mb-10">THE TIMELINE</h2>
                <ul>
                <li className="relative flex gap-6">
                        <div className="before:absolute before:left-[13px] before:h-full before:w-[1px] before:bg-gray-400">
                            {/* <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <circle r="8" cx="8" cy="8" fill="gray" />
                            </svg> */}
                            <FontAwesomeIcon className="mt-10 relative z-50 h-6" icon={faChurch} />
                        </div>
                        <div className="text-lg ">
                            <p className="mt-10">1:30 PM</p>
                            <p className="mt-2">CEREMONY STARTS</p>
                        </div>
                    </li>

                    <li className="relative flex gap-6">
                        <div className="before:absolute before:left-[13px] before:h-full before:w-[1px] before:bg-gray-400">
                            {/* <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <circle r="8" cx="8" cy="8" fill="gray" />
                            </svg> */}
                            <FontAwesomeIcon className="mt-10 relative z-50 h-6" icon={faHeart} />
                        </div>
                        <div className="text-lg ">
                            <p className="mt-10">2:00 PM</p>
                            <p className="mt-2">GRAND EXIT</p>
                            <p className=" text-sm">Bring your flower petals!</p>
                        </div>
                    </li>

                    <li className="relative flex gap-6">
                        <div className="before:absolute before:left-[13px] before:h-full before:w-[1px] before:bg-gray-400">
                            {/* <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <circle r="8" cx="8" cy="8" fill="gray" />
                            </svg> */}
                            <FontAwesomeIcon className="mt-10 relative z-50 h-6" icon={faCamera} />
                        </div>
                        <div className="text-lg ">
                            <p className="mt-10">2:00 PM</p>
                            <p className="mt-2">FAMILY & BRIDAL PARTY PHOTOS</p>
                        </div>
                    </li>

                    <li className="relative flex gap-6">
                        <div className="before:absolute before:left-[13px] before:h-full before:w-[1px] before:bg-gray-400">
                            {/* <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <circle r="8" cx="8" cy="8" fill="gray" />
                            </svg> */}
                            <FontAwesomeIcon className="mt-10 relative z-50 h-7" icon={faMartiniGlassCitrus} />
                        </div>
                        <div className="text-lg ">
                            <p className="mt-10">3:30 PM</p>
                            <p className="mt-2 ">SOCIAL HOUR</p>
                            <p className="mt-2 text-base">The Greenhouse at the Port of Rochester</p>
                            <p className="text-base">1000 N. River Street, Rochester, NY 14612</p>
                        </div>
                    </li>

                    <li className="relative flex gap-6">
                        <div className="before:absolute before:left-[13px] before:h-full before:w-[1px] before:bg-gray-400">
                            {/* <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <circle r="8" cx="8" cy="8" fill="gray" />
                            </svg> */}
                            <FontAwesomeIcon className="mt-10 relative z-50 h-6" icon={faIcons} />
                        </div>
                        <div className="text-lg ">
                            <p className="mt-10">4:30 PM</p>
                            <p className="mt-2">INTRODUCTIONS & FIRST DANCES</p>
                        </div>
                    </li>
                    <li className="relative flex gap-6">
                        <div className="before:absolute before:left-[13px] before:h-full before:w-[1px] before:bg-gray-400">
                            {/* <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <circle r="8" cx="8" cy="8" fill="gray" />
                            </svg> */}
                            <FontAwesomeIcon className="mt-10 relative z-50 h-6" icon={faUtensils} />
                        </div>
                        <div className="text-lg ">
                            <p className="mt-10">5:00 PM</p>
                            <p className="mt-2">DINNER</p>
                        </div>
                    </li>

                    <li className="relative flex gap-6">
                        <div className="before:absolute before:left-[13px] before:h-full before:w-[1px] before:bg-gray-400">
                            {/* <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <circle r="8" cx="8" cy="8" fill="gray" />
                            </svg> */}
                            <FontAwesomeIcon className="mt-10 relative z-50 h-6" icon={faMusic} />
                        </div>
                        <div className="text-lg ">
                            <p className="mt-10">6:45 PM</p>
                            <p className="mt-2">DANCE PARTY</p>
                        </div>
                    </li>

                    <li className="relative flex gap-6">
                        <div className="before:absolute before:left-[13px] before:h-full before:w-[1px] before:bg-gray-400">
                            {/* <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <circle r="8" cx="8" cy="8" fill="gray" />
                            </svg> */}
                            <FontAwesomeIcon className="mt-10 relative z-50 h-5" icon={faCheese} />

                        </div>
                        <div className="text-lg ">
                            <p className="mt-10">7:00 PM</p>
                            <p className="mt-2">DESSERT SERVED</p>
                        </div>
                    </li>

                    <li className="relative flex gap-6">
                        <div className="before:absolute before:left-[13px] before:h-full before:w-[1px] before:bg-gray-400">
                            {/* <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                            <circle r="8" cx="8" cy="8" fill="gray" />
                            </svg> */}
                            <FontAwesomeIcon className="mt-10 relative z-50 h-6" icon={faCarSide} />
                        </div>
                        <div className="text-lg ">
                            <p className="mt-10">9:00 PM</p>
                            <p className="mt-2">SEND OFF</p>
                        </div>
                    </li>
                    
                    
                </ul>
            </div>

        </section>
    )
};
