import { useState } from "react";
import firebase from "firebase";
import "firebase/firestore";
import { getFirestore } from "../services/getFirebase";
import ItemList from "./ItemList";

const FormReceta = () => {
  const [recipeData, setRecipeData] = useState({
    name: "",
    item: { itemName: "", percent: 0 },
  });

  const createRecipe = (e) => {
    e.preventDefault();

    const db = getFirestore();
    const recipes = db.collection("recipes");

    recipes
      .add(recipeData)
      .then(
        setRecipeData({
          name: "",
          item: { itemName: "", percent: 0 },
        })
      )
      .catch((err) => console.log(err));
  };

  const handleOnChange = (e) => {
    setRecipeData({
      ...recipeData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
          <img
            src="https://naturbakst.no/wp-content/themes/naturbakst/images/grovhet-grovt.png"
            alt="Logo"
            width="100"
            className="mx-auto mb-5"
          />
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                Nueva Receta
              </label>
              <form className="mt-10" onChange={handleOnChange}>
                <div>
                  <input
                    type="text"
                    placeholder="Nombre de la receta"
                    className="p-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    name="name"
                    id="name"
                    value={recipeData.name}
                  />
                </div>

                <ItemList percent={recipeData.item.percent} />
                <ItemList percent={recipeData.item.percent} />

                <div className="mt-7">
                  <button
                    onClick={createRecipe}
                    className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    CREAR RECETA
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormReceta;
