
export default function Destinations(){
    return(
        <div className=" text-center my-20 justifay-between ">
            <h1 className="text-[#FF6403]">Choose Your</h1>
            <h1 className="text-7xl my-8 font-bold">Perfect Holiday</h1>
            <div className="border-b-4 border-[#FF6403] my-6 mx-40"></div>
            <h1 className="mb-16">The most searched holiday destinations.</h1>
            <div className="mx-4 grid lg:grid-cols-3" >
                <div className="">
                     <img src="/img/holiday-1.jpg.png" alt="" />
                     <h1 className="my-2 font-bold">Switzerland - 7 Days</h1>
                     <h1 className="text-[#FF6403]">$270</h1>
                </div>

                <div>
                     <img src="/img/holiday-2.jpg.png" alt="" />
                     <h1 className="my-2 font-bold">St. Mortiz Ski Package</h1>
                     <h1 className="text-[#FF6403]">$450</h1>
                </div>

                <div>
                     <img src="/img/holiday-3.jpg.png" alt="" />
                     <h1 className="my-2 font-bold">Big in Japan</h1>
                     <h1 className="text-[#FF6403]">$522</h1>
                </div>

                <div>
                     <img src="/img/holiday-4.jpg.png" alt="" />
                     <h1 className="my-2 font-bold">Japan Subway Ticket</h1>
                     <h1 className="text-[#FF6403]">$255</h1>
                </div>

                <div>
                     <img src="/img/holiday-5.jpg.png" alt="" />
                     <h1 className="my-2 font-bold">Helicopter Flight</h1>
                     <h1 className="text-[#FF6403]">$250</h1>
                </div>

                <div>
                     <img src="/img/holiday-6.jpg.png" alt="" />
                     <h1 className="my-2 font-bold">Snorkeling Adventure</h1>
                     <h1 className="text-[#FF6403]">$412</h1>
                </div>
                
            </div>
            <div className="justify-items-center">
                     <button className=" bg-[#74CC01] text-white rounded px-10 py-2 text-xs mt-10">
                     VIEW ALL
                     </button>
                </div>

        </div>
    )
}