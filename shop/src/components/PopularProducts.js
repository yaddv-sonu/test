import React from "react";
import { FaStar, FaShoppingBag } from "react-icons/fa";

const PopularProducts = () => {
  const popularFruits = [
    {
      name: "Apple",
      image: process.env.PUBLIC_URL + "/images/1.png",
      price: "$1.99",
      rating: 4.5,
    },
    {
      name: "Banana",
      image: process.env.PUBLIC_URL + "/images/2.png",
      price: "$0.99",
      rating: 4.0,
    },
    {
      name: "Orange",
      image: process.env.PUBLIC_URL + "/images/3.png",
      price: "$2.49",
      rating: 4.8,
    },
    {
      name: "Strawberry",
      image: process.env.PUBLIC_URL + "/images/4.png",
      price: "$3.99",
      rating: 4.2,
    },
    {
      name: "Mango",
      image: process.env.PUBLIC_URL + "/images/4.png",
      price: "$2.29",
      rating: 4.6,
    },
    {
      name: "Grapes",
      image: process.env.PUBLIC_URL + "/images/6.png",
      price: "$4.99",
      rating: 4.7,
    },
    {
      name: "Watermelon",
      image: process.env.PUBLIC_URL + "/images/7.png ",
      price: "$5.99",
      rating: 4.9,
    },
    {
      name: "Pineapple",
      image: process.env.PUBLIC_URL + "/images/8.png",
      price: "$2.99",
      rating: 4.4,
    },
    {
      name: "Kiwi",
      image: process.env.PUBLIC_URL + "/images/9.png",
      price: "$1.49",
      rating: 4.3,
    },
    {
      name: "Peach",
      image: process.env.PUBLIC_URL + "/images/10.png",
      price: "$3.49",
      rating: 4.1,
    },
  ];

  const itemsPerRow = 5;

  const rows = [];
  for (let i = 0; i < popularFruits.length; i += itemsPerRow) {
    rows.push(popularFruits.slice(i, i + itemsPerRow));
  }

  const renderStars = (rating) => {
    const starIcons = [];
    for (let i = 0; i < 5; i++) {
      starIcons.push(
        <FaStar
          key={i}
          className={i < rating ? "text-black-50" : "text-gray-300"}
        />
      );
    }
    return starIcons;
  };

  return (
    <div className="mt-2">
      <h2 className="text-black text-3xl font-semibold mb-2">
        Popular Products
      </h2>

      <div className="grid ">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-5 ">
            {row.map((fruit, index) => (
              <div key={index} className="">
                <div className="product-container bg-white p-2 border-2">
                  <img
                    src={fruit.image}
                    alt={fruit.name}
                    className="w-[150px] h-[200px]  rounded-md"
                  />
                  <div className="flex justify-between w-full">
                    <div className="text-left">
                      <h3 className="text-black text-sm font-semibold mb-1">
                        {fruit.name}
                      </h3>
                      <p className="text-black">${fruit.price}</p>
                      <div className="flex items-center">
                        <span className="text-black">{fruit.rating}</span>
                        {renderStars(fruit.rating)}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <a
                        href="#"
                        className="text-white  text-center bg-gray-300 p-2 rounded-full"
                      >
                        <FaShoppingBag />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-4">
        <p className="text-gray-500 text-sm">View All</p>
      </div>
    </div>
  );
};

export default PopularProducts;
