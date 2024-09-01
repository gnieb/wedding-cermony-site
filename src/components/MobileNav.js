
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";



export default function MobileNav () {


    return(
        <div className=" p-2 block relative md:hidden">
            <div 
                className="flex fixed top-2 text-sm font-bold items-center m-1" 
                >
               <a
                className="bg-darkO  rounded-full p-2"
                href="/#bridalparty" >CEREMONY</a>
            </div>
            <div 
                className="flex fixed top-12 text-sm font-bold items-center m-1" 
                >
               <a
                className="bg-darkO rounded-full p-2"
                href="/#bridalparty" >BRIDAL PARTY</a>
            </div>

        </div>
    )
};
