import { useState } from "react";

export default function Hero() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, togglerecipeShown] = useState(false);

  const items = ingredients.map((element) => <li key={element}>{element}</li>);

  function handleSubmit(formData) {
    const newitem = formData.get("ingredient").trim();
    if (!newitem) return;
    setIngredients((prev) => [...prev, newitem]);
  }

  function showRecipe() {
    togglerecipeShown((prev) => !prev);
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

      <div className="w-250 bg-amber-400 flex flex-col items-center font-bold h-auto rounded-xl">
        <span className="text-3xl pt-5 text-amber-950">
          Ingredients on Hand!!
        </span>

        <div className="w-200 border-blue-800 mt-6 h-auto">
          <p>{items.length > 0 ? "" : "Can't find any ingredients :("}</p>
          <ul className="list-none list-inside p-6">{items}</ul>
        </div>
      </div>

      {items.length > 0 ? (
        <div className="w-250 text-amber-800 text-2xl h-20 bg-amber-400 flex flex-row rounded-xl items-center justify-center gap-30">
          <span className="font-bold">Ready for the Recipe ?</span>
          <button
            type="button"
            className="text-[17px] rounded-md text-amber-200 bg-amber-600 h-10 w-40 hover:drop-shadow-xl"
            onClick={showRecipe}
          >
            Get Recipe!
          </button>
        </div>
      ) : null}

      {recipeShown ? (
        <section className="w-250 h-auto bg-amber-400 rounded-xl p-14">
          <h2>Enjoy your recipe</h2>
          <article className="mt-8 text-lg" aria-live="polite">
            <p>
              Based on the ingredients you have available, I would recommend
              making a simple a delicious <strong>Beef Bolognese Pasta</strong>.
              Here is the recipe:
            </p>
            <h3 className="font-bold mb-5">Beef Bolognese Pasta</h3>
            <strong>Ingredients:</strong>
            <ul className="mb-5">
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>
                8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
              </li>
            </ul>
            <strong>Instructions:</strong>
            <ol className="list-disc">
              <li>
                Bring a large pot of salted water to a boil for the pasta.
              </li>
              <li>
                In a large skillet or Dutch oven, cook the ground beef over
                medium-high heat, breaking it up with a wooden spoon, until
                browned and cooked through, about 5-7 minutes.
              </li>
              <li>
                Add the diced onion and minced garlic to the skillet and cook
                for 2-3 minutes, until the onion is translucent.
              </li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>
                Add the crushed tomatoes, beef broth, oregano, and basil. Season
                with salt and pepper to taste.
              </li>
              <li>
                Reduce the heat to low and let the sauce simmer for 15-20
                minutes, stirring occasionally, to allow the flavors to meld.
              </li>
              <li>
                While the sauce is simmering, cook the pasta according to the
                package instructions. Drain the pasta and return it to the pot.
              </li>
              <li>
                Add the Bolognese sauce to the cooked pasta and toss to combine.
              </li>
              <li>
                Serve hot, garnished with additional fresh basil or grated
                Parmesan cheese if desired.
              </li>
            </ol>
          </article>
        </section>
      ) : null}
    </main>
  );
}
