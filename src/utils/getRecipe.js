// src/utils/getRecipe.js
export async function getRecipeFromServer(ingredients) {
    if (!ingredients.length) {
        return "Can't find anything :(";
    }

    try {
        const response = await fetch("/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ingredients }),
        });

        if (!response.ok) {
            throw new Error("Server error: " + response.statusText);
        }

        const data = await response.json();

        return data.text || "AI chef crashed. Try again.";
    } catch (err) {
        console.error("Error fetching recipe:", err);
        return "AI chef crashed. Try again.";
    }
}
