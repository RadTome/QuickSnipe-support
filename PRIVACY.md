# Privacy Policy for QuickSnipe

**Effective Date:** August 29, 2026  
**Version:** 1.2.0  
**Repository:** [https://github.com/RadTome/QuickSnipe-support](https://github.com/RadTome/QuickSnipe-support)

QuickSnipe ("we", "our", or "the Extension") is committed to protecting your privacy and personal data. This Privacy Policy explains how QuickSnipe handles user data, browser permissions, and third-party AI integrations.

---

## 1. Core Privacy Principle: 100% Client-Side Architecture

QuickSnipe operates entirely within your local Google Chrome browser:
- **Zero Personal Data Collection:** We do not collect, track, log, profile, or transmit your personal identity, browsing history, search queries, keystrokes, or seller account credentials.
- **Zero Developer Servers:** We do not host or operate backend proxy servers, user databases, or telemetry tracking systems. There is no central server capturing your activity.
- **Local Device Storage:** All extension preferences, user-supplied AI API keys, saved prompts, swipe file snippets, competitor snipes, and daily usage counters are stored strictly on your local machine using Chrome's secure `chrome.storage.local` API.

---

## 2. Supported Marketplaces & In-Page Data Extraction

When you open QuickSnipe or trigger an analysis tool on supported e-commerce marketplaces (**Etsy, Amazon, eBay, Shopify, Poshmark, Depop, Mercari**) or public web pages, QuickSnipe inspects only the public HTML DOM elements necessary to perform the requested feature:
- **Product Details:** Reads publicly visible title, price, brand, categories, description, and gallery image URLs to populate your AI Studio context and SEO auditor.
- **Search Rankings:** Reads public search result cards (title, price, seller, badges) on active search result pages to compute price averages and competitor keyword overlap matrices.
- **Customer Reviews:** Reads public customer review text when you trigger the Review Miner to identify buyer concerns and objections.
- **1-Click Form Autofill:** When you click "Autofill Form", QuickSnipe programmatically populates the listing editor inputs (Title, Price, Description, Tags) on your active tab. This process occurs 100% in-memory within your local browser tab and is never transmitted externally.

---

## 3. Bring Your Own Key (BYOK) AI Integrations

QuickSnipe allows you to connect your own API keys for AI generation:
- **Direct Client-to-Provider Communication:** All AI prompt requests (e.g., Google Gemini, Groq, OpenAI, Anthropic Claude, DeepSeek, OpenRouter) are transmitted directly from your browser client to the official API endpoint of your selected provider over HTTPS.
- **Encrypted Local Storage:** API keys are stored exclusively in your local `chrome.storage.local` and are never shared with or routed through any third party.
- **Local Ollama Support:** If you choose Ollama, requests are dispatched locally to `http://localhost:11434` without leaving your computer.

---

## 4. Chrome Extension Permissions Justification

In accordance with Google Chrome Web Store Developer Policies, QuickSnipe requests only the minimum necessary permissions:

| Permission | Purpose & Justification |
|---|---|
| `storage` | Persists user settings, saved prompts, local swipe files, API keys, and daily usage quotas locally on your device. |
| `activeTab` | Accesses the active tab's public DOM when you open the sidepanel or click an action button to analyze listing copy or search results. |
| `sidePanel` | Displays the Creator Studio dashboard interface seamlessly alongside your active browser tab. |
| `scripting` | Programmatically injects text and product extraction utilities on supported e-commerce marketplace tabs. |
| `tabs` | Reads active tab URL and title metadata to automatically detect supported marketplaces and adapt features in real time. |
| `alarms` | Schedules periodic daily usage counter resets at midnight local time. |
| `contextMenus` | Enables right-click context menu shortcuts to save selected text snippets directly to your local QuickSnipe Swipe File. |
| `Host Permissions (http://*/*, https://*/*)` | Enables page analysis, image extraction, and 1-click listing form autofill across Etsy, Amazon, eBay, Shopify, Poshmark, Depop, Mercari, and creator storefronts. |

---

## 5. Chrome Web Store Developer Policy Compliance

In strict adherence to the Google Chrome Web Store Developer Program Policies:
- We **do not sell, rent, or monetize** user data.
- We **do not transfer** user data to third parties, data brokers, or advertising networks.
- We **do not use or transfer** user data for purposes unrelated to the extension's core single purpose (e-commerce listing research, profit calculation, and copy optimization).
- We **do not use or transfer** user data to determine creditworthiness or for lending purposes.

---

## 6. Payments & Licensing

Paid license subscriptions and Pro upgrades are managed securely via Stripe through [ExtensionPay](https://extensionpay.com):
- **Email Sharing:** When you install QuickSnipe or upgrade to Pro, your email address is shared with ExtensionPay solely for the purpose of license verification, trial tracking, and subscription management.
- **Payment Information:** Payment card details are handled directly by Stripe's PCI-DSS Level 1 compliant checkout infrastructure and are never seen, stored, or processed by QuickSnipe.

---

## 7. Changes to This Policy

We may update this Privacy Policy to reflect enhancements in extension features or regulatory changes. Any modifications will be posted directly to this document with a revised effective date.

---

## 8. Contact & Questions

If you have questions, feedback, or concerns regarding this Privacy Policy:
- 👉 **GitHub Discussions & Issues:** [https://github.com/RadTome/QuickSnipe-support](https://github.com/RadTome/QuickSnipe-support)
- 🔒 **Security Advisories:** [https://github.com/RadTome/QuickSnipe-support/security/advisories/new](https://github.com/RadTome/QuickSnipe-support/security/advisories/new)
