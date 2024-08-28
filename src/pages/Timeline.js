export default function Timeline () {
    return(
        
        <div className="">
            <div className="sm:pt-10 pt-32 w-full font-bold text-4xl flex justify-start  items-center">10.05.2024</div>
            <div className=" font-serif w-full text-2xl flex justify-center items-center"></div>
            {/* Event Timeline */}
            <div>
                <div className="flex pt-10 font-bold text-2xl justify-start ">THE CEREMONY</div>
                <div className="flex justify-start items-center ">
                    <div className="text-xl">
                        <p>Chapel Hill</p>
                        <p>1:30 PM</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex pt-10 font-bold text-2xl w-full justify-start">SOCIAL HOUR</div>
                <div className="flex justify-start items-center">
                    <div className="text-xl">
                        <p>The Greenhouse at the Port of Rochester</p>
                        <p>3:30 PM</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex pt-10 font-bold text-2xl w-full justify-start">RECEPTION</div>
                <div className="flex justify-start items-center ">
                    <div className="text-xl">
                        <p>The Greenhouse at the Port of Rochester</p>
                        <p>5:30 PM</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}