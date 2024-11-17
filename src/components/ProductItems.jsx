import { useContext } from "react";
import { Link } from "react-router-dom";
import { constants } from "../assets/constants";
import { ShopContext } from "./ShopContext";

const ProductItems = ({id,img, name, price}) => {

    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);
    
    return(
        <div className="flex flex-col gap-1 justify-center items-center hover:scale-105 duration-200 w-[99%] h-full bg-[#1A5319] py-2 border-2 border-black">
        <Link className=" " to={`/product/${id}`}>
            <div className="flex relative cursor-pointer w-full h-full justify-center items-center flex-col bg-[#1A5319]">
                <div className="w-full h-full flex flex-col gap-1 justify-center items-center bg-[#1A5319] p-2">
                    <img className="w-44 rounded-sm" src={img} />
                    <p className="text-center text-white font-Raleway">{name}</p>
                    <p className="text-center text-white font-Raleway">₹{price}</p>
                    <div>
                </div>
                </div>
            </div>
        </Link>
        {   
                    !cartItems[id]?
                    <div onClick={() => {
                        addToCart(id);
                      }} 
                      className="flex gap-2 cursor-pointer justify-center items-center bg-white px-2 rounded-full py-0.5 my-2"> 
                        <p className="text-sm font-semibold font-Precursive p-0.5">CART</p>
                        <img className="w-3 h-3" src={constants.plus} />
                    </div>:
                    <div className="flex gap-6 justify-center items-center bg-white px-2 rounded-full py-0.5 my-2">
                        <img onClick={() => {

                            removeFromCart(id);
                        }}
                            className="w-3 h-3 cursor-pointer" src={constants.minus} />

                        <p className="font-mono">{cartItems[id]}</p>
                        
                        <img onClick={() => {
                            addToCart(id);
                        }} className="w-3 h-3 cursor-pointer" src={constants.plus} />
                    </div>
                    }
        </div>
    )
}

export default ProductItems;