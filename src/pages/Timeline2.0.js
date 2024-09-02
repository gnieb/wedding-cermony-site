export default function Timeline2 () {
    return (
        <section className ="bg-gray-200 min-h-screen flex justify-center pt-20">
            <div className="w-80">
                <h2 classNAme="text-5xl mb-7">THE TIMELINE</h2>
                <ul>
                    <li className="relative">
                        <div className="before:absolute ">
                            <svg height="12" width="12" xmlns="http://www.w3.org/2000/svg">
                            <circle r="45" cx="50" cy="50" fill="red" />
                            </svg>
                        </div>
                        <div className="text-sm ">
                            <p>1:30 PM</p>
                            <p className="mt-2">CEREMONY STARTS</p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
    )
};
