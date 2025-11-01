// src/utils/getRecipe.js

export async function getRecipeFromGemini(ingredients) {
    if (!ingredients.length) {
        return "Can't find anything :(";
    }

    try {
        // send ingredients to your secure serverless function
        const response = await fetch("/api/generate.js", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ingredients }),
        });

        if (!response.ok) {
            throw new Error("Server error: " + response.statusText);
        }

        const data = await response.json();
        return data.recipe || "AI chef crashed. Try again.";
    } catch (err) {
        console.error("Error fetching recipe:", err);
        return "AI chef crashed. Try again.";
    }
}
