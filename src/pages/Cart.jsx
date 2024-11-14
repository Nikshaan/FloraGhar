import { useContext, useEffect, useState, useRef } from "react";
import { ShopContext } from "../components/ShopContext";
import { constants } from "../assets/constants";
import { Link } from "react-router-dom";

const Cart = () => {

  const {plants, seeds, accessories, care,  cartItems, cartCount, addToCart, removeFromCart} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const productData = useRef({});
  var totalPrice = 0;


  useEffect(()=> {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])

  useEffect(() => {
    const tempData = [];
    for (const item in cartItems){
      if(cartItems[item] > 0){
        tempData.push({
          id: item,
          qty: cartItems[item]
        })
      }
    }
    setCartData(tempData);
  }, [cartItems])

  console.log(cartItems)

  return (
    <div className="w-full h-full">
      <div className="flex flex-col lg:flex-row gap-3 justify-between px-3 items-center bg-[#1A5319] py-3">
            <div className="flex gap-4 items-center justify-start flex-1">
                <Link to='/' className="flex gap-2 justify-center items-center">
                    <img className="h-9 sm:h-11 cursor-pointer" src={constants.logo} alt="logo"/>
                    <h1 className="text-white tracking-wider text-2xl sm:text-3xl italic cursor-pointer font-Raleway">FloraGhar</h1>
                </Link>
            </div>
            <div className="flex gap-6">
                <img className="h-8 p-1 rounded-full bg-white cursor-pointer" src={constants.search_icon} alt="logo"/>
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
        {
          (cartData.length === 0)?<p className="text-black bg-white font-semibold font-Raleway text-3xl flex justify-center items-center py-48">cart is empty</p> :cartData.map((item, index) => {
              if(item.id < 200){
                plants.map((plant) => {
                  if(plant.id === parseInt(item.id)){
                    productData[index] = plant;
                    return null;
                  }
                })
              }
              else if(item.id < 300){
                seeds.map((seed) => {
                  if(seed.id === parseInt(item.id)){
                    productData[index] = seed;
                    return null;
                  }
                })
              }
              else if(item.id < 400){
                accessories.map((acc) => {
                  if(acc.id === parseInt(item.id)){
                    productData[index] = acc;
                    return null;
                  }
                })
              }
              else{
                care.map((care) => {
                  if(care.id === parseInt(item.id)){
                    productData[index] = care;
                    return null;
                  }
                })
            }
            totalPrice += item.qty * productData[index].price;
            console.log(productData)
          return(
            <div key={item.id}>
            <div className="bg-white min-h-36 flex justify-between items-center p-2 2xl:py-10 2xl:px-6 border-b-2 border-black">
              <div className="flex justify-center items-center gap-2 2xl:gap-6">
                <img src={productData[index].img} alt="" className="w-20 sm:w-28 2xl:w-40 border-2 border-black"/>
                <p className="font-semibold font-Raleway sm:text-2xl 2xl:text-4xl">{productData[index].name}</p>
              </div>
              <div className="flex gap-6">
                <div className="flex font-Raleway justify-center cursor-pointer items-center gap-3 bg-gray-200 rounded-full px-2 2xl:scale-125">
                  <img src={constants.minus} onClick={() => removeFromCart(item.id)} className="w-3 h-3"/>
                  <p>{item.qty}</p>
                  <img src={constants.plus} onClick={() => addToCart(item.id)} className="w-3 h-3"/>
                </div>
                <p className="font-semibold sm:text-lg 2xl:text-2xl">₹{productData[index].price * item.qty}</p>
              </div>
            </div>
            </div>
          )
        })
        }
    <div className="flex text-lg font-bold font-Raleway bg-white text-black justify-between p-6 py-10 2xl:py-20 2xl:text-3xl">
        <p>TOTAL</p>
        <p>₹{totalPrice}</p>
    </div>
    </div>
  )
}

export default Cart