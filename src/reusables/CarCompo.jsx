import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import car from '../assets/car-1.png'

const CarCompo = () => {
  return (
    <div>
        <div className="price absolute w-12 h-12 top-[30rem] left-32 flex items-center justify-center rounded-full bg-[#ffc908] p-4">
            <span className="text-md font-bold">25%</span>
        </div>
        <div className="price absolute top-[30rem] left-[27.2rem] px-4 py-3 rounded-[2.5rem] bg-[#ffc908] inline-block">
        
            <span className="text-sm text-[#917717] font-bold line-through mr-2">$399</span>

            <span className="text-xl font-bold text-[#1c1601]">$299</span>
        </div>
        <div className="casing flex flex-col w-[23rem]">
            <div className="top h-[22rem] border-4 border-black rounded-t-2xl object-fill object-center">
                <img src={car} alt="" className="w-full h-full object-cover object-center"/>
            </div>
            <div className="bottom rounded-b-2xl text-xl h-[5rem] bg-[#1c1601] hover:bg-[#ffc908] text-[#ffc908] hover:text-black font-bold flex justify-center items-center gap-2 transition-all duration-300">
                
                <ShoppingCartIcon className="h-6 w-6 group-hover:text-black" />
                Add to Cart
            </div>
        </div>
    </div>
  )
}

export default CarCompo