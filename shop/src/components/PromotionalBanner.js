import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faHeadset,
  faLock,
  faMoneyBill,
  faShippingFast,
  faHeadphonesAlt,
} from "@fortawesome/free-solid-svg-icons";

import promotionalBannerImage from "./Frame.png"; // Replace with the actual path to your image

const PromotionalBanner = () => {
  return (
    <div className="">
      <div className="flex">
        {/* First section with background image */}
        <div
          className="bg-cover bg-center py-48 text-white text-center w-2/3 relative"
          style={{ backgroundImage: `url(${promotionalBannerImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Second section with offer content */}
        <div className="bg-white py-8 text-center w-1/2  flex-row">
          {/* Left div with offer content */}
          <div className=" h-1/2 border-2">
            <h2 className="text-4xl font-bold mb-4">Limited Time Offer</h2>
            <p className="text-lg mb-8">
              Get 45% off on selected items. Shop now!
            </p>
          </div>

          {/* Right div with yellow background and text */}
          <div className=" h-1/2 bg-yellow-300 ">
            <p className="text-lg text-gray-800 text-center py-8">
              Special Product of the Deal
            </p>
            {/* Add additional content for the special product */}
          </div>
        </div>
      </div>

      {/* Third section horizontally aligned with the first two */}
      <div className="bg-white py-16 text-center flex-1 border-2 m-2">
        <div className="flex justify-center space-x-8">
          <div>
            <FontAwesomeIcon
              icon={faTruck}
              className="text-gray-800 text-3xl mb-2"
            />
            <p className="text-sm mt-2">Free Shipping</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faHeadset}
              className="text-gray-800 text-3xl mb-2"
            />
            <p className="text-sm mt-2">24/7 Customer Support</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faLock}
              className="text-gray-800 text-3xl mb-2"
            />
            <p className="text-sm mt-2">100% Secure Payment</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faMoneyBill}
              className="text-gray-800 text-3xl mb-2"
            />
            <p className="text-sm mt-2">Money-Back Guarantee</p>
          </div>
          {/* Additional Icons */}
          <div>
            <FontAwesomeIcon
              icon={faShippingFast}
              className="text-gray-800 text-3xl mb-2"
            />
            <p className="text-sm mt-2">Fast Shipping</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faHeadphonesAlt}
              className="text-gray-800 text-3xl mb-2"
            />
            <p className="text-sm mt-2">24/7 Customer Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
