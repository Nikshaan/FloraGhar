import { constants } from "../assets/constants";
import {reviews} from "../assets/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

const Reviews = () => {

    const [mobile, setMobile] = useState(true)

    useEffect(()=> {
        if(window.screen.width > 768){
            setMobile(false)
        }
    }, [])

    const settings = {
        fade: mobile === true ? true : false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: mobile === true ? 1 : 2,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 5000,
      };

  return (
    <section className="bg-[#508D4E]">
    <div className="flex justify-center items-center pt-14 text-3xl animate-bounce">
        <h1 className="font-Precursive font-bold">Reviews Section</h1>
    </div>
    <div className="w-3/4 m-auto">
        <div className="py-8 pb-24">
        <Slider {...settings}>
            {reviews.map((rev, index) => (
                <div key={index} className="bg-[#D6EFD8] h-[450px] text-black rounded-xl flex flex-col justify-center items-center px-2 overflow-auto border-2 border-black">
                    <div className="h-20 xl:h-32 pt-8 flex justify-center items-center">
                        <img src={constants.user} alt="" className="h-16 w-16 xl:h-24 xl:w-24 rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 p-4 mt-1">
                        <p className="text-2xl 2xl:text-3xl font-semibold font-Precursive">{rev.name}</p>
                        <p className=" text-center text-sm 2xl:text-lg font-Raleway">{rev.review}</p>
                    </div>
                </div>
            ))}
        </Slider>
        </div>
    </div>
    </section>
  )
}

export default Reviews