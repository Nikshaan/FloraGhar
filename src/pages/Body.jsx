import Collections from "../components/Collections";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Subscription from "../components/Subscription";
import About from "../components/About";
import Reviews from "../components/Reviews";
import { useEffect } from "react";

const Body = () => {
  useEffect(()=> {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [])
  return (
    <div className="animate-fade-in">
        <Navbar />
        <Home />
        <Collections />
        <Subscription />
        <About />
        <Reviews />
    </div>
  )
}

export default Body