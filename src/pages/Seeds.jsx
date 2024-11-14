import Searchbar from "../components/Searchbar";
import { constants } from "../assets/constants";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../components/ShopContext";
import ProductItems from "../components/ProductItems";

const Seeds = () => {

  const[filterSlide, setFilterSlide] = useState(false)
  const {seeds, search} = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const[sortType, setSortType] = useState('relavent');
  const [category, setCategory] = useState([]);

  useEffect(()=> {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])
  
  const applyFilter = () => {
    let productsCopy = seeds.slice();

    if (search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.type))
    }
    setFilterProducts(productsCopy);
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
        applyFilter();
        break;
      }
  }

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item!== e.target.value))
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  useEffect(() => {
    applyFilter()
  }, [search, category]);

  useEffect(()=> {
    setFilterProducts(seeds)
  }, [])

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <>
      <Searchbar />
      <div className="flex flex-col w-full h-full relative">
        <div className={`overflow-hidden py-3 h-screen ${filterSlide?"block max-h-44 w-full":"hidden"}  bg-[#508D4E] z-30 justify-center border-2 border-black items-center`}>
          <div className="flex justify-between items-center py-2 px-4">
            <p className="text-xl md:text-2xl text-center font-semibold">FILTERS</p>
              <img onClick={() => setFilterSlide(!filterSlide)} className="w-4 cursor-pointer" src={constants.close} alt=" " />
          </div>
          <div className="flex justify-start items-center px-4 font-Raleway">
            <div>
              <p className="font-semibold font-serif border-b-2 border-black border-dotted inline-block">TYPE</p>
                <p className="flex gap-2 ">
                  <input onChange={toggleCategory} className="w-3" type="checkbox" value={'Flower seed'} />Flower Seeds
                </p>
                <p className="flex gap-2">
                  <input onChange={toggleCategory} className="w-3" type="checkbox" value={'Herb seed'} />Herb Seeds
                </p>
            </div>
            </div>
        </div>
        <div className="flex-1 flex flex-col">
            <div className={"bg-[#508D4E] min-h-20 flex gap-4 justify-between items-center px-2 md:px-10 border-2 border-t-0 border-black"}>
                  <img onClick={() => setFilterSlide(!filterSlide)} className="w-8 cursor-pointer bg-white px-[6px] py-[6px] rounded-full" src={constants.filter} alt=" " />
                  <p className="text-nowrap sm:text-3xl font-bold font-Raleway">SEED COLLECTION</p>
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

export default Seeds