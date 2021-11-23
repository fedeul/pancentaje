import React from "react";

const ItemRecipe = (item) => {
  return (
    <div className="mt-7 flex">
      <input
        type="text"
        placeholder="Ingredient"
        className="p-3 m-1 block w-50 border-none bg-gray-100 h-11 rounded-xl  hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        name={item.ItemName}
        value={item.ItemName}
      />
      <input
        type="number"
        placeholder="0"
        className="p-3 m-1 block w-20 border-none bg-gray-100 h-11 rounded-xl  hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
        name={item.percent}
        value={item.percent}
      />
      <p className="p-3 mt-1 block">%</p>
    </div>
  );
};

export default ItemRecipe;
