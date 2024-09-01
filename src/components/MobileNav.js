import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";



export default function MobileNav () {
    // const [open, setOpen] = useState(false)
    // const handleMenu = () => {
    //     setOpen(!open)
    // }

    return(
        <div className=" py-2 block md:hidden">
            <div 
                className="flex items-center h-full" 
                >
                <FontAwesomeIcon className="p-2" icon={faBars} size="xl"/>
            </div>

        {/* { open? 
        <div className="items-center justify-center ">
            <div className="p-2"><a className=" text-xl" href="/" alt="">10.05.2024</a></div>
            <div className="p-2"><a className=" text-xl" href="/bridalparty">THE BRIDAL PARTY</a></div>
        </div> 
        : 
        <div></div> } */}

        </div>
    )
};
