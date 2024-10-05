import { useContext, useEffect, useState } from "react";
import {constants} from "../assets/constants";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { ShopContext } from "./ShopContext";

const Navbar = () => {

    const [mobile, setMobile] = useState(true)
    const {cartCount} = useContext(ShopContext);

    useEffect(()=> {
        if(window.screen.width > 768){
            setMobile(false)
        }
    })

  return (
    <div className="bg-[#1A5319] px-3 py-2 flex flex-col gap-3 md:flex-row justify-between items-center sticky top-0 z-50">
        <div className="flex gap-2 items-center cursor-pointer">
            <img className="h-9 sm:h-16" src={constants.logo} alt="logo"/>
            <h1 className="text-white tracking-wider text-2xl sm:text-3xl font-serif italic">FloraGhar</h1>
        </div>
        <ul className="flex text-white gap-5 md:gap-6 text-base font-serif">
            <Link activeClass="active" to='home' smooth={true} offset={mobile===false?-80:-120} duration={500}>
                <p className="cursor-pointer">Home</p>
            </Link>
            <Link activeClass="active" to='collections' smooth={true} offset={mobile===false?-60:-120} duration={500}>
                <p className="cursor-pointer">Collections</p>
            </Link>
            <Link activeClass="active" to='subscription' smooth={true} offset={mobile===false?-50:-120} duration={500}>
                <p className="cursor-pointer">Subscription</p>
            </Link>
            <Link activeClass="active" to='about' smooth={true} offset={mobile===false?-60:-120} duration={500}>
                <p className="cursor-pointer">About</p>
            </Link>
        </ul>
        <div className="flex gap-6">
            <img className="h-8 p-1 rounded-full bg-white cursor-pointer" src={constants.search_icon} alt="logo"/>
            <div className="group relative">
            <img className="h-8 p-1 rounded-full bg-white cursor-pointer" src={constants.profile_icon} alt="logo"/>
            <div className="group-hover:block hidden absolute -right-14 sm:right-0  pt-2">
                <div className="font-semibold text-nowrap flex flex-col gap-2 w-36 py-3 px-2 bg-[#508D4E] text-white rounded  border-2 border-black">
                    <p className="hover:text-[#1A5319] cursor-pointer font-serif  border-2 border-black p-1">My Profile</p>
                    <p className="hover:text-[#1A5319] cursor-pointer font-serif  border-2 border-black p-1">Order History</p>
                    <p className="hover:text-[#1A5319] cursor-pointer font-serif border-2 border-black p-1">Log Out</p>
                </div>
            </div>
            </div>
            <NavLink to='/cart'>
                <div className="relative">
                    <img className="h-8 p-1 rounded-full bg-white cursor-pointer" src={constants.cart_icon} alt="logo"/>
                    <p className="absolute -bottom-0.5 -right-1 bg-black text-white px-1 text-sm rounded-full">{cartCount()}</p>
                </div>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar