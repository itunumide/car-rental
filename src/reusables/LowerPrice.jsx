import SvgDesignTop from "./SvgDesignTop"
import pricescar from '../assets/prices-car.png'
import Service from "./Service"
import pricesimg from '../assets/prices-img.png'
import PricePlan from "./PricePlan"
import ServicePricing from "./ServicePricing"
import Button from "./Button"

const LowerPrice = () => {
  return (
    <div className="mt-[10rem]">
        <div className="pricescar absolute w-[40rem] mt-[6rem]">
            <img src={pricescar} alt="" />
        </div>
        <SvgDesignTop />
        
        <div className="content px-[12%] w-full pt-[12rem] bg-[#1C1601] flex gap-8">
            <div className="left w-3/6">
                <ServicePricing />
            </div>

            <div className="price-plan">
                <PricePlan />
            </div>

            {/* <div className="right w-4/6 border-2 border-white">
                <img src={pricesimg} alt="" width={""} />
            </div> */}
        </div>
    </div>
  )
}

export default LowerPrice