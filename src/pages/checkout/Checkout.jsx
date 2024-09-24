import { useEffect, useRef} from 'react';
import CheckoutTextBox from '../../reusables/checkoutreuseable/CheckoutTextBox';
import PagesHero from '../../reusables/PagesHero';
import { CheckoutLeft } from './CheckoutLeft';
import { CheckoutRight } from './CheckoutRight';

const Checkout = () => {
  const rightSideRef = useRef(null);
  const leftSideRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rightSideRef.current && leftSideRef.current) {
        const rightElement = rightSideRef.current;
        const leftElement = leftSideRef.current;

// Sync the scroll position of the left and right sections with the main page scroll
const scrollRatio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
const maxLeftScrollTop = leftElement.scrollHeight - leftElement.clientHeight;
const maxRightScrollTop = rightElement.scrollHeight - rightElement.clientHeight;

        leftElement.scrollTop = scrollRatio * maxLeftScrollTop;
        rightElement.scrollTop = scrollRatio * (rightElement.scrollHeight - rightElement.clientHeight);
      }
    };
    window.addEventListener('scroll', handleScroll);

  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="checkoutPage relative min-h-screen bg-[#ffffff]" >
      <PagesHero />
      <div className="m-[2rem]">
        <CheckoutTextBox
          type="link"
          paragraph="Have a coupon?"
          text="Click here to enter your code."
        />
        <div className="flex justify-between sticky pb-[7rem] my-[2rem] top-0 xs:flex-col md:flex-row ">
          
          <div
            ref={leftSideRef}
            className="billingDetails  scrollbar-hidden xs:w-full md:w-[53%] sticky md:top-0 overflow-auto"
            >
            <CheckoutLeft />
          </div>

          <div ref={rightSideRef} className=" scrollbar-hidden xs:w-full md:w-[43%] sticky md:top-[-40%] overflow-auto max-h-[150vh]" >
            <CheckoutRight />
          </div>
        </div>
      </div>
      <PagesHero />
    </div>
  );
};

export default Checkout;
