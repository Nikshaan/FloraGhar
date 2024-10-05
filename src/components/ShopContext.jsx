import { createContext, useEffect, useState } from "react";
import { care, accessories, plants, seeds } from "../assets/data";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [search, setSearch] = useState('');
    const [cartItems, setCartItems] = useState({});

    const addToCart = async(itemId) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]){
            cartData[itemId] += 1;
        }else{
            cartData[itemId] = {};
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
    }

    const removeFromCart = async(itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const cartCount = () => {
        let count = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                count += cartItems[item]
            }
        }
        return count;
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const value = {
        care, accessories, plants, seeds, search, setSearch, cartItems,
        addToCart, removeFromCart, cartCount
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;