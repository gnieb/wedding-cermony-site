import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";



export default function MobileNav () {
    const [open, setOpen] = useState(false)
    const handleMenu = () => {
        setOpen(!open)
    }

    return(
        <div className="bg-darkO flex md:hidden">
            <div className="" 
            onClick={handleMenu}>
                <FontAwesomeIcon className="p-2" icon={faBars} size="xl"/>
            </div>

        { open? 
        <div className="w-screen bg-darkO flex flex-col items-centerm justify-center">
            <div><a className="p-2" href="/about" alt="">US</a></div>
            <div><a className="p-2" href="/timeline" alt="">THE TIMELINE</a></div>
            <div><a className="p-2" href="/bridalparty">THE BRIDAL PARTY</a></div>
        </div> 
        : <></>}

        </div>
    )
};
