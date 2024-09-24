import fileicon from "../../assets/fileicon.svg";
import Button from '../Button'
import { useState } from 'react';

const CheckoutTextBox = ({ type, text, paragraph }) => {
   const [isCouponVisible, setIsCouponVisible] = useState(false);

   const toggleCoupon = () => {
     setIsCouponVisible(!isCouponVisible);
   };
  return (
    <div className="relative">
      <div className="absolute sm:top-[1rem] sm:left-[-0.5rem] bg-[#fcfcfc] border border-[#f4f4f4] border-[0.4rem] p-[0.6rem] xs:top-[-1.8rem] xs:left-[38%] ">
        <img src={fileicon} alt="fileicon" />
      </div>
      <div>        {type === "link" && (
          <p className="bg-[#f4f4f4] xs:text-center sm:text-left font-bold px-[3.2rem] sm:ml-[1.5rem] xs:pt-[3rem] xs:text-[1rem]  xs:pb-[2rem] sm:py-[2rem] sm:text-[1.1rem] ">
            {paragraph}{" "}
            <a href="#"  onClick={toggleCoupon} className="text-black font-bold mx-2 hover:text-[#FFCA08]">
              {text}
            </a>
            </p>
            )}
            {isCouponVisible && (
        <div className="coupon-form mt-2 flex flex-col">
          <input
            type="text"
            className="border rounded-full border-gray-400 p-3 mt-[3rem] mb-[1rem] w-[45%]"
            placeholder="Enter your coupon code"
          />
          <Button text='Apply coupon'/>
        </div>
        )}
         
        
        {type !== "link" && (
          <p className="bg-[#f4f4f4] font-bold px-[3.2rem] xs:pt-[3rem] xs:text-[1rem]  sm:ml-[1.5rem] sm:text-left xs:pb-[2rem] xs:text-center sm:py-[2rem] sm:text-[1.1rem] xs:leading-[1.8rem] md:leading-[2.5rem]">
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckoutTextBox;
