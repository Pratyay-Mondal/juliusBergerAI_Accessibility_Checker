# Julius Berger AI Accessibility Checker (Proof of Concept)

This repository contains a Proof of Concept (POC) for an AI-assisted tool designed to check building designs against accessibility standards like **DIN 18040** and **ASR Workplace Directives**.

## Current State of the POC

Please note the following technical details about the current implementation:

- **Mock Data:** This current version does **not** use a live AI API, local LLM, or any programmatic rule-based logic. 
- **Purpose:** It relies entirely on hardcoded mock JSON data. This was a deliberate choice to ensure a stable, reliable, and fast demonstration of the user interface and workflow during a time-constrained hackathon.

## Future Architecture & Roadmap

The ultimate goal of this tool is to integrate seamlessly into modern construction planning workflows. 

### 1. BIM Integration
The future work of this tool is to integrate directly into Julius Berger's existing **BIM (Building Information Modeling)** workflows. Instead of relying on 2D image analysis, the tool will programmatically analyze 3D models by reading raw geometry and metadata from **.ifc files**.

### 2. Local LLM / AI Integration
To power the actual compliance analysis engine, we plan to implement LLM vision and reasoning capabilities (such as Llama via Ollama, or compliant implementations of GPT/Gemini). 

**Data Privacy (Datenschutz):** 
Because of strict German **Datenschutz** (Data Protection) laws, we cannot send proprietary and highly confidential Julius Berger company data (such as internal floor plans and blueprints) to US-based remote servers. Therefore, the future architecture strongly prioritizes running **Local LLMs** (e.g., via Ollama) hosted securely within the company's own infrastructure to ensure 100% data sovereignty.

---

## Running the Application Locally

1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173` (or the port specified in your terminal)
