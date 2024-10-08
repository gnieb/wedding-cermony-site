// import { Link } from "react-router-dom";


export const Nav = () => {
    return (
        <div className="hidden font-bold h-12 md:flex p-2 ">
            <div >
                <a className="m-1 fixed top-2 bg-darkO rounded-full p-2"  alt="" href="#/timeline">THE TIMELINE</a>
            </div>
            <div>
                <a className="m-1 fixed top-14 bg-darkO rounded-full p-2" alt="" href="/#bridalparty">THE BRIDAL PARTY</a>
            </div>
            <div>
               <a
                className="m-1 fixed bg-darkO top-[105px] rounded-full p-2"
                href="https://www.zola.com/wedding/graceandnoahgetmarried"
                target="_blank"
                rel="noreferrer" >ZOLA SITE</a>
            </div>


        </div>
    );
};