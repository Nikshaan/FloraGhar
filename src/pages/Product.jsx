import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../components/ShopContext";
import { constants } from "../assets/constants";
import { Link } from "react-router-dom";

const Product = () => {

  const {productID} = useParams();
  const {plants, seeds, accessories, care, cartCount, addToCart} = useContext(ShopContext);
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
                    <h1 className="text-white tracking-wider text-2xl sm:text-3xl font-serif italic cursor-pointer">FloraGhar</h1>
                </Link>
            </div>
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
                <Link to='/cart'>
                    <div className="relative">
                        <img className="h-8 p-1 rounded-full bg-white cursor-pointer" src={constants.cart_icon} alt="logo"/>
                        <p className="absolute -bottom-0.5 -right-1 bg-black text-white px-1 text-sm rounded-full">{cartCount()}</p>
                    </div>
                </Link>
            </div>
        </div>
        <div className="h-full flex-auto p-3 pb-12 flex flex-col sm:flex-row justify-center items-center lg:py-20 bg-[#D6EFD8]">
            <img src={productData.img} className="w-64 sm:w-1/2 lg:w-1/3 m-auto my-3 border-2 border-black" />
            <div className="flex flex-col justify-center items-center mt-2 sm:w-1/2">
                <div className="px-2 sm:px-4 sm:pt-4 m-auto sm:m-10 flex flex-col">
                    <p className="text-3xl sm:text-5xl 2xl:text-8xl font-semibold font-serif">{productData.name}</p>
                    <p className="text-gray-500 sm:text-2xl font-semibold">{productData.type?`${productData.type}` : null}</p>
                    <p className="text-3xl sm:text-4xl 2xl:text-5xl font-bold mt-2 mb-10">₹{productData.price}</p>
                    <p className="text-xl sm:text-2xl font-semibold font-mono">{productData.size?`Size: ${productData.size}` : null}</p>
                    <p className="text-xl sm:text-2xl font-semibold font-mono">{productData.indoor?'Indoor plant':null}</p>
                    <p className="text-xl sm:text-2xl font-semibold font-mono">{productData.light?`Light: ${productData.light}` : null}</p>
                    <p className="text-xl sm:text-2xl font-semibold font-mono">{productData.season?`Season: ${productData.season}` : null}</p>
                    <p className="text-xl sm:text-2xl font-semibold font-mono">{productData.germinate?`Germination: ${productData.germinate}` : null}</p>
                    <p className="text-xl sm:text-2xl font-semibold font-mono">{productData.harvest?`Harvest in: ${productData.harvest}` : null}</p>
                    <p className="text-xl sm:text-2xl font-semibold font-mono">{productData.color?`Color: ${productData.color}` : null}</p>
                    <p className="text-xl sm:text-2xl font-semibold font-mono">{productData.qty?`Quantity: ${productData.qty}` : null}</p>
                </div>
            <div className="w-full flex justify-center items-center mt-6 sm:mt-0">
                <button onClick={()=>addToCart(productData.id)} className="bg-[#1A5319] text-white rounded-full p-2 px-6 font-med text-lg border-2 border-black">ADD TO CART</button>
            </div>
            </div>
        </div>
    </div>
  ):null
}

export default Product