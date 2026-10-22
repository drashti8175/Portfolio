/**
 * Task‑Manager API – entry point
 *
 * This server:
 *  • Serves a tiny health endpoint
 *  • Exposes an AI route that generates a task description via OpenAI
 *  • Reads configuration from a .env file (key **hidden**, never committed)
 *
 * Required packages (install once):
 *   npm i express cors dotenv openai
 *
 * --------------------------------------------------------------
 * IMPORTANT: Do **not** commit your real OpenAI key.
 * It is stored in `task-manager-api/.env` as:
 *
 *   OPENAI_API_KEY=your‑actual‑key‑here
 *
 * The .gitignore (already created) prevents this file from ever being
 * pushed to GitHub.
 * --------------------------------------------------------------
 */
require('dotenv').config();                     // Load .env variables
const express = require('express');
const cors = require('cors');
const { OpenAI } = require('openai');

const app = express();

// ------------------------------------------------------------------
// Middleware
// ------------------------------------------------------------------
app.use(cors());            // Allow requests from the React front‑end
app.use(express.json());    // Parse JSON payloads

// ------------------------------------------------------------------
// OpenAI client – uses the hidden key from .env
// ------------------------------------------------------------------
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ------------------------------------------------------------------
// 1️⃣  Health check (optional but handy for CI)
// ------------------------------------------------------------------
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

/**
 * 2️⃣  AI route – generate a short description for a task.
 *
 * Expected request body (JSON):
 *   {
 *     "title": "Create landing page",
 *     "details": "User wants a responsive landing page with a hero section."
 *   }
 *
 * Returns:
 *   { "description": "…" }   on success
 *   { "error": "…" }         on failure (fallback message)
 */
app.post('/api/generate-description', async (req, res) => {
    const { title, details } = req.body;

    // Basic validation
    if (!title) {
        return res.status(400).json({ error: 'Task title is required.' });
    }

    // Prompt engineered for concise, professional output (≤3 sentences)
    const prompt = `
You are a senior project manager. Write a concise, professional description
for a task titled **"${title}"**${details ? ` with these details: ${details}` : ''}.
The description should be suitable for a task‑tracking system and contain
no more than three sentences.`;

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 150,
            temperature: 0.7,
        });

        const description = completion.choices[0].message.content.trim();
        res.json({ description });
    } catch (err) {
        console.error('OpenAI error →', err);
        // 7️⃣ AI failure fallback
        res.status(500).json({
            error:
                'AI service is unavailable – please enter the description manually.',
        });
    }
});

// ------------------------------------------------------------------
// 3️⃣  Start the server
// ------------------------------------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
