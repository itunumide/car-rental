import Input from "../../reusables/checkoutreuseable/Input";

export const CheckoutLeft = () => {
  return (
    <div className="billingDetails pb-[2rem] w-[100%]">
      <h1 className="bg-[#1c1601] text-[#ffca06] font-bold sm:text[1rem] md:text-[1.3rem] h-[9vh]  flex items-center justify-center  rounded-full  px-[2rem] ">
        Billing details
      </h1>
      <div className="flex flex-wrap w-full m-auto">
      <div className="sm:flex w-full sm:justify-between ">
      <Input 
        htmlFor="firstname"
        label="First name"
        type="text"
        required={true}
        width="sm:w-[47%]"
       
      />
      <Input
        htmlFor="name"
        label="Last name"
        type="text"
        required={true}
        width="sm:w-[47%]"
        
       
      />
      </div>
      <Input
        htmlFor="name"
        label="Company name (optional)"
        type="text"
        required={true}
      />
      <Input
        htmlFor="name"
        label="Country/Region"
        type="text"
        required={true}
      />
      <Input
        htmlFor="streetAddress"
        label="Street address"
        type="text"
        placeholder="House number and street name"
        required={true}
      />
      <Input
        htmlFor="streetAddress"
        type="text"
        placeholder="Apartment, suite, unit, etc. (optional)"
        required={false}
      />
      <Input
        htmlFor="name"
        label="Town/City"
        type="text"
        required={true}
      />
      <Input
        htmlFor="name"
        label="State"
        type="text"
        required={true}
      />
      <Input
        htmlFor="name"
        label="Zipcode"
        type="text"
        required={true}
      />
      <Input
        htmlFor="name"
        label="Phone"
        type="number"
        required={true}
      />
      <Input
        htmlFor="name"
        label="Email address"
        type="email"
        required={true}
      />
      <div className="w-full flex flex-col">
        <h3 className="font-bold text-[1.4rem] my-[1rem]">Additional information</h3>
          <hr className="h-3 w-full " />
          <label htmlFor="" className="my-[1rem] text-[#595959]">Order notes(optional)</label>
          <textarea name="" id="" placeholder="Notes about your order, e.g. special notes for delivery." className="border p-[1rem] border-[#dcdcdc] text-[#595959] rounded-3xl h-[10rem] bg-transparent"></textarea>
      </div>
      </div>
    </div>
  );
};
