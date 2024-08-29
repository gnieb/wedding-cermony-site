export default function Timeline () {
    return(
        
        <div className="">
            <div className="sm:pt-10 pt-64 w-full font-bold text-4xl flex justify-start  items-center">10.05.2024</div>
            <div className=" font-serif w-full text-2xl flex justify-center items-center"></div>
            {/* Event Timeline */}
            <div>
                <div className="flex pt-10 font-bold text-2xl justify-start ">THE CEREMONY</div>
                <div className="flex justify-start items-center ">
                    <div className="sm:text-xl">
                        <p>Chapel Hill</p>
                        <p>1:30 PM</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex pt-10 font-bold text-2xl w-full justify-start">SOCIAL HOUR</div>
                <div className="flex justify-start items-center">
                    <div className="sm:text-xl">
                        <p>The Greenhouse at the Port of Rochester</p>
                        <p>3:30 PM</p>
                    </div>
                </div>
            </div>

            <div className="py-10">
                <div className="flex font-bold text-2xl w-full justify-start">RECEPTION</div>
                <div className="flex justify-start items-center ">
                    <div className="sm:text-xl">
                        <p>The Greenhouse at the Port of Rochester</p>
                        <p>5:30 PM</p>
                        <a className="underline" rel="noreferrer" href="https://www.google.com/maps/dir//1000+N+River+St,+Rochester,+NY+14612/@43.2556887,-77.6901864,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89d6b79df3c5e215:0x3190c8b68dffa0e7!2m2!1d-77.6077857!2d43.2557183?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank">DIRECTIONS</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}