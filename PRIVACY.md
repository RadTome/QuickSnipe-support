# Privacy Policy for QuickSnipe

**Effective Date:** September 10, 2026  
**Version:** 1.3.1  
**Repository:** [https://github.com/RadTome/QuickSnipe-support](https://github.com/RadTome/QuickSnipe-support)

QuickSnipe ("we", "our", or "the Extension") is committed to protecting your privacy and personal data. This Privacy Policy explains how QuickSnipe handles user data, browser permissions, and third-party AI integrations in full compliance with Google Chrome Web Store Developer Program Policies.

---

## 1. Core Privacy Principle: 100% Client-Side Architecture

QuickSnipe operates entirely within your local Google Chrome browser:
- **Zero Personal Data Collection:** We do not collect, track, log, profile, or transmit your personal identity, browsing history, search queries, keystrokes, or seller account credentials.
- **Zero Developer Servers:** We do not host or operate backend proxy servers, intermediate servers, user databases, or telemetry tracking systems. There is no central developer server capturing your activity.
- **Local Device Storage & Sandboxing:** All extension preferences, user-supplied AI API keys, saved prompts, swipe file snippets, competitor snipes, and daily usage counters are stored strictly on your local machine using Chrome's secure `chrome.storage.local` API. The floating QuickBar assistant stores its coordinates and snooze states strictly in extension storage, leaving zero storage footprint on merchant host pages.
- **Offline Feedback Recording:** Feedback submitted through the in-app feedback dialog is saved strictly to your local browser storage. QuickSnipe contacts zero remote feedback or tracking servers. Sellers can copy their feedback and diagnostic context to their clipboard with one click to post on GitHub Discussions.

---

## 2. Supported Marketplaces & In-Page Data Extraction

When you open QuickSnipe or trigger an analysis tool on supported e-commerce marketplaces (**Etsy, Amazon, eBay, Shopify, Poshmark, Depop, Mercari, Walmart, Grailed**) or public web pages, QuickSnipe inspects only the public HTML DOM elements necessary to perform the requested feature:
- **Product Details:** Reads publicly visible title, price, brand, categories, description, and gallery image URLs to populate your AI Studio context and SEO auditor.
- **Competitor Sales Velocity & Revenue Intelligence:** Reads public search result cards (title, price, seller, review count, sales badges) on active search result pages to compute price distribution curves, estimated monthly unit volume, gross revenue run-rates, and keyword overlap matrices.
- **Customer Reviews:** Reads public customer review text when you trigger the Review Miner to identify buyer concerns and objections.
- **Listing Quality Scorecard (LQS) & Pre-Flight Guard:** Audits listing title length, tag counts, and keyword density against marketplace algorithmic constraints and public trademark databases locally in-memory.
- **1-Click Form Autofill (QuickBar):** When you click "Autofill Form" or use the floating QuickBar, QuickSnipe programmatically populates listing editor inputs (Title, Price, Description, Tags, SKU) on your active tab. This process occurs 100% in-memory within your local browser tab and is never transmitted externally.

---

## 3. On-Device & Bring Your Own Key (BYOK) AI Integrations

QuickSnipe provides zero-setup on-device AI generation as well as direct BYOK connections:
- **Zero-Key On-Device Chrome Built-in AI:** When using Chrome Built-in AI via Chrome's native Prompt API (`window.ai` / `ai.languageModel` / Gemini Nano), all prompt processing occurs 100% locally on your device within Chrome's sandboxed runtime. Zero prompt text or listing data is transmitted across the network or stored externally.
- **Direct Client-to-Provider Communication:** For cloud BYOK providers (e.g., Google Gemini, Groq, OpenAI, Anthropic Claude, DeepSeek, OpenRouter), prompt requests are transmitted directly from your browser client to the official API endpoint of your selected provider over secure HTTPS.
- **Encrypted Local Storage:** Cloud API keys are stored exclusively in your local `chrome.storage.local` and are never shared with or routed through any third party or developer server.
- **Local Ollama Support:** If you choose Ollama, requests are dispatched locally to `http://localhost:11434` or `http://127.0.0.1:11434` without leaving your computer.

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
| `Host Permissions (Direct AI APIs & Licensing)` | Enables direct client HTTPS communication with official AI API endpoints (`generativelanguage.googleapis.com`, `api.openai.com`, `api.groq.com`, `api.anthropic.com`, `api.deepseek.com`, `openrouter.ai`, `localhost`/`127.0.0.1`) and ExtensionPay (`extensionpay.com`). |
| `Optional Host Permissions` *(v1.3.1 legacy; fully purged in upcoming v1.3.2)* | In v1.3.1, requested on-demand only for custom storefront analysis. Purged in v1.3.2 for absolute least-privilege security. |

---

## 5. Chrome Web Store Developer Policy Compliance & Limited Use

In strict adherence to the Google Chrome Web Store Developer Program Policies:
- We **do not sell, rent, or monetize** user data.
- We **do not transfer** user data to third parties, data brokers, or advertising networks.
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
