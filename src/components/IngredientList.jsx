export default function IngredientList(props) {
  return <p>{props.length > 0 ? "" : "Can't find any ingredients :("}</p>;
}
