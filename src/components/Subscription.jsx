import {constants} from "../assets/constants";

const Subscription = () => {
  return (
    <section className="bg-[#508D4E] flex justify-center items-center py-8 lg:py-14 2xl:py-24 flex-col" id="subscription">
    <div className="flex p-12 m-auto justify-evenly flex-col gap-10 lg:flex-row items-center w-full">
        <div className="flex justify-center items-center">
            <div>
                <h1 className="text-black text-3xl md:text-5xl 2xl:text-7xl text-center italic font-serif mb-3">Become a part of the FloraClub!</h1>
                <p className="text-white text-sm md:text-lg italic font-serif text-center">Get exciting offers and discounts upto 40% off on any purchases from our website.</p>
            <div className="mt-6 flex gap-5 justify-center items-center">
                <button className="bg-white p-3 font-mono font-bold hover:bg-black hover:text-white hover:duration-300 rounded-2xl">
                    LEARN MORE
                </button>
                <button className="bg-white p-3 font-mono font-bold hover:bg-black hover:text-white hover:duration-300 rounded-2xl">
                    SUBSCRIBE
                </button>
            </div>
            </div>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
            <img src={constants.sub} alt=""  className="w-full md:w-2/3 lg:w-full rounded-2xl shadow-lg shadow-black"/>
        </div>
    </div>
    <div className="flex overflow-hidden gap-8 w-full bg-[#D6EFD8] my-10 lg:mt-20 py-2">
        <ul className="flex gap-12 justify-center items-center animate-loop-scroll">
            <li className="flex gap-1 whitespace-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex gap-1 whitespace-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex gap-1 whitespace-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex gap-1 whitespace-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex gap-1 whitespace-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex gap-1 whitespace-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex gap-1 whitespace-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex gap-1 whitespace-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex text-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex text-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
        </ul>
        <ul className="flex gap-12 justify-center items-center animate-loop-scroll" aria-hidden="true">
            <li className="flex gap-1 whitespace-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex text-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex text-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex text-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex text-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex text-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex text-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex text-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex text-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
            <li className="flex text-nowrap">
                <p className="text-lg font-bold font-serif">Grow Green Dreams</p>
                <img className="h-7" src={constants.maple} />
            </li>
        </ul>
    </div>
    </section>
  )
}

export default Subscription