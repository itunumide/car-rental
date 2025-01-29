import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const CarCompo = ({ rate, price, originalprice, img, showRate }) => {
  return (
    <div className="relative ">
      {/* Rate Badge conditionally showing rates */}
      {showRate && (
      <div className="absolute w-10 h-10 sm:w-12 sm:h-12 -top-4 -left-4 flex items-center justify-center rounded-full bg-[#ffc908] p-4">
        <span className="text-md font-bold">{rate}</span>
      </div>
      )}
      
      {/* Price Badge */}
      <div className="absolute -top-4 left-[93%] -translate-x-1/2 py-2 px-3 sm:px-4 sm:py-2 rounded-[2.5rem] bg-[#ffc908] inline-block">
      {showRate && (
        <span className="text[.7rem] sm:text-sm text-[#917717] font-bold line-through mr-2">{originalprice}</span>
      )}
        <span className="text[.9rem] sm:text-xl font-bold text-[#1c1601]">{price}</span>
      </div>


      <div className="casing flex flex-col w-[full] ">
        <div className="top h-[17rem] sm:h-[22rem] border-4 w-full border-black rounded-t-2xl object-fill object-center">
          <img src={img} alt="Car" className="w-full h-full object-cover object-center rounded-t-xl" />
        </div>
        
        
        <div className="bottom rounded-b-2xl text-[1rem] sm:text-xl h-[3.5rem] sm:h-[5rem] bg-[#1c1601] hover:bg-[#ffc908] text-[#ffc908] hover:text-black font-bold flex justify-center items-center gap-2 transition-all duration-300">
          <ShoppingCartIcon className="h-6 w-6  group-hover:text-black" />
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default CarCompo;
