import { useContext } from "react";
import { Link } from "react-router-dom";
import { constants } from "../assets/constants";
import { ShopContext } from "./ShopContext";

const ProductItems = ({id,img, name, price}) => {

    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);
    
    return(
        <div className="flex justify-center items-center flex-col  bg-[#1A5319] border-2 border-black p-2 hover:scale-105 duration-200">
        <Link className="" to={`/product/${id}`}>
            <div className="w-full h-full flex flex-col gap-1 justify-center items-center bg-[#1A5319] p-2">
                <img className="w-44 rounded-sm" src={img} />
                <p className="text-center text-white font-serif">{name}</p>
                <p className="text-center text-white font-serif">₹{price}</p>
                <div>
                </div>
            </div>
        </Link>
        {   
                    !cartItems[id]?
                    <div onClick={() => {
                        addToCart(id);
                      }} 
                      className="flex cursor-pointer gap-2 justify-center items-center bg-white px-2 rounded-full py-0.5 my-2"> 
                        <p className="text-sm font-semibold font-mono">CART</p>
                        <img className="w-3 h-3" src={constants.plus} />
                    </div>:
                    <div className="flex cursor-pointer gap-6 justify-center items-center bg-white px-2 rounded-full py-0.5 my-2">
                        <img onClick={() => {

                            removeFromCart(id);
                        }}
                            className="w-3 h-3" src={constants.minus} />
                        <p className="font-mono">{cartItems[id]}</p>
                        <img onClick={() => {
                            addToCart(id);
                        }} className="w-3 h-3" src={constants.plus} />
                    </div>
                    }
        </div>
    )
}

export default ProductItems;