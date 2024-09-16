import SvgDesignTop from "./SvgDesignTop"
import pricescar from '../assets/prices-car.png'
import Service from "./Service"
import pricesimg from '../assets/prices-img.png'

const LowerPrice = () => {
  return (
    <div className="mt-[10rem]">
        <div className="pricescar absolute w-[40rem] mt-[6rem]">
            <img src={pricescar} alt="" />
        </div>
        <SvgDesignTop />
        <div className="content px-[12%] w-full pt-[12rem] bg-[#1C1601] flex items-center justify-center gap-8">
            <div className="left w-3/6 border-2 border-white flex">
                <Service 
                title = "Why are our prices lower?"
                titlebg = "#221B01"
                titlecolor = "#cecece"
                service = "Find the perfect <br /> rental car for"
                span = "your trip"
                color = "white"
                />
            </div>

            <div className="right w-4/6 border-2 border-white">
                <img src={pricesimg} alt="" width={""} />
            </div>
        </div>
    </div>
  )
}

export default LowerPrice