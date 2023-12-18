import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black p-4 text-white text-center">
      <div className="grid  grid-cols-5 ">
        {/* Logo Section */}
        <div className="flex items-center justify-center md:col-span-1 lg:col-span-1">
          <img
            src={process.env.PUBLIC_URL + "/images/logo1.png "} // Replace with the actual path to your logo image
            alt="Fruit Shop Logo"
            className="h-24 w-auto"
          />
        </div>
        {/* Links Sections */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="list-none">
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Order History</a>
            </li>
            <li>
              <a href="#">Shopping Cart</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Categories</h4>
          <ul className="list-none">
            <li>
              <a href="#">Fruits</a>
            </li>
            <li>
              <a href="#">Vegetables</a>
            </li>
            <li>
              <a href="#">Drinks</a>
            </li>
            {/* Add more categories */}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="list-none">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
          <ul className="list-none">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4">&copy; 2023 Fruit Shop. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
