import carlogo from "../assets/car-rental-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { setToken } from '../utils/Token.js';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "https://car-rental-okvm.onrender.com/login";
    try {
      const response = await axios.post(url, loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.token) {
        setToken(response.data.token);
        console.log("Token saved:", response.data.token);

        setErrorMessage("Login submitted successfully");
        alert("Login successfully!");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage("Error response: " + error.response.data.message);
        alert("Error Logging in: " + error.response.data.message);
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
      <div className="bg-gradient-to-b from-yellow-500 to-white p-8 sm:rounded-2xl sm:shadow-lg w-full sm:w-[500px] sm:mt-[5rem] text-center">
        <div className="flex flex-col items-start">
          <Link to="/">
            <div className="mb-6">
              <img src={carlogo} alt="car logo" className="mx-auto w-[8rem]" />
            </div>
          </Link>
          <h2 className="text-2xl font-bold mb-2">Log in</h2>
          <p className="text-gray-500 mb-6">Continue to Car Rental account</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="block text-left text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            value={loginData.email}
            name="email"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            id="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
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
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your password"
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
            Continue with email
          </button>
          <a href="" className="block text-right  text-yellow-600">
            Forgot password?
          </a>
        </form>

        <div className="my-6 flex items-center justify-center">
          <div className="border-t w-[40%] border-yellow-600 "></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="border-t w-[40%] border-yellow-600"></div>
        </div>

        <div className="mt-6">
          <p className="text-[0.95rem]">
            New to Car Rentals?{" "}
            <a href="/signup" className="text-yellow-600 hover:underline">
              Get started
            </a>
          </p>
        </div>

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

export default Login;
