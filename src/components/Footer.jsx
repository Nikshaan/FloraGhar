import {constants} from "../assets/constants";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-5 p-4 bg-black pb-16 2xl:py-28">
        <div className="flex flex-col lg:flex-row gap-6 2xl:mb-12 mb-6">
            <p className="inline text-white font-sans text-lg lg:w-1/2">Subscribe to our Newsletter for updates and exclusive coupons & deals </p>
            <input className="border-none shadow-sm lg:w-1/2 shadow-black outline-none rounded-md p-1 px-10" type="text" placeholder="Enter your Email address" />
            <button className="bg-[#80AF81] p-2 px-8 rounded-3xl font-bold">SUBMIT</button>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 justify-evenly w-full 2xl:pb-14">
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-[#80AF81] text-base lg:text-lg mb-2 font-serif border-b-2 border-dotted">ABOUT US</h1>
                <p className="text-white cursor-pointer">Our Story</p>
                <p className="text-white cursor-pointer">Careers</p>
                <p className="text-white cursor-pointer">Locate Stores</p>
                <p className="text-white cursor-pointer">Garden Service</p>
                <p className="text-white cursor-pointer">Maintenance</p>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-[#80AF81] text-base lg:text-lg mb-2 font-serif border-b-2 border-dotted">CUSTOMER CARE</h1>
                <p className="text-white cursor-pointer">Track Order</p>
                <p className="text-white cursor-pointer">Shipping Policy</p>
                <p className="text-white cursor-pointer">Terms and Conditions</p>
                <p className="text-white cursor-pointer">FAQs</p>
                <p className="text-white cursor-pointer">Privacy Policy</p>
                <p className="text-white cursor-pointer">Refund Policy</p>
                <p className="text-white cursor-pointer">Terms of Service</p>
            </div>
            <div className="flex flex-col gap-2">
                <h1  className="font-bold text-[#80AF81] text-base lg:text-lg mb-2 font-serif border-b-2 border-dotted">GET IN TOUCH</h1>
                <p className="text-white cursor-pointer">Call: +91-9876543210</p>
                <p className="text-white cursor-pointer">Email: support@FloraGhar.com</p>
            </div>
            <div className="flex flex-col">
                    <h1  className="font-bold text-[#80AF81] text-base lg:text mb-4 font-serif border-b-2 border-dotted">FOLLOW US</h1>
                <div className="flex gap-3">
                    <img className="h-8 cursor-pointer" src={constants.insta} alt="" />
                    <img className="h-8 cursor-pointer" src={constants.facebook} alt="" />
                    <img className="h-8 cursor-pointer" src={constants.twitter} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer