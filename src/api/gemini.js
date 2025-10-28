// gemini.js
import { GoogleGenAI } from "@google/genai";

const apiKey = (import.meta.env.VITE_GEMINI_API_KEY || "").trim();
if (!apiKey) {
    throw new Error("VITE_GEMINI_API_KEY missing.");
}

const genAI = new GoogleGenAI({ apiKey });

export async function getRecipeFromGemini(ingredients) {
    if (!ingredients.length) {
        return "Can't find anything : (";
    }

    try {
        const prompt = `
You are a pro chef. Make ONE recipe using ONLY:
${ingredients.join(", ")}

Format:
# Recipe Name
## Ingredients
- item
## Instructions
1. Step...
        `.trim();

        const result = await genAI.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        return result.text;

    } catch (err) {
        console.error("Gemini failed:", err);
        return "AI chef crashed. Try again.";
    }
}