import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HeroTextSlider from "../reusables/HeroTextSlider";
import carbg from '../assets/car-bg.jpg'


const Home = () => {
  return (
    <div className="relative sm:h-screen h-[13rem] bg-cover bg-center mt-[-6rem]" style={{ backgroundImage: `url(${carbg})` }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black/85"></div> {/* Black overlay with opacity */}
        
        
        
        <HeroTextSlider />
    </div>
  )
}

export default Home