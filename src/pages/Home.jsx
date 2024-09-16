import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HeroTextSlider from "../reusables/HeroTextSlider";
import carbg from '../assets/car-bg.jpg'
import Service from "../reusables/Service";
import Benefits from "../reusables/Benefits";
import SvgDesignBottom from "../reusables/SvgDesignBottom";
import herocar from '../assets/car-home-hero.png'
import LowerPrice from "../reusables/LowerPrice";

const Home = () => {
  return (
    <div>
      <div className="Hero relative top-[-5rem] sm:h-screen bg-cover bg-center" style={{ backgroundImage: `url(${carbg})`, height: "62rem" }}>
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black/85"></div> {/* Black overlay with opacity */}
          
        <HeroTextSlider />
         <div className="herocar absolute w-[40rem] left-[50rem] mt-[12rem] z-20">
          <img src={herocar} alt="" />
        </div>
        <div className="relative top-72 z-10">
          <SvgDesignBottom />
        </div>
      </div>
      
    <div className="service  w-[70%] m-auto text-center">

      <Service 
      title = "Why should you book with us?"
      titlebg = "#F1F1F1"
      service = "We compare car rental prices,"
      span = "you save!"
      color = "black"
      />
    </div>

      
      <Benefits />

      <LowerPrice />
    </div>
  )
}

export default Home