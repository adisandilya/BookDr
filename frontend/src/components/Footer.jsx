import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left side */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600  leading-6">
             BookDr is an AI-powered web app that simplifies healthcare by helping patients effortlessly find, book, and consult doctors with smart assistant bots for instant support and seamless scheduling.
          </p>
        </div>

        {/* center  */}
        <div>
          <p
            className="text-xl font-medium mb-5
            "
          >
            COMPANY
          </p>
          {/* <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul> */}
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
               Privacy Policy
            </li>
          </ul>
        </div>

        {/* right side */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 9999999991</li>
            <li>admin@bookdr.com</li>
          </ul>
        </div>
      </div>
      {/* Copy write text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@BookDr -All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;