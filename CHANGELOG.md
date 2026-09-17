# 📋 QuickSnipe Release Notes & Changelog

All notable changes to **QuickSnipe** are documented here. QuickSnipe adheres strictly to [Semantic Versioning](https://semver.org/).

---

## 🔮 [v1.3.3] — Upcoming Release (In Review)

> **Status:** Staged for Deployment / Submitted for Chrome Web Store Review  
> **Release Target:** September 2026

### ⚡ Performance, Ergonomics & Accessibility
- **Pro Experience Polish**: Cleanly hide all promotional banners, upgrade buttons, and daily usage meters when Pro is activated for an uncluttered workspace.
- **Lightweight Popup Boot**: Extracted minimal site detector `utils/detect-site.js` (~500B) to replace 143KB parser bundle in popup context, reducing popup load time by ~200ms.
- **Service Worker Keepalive & 90s Timeout**: Added keepalive port during generation and 90-second client-side timeout with friendly retry guidance to eliminate silent timeouts on long API calls.
- **Centralized URL Validation**: Unified `isScriptableUrl()` in shared `utils/url-helpers.js` across background, popup, and sidepanel surfaces.
- **Hardened QuickBar Security**: Replaced `innerHTML` with safe DOM construction and `textContent` in QuickBar status messages.
- **APG Accessibility & Roving Focus**: Added `tabindex="0"` to all tab panels, `aria-live="polite"` to dynamic result containers (Sniper, Reviews, SEO), and progressbar attributes to popup.
- **Side Panel Affordances**: Added `↗` visual indicator and descriptive labels to popup action cards indicating they open the Side Panel.
- **3-Way Theme Cycling**: Quick toggle now cycles smoothly through Dark, Light Glass, and System Auto with high-contrast light mode styling.
- **Conflict-Free Hotkey**: Changed swipe capture hotkey to `Alt+Shift+S` to prevent collisions with browser "Save As".
- **Swipe File Zero-State**: Added rich onboarding card with hotkey and right-click hints when no snippets are saved.
- **Storage Quota Safeguard**: Added 8KB per-item quota error handling and guidance for custom prompt templates.

---

## 🚀 [v1.3.2] — Current Stable (Live in Chrome Web Store)

> **Status:** Available on the [Chrome Web Store](https://chromewebstore.google.com/detail/quicksnipe-1-click-listing-reseller-assistant/aignalgmmlmnmofabamcdngdopabgkaa)  
> **Release Date:** September 14, 2026

### 🛡️ Least-Privilege Security & Sandbox Hardening
- **Purged Broad Wildcard Host Permissions**: Completely removed `http://*/*` and `https://*/*` from `manifest.json`. Retains only explicit marketplace content script matches and direct official AI/payment endpoints (`generativelanguage.googleapis.com`, `api.openai.com`, `api.groq.com`, `api.anthropic.com`, `api.deepseek.com`, `openrouter.ai`, `extensionpay.com`, `localhost`/`127.0.0.1`).
- **Removed Unneeded Permissions**: Dropped broad `tabs` permission from `manifest.json`. All tab inspection occurs strictly via focused `activeTab` on user trigger.
- **Strict Host Storage Sandboxing**: In-page QuickBar position, minimization state, and snooze preferences store strictly within isolated `chrome.storage.local`. Eliminates all `localStorage` footprint on merchant host origins for maximum privacy.

### 🌓 WCAG AAA High-Contrast Light Glass Theme
- **Complete Visual Contrast Audit**: Enhanced semantic color contrast across all UI surfaces in frosted Light Glass mode.
- **High-Contrast Typography**: Applied high-contrast dark slate (`#0f172a` / `#334155`) text tokens to warning banners, AI model tier indicators, setup links, and copy preview cards.
- **Modal Dialog Polish**: Restyled large modals (`#sp-feedback-modal`, `#sp-help-modal`, `.modal-content-lg`) with high-contrast borders, solid light backgrounds (`#ffffff`), and accessible hover/active states on category pills and emoji rating buttons.

### ⚡ Session Continuity & UI State Preservation
- **Seamless State Restoration**: Reopening the sidepanel immediately restores active competitor analyses, custom search queries, mined review results, and profit margin calculations without losing progress.
- **Direct Studio Tool Routing**: Creator dashboard quick-action cards now route directly into the selected studio tool tab upon launching.
- **Form Autofill Focus Preservation**: 1-Click Fast Fill captures active input element focus before injecting copy and restores cursor position immediately after event dispatch.

### ♿ Accessibility & Interaction Architecture
- **W3C APG Keyboard Navigation**: Full arrow-key navigation across studio tabs with roving `tabindex`.
- **Accessible Modal Dialogs**: Focus trapping with `role="dialog"`, `aria-modal="true"`, accessible label associations (`aria-labelledby`), and instant `Escape` key dismissal.
- **Pointer-Capture Dragging**: Sandboxed Shadow DOM pointer event boundaries prevent assistant drag events from triggering host document listeners; pointer capture prevents mouse drop issues over iframes.
- **Ultra-Narrow Responsive Layout (320px–360px)**: Header overflow collapse and smooth scroll-snap tab navigation to prevent layout crowding on narrow sidepanels.
- **Disconnection & Update Recovery**: Added graceful connection recovery prompts guiding sellers to refresh active tabs when extension background scripts update.
- **Privacy-First Offline Feedback**: Local feedback recording with 1-click clipboard export format (`[QuickSnipe Feedback] Rating, Category, Message, Diagnostics`) and direct link to GitHub Discussions.

---

## 🌟 [v1.3.1] — Previous Stable

> **Status:** Available now on the [Chrome Web Store](https://chromewebstore.google.com/detail/quicksnipe-1-click-listing-reseller-assistant/aignalgmmlmnmofabamcdngdopabgkaa)  
> **Release Date:** September 10, 2026

### 🤖 Chrome Built-in AI & Expanded BYOK AI Engine
- **Chrome Built-in AI (Gemini Nano)**: Native integration with Chrome's experimental Prompt API (`window.ai` / `ai.languageModel`). Runs 100% on-device with **zero API keys, zero internet required for generation, and zero data leaves your machine**.
- **Expanded BYOK Model Support**:
  - **Google Gemini**: Support for `gemini-3.6-flash` and `gemini-2.0-flash` (15 free requests/min).
  - **Groq**: Ultra-fast inference with `llama-3.3-70b-versatile` (30 free requests/min).
  - **Anthropic Claude**: Support for `claude-3-7-sonnet` and `claude-3-5-haiku`.
  - **OpenAI**: Support for `gpt-4o` and `gpt-4o-mini`.
  - **DeepSeek**: Support for `deepseek-chat` (V3) and `deepseek-reasoner` (R1).
  - **OpenRouter**: Access to 200+ AI models via direct user API key.
  - **Ollama**: Local offline LLM execution via `http://localhost:11434` (`llama3.3`, `qwen2.5`, `deepseek-r1:8b`).
- **Smart Local Heuristic Fallback**: Deterministic listing and optimization engine operates out-of-the-box when no API key or local model is available.

### 🛒 Expanded Marketplace Coverage
- **Walmart Marketplace Support**:
  - Dedicated DOM parser for Walmart product pages (`walmart.com/ip/...`) and search grids.
  - Generates Walmart-compliant shelf-ready titles, key feature bullets, and category taxonomy.
  - Fee calculator preset for standard Walmart 15% referral fee tiers.
- **Grailed Archive Luxury Support**:
  - Dedicated parser for designer listings (`grailed.com/listings/...`).
  - Tailored copy generator for condition grading, designer provenance, and collector styling.
  - Fee calculator preset for Grailed 9% commission + payment processing fee schedule.

### 📈 Competitor Sales Velocity & Gross Revenue Sniper
- **Sales Velocity Estimation**: Review-velocity and recent buyer indicators estimate monthly unit sales and revenue run-rates on competitor listings.
- **Velocity Classification Badges**: Instant visual badges for **Unicorn 🦄**, **Fast Mover 🔥**, **Steady ⚡**, and **Emerging 🌱**.
- **Niche Aggregates**: Computes median sweet-spot pricing, top earner run-rates, and total niche volume.
- **Competitor Keyword Gap Matrix**: Scrapes top 24 organic ranking competitors on Etsy, Amazon, eBay, and Mercari to isolate missing high-value keywords with 1-click `⚡ Borrow Keywords` injection.
- **Cross-Market Price Sniper**: Query and compare competitor prices across Etsy, eBay, Poshmark, and Mercari simultaneously with smart category filtering.

### 🏆 Listing Quality Scorecard (LQS) & Pre-Flight Guard
- **Automated Algorithmic Audit**: Evaluates draft listings from **Grade S (Exceptional)** down to **Grade F (Critical)**.
- **Multi-Factor Checks**: Platform title truncation, tag count limits, keyword density, and pricing corridors.
- **1-Click Auto-Fix**: Instant buttons to patch missing attributes and short descriptions.
- **Trademark Pre-Flight Guard**: Scans draft titles, bullets, and tags against intellectual property and protected brand names with safe generic alternatives.

### 💬 Review Objection Miner & SEO Audit Suite
- **Customer Review Miner**: Scrapes 1–3 star customer complaints on competing listings to identify recurring pain points and generate counter-objection FAQs.
- **Readability & Meta Audit**: Flesch-Kincaid Reading Grade Level, syllable distribution, and OpenGraph/Twitter card verification.
- **AI Image Alt-Text Generator**: Extracts gallery images and generates 5 keyword-rich accessible alt tags.
- **Amazon 249B Search Terms Validator**: Native `TextEncoder` byte meter strictly enforces $\le 249$ UTF-8 bytes with stop word cleaner.

### ⚡ 1-Click Form Autofill Engine & Floating QuickBar HUD
- **In-Page QuickBar HUD**: Sandboxed floating HUD on active listing editors with 1-click autofill, keyword borrowing, and `Escape` key minimize.
- **Framework-Compatible Form Injection**: Dispatches synthetic `input`, `change`, and `blur` events using native prototype setters for React, Vue, and Angular listing forms.
- **Supported Autofill Editors**: Etsy Shop Manager, Amazon Seller Central, eBay Selling, Shopify Admin, Poshmark, and Depop.

### 📁 Swipe File, Export & Themes
- **Local Swipe File**: Save winning titles and copy snippets locally with right-click context menu (`Ctrl+Shift+S` / `Alt+Q`).
- **Spreadsheet Export**: 1-click CSV download and Google Sheets / Excel TSV clipboard export.
- **Dual Theme Engine**: Seamless toggle between Cyber Dark and frosted Light Glass aesthetics with automatic OS system sync.

---

## 📦 [v1.3.0] — Major Architecture Overhaul

> **Release Date:** September 5, 2026

- Initial unified sidepanel architecture with integrated AI studio.
- Support for Etsy, Amazon, eBay, Shopify, Poshmark, Depop, and Mercari.
- Local profit & margin calculator with live marketplace fee schedules.
- 100% client-side BYOK storage architecture with zero developer servers.
