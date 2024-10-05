import { constants } from "../assets/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

      var settings = {
        lazyLoad: true,
        fade: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
      };

  return (
    <div id="home" className="lg:px-24 w-full h-full bg-[#000000] flex justify-center items-center py-10 2xl:py-20 2xl:pb-28 xl:py-8">
    <div className="w-full h-full xl:w-3/4">
      <Slider {...settings}>
        <div className="flex justify-center items-center">
          <img className="w-full border-2 border-green-200" src={constants.banner1} alt="" />
        </div>
        <div className="flex">
          <img className="w-full border-2 border-green-200" src={constants.banner2} alt="" />
        </div>
        <div className="flex">
          <img className="w-full border-2 border-green-200" src={constants.banner3} alt="" />
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default Home