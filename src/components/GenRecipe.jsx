export default function GenRecipe(props) {
  return (
    <section className="w-250 bg-amber-400 rounded-xl p-8 mt-6">
      <h2 className="text-amber-850 text-2xl font-bold mb-4">
        Have a delight!
      </h2>
      <article className="text-lg whitespace-pre-line">{props.recipe}</article>
    </section>
  );
}
