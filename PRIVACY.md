# Privacy Policy for QuickSnipe

**Effective Date:** November 19, 2026  
**Version:** 1.5.0 (Production Release)  
**Repository:** [https://github.com/RadTome/QuickSnipe-support](https://github.com/RadTome/QuickSnipe-support)

QuickSnipe ("we", "our", or "the Extension") is committed to protecting your privacy and personal data. This Privacy Policy explains how QuickSnipe handles user data, browser permissions, and third-party AI integrations in full compliance with Google Chrome Web Store Developer Program Policies.

---

## 1. Core Privacy Principle: Local-First, No Tracking

QuickSnipe operates primarily within your local Google Chrome browser:
- **Zero Personal Data Collection:** We do not collect, track, log, profile, or transmit your personal identity, browsing history, search queries, keystrokes, or seller account credentials.
- **No Analytics or Telemetry:** QuickSnipe ships no analytics, advertising, crash-reporting, or telemetry SDK, and we operate no user database or user accounts. We do not sell, rent, or share data with data brokers.
- **Disclosed Network Endpoints:** QuickSnipe is local-first, but it is not literally serverless, and we want to be exact about that. The following categories of network request can occur, each described in full below: (a) direct HTTPS calls from your browser to the AI provider **you** configure (Section 3); (b) an optional, developer-operated Cloudflare relay used only for the "Snap on Phone" photo feature (Section 3); (c) marketplace page requests made when you explicitly ask for an analysis and when the Deal Radar alarm runs (Section 2); and (d) voluntary feedback to our Google Forms collection endpoint (Section 4); (e) an optional HTTPS call to the Open Library API (`openlibrary.org`) when you scan a book ISBN barcode, which transmits only that ISBN to fetch public book metadata, and hotlinks the returned cover from `covers.openlibrary.org` when displayed (Section 2); and (f) a static farewell page at `radtome.github.io` that Chrome itself opens in your browser only after you choose to uninstall (the URL carries just the extension version). QuickSnipe's own pages ship with all fonts bundled locally — there are no web font or CDN requests. We operate no personalized backend, no activity log, and no central server that receives your browsing.
- **Local Device Storage & Sandboxing:** All extension preferences, user-supplied AI API keys, saved prompts, swipe file snippets, competitor snipes, and daily usage counters are stored strictly on your local machine using Chrome's secure `chrome.storage.local` API. The floating QuickBar assistant stores its coordinates and snooze states strictly in extension storage, leaving zero storage footprint on merchant host pages.
- **Sourcing & Flip Tracker CRM Privacy (COGS & Taxes):** All inventory items, Cost of Goods Sold (COGS), sourcing venues (thrift stores, garage sales, estate sales), listing status, target prices, sold dates, and profit margins are stored 100% locally on your machine in `chrome.storage.local`. QuickSnipe never transmits, synchronizes, or exposes your supplier sources, inventory, or financial earnings to any remote server or cloud database. IRS Schedule C tax CSV exports are generated entirely on-device in browser memory.
- **Voluntary User Feedback Collection:** Feedback, ratings, and diagnostic context submitted through the in-app feedback dialog or inline micro-feedback buttons are securely submitted directly to our Google Forms collection endpoint (`docs.google.com`) to help us improve listing generation quality and diagnose bugs. Feedback history is also saved locally on your device in `chrome.storage.local`. We never collect or transmit seller passwords, financial credentials, private API keys, or background browsing history.

---

## 2. Supported Marketplaces & In-Page Data Extraction

When you open QuickSnipe or trigger an analysis tool on supported e-commerce marketplaces (**Etsy, Amazon, eBay, Shopify, Poshmark, Depop, Mercari, Walmart, Grailed**) or public web pages, QuickSnipe inspects only the public HTML DOM elements necessary to perform the requested feature:
- **Product Details:** Reads publicly visible title, price, brand, categories, description, and gallery image URLs to populate your AI Studio context and SEO auditor.
- **Omnichannel Cross-Lister & Batch Image ZIP Downloader:** Generates cross-listing packs across Etsy, eBay, Poshmark, Mercari, and Depop directly in local memory. When downloading product image ZIP files, images are retrieved directly from public product CDNs into browser memory and packaged into a ZIP archive via client-side blob generation. No image data is ever routed through developer servers.
- **USPS 16 oz Shipping Ounce Trap Advisor & Buyer Offer Negotiator:** Calculations for USPS Ground Advantage commercial cliff thresholds (15.9 oz vs 16.1 oz) and buyer offer counteroffer economics are computed 100% deterministically in-memory in your local browser tab with zero network tracking.
- **Barcode & UPC Scanner (Camera Stream):** When using the optional camera scanner to read retail product barcodes (UPC/EAN/ISBN), video frames are analyzed in real time in local canvas memory via the on-device Barcode Detection API. Video feeds and camera streams are never recorded, saved to disk, or transmitted over any network. The only exception: when the scanned barcode is a book ISBN, QuickSnipe queries the Open Library API (`openlibrary.org`) with the ISBN alone to fetch public book metadata (title, authors, publisher), and the cover thumbnail it returns is displayed by hotlinking `covers.openlibrary.org`. No other barcode type triggers a network request, and no camera imagery is ever sent.
- **Competitor Sales Velocity & Revenue Intelligence:** Reads public search result cards (title, price, seller, review count, sales badges) on active search result pages to compute price distribution curves, estimated monthly unit volume, gross revenue run-rates, and keyword overlap matrices.
- **Customer Reviews:** Reads public customer review text when you trigger the Review Miner to identify buyer concerns and objections.
- **Listing Quality Scorecard (LQS) & Pre-Flight Guard:** Audits listing title length, tag counts, and keyword density against marketplace algorithmic constraints and public trademark databases locally in-memory.
- **1-Click Form Autofill (QuickBar):** When you click "Autofill Form" or use the floating QuickBar, QuickSnipe programmatically populates listing editor inputs (Title, Price, Description, Tags, SKU) on your active tab. This process occurs 100% in-memory within your local browser tab and is never transmitted externally.
- **Deal Radar (Scheduled & On-Demand Sourcing Alerts):** If you enable Deal Radar watchlist rules, QuickSnipe fetches public search-result pages on the platforms you configured (default: eBay; more when you add them), roughly every 6 hours, or immediately when you click "Scan Now". These requests are made from the extension's service worker **with your browser session cookies** for those marketplaces — the same privilege QuickSnipe already holds on marketplace pages you open — so marketplaces can serve real, personalized listings instead of an anti-bot challenge. Fetched listings are evaluated 100% inside the on-device Deal Radar engine; nothing from them is transmitted to us or any third party. Fetches are limited to the keywords in your enabled rules; QuickSnipe never fetches pages unrelated to a rule, and makes no background marketplace requests at all until you create a rule. You can stop all background marketplace traffic at any time by deleting or pausing your watchlist rules.
- **Sold Comp Oracle (Background Tab Fallback):** When you explicitly click "Scan Now" for sold comps on a JavaScript-rendered marketplace, QuickSnipe may briefly open an inactive background tab to render the page, read its DOM, and close it — the same approach as above, using your own browser session. This only happens when you actively request it; never automatically.

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
| `alarms` | Schedules periodic daily usage counter resets and Deal Radar watchlist scans (background marketplace fetches occur only when you have enabled Deal Radar rules). |
| `contextMenus` | Enables right-click context menu shortcuts to save selected text snippets directly to your local QuickSnipe Swipe File. |
| `notifications` (optional) | Only if you grant it: lets the background Deal Radar scan post a desktop alert when new watched-list matches appear outside quiet hours. Never used for marketing, promotion, or engagement nudges; capped at a few alerts per day; can be declined or revoked at any time in Chrome's site settings. |
| `Host Permissions (Licensing Only)` | `extensionpay.com` is the sole required host permission at install time so Pro checkout and license verification work seamlessly. |
| `Optional Host Permissions (Marketplaces — Opt-In)` | Requested **only** for the specific marketplaces you choose to enable (in Onboarding, Settings, or when triggering a marketplace tool): Etsy, Amazon (US/UK/CA/DE/FR/ES/IT/JP), eBay (US/UK/CA/DE), Shopify storefronts and admin (`*.myshopify.com`, `admin.shopify.com`), Poshmark (US/CA), Depop, Mercari, Walmart, and Grailed. Used to inject the optional QuickBar on listing editors, power competitor/sold-comp scans, and run enabled Deal Radar rules. Can be revoked per marketplace at any time. |
| `Optional Host Permissions (Direct AI APIs — Opt-In)` | Requested **only** for the specific AI provider you configure (`generativelanguage.googleapis.com`, `api.openai.com`, `api.groq.com`, `api.anthropic.com`, `api.deepseek.com`, `openrouter.ai`). Local Ollama (`localhost`/`127.0.0.1`) and Chrome Built-in AI require no remote AI host permission. |
| `Standard Browser Requests (No Host Permission Requested)` | Optional phone-sync (`quicksnipe-bridge.radtome.com`, `0.peerjs.com`), optional ISBN book lookup (`openlibrary.org`, `covers.openlibrary.org`), and voluntary feedback submission (`docs.google.com`) operate over standard CORS, WebSockets, `<img>`, or `no-cors` form POST without requesting Chrome host permissions. |
| Bundled Local Fonts | QuickSnipe's own extension pages ship with Plus Jakarta Sans, Inter and JetBrains Mono bundled locally in the extension package. No font, stylesheet, or CDN requests are made at runtime. |

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
