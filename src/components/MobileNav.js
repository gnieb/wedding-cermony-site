
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from "@fortawesome/free-solid-svg-icons";



export default function MobileNav () {


    return(
        <div className=" p-2 block relative md:hidden">
            <div 
                className="flex z-50 fixed top-2 text-sm font-bold items-center">
               <a
                className="bg-darkO text-xs rounded-full p-2"
                href="/#timeline" >TIMELINE</a>
            </div>
            <div 
                className="flex fixed text-xs z-50 top-10 font-bold items-center" 
                >
               <a
                className="bg-darkO rounded-full p-2"
                href="/#bridalparty" >BRIDAL PARTY</a>
            </div>

        </div>
    )
};
