import Input from "../reusables/Input";
import { useState } from "react";
import Button from "./checkoutreuseable/Button";
import axios from "axios";

const LocationForm = () => {
  const [formData, setFormData] = useState({
    YourName: "",
    phone: "",
    email: "",
    department:"",
    additionalInformation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.YourName || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
      console.log("Response:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col items-center bg-[#1c1601] mt-12 pb-10 pt-6 shadow-[20px_20px_0_#e9e9e9] px-12 rounded-3xl w-[50%]"
    >
      <div className="flex flex-wrap justify-between">
        <Input
          htmlFor="yourName"
          label="Your Name"
          isRequired={true}
          name="YourName"
          value={formData.YourName}
          onChange={handleChange}
          width="sm:w-[47%]"
          color="text-[#a0a0a0]"
          bg="bg-[#fff]"
          textcl="text-[#a0a0a4]"
          text="text-sm"
          margin="my-[.5rem]"
        />
        <Input
          htmlFor="yourEmail"
          label="Your Email"
          isRequired={true}
          name="email"
          value={formData.email}
          onChange={handleChange}
          width="sm:w-[47%]"
          color="text-[#a0a0a0]"
          bg="bg-[#fff]"
          textcl="text-[#a0a0a4]"
          text="text-sm"
          margin="my-[.5rem]"
        />
        <Input
          htmlFor="phone"
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          width="sm:w-[47%]"
          bg="bg-[#fff]"
          textcl="text-[#a0a0a4]"
          text="text-sm"
          margin="my-[.5rem]"
        />
        <div className="flex flex-col sm:w-[47%] w-full">
          <label htmlFor="" className="mt-[1rem] mb-[.5rem] text-[#a0a0a4] text-sm">Department</label>
          <select
            name="department"
            value={formData.department}
            id="department"
            className="border border-[#dcdcdc] pt-10 text-[#595959] rounded-3xl h-[3.1rem] px-[1rem]"
            onChange={handleChange}
          >
            <option value="">Hello</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col w-full mb-8">
        <label htmlFor="notes" className="my-[.5rem] text-[#a0a0a4] text-sm">
          Your Question
        </label>
        <textarea
          name="additionalInformation"
          id="notes"
          value={formData.additionalInformation}
          onChange={handleChange}
          className="border p-[1rem] focus:outline-none focus:ring-2 focus:ring-yellow-500 border-[#dcdcdc] text-[#595959] rounded-3xl h-[10rem] bg-[#fff]"
        ></textarea>
      </div>
      <Button text="Submit" width="w-[8rem]" />
    </form>
  );
};

export default LocationForm;
