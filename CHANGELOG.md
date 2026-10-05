# 📋 QuickSnipe Release Notes & Changelog

All notable changes to **QuickSnipe** are documented here. QuickSnipe adheres strictly to [Semantic Versioning](https://semver.org/).

---

## 🚀 [v1.4.1] — Production Release (Current)

> **Status:** Packaged & Ready for Web Store Rollout  
> **Release Date:** October 2026

### 🌐 Cloudflare Worker Durable Object Bridge & P2P Failover
- **Resilient Mobile-to-Desktop Sync**: Added dedicated Cloudflare Worker Durable Object WebSocket relay (`quicksnipe-bridge.radtome.com`) as an automated fallback when direct WebRTC P2P ICE negotiation fails across restrictive corporate firewalls, distinct subnets, or mobile cellular connections (LTE/5G).
- **Ephemeral Session Security**: End-to-end ephemeral session IDs, strict origin validation, token verification, and 60-second automatic message purge. Zero persistent storage of seller photos on remote servers.
- **Failover Connection Diagnostics**: Real-time connection state indicators in mobile companion (`snap.html`) and desktop sidepanel console displaying direct P2P vs. Cloud Bridge mode.

### 🔍 Multi-Platform DOM Scraper Modernization & Drift Hardening
- **Modular Parser Target Engine**: Re-architected DOM scrapers across all 9 supported marketplaces (Etsy, Amazon, eBay, Shopify, Poshmark, Depop, Mercari, Walmart, Grailed) with centralized schema definitions (`scripts/lib/parser-targets.mjs`).
- **Automated Canary Drift Detection**: Added automated fixture drift validation tool and canary fixtures (`test/fixtures/fixture-manifest.json`, `test/fixtures/title-noise-canary.json`) to detect and alert on marketplace markup changes before they impact sellers.
- **Noise-Stripping Canonical Title Parser**: Enhanced title extraction to automatically strip promotional noise, seller emoji prefixes, and spam keywords for clean, platform-compliant product titles.
- **Dual-Mode CI / Home Parser Validation**: Added `--fail-on-bot-block=true` strict flag and offline canary fallback modes (`validate:parsers`, `validate:parsers:strict`, `parsers:refresh`).

### 🛡️ Security Hardening & DOM Sanitization
- **Injection Hardening**: Audited and fortified sidepanel and floating QuickBar HUD against DOM injection and untrusted attribute manipulation.
- **Strict URL & Input Sanitization**: Programmatic escaping for rendered product titles, tags, and external marketplace links.
- **API Key Overwrite Safeguards**: Options backup restore strictly prevents `[REDACTED]` exported tokens from overwriting active stored keys.

### 💰 Multi-Platform Profit Calculator Verification
- **Full-Spectrum Fee Calculations**: Validated fee structures, category commissions, transaction fees, and breakeven calculations across all 9 marketplaces with comprehensive unit tests (`test/test-fee-math.js`).

### 🎨 UI Ergonomics & State Stability
- **Stabilized Feedback Modal**: Fixed modal height and centered confirmation screen to eliminate vertical layout jumps upon submission.
- **Theme Contrast Polish**: Enhanced typography readability and border clarity in frosted Light Glass and Cyber Dark modes.
- **Dynamic Version Reflection**: Extension version dynamically resolves across service worker, options, and sidepanel interfaces.

### 🧪 Comprehensive Automated Test Expansion
- **Suite Expansion**: Test coverage expanded from 294 tests across 17 files to **381 unit tests across 20 test files** with 100% pass rate.
- **New Test Suites**:
  - `test-bridge-security.js`: Cloudflare bridge token safety, origin checking, and CSRF protection.
  - `test-snap-transport.js`: WebRTC P2P vs. Durable Object WebSocket failover transport.
  - `test-photo-images.js`: Batch multimodal vision ingestion, resolution, and orientation handling.
  - `test-photo-save.js`: Local photo asset download and disk persistence.
  - `test-parser-drift-tool.js`: Scraper selector drift and canary health monitoring.
  - `test-injection-hardening.js`: DOM sanitization and untrusted text escaping.
  - `test-fee-math.js`: Multi-platform fee schedules, profit margin, and breakeven math.

---

## 🚀 [v1.4.0] — Previous Stable Release (Live in Chrome Web Store)

> **Status:** Live in Chrome Web Store (Approved & Published)  
> **Release Date:** September 2026

### 📸 BLOCKBUSTER: Photo-to-Listing Vision Snipe (Multimodal AI)
- **Zero-Typing Listing Creation**: Drag & drop any product photo or right-click any image on the web ➔ **"QuickSnipe: Analyze Product Image"**.
- **Deep Visual Inspection**: Multimodal AI reads visible neck tags, brand logos, hallmarks, fabric textures, colorways, and condition flaws.
- **Complete Multi-Platform Output in Seconds**:
  - **3 Tailored Platform Titles**: Etsy (140-char SEO hook), eBay (80-char Cassini keyword density), Poshmark (80-char brand/style hook).
  - **13 High-Volume Search Tags**: Exactly 13 longtail keywords, strictly under 20 characters for 1-click paste into Etsy.
  - **Item Specifics Extraction**: Brand, Category, Primary Color, Material, Style Theme, and Condition Grade.
  - **Buyer Story Description**: 3–4 engaging paragraphs with styling advice, craftsmanship highlights, and care details.
  - **Pricing & Velocity Appraisal**: Suggested listing price, resale corridor, and demand velocity estimate.
- **Cloud BYOK Vision Integration**: Powered by Google Gemini (Free Tier), OpenAI GPT-4o / GPT-4o Mini, or Groq Vision.

### 📱 KILLER FEATURE: Instant Mobile QR Photo Sync (`snap.html`)
- **Zero Mobile App Installation**: No App Store or Google Play downloads required. Click **"Snap on Phone (QR)"** in the QuickSnipe sidepanel on your PC, point your iPhone or Android camera at the QR code, and launch the companion web portal (`snap.html`) directly in mobile Safari or Chrome.
- **Real-Time Peer-to-Peer Streaming**: High-resolution thrift and product photos stream directly from your mobile camera to your desktop browser in real time via encrypted WebRTC data channels.
- **Cloudflare Worker Durable Object Fallback Bridge**: Automated WebSocket bridge routing via `quicksnipe-bridge.radtome.com` ensures 100% connection reliability across distinct subnets, corporate Wi-Fi, and mobile cellular data (LTE/5G).
- **In-Browser Camera Viewfinder**: Live camera feed with instant shutter button, tap-to-focus, and auto-orientation correction so your desktop connection never drops while sourcing.
- **Multi-Image Camera Roll Gallery Queue**: Select up to 10 photos simultaneously from your phone's photo library with sequential transfer progress indicators and status badges.
- **Live Diagnostics Console**: Real-time WebRTC ICE candidate tracking, DataChannel state display, signaling status, and 1-click clipboard diagnostic log export.

### 🛒 Multi-Platform Expansion: Walmart & Grailed
- **Walmart Marketplace Support**: Native DOM parsing for Walmart product listings (`/ip/`) and competitor search pages. Structured title formatting (`Brand + Item Name + Style/Model + Features/Size/Pack`), key feature bullets, and category-tuned sales velocity estimation (25x review multiplier).
- **Grailed Archive Luxury Support**: Next.js hydration payload extraction for designer & vintage archive menswear listings (`/listings/`) and search grids. Specialized listing generation targeting high-end collector audiences.

### 🟢 Active Marketplace Action Badge
- **Context-Aware Extension Badge**: Displays a vibrant emerald dot (`●`) and descriptive tooltip in the Chrome toolbar whenever you navigate to any supported marketplace (eBay, Etsy, Poshmark, Amazon, Mercari, Depop, Walmart, Grailed, Shopify).
- **Update Notice Preservation**: Seamlessly defers to `NEW` update badge when extension updates are pending.

### 🛡️ Smart HTTP 429 Rate-Limit Fallback Guard
- **Automatic Quota Protection**: When cloud BYOK providers hit rate limits (HTTP 429 / resource exhausted), QuickSnipe detects the error and automatically attempts fallback to a configured backup model (Groq Llama 3.3 or Chrome Built-in Nano).
- **Transparent Seller Feedback**: Explicitly alerts the seller with warning notices when a fallback response is used, or advises a 60-second cooldown if no secondary provider is configured.
- **Vision Task Safeguards**: Intelligently routes image tasks away from text-only on-device models.

### 💾 Backup Import & API Key Security
- **Full Settings & Swipes Restore**: Import JSON backups directly from the Options page to sync preferences, themes, and winning swipe card collections across machines.
- **Active Key Protection**: Safeguards existing on-device API keys so exported `[REDACTED]` values never overwrite active stored keys.

### 💙 Direct Seller Suggestions & Friendly Farewell Survey
- **Settings Feature Roadmap Form**: Propose new marketplaces and feature ideas directly from the Settings page—dispatched straight to developer notes with offline backup.
- **Branded Farewell Experience**: Replaced raw technical survey links with a custom, seller-friendly GitHub Pages farewell portal (`farewell.html`) powered by Google Forms backend.

### ⌨️ Ergonomics & Accessibility
- **Visible Keyboard Badges**: Added accessible `Alt+Q` (Studio toggle) and `Alt+Shift+S` (Save Swipe) shortcut pills in the sidepanel header, Swipes tab, and Options guide.

---

## 🟢 [v1.3.3] — Previous Stable Release

> **Status:** Live in Chrome Web Store (Active Production Version)  
> **Release Date:** September 22, 2026

### 💰 Pure-Value Pricing Stack (Competitor Undercut)
- **$7.99 / Month Pro**: Lowered entry price by over 60% compared to legacy competitor tools ($20–$30/mo), with automatic 7-day trial.
- **$49 / Year Annual**: Instant ~50% discount (~$4.08/mo) for serious multi-platform sellers locking in annual volume.
- **$69 One-Time Lifetime Deal**: The ultimate deal for sellers who hate subscriptions—pay once, get permanent multi-platform intelligence powered by zero-markup client-side BYOK AI.

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

## 📦 [v1.3.2] — Previous Stable Release

> **Status:** Superceded by v1.3.3  
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

> **Status:** Available now on the [Chrome Web Store](https://chromewebstore.google.com/detail/quicksnipe-ai-listing-res/aignalgmmlmnmofabamcdngdopabgkaa)  
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
