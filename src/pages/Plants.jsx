import { constants } from "../assets/constants";
import Searchbar from "../components/Searchbar";
import { useContext, useState, useEffect} from "react";
import { ShopContext } from "../components/ShopContext";
import ProductItems from "../components/ProductItems";

const Plants = () => {
  const[filterSlide, setFilterSlide] = useState(false);
  const{plants, search} = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const[sortType, setSortType] = useState('relavent');
  const [category1, setCategory1] = useState([]);
  const [category2, setCategory2] = useState([]);
  const [category3, setCategory3] = useState([]);

  useEffect(()=> {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])
  
  const toggleCategory1 = (e) => {
    if(category1.includes(e.target.value)){
      setCategory1(prev => prev.filter(item => item!== e.target.value))
    }
    else{
      setCategory1(prev => [...prev, e.target.value])
    }
  }

  const toggleCategory2 = (e) => {
    if(category2.includes(e.target.value)){
      setCategory2(prev => prev.filter(item => item!== e.target.value))
    }
    else{
      setCategory2(prev => [...prev, e.target.value])
    }
  }

  const toggleCategory3 = (e) => {
    if(category3.includes(e.target.value)){
      setCategory3(prev => prev.filter(item => item!== e.target.value))
    }
    else{
      setCategory3(prev => [...prev, e.target.value])
    }
  }

  const applyFilter= () => {
    let productsCopy = plants.slice();

    if (search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category1.length > 0){
      productsCopy = productsCopy.filter(item => category1.includes(item.light))
    }
    if(category2.length > 0){
      productsCopy = productsCopy.filter(item => category2.includes(item.size))
    }
    if(category3.length === 1 && category3.includes('true')){
      productsCopy = productsCopy.filter(item => (item.indoor))
    }
    if(category3.length === 1 && category3.includes('false')){
      productsCopy = productsCopy.filter(item => (!item.indoor))
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

  useEffect(() => {
    applyFilter()
  }, [search, category1, category2, category3])

  useEffect(()=> {
    setFilterProducts(plants)
  }, [])

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <>
      <Searchbar />
      <div className="flex flex-col w-full h-full relative">
        <div className={`overflow-hidden py-3 h-screen  ${filterSlide?"block max-h-52 w-full":"hidden"}  bg-[#508D4E] z-30 justify-center border-2 border-black items-center`}>
          <div className="flex justify-between items-center pt-2 pb-3 px-4">
            <p className="text-xl md:text-2xl text-center font-semibold">FILTERS</p>
            <img onClick={() => setFilterSlide(!filterSlide)} className="w-4" src={constants.close} alt=" " />
          </div>
        <div className="flex w-full justify-evenly items-start font-semibold">
            <div>
              <p className="font-bold font-serif border-b-2 border-black border-dotted inline-block">LIGHT</p>
                <p className="flex gap-2">
                  <input onChange={toggleCategory1} className="w-3" type="checkbox" value={'Direct Sunlight'} />Direct Sunlight
                </p>
                <p className="flex gap-2">
                  <input onChange={toggleCategory1} className="w-3" type="checkbox" value={'Bright Indirect'} />Indirect Sunglight
                </p>
                <p className="flex gap-2">
                  <input onChange={toggleCategory1} className="w-3" type="checkbox" value={'Medium Light'} />Medium Light
                </p>
                <p className="flex gap-2">
                  <input onChange={toggleCategory1} className="w-3" type="checkbox" value={'Low Light'} />Low Light
                </p>
          </div>
          <div>
            <p className="font-semibold font-serif border-b-2 border-black border-dotted inline-block">SIZE</p>
              <p className="flex gap-2 ">
                <input onChange={toggleCategory2} className="w-3" type="checkbox" value={'Small'} />Small
              </p>
              <p className="flex gap-2">
                <input onChange={toggleCategory2} className="w-3" type="checkbox" value={'Medium'} />Medium
              </p>
              <p className="flex gap-2">
                <input onChange={toggleCategory2} className="w-3" type="checkbox" value={'Large'} />Large
              </p>
            </div>
            <div>
              <p className="font-semibold font-serif border-b-2 border-black border-dotted inline-block">PLACEMENT</p>
              <p className="flex gap-2">
                <input onChange={toggleCategory3} className="w-3" type="checkbox" value={true} />Indoor
              </p>
              <p className="flex gap-2">
                <input onChange={toggleCategory3} className="w-3" type="checkbox" value={false} />Outdoor
              </p>
            </div>
        </div>
        </div>

        <div className="flex-1 flex flex-col">
            <div className={"bg-[#508D4E] min-h-20 flex gap-4 justify-between items-center px-2 md:px-10 border-2 border-t-0 border-black"}>
                  <img onClick={() => setFilterSlide(!filterSlide)} className="w-8 bg-white px-[6px] py-[6px] rounded-full" src={constants.filter} alt=" " />
                  <p className="text-nowrap lg:text-3xl font-bold font-sans underline">PLANT COLLECTION</p>
                  <select onChange={(e) => setSortType(e.target.value)} className="rounded-lg text-sm xl:py-1 xl:px-2">
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

export default Plants