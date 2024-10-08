import SvgDesignPricingT from "../reusables/SvgDesignPricingT"
import carstat1 from '../assets/car-stat-t.png'
import carstat2 from '../assets/car-stats-bottom.png'
import ServiceStat from "../reusables/checkoutreuseable/ServiceStat"
import Stat from "../reusables/Stat"
import SvgDesignPricingB from "../reusables/SvgDesignPricingB"


const CarStat = () => {
  return (
    <div className="border-2 border-white">
        <div className="carstat1 absolute w-[40%] mt-[6%]">
            <img src={carstat1} alt="" />
        </div>
        <SvgDesignPricingT />

        <div className="content w-full pt-[6rem] pb-[16rem] bg-[#1C1601] ">
            <div className="service w-[80%] m-auto">
                <ServiceStat
                title = "Find your car in one of our"
                service = "Find the perfect rental car <br /> We compare car rental prices,"
                span = "you save!"
                />
            </div>

            <div className="stats mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="stats">
                <Stat 
                stat = "145"
                inner = "Countries"
                />
              </div>
              <div className="stats">
                <Stat 
                stat = "10"
                none = "K"
                inner = "Locations"
                />
              </div>
              <div className="stats">
                <Stat 
                stat = "27"
                none = "+"
                inner = "Partners"
                />
              </div>
              <div className="stats">
                <Stat 
                stat = "38"
                none = "+"
                inner = "Languages"
                />
              </div>
            </div>

            
        </div>

        <SvgDesignPricingB />
        <div className="car-pri-b absolute w-[40%] -mt-[30%] ml-[58%]">
            <img src={carstat2} alt="" />
        </div>


    </div>
  )
}

export default CarStat