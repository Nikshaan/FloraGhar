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
    <section className="bg-[#D6EFD8]">
    <div className="flex justify-center items-center pt-14 text-3xl font-sans font-bold animate-bounce">
        <h1 className="italic">Reviews Section</h1>
    </div>
    <div className="w-3/4 m-auto">
        <div className="py-8 pb-24">
        <Slider {...settings}>
            {reviews.map((rev, index) => (
                <div key={index} className="bg-[#508D4E] h-[450px] text-black rounded-xl flex flex-col justify-center items-center px-2 overflow-auto border-2 border-black">
                    <div className="h-20 xl:h-32 pt-8 flex justify-center items-center">
                        <img src={constants.user} alt="" className="h-12 w-12 xl:h-24 xl:w-24 rounded-full" />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 p-4">
                        <p className="text-lg  xl:text-xl font-semibold font-serif">{rev.name}</p>
                        <p className="text-white text-center text-sm">{rev.review}</p>
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