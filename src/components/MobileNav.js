import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";



export default function MobileNav () {
    const [open, setOpen] = useState(false)
    const handleMenu = () => {
        setOpen(!open)
    }

    return(
        <div className="bg-darkO block md:hidden">
            <div className="" 
            onClick={handleMenu}>
                <FontAwesomeIcon className="p-2" icon={faBars} size="xl"/>
            </div>

        { open? 
        <div className="w-screen bg-darkO  items-center justify-center">
            <div className="p-2"><a className=" text-xl" href="/about" alt="">US</a></div>
            <div className="p-2"><a className=" text-xl" href="/timeline" alt="">THE TIMELINE</a></div>
            <div className="p-2"><a className=" text-xl" href="/bridalparty">THE BRIDAL PARTY</a></div>
        </div> 
        : <></>}

        </div>
    )
};
