// src/components/Header.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faStore,
  faNewspaper,
  faHome,
  faFileAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="bg-white p-4 m-3">
      <div className="flex items-center justify-between">
        {/* Logo and Search Bar */}
        <div className="flex items-center space-x-96">
          {/* Replace the logo with orangemerat image */}
          <img
            src="https://placekitten.com/50/50" // Replace this URL with the orangemerat image URL
            alt="Logo"
            className="w-10 h-10"
          />

          {/* Add margin to create a gap between the logo and search bar */}
          <div className="flex items-center ml-4">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search for fruits..."
              className="p-2 border border-white rounded"
            />
            <button className="bg-yellow-600 text-white p-2 rounded">
              Search
            </button>
          </div>
        </div>

        {/* Shopping Cart */}
        <div className="flex items-center space-x-4">
          {/* Add your shopping cart icon and link here */}
          <a href="#" className="text-gray-800">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center justify-between mt-4 bg-yellow-600 p-4 rounded">
        <ul className="flex space-x-6 text-white">
          <li className="relative group">
            <a href="#">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
              <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
            </a>
            {/* Dropdown for Home */}
            <ul className="absolute hidden bg-white text-gray-800 group-hover:block">
              <li>
                <a href="#">Option 1</a>
              </li>
              <li>
                <a href="#">Option 2</a>
              </li>
              {/* Add more options as needed */}
            </ul>
          </li>
          <li className="relative group">
            <a href="#">
              <FontAwesomeIcon icon={faStore} className="mr-2" />
              Shop
              <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
            </a>
            {/* Dropdown for Shop */}
            <ul className="absolute hidden bg-white text-gray-800 group-hover:block">
              <li>
                <a href="#">Category 1</a>
              </li>
              <li>
                <a href="#">Category 2</a>
              </li>
              {/* Add more categories as needed */}
            </ul>
          </li>
          <li className="relative group">
            <a href="#">
              <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
              Blog
              <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
            </a>
            {/* Dropdown for Blog */}
            <ul className="absolute hidden bg-white text-gray-800 group-hover:block">
              <li>
                <a href="#">Post 1</a>
              </li>
              <li>
                <a href="#">Post 2</a>
              </li>
              {/* Add more posts as needed */}
            </ul>
          </li>
          <li className="relative group">
            <a href="#">
              <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
              Pages
              <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
            </a>
            {/* Dropdown for Pages */}
            <ul className="absolute hidden bg-white text-gray-800 group-hover:block">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              {/* Add more pages as needed */}
            </ul>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
