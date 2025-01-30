import PagesHero from "../reusables/PagesHero";
import SvgDesignPricingB from "../reusables/SvgDesignPricingB";
import SvgDesignPricingT from "../reusables/SvgDesignPricingT";
import locationCar from "../assets/car-home-4.png";
import locationCar1 from "../assets/car-home-5.png";
import LocationCard from "../reusables/LocationCard";
import LocationHeader from "../reusables/LocationHeader";
import LocationForm from "../reusables/LocationForm";
import { useNavigate } from "react-router-dom";


const Locations = () => {
  const navigate = useNavigate();

  const goToShop = () => {
    navigate("/shop"); 
  };

  return (
    <div>
      <PagesHero />

      <LocationHeader
        subtitle="Car Rental Locations"
        title="We Rent a car wherever you are and"
        highlight="enjoy!"
        width={"max-w-[40rem]"}
      />

      <div className="mt-[4rem] md:mt-[10rem]">
        <div className="svgtop relative">
          <SvgDesignPricingT />
        </div>
        <div className="relative bg-[#1c1601] flex flex-col gap-8 pb-10">
          <div className="locationCar 2xl:ml-20 -mt-72">
            <img src={locationCar} alt="" style={{ width: "40rem" }} />
          </div>
          <div className="text-white">
            <LocationCard
              lat={43.65107}
              lng={-79.347015}
              state={"Toronto"}
              country={"Canada"}
              text={
                "On three consecutive Saturdays in August, nearly seven miles of NYC's streets are opened for people to play, run, walk and bike. There are usually fun, interactive stations, from a water slide to a zip line. On three consecutive Saturdays in August, nearly seven miles of NYC's streets are opened for people to play, run, walk and bike. There are usually fun, interactive stations, from a water slide to a zip line."
              }
              onClick={goToShop}
            />
            <LocationCard
              lat={34.052235}
              lng={-118.243683}
              state={"Los Angeles"}
              country={"USA"}
              text={
                "On three consecutive Saturdays in August, nearly seven miles of NYC's streets are opened for people to play, run, walk and bike. There are usually fun, interactive stations, from a water slide to a zip line. On three consecutive Saturdays in August, nearly seven miles of NYC's streets are opened for people to play, run, walk and bike. There are usually fun, interactive stations, from a water slide to a zip line."
              }
              onClick={goToShop}
            />
            <LocationCard
              lat={40.712776}
              lng={-74.005974}
              state={"Newyork city"}
              country={"USA"}
              text={
                "On three consecutive Saturdays in August, nearly seven miles of NYC's streets are opened for people to play, run, walk and bike. There are usually fun, interactive stations, from a water slide to a zip line. On three consecutive Saturdays in August, nearly seven miles of NYC's streets are opened for people to play, run, walk and bike. There are usually fun, interactive stations, from a water slide to a zip line."
              }
              onClick={goToShop}
            />
          </div>
        </div>
        <div className="svgtop relative ">
          <SvgDesignPricingB />
        </div>
        <div className="locationCar relative left-[40rem] 2xl:ml-20 -mt-[24rem]">
          <img src={locationCar1} alt="" style={{ width: "40rem" }} />
        </div>
      </div>
      <div className="pt-10 flex flex-col items-center">
        <LocationHeader
          subtitle="Submit a request"
          title="Get a Free Quote about"
          highlight="Dealership"
        />
        <LocationForm />
      </div>
    </div>
  );
};

export default Locations;
