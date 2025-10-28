import { useState } from "react";
import GenRecipe from "./GenRecipe";
import IngredientList from "./IngredientList";
import { getRecipeFromGemini } from "../api/gemini";

export default function Hero() {
  const [ingredients, setIngredients] = useState([]);
  // const [recipeShown, togglerecipeShown] = useState(false);
  const [recipe, setRecipe] = useState("");

  const items = ingredients.map((element) => <li key={element}>{element}</li>);

  function handleSubmit(formData) {
    const newitem = formData.get("ingredient").trim();
    if (!newitem) return;
    setIngredients((prev) => [...prev, newitem]);
  }

  // function showRecipe() {
  //   togglerecipeShown((prev) => !prev);
  // }

  // showing ai recipe
  async function fetchRecipe() {
    const recipeText = await getRecipeFromGemini(ingredients);
    setRecipe(recipeText);
  }

  return (
    <main className="flex justify-center items-center pt-20 flex-col gap-20 mr-35 ml-35">
      <div id="tagline" className="flex justify-center w-full max-w-4xl px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight text-shadow-amber">
            Few ingredients in the kitchen?
          </h1>
          <p className="text-2xl font-semibold md:text-3xl text-amber-700 mt-3">
            No Worries, We've got you covered!
          </p>
          <p className="text-lg mt-4 font-medium text-amber-600">
            Add your leftover ingredients and let us do the magic
          </p>
        </div>
      </div>

      <form
        className="flex flex-row gap-22 justify-center"
        action={handleSubmit}
      >
        <input
          aria-label="Add Ingredients"
          type="text"
          placeholder="e.g. spinach"
          className="drop-shadow-lg hover:drop-shadow-xl bg-gray-100 h-12 w-150 rounded-md pl-2 text-amber-900 placeholder:text-amber-800"
          name="ingredient"
        />
        <button
          type="submit"
          className="rounded-md bg-amber-400 h-12 w-75 drop-shadow-lg hover:drop-shadow-xl text-[18px]"
        >
          + Add Ingredient
        </button>
      </form>

      {ingredients.length > 0 && (
        <IngredientList ingredients={ingredients} getRecipe={fetchRecipe} />
      )}

      {recipe && <GenRecipe recipe={recipe} />}
    </main>
  );
}
