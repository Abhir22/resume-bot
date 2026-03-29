# ResumeBot

ResumeBot is a simple full-stack app where users can upload a resume and get AI-generated feedback like score, strengths, improvements, and ATS suggestions.

## How it works
- User uploads a resume (PDF, DOCX, or TXT)
- Backend extracts text from the file
- Text is sent to an AI model (via OpenRouter)
- AI returns structured feedback
- Frontend displays the result clearly

## Tech Stack
- Backend: Node.js + Express (using mifty framework)
- Frontend: React (Vite)
- AI: OpenRouter (OpenAI-compatible API)

## Features
- Resume upload and parsing
- AI-based evaluation
- Clean and simple UI
- Structured JSON response for easy rendering

## Notes
The system is kept simple and focused on clarity.  
It can be easily extended to support features like saving history or user authentication.

## Run Locally
- Start backend → `npm run dev`
- Start frontend → `npm run dev`