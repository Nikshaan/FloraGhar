import { useState, useContext, useEffect } from "react";
import { constants } from "../assets/constants";
import { Link } from "react-router-dom";
import { ShopContext } from "./ShopContext";

const Searchbar = () => {

    const [showSearch, setShowSearch] = useState(false);
    const {search , setSearch, cartCount} = useContext(ShopContext);

    useEffect(()=> {
        if(showSearch == false){
            setSearch('')
        }
    })

  return (
    <div className="bg-[#1A5319] border-2 border-black px-3 py-2 flex flex-col gap-3 lg:flex-row justify-between items-center sticky top-0 z-50">
        <Link to='/'>
            <div className="flex gap-2 items-center cursor-pointer">
                <img className="h-9 sm:h-16" src={constants.logo} alt="logo"/>
                <h1 className="text-white tracking-wider text-2xl sm:text-3xl italic font-Raleway">FloraGhar</h1>
            </div>
        </Link>
        {
            showSearch===true?<div className="flex gap-4 flex-1 justify-center items-center w-full">
                <input  value={search} onChange={(e) => setSearch(e.target.value)} className="w-3/4 p-2 rounded-full border-2 border-black px-4 font-semibold" type="text" placeholder="Enter item to search: " />
                </div>:null
        }
        <div className="flex gap-6">
            <img onClick={() => setShowSearch(!showSearch)} className="h-8 p-1 rounded-full bg-white cursor-pointer" src={constants.search_icon} alt="logo"/>
            <div className="group relative">
            <img className="h-8 p-1 rounded-full bg-white cursor-pointer" src={constants.profile_icon} alt="logo"/>
            <div className="group-hover:block hidden absolute -right-14 sm:right-0  pt-2">
                <div className="font-semibold text-nowrap flex flex-col gap-2 w-36 py-3 px-2 bg-[#508D4E] text-white rounded  border-2 border-black">
                    <p className="hover:text-[#1A5319] cursor-pointer font-Raleway  border-2 border-black p-1">My Profile</p>
                    <p className="hover:text-[#1A5319] cursor-pointer font-Raleway  border-2 border-black p-1">Order History</p>
                    <p className="hover:text-[#1A5319] cursor-pointer font-Raleway border-2 border-black p-1">Log Out</p>
                </div>
            </div>
            </div>
            <Link to='/cart'>
                <div className="relative">
                    <img className="h-8 p-1 rounded-full bg-white cursor-pointer" src={constants.cart_icon} alt="logo"/>
                    <p className="absolute -bottom-0.5 -right-1 bg-black text-white px-1 text-sm rounded-full">{cartCount()}</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Searchbar