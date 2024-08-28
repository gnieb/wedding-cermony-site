// import { Link } from "react-router-dom";


export const Nav = () => {
    return (
        <div className="hidden font-bold w-screen h-12 bg-darkO md:flex items-center flex-wrap justify-between">
            <div >
                <a className="m-5"  alt="" href="/">10.05.2024</a>
                
            </div>
            <div>
                <a className="m-5" alt="" href="/ceremony">THE CEREMONY</a>
                <a className="m-5" alt="" href="/faqs">PARKING</a>
                <a className="m-5" alt="" href="/bridalparty">THE BRIDAL PARTY</a>
            </div>
        </div>
    );
};