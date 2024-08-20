import { useState } from "react";


export default function MobileNav () {
    const [open, setOpen] = useState(false)
    const handleMenu = () => {
        setOpen(!open)
    }

    return(
        <div className="bg-darkO flex md:hidden">
            <div className="" 
            onClick={handleMenu}>
                MENU ICON
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
