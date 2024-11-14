import Searchbar from "../components/Searchbar";
import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../components/ShopContext";
import ProductItems from "../components/ProductItems";

const Care = () => {

  const {care, search} = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const[sortType, setSortType] = useState('relavent');

  useEffect(()=> {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])

  const searchItem = () => {
    let productsCopy = care.slice();

    if (search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      setFilterProducts(productsCopy);
    }else{
      setFilterProducts(care);
    }
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)))
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)))
        break;
      default:
        searchItem();
        break;
      }
  }

  useEffect(() => {
    searchItem()
  }, [search]);

  useEffect(()=> {
    setFilterProducts(care)
  }, [])

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <>
      <Searchbar />
      <div className="flex flex-col w-full h-full relative">
        <div className="flex-1 flex flex-col">
            <div className={"bg-[#508D4E] min-h-20 flex gap-4 justify-between items-center px-6 md:px-10 border-2 border-t-0 border-black"}>
                  <p className="text-nowrap flex-1 text-center text-sm sm:text-3xl font-bold font-Raleway">PLANT-CARE COLLECTION</p>
                  <select onChange={(e) => setSortType(e.target.value)} className="rounded-lg cursor-pointer font-Raleway text-sm xl:py-1 xl:px-2">
                      <option value="relavent">RELAVANT</option>
                      <option value="low-high">LOW TO HIGH</option>
                      <option value="high-low">HIGH TO LOW</option>
                  </select>
            </div>
            
            <div className="bg-[#D6EFD8] flex-1 border-l-2 border-r-2 border-black p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                {
                  filterProducts.map((item) => (
                    <ProductItems key={item.id} id= {item.id} img={item.img} name={item.name} price={item.price} />
                  ))
                }
              </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default Care