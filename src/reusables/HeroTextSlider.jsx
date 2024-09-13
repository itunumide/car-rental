import Slider from 'react-slick';

const HeroTextSlider = () => {
  const settings = {
    dots: true,         // Show navigation dots
    infinite: true,     // Infinite looping
    speed: 500,         // Transition speed
    slidesToShow: 1,    // Show one slide at a time
    slidesToScroll: 1,  // Scroll one slide at a time
    autoplay: true,     // Auto-play
    autoplaySpeed: 3000, // 3-second auto-play interval
    fade: true,         // Fade effect between slides
  };

  return (
    <div className='mt-[15rem] w-[90%] h-[5rem] m-auto border-4 border-white'>
      <Slider {...settings} className="relative z-10 text-center">
        <div>
          <h1 className="text-white text-5xl md:text-6xl font-bold">A Car Rental</h1>
        </div>
        <div>
          <h1 className="text-white text-5xl md:text-6xl font-bold">Car Hire Agency</h1>
        </div>
        <div>
          <h1 className="text-white text-5xl md:text-6xl font-bold">Discover Popular New Cars</h1>
        </div>
      </Slider>
    </div>
  );
};

export default HeroTextSlider;
