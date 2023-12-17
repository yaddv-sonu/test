import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Subscriber = () => {
  return (
    <div className="mt-4 flex items-center justify-between m-10">
      <div>
        <h2 className="text-black text-lg font-semibold mb-2">
          Subscribe to Our Newsletter
        </h2>
      </div>

      <div className="flex items-center">
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-green-500 rounded-l"
          />
        </div>
        <div>
          <button className="bg-yellow-500 text-white p-2 rounded-r">
            Subscribe
          </button>
        </div>
      </div>

      <div className="mt-4 ml-4">
        <div className="flex space-x-4">
          <a href="#" className="text-yellow-500">
            <FaFacebook />
          </a>
          <a href="#" className="text-white-500">
            <FaTwitter />
          </a>
          <a href="#" className="text-white500">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
