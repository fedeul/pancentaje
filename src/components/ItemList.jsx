import React from "react";
import ItemRecipe from "./ItemRecipe";

const ItemList = ({ itemList }) => {
  return (
    <>
      {itemList.map((item) => {
        return <ItemRecipe item={item.name} />;
      })}

      {/* <ItemRecipe percent={itemList} /> */}
    </>
  );
};

export default ItemList;
