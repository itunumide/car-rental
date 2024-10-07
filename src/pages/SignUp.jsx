import logo from "../assets/car-rental-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { setToken } from "../utils/Token.js";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    const url = "https://car-rental-okvm.onrender.com/signup";
    try {
      const response = await axios.post(url, signupData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.token) {
        setToken(response.data.token);
        console.log("Token saved:", response.data.token);
        alert("Signup successful!");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage( error.response.data.message);
        alert("Error signing up: " + error.response.data.message);
      } else if (error.request) {
        setErrorMessage("No response from the server. Please try again later.");
        alert("No response from the server. Please try again later.");
      } else {
        setErrorMessage("An unexpected error occurred: " + error.message);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen sm:bg-gradient-to-r from-yellow-500 to-yellow-900">
      <div className=" bg-gradient-to-b from-yellow-500 to-white p-8 sm:rounded-2xl sm:shadow-lg w-full sm:w-[500px] sm:mt-[5rem]  ">
        <div className="flex flex-col gap-3">
          <Link to="/">
            <img src={logo} alt="car logo" className=" w-[8rem]" />
          </Link>
          <h2 className=" text-2xl  font-bold text-black-500 ">
            Create a Car Rental account
          </h2>
          <p className="text-gray-500 mb-6">Join us for a better car rental experience</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email Field */}
          <label
            htmlFor="email"
            className="block text-left text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            value={signupData.email}
            name="email"
            onChange={(e) =>
              setSignupData({ ...signupData, email: e.target.value })
            }
            id="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />

          {/* First Name Field */}
          <label
            htmlFor="firstName"
            className="block text-left text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            value={signupData.firstName}
            name="firstName"
            onChange={(e) =>
              setSignupData({ ...signupData, firstName: e.target.value })
            }
            id="firstName"
            placeholder="First Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />

          {/* Last Name Field */}
          <label
            htmlFor="lastName"
            className="block text-left text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            value={signupData.lastName}
            name="lastName"
            onChange={(e) =>
              setSignupData({ ...signupData, lastName: e.target.value })
            }
            id="lastName"
            placeholder="Last Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />

          {/* Password Field */}
          <label
            htmlFor="password"
            className="block text-left text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={signupData.password}
            onChange={(e) =>
              setSignupData({ ...signupData, password: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your password"
            required
          />

          {/* Confirm Password Field */}
          <label
            htmlFor="confirmPassword"
            className="block text-left text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            value={signupData.confirmPassword}
            onChange={(e) =>
              setSignupData({
                ...signupData,
                confirmPassword: e.target.value,
              })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Confirm your password"
            required
          />

          <div className="flex items-center">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="mr-2"
            />
            <label htmlFor="showPassword" className="text-sm text-gray-600">
              Show Password
            </label>
          </div>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <button
            type="submit"
            className="w-full bg-yellow-800 text-white py-2 rounded-lg hover:bg-yellow-900"
          >
            Create Account
          </button>
        </form>

        <div className="flex  items-center justify-between mt-6 gap-4 rent flex-col lg:flex-row ">
          <small className=" flex justify-between gap-1 ">
            <p className="text">
              Already have a Car Rental account?{" "}
              <a href="/login" id="" className="text-[0.95rem] text-yellow-600">
                Log in
              </a>{" "}
            </p>
          </small>
        </div>
        <p className="mt-10 text-left text-sm">
          By proceeding, you agree to the{" "}
          <a href="#" className=" text-yellow-600">
            Terms and Conditions
          </a>{" "}
          and
          <a href="#" className=" text-yellow-600">
            {" "}
            Privacy Policy
          </a>
        </p>
        <div className="mt-8 flex justify-between w-[200px] text-sm text-gray-500">
        <a href="#" className="hover:underline">
          Help
        </a>
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <a href="#" className="hover:underline">
          Terms
        </a>
      </div>
      </div>
      
    </div>
  );
};
export default Signup;
