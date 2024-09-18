import PagesHero from "../../reusables/PagesHero";
import { CheckoutLeft } from "./CheckoutLeft";
import { CheckoutRight } from "./CheckoutRight";

const Checkout = () => {
  return (
    <div className="checkoutPage bg-[#ffffff]">
      <PagesHero />
      <div>
        <div>
          <p className="bg-[#f4f4f4] mx-[2rem] text-[1.1rem] font-bold p-[2rem]  my-3 ">Have a coupon? <a href="" className="text-black font-bold mx-2">Click here to enter your code.</a></p>
        </div>
      <div className="px-[2rem] justify-between flex ">
        <CheckoutLeft />
        <CheckoutRight />
      </div>
      </div>
      
    </div>
  );
};

export default Checkout;
