export default function Hero() {

    const ingredients = ["chicken", "spinach", "tomatoes"]

    const items = ingredients.map(element=>(
        <li key={element}>{element}</li>
    ))

    function handleSubmit() {
        console.log("submitted")
    }

    return (
        <main className="flex justify-center pt-20 flex-col gap-20">
            <div id="tagline" className="flex justify-center">
                <h1 className="text-7xl text-amber-900">Your urge deserves better</h1>
            </div>
            <form className="flex flex-row gap-15 justify-center" onSubmit={handleSubmit}>
                <input
                aria-label="Add Ingredients" type="text"
                placeholder="e.g. dhaniya"
                className="shadow-md bg-gray-100 h-12 w-150 placeholder: pl-2"
                />
                <button type="submit" className="rounded-sm bg-amber-400  h-12 w-75 shadow-md placeholder: text-[18px]">+ Add Ingredient</button>
            </form>

            <ul className="list-disc list-inside">
                {items}
            </ul>
        </main>
    )
}