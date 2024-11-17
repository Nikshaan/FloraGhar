import { Link } from "react-router-dom";
import { constants } from "../assets/constants";

const Collections = () => {
  return (
    <section id="collections">
    <div className="bg-[#80AF81] flex justify-center items-center pt-10 pb-14 md:px-32">
        <div className="flex flex-col gap-3 mt-4 font-Raleway">
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center items-center">
                <Link to='/plant-collection'>
                <div className="h-[200px] w-[300px] lg:h-[300px] lg:w-[450px] 2xl:w-[750px] 2xl:h-[500px] border-2 border-black relative overflow-hidden">
                    <img className="hover:scale-110 duration-100 h-full w-full" src={constants.plantsCAT} alt=""/>
                    <p className="absolute px-2 bg-black bg-opacity-50 bottom-0 right-0 text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white">PLANTS</p>
                </div>
                </Link>
                <Link to='/seed-collection'>
                <div className="h-[200px] w-[300px] lg:h-[300px] lg:w-[450px] 2xl:w-[750px] 2xl:h-[500px] border-2 border-black relative overflow-hidden">
                    <img className="hover:scale-110 duration-100 h-full w-full" src={constants.seedsCAT} alt=""/>
                    <p className="absolute px-2 bg-black bg-opacity-50 bottom-0 right-0 text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white">SEEDS</p>
                </div>
                </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
                <Link to='/accessory-collection'>
                <div className="h-[200px] w-[300px] lg:h-[300px] lg:w-[450px] 2xl:w-[750px] 2xl:h-[500px] border-2 border-black relative overflow-hidden">
                    <img className="hover:scale-110 duration-100 h-full w-full" src={constants.accessCAT} alt=""/>
                    <p className="absolute px-2 bg-black bg-opacity-50 bottom-0 right-0 text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white">ACCESSORIES</p>
                </div>
                </Link>
                <Link to='/plant-care-collection'>
                <div className="h-[200px] w-[300px] lg:h-[300px] lg:w-[450px] 2xl:w-[750px] 2xl:h-[500px] border-2 border-black relative overflow-hidden">
                    <img className="hover:scale-110 duration-100 h-full w-full" src={constants.careCAT} alt=""/>
                    <p className="absolute px-2 bg-black bg-opacity-50 bottom-0 right-0 text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white">PLANT-CARE</p>
                </div>
                </Link>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Collections