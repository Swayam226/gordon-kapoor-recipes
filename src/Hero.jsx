import { useState } from "react";
export default function Hero() {

    const [ingredients, setIngredients] = useState([]);

    const items = ingredients.map(element=>(
        <li key={element}>{element}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault();
        const formdata = new FormData(event.currentTarget)
        const newitem = formdata.get("ingredient")
        setIngredients((prevstate) => [...prevstate, newitem])
    }

    return (
        <main className="flex justify-center items-center pt-20 flex-col gap-20 mr-35 ml-35">
            <div id="tagline" className="flex justify-center w-full max-w-4xl px-4">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight text-shadow-amber">Few ingredients in the kitchen?
                    </h1>
                    <p className="text-2xl font-semibold md:text-3xl text-amber-800 mt-2">
                        No Worries, we've got you covered!
                    </p>
                </div>
            </div>
            <form className="flex flex-row gap-15 justify-center" onSubmit={handleSubmit}>
                <input
                aria-label="Add Ingredients" type="text"
                placeholder="e.g. dhaniya"
                className="shadow-md bg-gray-100 h-12 w-150 rounded-md placeholder: pl-2"
                name="ingredient"
                />
                <button type="submit" className="rounded-md bg-amber-400  h-12 w-75 shadow-md placeholder: text-[18px]">+ Add Ingredient</button>
            </form>

            <ul className="list-disc list-inside">
                {items}
            </ul>
        </main>
    )
}