import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../components/ShopContext";
import { constants } from "../assets/constants";
import { Link } from "react-router-dom";

const Product = () => {

  const {productID} = useParams();
  const {plants, seeds, accessories, care, cartCount, cartItems, addToCart, removeFromCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [collection, setCollection] = useState('');

  useEffect(()=> {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])

  const fetchProductData = () => {
    if(productID < 200){
        plants.map((item) => {
            if(item.id === parseInt(productID)){
                setProductData(item)
                setCollection('plant-collection')
                return null;
            }
        })
    }
    else if(productID < 300){
        seeds.map((item) => {
            if(item.id === parseInt(productID)){
                setProductData(item)
                setCollection('seed-collection')
                return null;
            }
        })
    }
    else if(productID < 400){
        accessories.map((item) => {
            if(item.id === parseInt(productID)){
                setProductData(item)
                setCollection('accessory-collection')
                return null;
            }
        })
    }
    else{
        care.map((item) => {
            if(item.id === parseInt(productID)){
                setProductData(item)
                setCollection('plant-care-collection')
                return null;
            }
        })
      }
    }

    useEffect(() => {
        fetchProductData();
      }, [productID, plants, seeds, accessories, care])

  return productData?(
    <div className="w-full h-full flex flex-col justify-center">
            <Link className="absolute top-4 left-1" to={`/${collection}`}>
                <img src={constants.left} className="ml-2 w-8 h-8 border-2 border-white rounded-full bg-white" />
            </Link>
            <div className="flex flex-col lg:flex-row gap-3 justify-between px-3 items-center bg-[#1A5319] py-3">
            <div className="flex gap-4 items-center justify-center flex-1">
                <Link to='/' className="flex gap-2 justify-center items-center">
                    <img className="h-9 sm:h-11 cursor-pointer" src={constants.logo} alt="logo"/>
                    <h1 className="text-white tracking-wider text-2xl sm:text-3xl font-Raleway italic cursor-pointer">FloraGhar</h1>
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
        <div className="h-full md:py-12 p-3 pb-12 flex flex-col flex-1 sm:flex-row justify-center items-center bg-[#D6EFD8]">
            <img src={productData.img} className="w-64 sm:w-1/2 lg:w-1/3 m-auto my-3 border-2 border-black" />
            <div className="flex flex-col justify-center items-center mt-2 sm:w-1/2">
                <div className="px-2 sm:px-4 sm:pt-4 m-auto sm:m-10 flex flex-col text-center">
                    <p className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-semibold font-Raleway">{productData.name}</p>
                    <p className="text-gray-500 sm:text-2xl lg:text-3xl font-semibold font-Precursive mt-2">{productData.type?`${productData.type}` : null}</p>
                    <p className="text-3xl sm:text-4xl 2xl:text-5xl font-Raleway mt-2 mb-10">₹{productData.price}</p>
                    <p className="text-xl sm:text-2xl font-semibold font-Raleway">{productData.size?`Size: ${productData.size}` : null}</p>
                    <p className="text-xl sm:text-2xl font-semibold font-Raleway">{productData.indoor?'Indoor plant':null}</p>
                    <p className="text-xl sm:text-2xl font-semibold font-Raleway">{productData.light?`Light: ${productData.light}` : null}</p>
                    <p className="text-xl sm:text-2xl font-semibold font-Raleway">{productData.season?`Season: ${productData.season}` : null}</p>
                    <p className="text-xl sm:text-2xl font-semibold font-Raleway">{productData.germinate?`Germination: ${productData.germinate}` : null}</p>
                    <p className="text-xl sm:text-2xl font-semibold font-Raleway">{productData.harvest?`Harvest in: ${productData.harvest}` : null}</p>
                    <p className="text-xl sm:text-2xl font-semibold font-Raleway">{productData.color?`Color: ${productData.color}` : null}</p>
                    <p className="text-xl sm:text-2xl font-semibold font-Raleway">{productData.qty?`Quantity: ${productData.qty}` : null}</p>
                </div>
                {   
                    !cartItems[productID]?
                    <div onClick={() => {
                        addToCart(productID);
                      }} 
                      className="flex gap-2 mt-10 cursor-pointer justify-center items-center bg-white border-2 border-[#1A5319] px-2 rounded-full py-0.5 my-2"> 
                        <p className="text-xl font-semibold font-Precursive p-0.5 px-1">CART</p>
                        <img className="w-3 h-3" src={constants.plus} />
                    </div>:
                    <div className="flex gap-6 mt-10 justify-center items-center bg-white border-2 border-[#1A5319] px-2 rounded-full py-0.5 my-2">
                        <img onClick={() => {

                            removeFromCart(productID);
                        }}
                            className="w-3 h-3 cursor-pointer" src={constants.minus} />
                        <p className="font-mono text-2xl">{cartItems[productID]}</p>
                        <img onClick={() => {
                            addToCart(productID);
                        }} className="w-3 h-3 cursor-pointer" src={constants.plus} />
                    </div>
                    }
            </div>
        </div>
    </div>
  ):null
}

export default Product