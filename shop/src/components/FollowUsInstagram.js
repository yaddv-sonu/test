import React from "react";

const FollowUsInstagram = () => {
  const getRandomNumber = () => Math.floor(Math.random() * 1000) + 1;

  const getRandomFruitVegetableImages = (count) => {
    const images = [];
    for (let i = 0; i < count; i++) {
      images.push(
        `https://source.unsplash.com/random/400x400?fruit,vegetable${getRandomNumber()}`
      );
    }
    return images;
  };

  const fruitVegetableImages = getRandomFruitVegetableImages(6);

  return (
    <div className="mt-4 bg-white p-4 rounded-lg flex flex-col items-center border-2 m-2">
      <h2 className="text-green-500 text-lg font-semibold mb-2">
        Follow Us on Instagram
      </h2>
      <div className="flex items-center justify-center space-x-4">
        {fruitVegetableImages.map((imageUrl, index) => (
          <div key={index} className="w-24 h-24 overflow-hidden">
            <img
              src={imageUrl}
              alt={`Instagram ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <p className="text-center text-gray-500 mt-2">
        Follow us on Instagram for the latest updates and behind-the-scenes
        content!
      </p>
    </div>
  );
};

export default FollowUsInstagram;
