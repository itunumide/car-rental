import Input from "../reusables/Input";
import { useState } from "react";

const LocationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    streetAddress1: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalInformation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }
  };
  return (
    <form
      action=""
      className=" bg-[#1c1601] mt-10 py-3 shadow-[20px_20px_0_#e9e9e9] px-12 rounded-3xl w-[50%]"
    >
     <div className="flex flex-wrap justify-between">
     <Input
        htmlFor="firstName"
        label="First name"
        isRequired={true}
        value={formData.firstName}
        onChange={handleChange}
        width="sm:w-[47%]"
        bg="#fff"
      />
      <Input
        htmlFor="firstName"
        label="First name"
        isRequired={true}
        value={formData.firstName}
        onChange={handleChange}
        width="sm:w-[47%]"
        bg="#fff"
      />
      <Input
        htmlFor="firstName"
        label="First name"
        isRequired={true}
        value={formData.firstName}
        onChange={handleChange}
        width="sm:w-[47%]"
        bg="#fff"
      />{" "}
      <Input
        htmlFor="firstName"
        label="First name"
        isRequired={true}
        value={formData.firstName}
        onChange={handleChange}
        width="sm:w-[47%]"
        bg="#fff"
      />
     </div>
      <div className="flex flex-col">
      <label htmlFor="notes" className="my-[1rem] text-[#595959]">
        Order notes(optional)
        
      </label>
      <textarea
          name="additionalInformation"
          id="notes"
          value={formData.additionalInformation}
          onChange={handleChange}
          placeholder="Notes about your order, e.g. special notes for delivery."
          className="border p-[1rem] border-[#dcdcdc] text-[#595959] rounded-3xl h-[10rem] bg-transparent"
        ></textarea>
      </div>
    </form>
  );
};

export default LocationForm;
