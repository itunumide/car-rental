import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HeroTextSlider from "../reusables/HeroTextSlider";
import carbg from '../assets/car-bg.jpg'

const Home = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${carbg})` }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black/85"></div> {/* Black overlay with opacity */}
        <h1>HOME</h1>
        
        <HeroTextSlider />
    </div>
  )
}

export default Home