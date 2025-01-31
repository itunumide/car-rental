import LocationHeader from "../reusables/LocationHeader";
import PagesHero from "../reusables/PagesHero";
import SvgDesignPricingB from "../reusables/SvgDesignPricingB";
import SvgDesignPricingT from "../reusables/SvgDesignPricingT";
import aboutpic from "../assets/aboutpic.jpg";
import AboutBenefit from "../reusables/AboutBenefit";


const About = () => {
  return (
    <div>
      <PagesHero />

      <div className="flex flex-col md:flex-row px-10 gap-12 py-16 md:py-20 my-10">
        <div className="  relative md:h-[25rem] w-[100%] md:w-[110%] bg-[#ffca08] rounded-lg  border-[#ffca08] border-[.7rem]">
          <img src={aboutpic} alt="" className="w-full h-full object-cover " />
          <h1 className="absolute translate-x-1/2 text-center md:text-start md:translate-x-8  top-36 text-[2.5rem] max-w-[15rem] font-light leading-10  text-white">
            ABOUT OUR
            <span className="text-[1.7rem] font-medium"> CAR RENTAL</span>
          </h1>
        </div>

        <div className="py-4">
          <p className="leading-8 text-[1.3rem] text-center md:text-start text-[#666666] ">
            A car rental, hire car, or car hire agency is a company that rents
            automobiles for short periods of time to the public, generally
            ranging from a few hours to a few weeks. It is often organized with
            numerous local branches (which allow a user to return a vehicle to a
            different location), and primarily located near airports or busy
            city areas and often complemented by a website allowing online
            reservations.
          </p>
          <div>
           <AboutBenefit/>
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <SvgDesignPricingT />
        </div>
        <div></div>
        <div>
          <SvgDesignPricingB />
        </div>
      </div>
      <div className="">
        <LocationHeader
          subtitle="Car rental partners and customers"
          title="Our famous "
          highlight="Partners"
        />
      </div>
    </div>
  );
};

export default About;
