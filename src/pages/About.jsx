import LocationHeader from "../reusables/LocationHeader";
import PagesHero from "../reusables/PagesHero";
import SvgDesignPricingB from "../reusables/SvgDesignPricingB";
import SvgDesignPricingT from "../reusables/SvgDesignPricingT";

const About = () => {
  return (
    <div>
      <PagesHero />

      <div className="flex">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <p className="">
            A car rental, hire car, or car hire agency is a company that rents
            automobiles for short periods of time to the public, generally
            ranging from a few hours to a few weeks. It is often organized with
            numerous local branches (which allow a user to return a vehicle to a
            different location), and primarily located near airports or busy
            city areas and often complemented by a website allowing online
            reservations.
          </p>
          <div></div>
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
