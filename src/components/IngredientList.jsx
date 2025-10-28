export default function IngredientList(props) {
  return (
    <section className="w-250 bg-amber-400 rounded-xl p-6">
      <h2 className="text-2xl font-bold text-amber-900 mb-3">
        Ingredients on Hand!!
      </h2>
      <ul className="list-disc list-inside mb-4">
        {props.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <button
        type="button"
        className="bg-amber-600 text-white px-4 py-2 rounded-md hover:scale-105 transition"
        onClick={props.getRecipe}
      >
        Get Recipe!
      </button>
    </section>
  );
}
