// api/generate.js
import { GoogleGenAI } from "@google/genai";

/**
 * Secure serverless endpoint for generating recipes via Gemini.
 * POST body: { ingredients: ["spinach", "egg", "milk"] }
 * Response: { text: "Recipe text..." }
 */

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error("❌ Missing GEMINI_API_KEY in environment variables");
}

const genAI = new GoogleGenAI({ apiKey });

export default async function handler(req, res) {
    // Allow only POST requests
    if (req.method !== "POST") {
        res.setHeader("Allow", "POST");
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { ingredients } = req.body || {};

        if (!Array.isArray(ingredients)) {
            return res.status(400).json({ error: "Invalid request: ingredients array required" });
        }

        if (ingredients.length === 0) {
            return res.status(200).json({ text: "Can't find anything :(" });
        }

        const prompt = `
You are a pro chef. Make ONE recipe using ONLY:
${ingredients.join(", ")}

Format (exactly like this every time):
# Recipe Name
## Ingredients
- item
## Instructions
1. Step 1
2. Step 2
`.trim();

        // Generate recipe using Gemini
        const result = await genAI.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt,
        });

        // Return Gemini's generated text
        return res.status(200).json({ text: result?.text ?? "No recipe found" });

    } catch (err) {
        console.error("⚠️ Gemini proxy error:", err);
        return res.status(500).json({ error: "AI error", message: err?.message || "Unknown error" });
    }
}
