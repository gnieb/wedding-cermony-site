// import { Link } from "react-router-dom";


export const Nav = () => {
    return (
        <div className="hidden font-bold w-screen h-10 bg-darkO md:flex items-center flex-wrap justify-between">
            <div >
                <a className="m-5"  alt="" href="/about">Us</a>
                
            </div>
            <div>
                <a className="m-5" alt="" href="/timeline">The Timeline</a>
                <a className="m-5" alt="" href="/bridalparty">The Bridal Party</a>
            </div>
        </div>
    );
};