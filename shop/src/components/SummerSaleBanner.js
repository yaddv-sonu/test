import React from "react";

const SummerSaleBanner = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 1000) + 1;
  const backgroundImageUrl = `https://source.unsplash.com/random/1920x1080?fruit,vegetable${getRandomNumber()}`;

  return (
    <div
      className="relative bg-cover bg-center py-16 text-white text-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 mx-auto">
        <h2 className="text-4xl font-bold mb-4 -mr-96">Summer Sale!</h2>
        <p className="text-lg mb-8 -mr-96">
          Enjoy a refreshing 37% off on selected items.
        </p>
        <button className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold -mr-96 hover:bg-green-600">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default SummerSaleBanner;
