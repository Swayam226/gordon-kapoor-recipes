export default function GenRecipe({ recipe }) {
  return (
    <section className="w-250 bg-amber-400 rounded-xl p-8 mt-6">
      <h2 className="text-amber-850 text-2xl font-bold mb-4">
        Your AI-Generated Recipe
      </h2>
      <article className="text-lg whitespace-pre-line">{recipe}</article>
    </section>
  );
}
