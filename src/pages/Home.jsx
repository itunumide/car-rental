import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HeroTextSlider from "../reusables/HeroTextSlider";
import carbg from '../assets/car-bg.jpg'
import Service from "../reusables/Service";
import Benefits from "../reusables/Benefits";
import SvgDesignTop from "../reusables/SvgDesignTop";
import SvgDesignBottom from "../reusables/SvgDesignBottom";
import herocar from '../assets/car-home-hero.png'

const Home = () => {
  return (
    <div>
      <div className="relative top-[-5rem] sm:h-screen h-full bg-cover bg-center" style={{ backgroundImage: `url(${carbg})`, height: "62rem" }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black/85"></div> {/* Black overlay with opacity */}
          
        <HeroTextSlider />
        
        <div className="relative top-72 z-10">
          
          <SvgDesignBottom />
        </div>
      </div>
      

      <Service 
      title = "Why should you book with us?"
      service = "We compare car rental prices,"
      span = "you save!"
      />

      <div className="benefits">
        <Benefits />
      </div>

    </div>
  )
}

export default Home