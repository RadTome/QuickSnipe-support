# Privacy Policy for QuickSnipe

**Effective Date:** October 18, 2026  
**Version:** 1.4.2 (Submitted Release) | Active Web Store Version: 1.4.1  
**Repository:** [https://github.com/RadTome/QuickSnipe-support](https://github.com/RadTome/QuickSnipe-support)

QuickSnipe ("we", "our", or "the Extension") is committed to protecting your privacy and personal data. This Privacy Policy explains how QuickSnipe handles user data, browser permissions, and third-party AI integrations in full compliance with Google Chrome Web Store Developer Program Policies.

---

## 1. Core Privacy Principle: Local-First, No Tracking

QuickSnipe operates primarily within your local Google Chrome browser:
- **Zero Personal Data Collection:** We do not collect, track, log, profile, or transmit your personal identity, browsing history, search queries, keystrokes, or seller account credentials.
- **No Analytics or Telemetry:** QuickSnipe ships no analytics, advertising, crash-reporting, or telemetry SDK, and we operate no user database or user accounts. We do not sell, rent, or share data with data brokers.
- **Disclosed Network Endpoints:** QuickSnipe is local-first, but it is not literally serverless, and we want to be exact about that. Three categories of network request can occur, each described in full below: (a) direct HTTPS calls from your browser to the AI provider **you** configure (Section 3); (b) an optional, developer-operated Cloudflare relay used only for the "Snap on Phone" photo feature (Section 3); and (c) web font requests made by the extension's own pages (Section 4). We operate no personalized backend, no activity log, and no central server that receives your browsing.
- **Local Device Storage & Sandboxing:** All extension preferences, user-supplied AI API keys, saved prompts, swipe file snippets, competitor snipes, and daily usage counters are stored strictly on your local machine using Chrome's secure `chrome.storage.local` API. The floating QuickBar assistant stores its coordinates and snooze states strictly in extension storage, leaving zero storage footprint on merchant host pages.
- **Sourcing & Flip Tracker CRM Privacy (COGS & Taxes):** All inventory items, Cost of Goods Sold (COGS), sourcing venues (thrift stores, garage sales, estate sales), listing status, target prices, sold dates, and profit margins are stored 100% locally on your machine in `chrome.storage.local`. QuickSnipe never transmits, synchronizes, or exposes your supplier sources, inventory, or financial earnings to any remote server or cloud database. IRS Schedule C tax CSV exports are generated entirely on-device in browser memory.
- **Voluntary User Feedback Collection:** Feedback, ratings, and diagnostic context submitted through the in-app feedback dialog or inline micro-feedback buttons are securely submitted directly to our Google Forms collection endpoint (`docs.google.com`) to help us improve listing generation quality and diagnose bugs. Feedback history is also saved locally on your device in `chrome.storage.local`. We never collect or transmit seller passwords, financial credentials, private API keys, or background browsing history.

---

## 2. Supported Marketplaces & In-Page Data Extraction

When you open QuickSnipe or trigger an analysis tool on supported e-commerce marketplaces (**Etsy, Amazon, eBay, Shopify, Poshmark, Depop, Mercari, Walmart, Grailed**) or public web pages, QuickSnipe inspects only the public HTML DOM elements necessary to perform the requested feature:
- **Product Details:** Reads publicly visible title, price, brand, categories, description, and gallery image URLs to populate your AI Studio context and SEO auditor.
- **Omnichannel Cross-Lister & Batch Image ZIP Downloader:** Generates cross-listing packs across Etsy, eBay, Poshmark, Mercari, and Depop directly in local memory. When downloading product image ZIP files, images are retrieved directly from public product CDNs into browser memory and packaged into a ZIP archive via client-side blob generation. No image data is ever routed through developer servers.
- **USPS 16 oz Shipping Ounce Trap Advisor & Buyer Offer Negotiator:** Calculations for USPS Ground Advantage commercial cliff thresholds (15.9 oz vs 16.1 oz) and buyer offer counteroffer economics are computed 100% deterministically in-memory in your local browser tab with zero network tracking.
- **Barcode & UPC Scanner (Camera Stream):** When using the optional camera scanner to read retail product barcodes (UPC/EAN/ISBN), video frames are analyzed in real time in local canvas memory via the on-device Barcode Detection API. Video feeds and camera streams are never recorded, saved to disk, or transmitted over any network.
- **Competitor Sales Velocity & Revenue Intelligence:** Reads public search result cards (title, price, seller, review count, sales badges) on active search result pages to compute price distribution curves, estimated monthly unit volume, gross revenue run-rates, and keyword overlap matrices.
- **Customer Reviews:** Reads public customer review text when you trigger the Review Miner to identify buyer concerns and objections.
- **Listing Quality Scorecard (LQS) & Pre-Flight Guard:** Audits listing title length, tag counts, and keyword density against marketplace algorithmic constraints and public trademark databases locally in-memory.
- **1-Click Form Autofill (QuickBar):** When you click "Autofill Form" or use the floating QuickBar, QuickSnipe programmatically populates listing editor inputs (Title, Price, Description, Tags, SKU) on your active tab. This process occurs 100% in-memory within your local browser tab and is never transmitted externally.

---

## 3. On-Device & Bring Your Own Key (BYOK) AI Integrations

QuickSnipe provides zero-setup on-device AI generation as well as direct BYOK connections:
- **Zero-Key On-Device Chrome Built-in AI:** When using Chrome Built-in AI via Chrome's native Prompt API (`window.ai` / `ai.languageModel` / Gemini Nano), all prompt processing occurs 100% locally on your device within Chrome's sandboxed runtime. Zero prompt text or listing data is transmitted across the network or stored externally.
- **Direct Client-to-Provider Communication:** For cloud BYOK providers (e.g., Google Gemini, Groq, OpenAI, Anthropic Claude, DeepSeek, OpenRouter), prompt requests are transmitted directly from your browser client to the official API endpoint of your selected provider over secure HTTPS. **What is sent:** the prompt includes the listing context you are working on — product title, price, description text, and (for the vision/photo features) the product image you select or capture — so that the provider can generate copy or analysis. It does not include your API keys, your browsing history, or other tabs.
- **Encrypted Local Storage:** Cloud API keys are stored exclusively in your local `chrome.storage.local` and are never shared with or routed through any third party or developer server. Your AI prompts are not routed through us.
- **Local Ollama Support:** If you choose Ollama, requests are dispatched locally to `http://localhost:11434` or `http://127.0.0.1:11434` without leaving your computer.
- **Optional "Snap on Phone" Photo Relay (Developer-Operated):** To let you send a photo from your phone into the desktop side panel, QuickSnipe pairs the two devices through an ephemeral Cloudflare Durable Object relay we operate at `quicksnipe-bridge.radtome.com`. When you use this feature, the photo you capture is transmitted to that relay and forwarded to your desktop browser. The relay is **ephemeral by design**: each session is keyed by a random, unguessable ID, a photo is delivered once and then discarded, and undelivered photos are purged automatically after 60 seconds. The relay does not store photos in a database, does not read your other data, and is never used when you do not open the phone-sync feature. If you prefer not to use it, the feature is entirely optional.

---

## 4. Chrome Extension Permissions Justification

In accordance with Google Chrome Web Store Developer Policies, QuickSnipe requests only the minimum necessary permissions:

| Permission | Purpose & Justification |
|---|---|
| `storage` | Persists user settings, saved prompts, local swipe files, API keys, and daily usage quotas locally on your device via `chrome.storage.local`. |
| `activeTab` | Accesses the active tab's public DOM when you open the sidepanel or click an action button to analyze listing copy or search results. |
| `sidePanel` | Displays the Creator Studio dashboard interface seamlessly alongside your active browser tab. |
| `scripting` | Programmatically injects text extraction and 1-click form autofill utilities on active listing tabs. |
| `alarms` | Schedules periodic daily usage counter resets at midnight local time. |
| `contextMenus` | Enables right-click context menu shortcuts to save selected text snippets directly to your local QuickSnipe Swipe File. |
| `Host Permissions (Marketplaces)` | Reads the public DOM of the marketplace pages you visit to power listing analysis and competitor scans: Etsy, Amazon (US/UK/CA/DE/FR/ES/IT/JP), eBay (US/UK/CA/DE), Shopify storefronts (`*.myshopify.com`), Poshmark (US/CA), Depop, Mercari, Walmart, and Grailed. |
| `Host Permissions (Direct AI APIs, Licensing & Feedback)` | Enables direct client HTTPS communication with official AI API endpoints (`generativelanguage.googleapis.com`, `api.openai.com`, `api.groq.com`, `api.anthropic.com`, `api.deepseek.com`, `openrouter.ai`, `localhost`/`127.0.0.1`), ExtensionPay (`extensionpay.com`), and secure voluntary feedback collection (`docs.google.com`). |
| `Host Permissions (Optional Phone-Sync)` | `quicksnipe-bridge.radtome.com` and `0.peerjs.com` are used only when you open the optional "Snap on Phone" photo feature, to pair your phone and desktop and relay the photo you capture (see Section 3). |
| Remote Web Fonts | QuickSnipe's own extension pages (side panel, options, welcome) load the Plus Jakarta Sans and Inter web fonts from `fonts.googleapis.com` / `fonts.gstatic.com`. This is a stylesheet request that reveals your IP address to Google but carries none of your listing data, API keys, or browsing history. |

Broad wildcard permissions (`http://*/*`, `https://*/*`) and the `tabs` permission are intentionally not requested.

---

## 5. Chrome Web Store Developer Policy Compliance & Limited Use

In strict adherence to the Google Chrome Web Store Developer Program Policies:
- We **do not sell, rent, or monetize** user data.
- We **do not transfer** user data to third parties, data brokers, or advertising networks, **except** when you invoke an AI feature, in which case the listing content or photo you are working on is sent to the AI provider you selected (Section 3), or when you use the optional phone-sync feature, in which case the captured photo transits our ephemeral relay (Section 3). Those transfers exist solely to perform the action you requested.
- We **do not use or transfer** user data for purposes unrelated to the extension's core single purpose (e-commerce listing research, competitor sales velocity estimation, review mining, and net profit calculation).
- We **do not use or transfer** user data to determine creditworthiness or for lending purposes.
- **Limited Use Disclosure:** QuickSnipe's use and transfer of information received from Google Chrome APIs adheres to the [Chrome Web Store User Data Policy](https://developer.chrome.com/docs/webstore/user-data/), including the Limited Use requirements.

---

## 6. Payments & Licensing

Paid license subscriptions and Pro upgrades are managed securely via Stripe through [ExtensionPay](https://extensionpay.com):
- **Email Sharing:** When you install QuickSnipe or upgrade to Pro, your email address is shared with ExtensionPay solely for license verification, trial tracking, and subscription management.
- **Payment Information:** Payment card details are handled directly by Stripe's PCI-DSS Level 1 compliant checkout infrastructure and are never seen, stored, or processed by QuickSnipe.

---

## 7. Changes to This Policy

We may update this Privacy Policy to reflect enhancements in extension features or regulatory changes. Any modifications will be posted directly to this document with a revised effective date.

---

## 8. Contact & Questions

If you have questions, feedback, or concerns regarding this Privacy Policy:
- 👉 **GitHub Discussions & Issues:** [https://github.com/RadTome/QuickSnipe-support](https://github.com/RadTome/QuickSnipe-support)
- 🔒 **Security Advisories:** [https://github.com/RadTome/QuickSnipe-support/security/advisories/new](https://github.com/RadTome/QuickSnipe-support/security/advisories/new)
