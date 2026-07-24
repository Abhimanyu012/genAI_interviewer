const { GoogleGenAI } = require("@google/genai");
const dotenv = require("dotenv/config");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const invokeGemini = async () => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    input: "Explain how AI works in a few words",
  });
};

console.log(invokeGemini.output_text);
