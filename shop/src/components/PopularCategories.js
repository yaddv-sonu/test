import React from "react";

const PopularCategories = () => {
  const popularCategories = [
    { name: "Fruits", image: "https://source.unsplash.com/weekly?fruit" },
    {
      name: "Vegetables",
      image: "https://source.unsplash.com/weekly?vegetable",
    },
    { name: "Drinks", image: "https://source.unsplash.com/weekly?drink" },
    { name: "Bakery", image: "https://source.unsplash.com/weekly?bakery" },
    { name: "Dairy", image: "https://source.unsplash.com/weekly?dairy" },
    { name: "Meat", image: "https://source.unsplash.com/weekly?meat" },
    { name: "Seafood", image: "https://source.unsplash.com/weekly?seafood" },
    { name: "Snacks", image: "https://source.unsplash.com/weekly?snacks" },
    // Add more popular categories as needed
  ];

  const itemsPerRow = 6;

  const rows = [];
  for (let i = 0; i < popularCategories.length; i += itemsPerRow) {
    rows.push(popularCategories.slice(i, i + itemsPerRow));
  }

  return (
    <div className="mt-4">
      <h2 className="text-black text-3xl font-semibold mb-2">
        Popular Categories
      </h2>

      <div className="grid  gap-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-6 gap-4">
            {row.map((category, index) => (
              <div key={index} className="col-span-1">
                <div className="category-container bg-white p-4  rounded-md shadow-md">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-20 object-cover rounded-md mb-2"
                  />
                  <a href="#" className="block text-center p-2 rounded-md">
                    {category.name}
                  </a>
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

export default PopularCategories;
