import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="h-[92vh] flex justify-center items-center bg-gray-200">
        <div className="flex flex-col text-center w-[90vh]">
          <h1 className="font-bold text-3xl">Welcome to FnMoney</h1>
          <p className="w-lg mt-6 text-lg font-semibold">
            Your go-to platform for financial assessments and insights. We help
            you manage your finances with ease and confidence.
          </p>
          <div className="flex justify-center gap-4 my-5">
            <Link to="/register">
              <button className="bg-gray-950 rounded-lg h-full text-white font-bold px-5 py-2 cursor-pointer w-32 border-3 border-transparent hover:bg-white hover:text-black hover:border-black">
                Sign Up
              </button>
            </Link>

            <button className="bg-gray-100 rounded-lg px-5 py-3 font-bold text-black cursor-pointer w-32 hover:bg-gray-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
