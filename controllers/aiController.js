const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const askLegalAI = async (req, res) => {
    try {
        console.log("🛠️ Received AI request:", req.body); // Debugging log

        const { question } = req.body;

        if (!question) {
            return res.status(400).json({ message: "Please provide a legal question." });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",  // ✅ Updated to gpt-3.5-turbo
            messages: [
                { role: "system", content: "You are a legal assistant providing information based on tenant-landlord laws." },
                { role: "user", content: question }
            ]
        });

        console.log("✅ AI Response:", response.choices[0].message.content.trim());

        res.json({ answer: response.choices[0].message.content.trim() });

    } catch (error) {
        console.error("🔥 OpenAI API Error:", error);

        if (error.response) {
            console.error("Response Data:", error.response.data);
            console.error("Response Status:", error.response.status);
        }

        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

module.exports = { askLegalAI };
