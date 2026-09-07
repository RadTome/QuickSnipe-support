<div align="center">

<img src="assets/icon.png" alt="QuickSnipe Logo" width="80" height="80" />

# ⚡ QuickSnipe

### Pure-Margin AI Listing Studio, Competitor Sniper & Profit Calculator for Google Chrome

[![Chrome Web Store](https://img.shields.io/badge/Chrome_Web_Store-v1.3.0-blue.svg?logo=googlechrome&logoColor=white)](https://chromewebstore.google.com/detail/quicksnipe-1-click-listing-reseller-assistant/aignalgmmlmnmofabamcdngdopabgkaa)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-success.svg)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![BYOK Architecture](https://img.shields.io/badge/Architecture-100%25_BYOK_%26_Client--Side-purple.svg)](#-bring-your-own-key-byok-ai-setup-guide)
[![GitHub Issues](https://img.shields.io/github/issues/RadTome/QuickSnipe-support)](https://github.com/RadTome/QuickSnipe-support/issues)
[![Privacy](https://img.shields.io/badge/Privacy-100%25_Client--Side-green.svg)](PRIVACY.md)
[![License](https://img.shields.io/badge/License-Commercial-blue.svg)](SUPPORT.md)

<p align="center">
  <a href="https://chromewebstore.google.com/detail/quicksnipe-1-click-listing-reseller-assistant/aignalgmmlmnmofabamcdngdopabgkaa"><b>🛒 Chrome Web Store</b></a> •
  <a href="#-quick-navigation"><b>⚡ Navigation</b></a> •
  <a href="TROUBLESHOOTING.md"><b>🛠️ Troubleshooting</b></a> •
  <a href="FAQ.md"><b>❓ FAQs</b></a> •
  <a href="PRIVACY.md"><b>🛡️ Privacy Policy</b></a> •
  <a href="SUPPORT.md"><b>🆘 Support Policy</b></a> •
  <a href="https://github.com/RadTome/QuickSnipe-support/issues/new/choose"><b>🐛 Open Issue</b></a>
</p>

---

</div>

## ⚡ Quick Navigation

| Resource | Description | Link |
|---|---|---|
| 📖 **Support Policy & Channels** | How to get support, SLA, and response guidelines | [SUPPORT.md](SUPPORT.md) |
| 🛡️ **Privacy Policy** | 100% client-side data handling, permissions & Web Store compliance | [PRIVACY.md](PRIVACY.md) |
| 🛠️ **Troubleshooting Guide** | Step-by-step diagnostics for scraping, API keys, and autofill | [TROUBLESHOOTING.md](TROUBLESHOOTING.md) |
| ❓ **Frequently Asked Questions** | Common seller questions, safety, bans, and licensing | [FAQ.md](FAQ.md) |
| 🔒 **Security & Disclosures** | Security vulnerability reporting and private advisories | [SECURITY.md](SECURITY.md) |
| 🐛 **Open a Bug Report** | Report broken scrapers, UI glitches, or extension errors | [Submit Bug](https://github.com/RadTome/QuickSnipe-support/issues/new?template=1_bug_report.yml) |
| 💡 **Request a Feature** | Request a new marketplace, AI model, or studio generator | [Submit Feature](https://github.com/RadTome/QuickSnipe-support/issues/new?template=2_feature_request.yml) |
| 💬 **Community Discussions** | Strategy, prompt sharing, and seller workflows | [GitHub Discussions](https://github.com/RadTome/QuickSnipe-support/discussions) |

---

## 📖 What is QuickSnipe?

**QuickSnipe** is a high-performance **Google Chrome Sidepanel Extension (Manifest V3)** built specifically for multi-channel e-commerce sellers across **Etsy, Amazon, eBay, Shopify, Poshmark, Depop, Mercari, Walmart, and Grailed**.

Instead of paying $20–$99/month for multiple bloated SaaS tools that store your seller data on third-party servers, QuickSnipe runs **100% locally in your browser** with zero cloud server overhead, zero subscription lock-in, and zero latency.

---

## 💎 Core Feature Breakdown

| 🤖 AI Studio | 🎯 Sniper | 💬 Reviews | 📊 SEO Auditor | 🔧 Tools |
|:---:|:---:|:---:|:---:|:---:|
| **10+ AI Generators**<br>Etsy, Amazon, eBay, Shopify, Poshmark, Depop, Mercari | **Price Sweet-Spot**<br>Median, Min, Max & price distribution curves | **Review Miner**<br>Scrapes 1–3 star complaints on competitor items | **Readability Engine**<br>Flesch-Kincaid grade & reading ease scores | **Profit Calculator**<br>Live fees, margins, ROI & breakeven prices |
| **1-Click Form Autofill**<br>Direct form injection into active listing editors | **Keyword Gap Matrix**<br>Venn analysis vs top 24 ranking competitors | **Objection Slayer**<br>Converts buyer objections into FAQs | **Image Alt-Text**<br>5 accessible, keyword-rich gallery alt tags | **Amazon 249B Validator**<br>Strict UTF-8 byte meter & stop word cleaner |

### 1. ⚡ 1-Click Form Autofill Engine
Push AI-generated Title, Price, Description, and Tags directly into active listing creation and edit forms on **Etsy Shop Manager, Amazon Seller Central, eBay Selling, Shopify Admin, Poshmark, and Depop**.
- Uses native `HTMLInputElement.prototype` setters and dispatches synthetic `input`, `change`, and `blur` events so React, Vue, and Angular internal form states update immediately.

### 2. 💰 Multi-Platform Profit & Margin Calculator
Live real-time fee breakdown and unit economic analysis:
- **Metrics Calculated**: Platform Fees, Payment Processing Fees, Listing Fees, Shipping & Packaging, Cost of Goods Sold (COGS), Advertising / Offsite Ads, FBA Fees.
- **Outputs**: Total Costs ($), Net Profit ($), Profit Margin (%), Return on Investment (ROI %), and Breakeven Sale Price ($).
- **`⚡ Pull Page Price`**: Automatically extracts the active item's price directly from the page DOM with one click.

### 3. 🎯 Competitor Keyword Gap Matrix
- Scrapes the top 24 organic search competitor listings on Etsy, Amazon, eBay, and Mercari.
- Runs Venn set analysis comparing your active listing against competitor keywords.
- Calculates competitor adoption percentage share and isolates high-frequency keywords you are missing with a 1-click `⚡ Borrow Keywords` injection button.

### 4. 📦 Amazon Backend Search Terms 249-Byte Validator
- Strictly enforces Amazon Seller Central's $\le 249$ UTF-8 byte boundary using native `TextEncoder`.
- Strips Amazon stop words (`and`, `with`, `for`, `the`, `from`, `this`, `that`, `a`, `an`, `in`, `of`, `to`), punctuation, and redundant terms.
- Features a live color-coded byte progress meter gauge.

### 5. 🖼️ AI Image Alt-Text Generator for SEO
- Scrapes high-resolution product gallery images directly from the active tab.
- Generates 5 accessible, keyword-rich Alt-Tags optimized for Google Image Search, Etsy accessibility, and Shopify media galleries with individual and batch clipboard copy buttons.

### 6. 🎯 Competitor Sniper & Price Sweet-Spot
- Scrapes active search result pages to calculate Average Price, Median Price, Minimum Price, and Maximum Price.
- **Omnichannel Cross-Market Mode**: Query and compare competitor prices across Etsy, eBay, Poshmark, and Mercari simultaneously.
- **Smart Category Filter**: Automatically isolates matching product types and filters out cross-category noise from pricing statistics.
- Renders an interactive visual price distribution curve and phrase frequency breakdown.

### 7. 💬 Customer Review Objection Miner
- Scrapes 1–3 star customer reviews on competitor listings.
- Identifies recurring buyer pain points, product flaws, sizing confusion, or packaging gripes.
- Generates 3 counter-objection value propositions and copy-ready FAQ sections to bulletproof your own listing.

### 8. 🔍 Full-Page SEO & Content Auditor
- Analyzes listing copy for readability: **Flesch-Kincaid Reading Grade Level**, **Reading Ease Score**, word count, and syllable distribution.
- Audits Title Length vs. platform maximums (e.g. Etsy 140c, eBay 80c, Amazon 200c).
- Scrapes and verifies OpenGraph (`og:title`, `og:image`) and Twitter Card meta tags.

### 9. 🚀 10+ Specialized AI Studio Generators
- **Etsy Power Listing**: 140-char high-converting title, 13 rank-ready tags (≤20 chars), structured markdown description.
- **Amazon FBA Listing**: 200-char brand title, 5 benefit-driven feature bullet points, 249-byte search terms.
- **eBay Cassini Optimizer**: 80-char character-dense title, structured item specifics, item description.
- **Shopify DTC Landing Page**: Above-the-fold headline, customer hooks, benefit pillars, objection-killing FAQ.
- **Poshmark Closet Listing**: Closet-optimized title, brand/size tags, bundle incentive hooks.
- **Depop Aesthetic Listing**: Vintage/streetwear hashtags, condition notes, measurement hooks.
- **Mercari Fast-Sale Listing**: Clear condition description, item keywords, fast-shipping badges.
- **3-Platform Social Kit**: Viral hooks for Instagram Reels, TikTok caption + hashtags, Pinterest SEO pin descriptions.
- **High-ROAS Paid Ads**: 3 Facebook/Instagram ad angles, Google Search responsive copy, TikTok ad hook.
- **VIP Review Winback**: Post-purchase follow-up sequence and customer satisfaction email templates.

### 10. 📁 Local Swipe File & Export Suite
- Save winning titles, competitor phrases, and generated copy snippets directly to your local persistent Swipe File.
- 1-click **CSV download** and **Google Sheets / Excel TSV clipboard copy** for offline spreadsheets.

---

## 🛒 Supported Marketplaces Matrix

| Platform | Product Scraping | Search Grid Scraping | Review Mining | 1-Click Form Autofill | Fee Calculator Preset |
|---|:---:|:---:|:---:|:---:|:---:|
| **Etsy** | ✅ | ✅ | ✅ | ✅ | ✅ (6.5% + $0.20 + 3% + $0.25) |
| **Amazon** | ✅ | ✅ | ✅ | ✅ | ✅ (15% Referral + FBA) |
| **eBay** | ✅ | ✅ | ✅ | ✅ | ✅ (13.25% + $0.30) |
| **Shopify** | ✅ | ✅ | ✅ | ✅ | ✅ (2.9% + $0.30) |
| **Poshmark** | ✅ | ✅ | ❌ | ✅ | ✅ ($2.95 or 20%) |
| **Depop** | ✅ | ✅ | ❌ | ✅ | ✅ (3.3% + $0.45) |
| **Mercari** | ✅ | ✅ | ❌ | ✅ | ✅ (2.9% + $0.50) |
| **Walmart** | ✅ | ✅ | ✅ | ✅ | ✅ (15% Referral) |
| **Grailed** | ✅ | ✅ | ✅ | ✅ | ✅ (9% Commission + 3.49%) |

---

## 🛡️ Bring Your Own Key (BYOK) AI Setup Guide

QuickSnipe is built on a **100% Client-Side BYOK Architecture**.
- Your API keys are stored exclusively in your local browser storage (`chrome.storage.local`).
- Requests travel directly from your browser to the official provider endpoint via HTTPS.
- **Zero middleman servers. Zero tracking. Zero subscription markups on AI tokens.**

### Supported AI Providers

| Provider | Recommended Model | Free Tier Available? | Key Signup Link |
|---|---|:---:|---|
| **Chrome Built-in AI** *(Zero Setup)* | `gemini-nano` (On-Device) | **100% Free & Private** (Zero keys needed) | Built into Chrome 131+ (Prompt API) |
| **Google Gemini** *(Recommended)* | `gemini-3.6-flash` / `gemini-2.0-flash` | **Yes** (15 Req/Min free) | [Google AI Studio](https://aistudio.google.com/app/apikey) |
| **Groq** | `llama-3.3-70b-versatile` | **Yes** (30 Req/Min free) | [Groq Console](https://console.groq.com/keys) |
| **OpenAI** | `gpt-4o-mini` / `gpt-4o` | Paid developer account | [OpenAI Platform](https://platform.openai.com/api-keys) |
| **Anthropic Claude** | `claude-3-7-sonnet` / `claude-3-5-haiku` | Paid developer account | [Anthropic Console](https://console.anthropic.com/settings/keys) |
| **DeepSeek** | `deepseek-chat` (V3) / `deepseek-reasoner` (R1) | Ultra-low cost | [DeepSeek Platform](https://platform.deepseek.com/api_keys) |
| **OpenRouter** | `google/gemini-2.0-flash-001` (200+ models) | Pay-as-you-go | [OpenRouter Keys](https://openrouter.ai/keys) |
| **Ollama** | `llama3.3` / `deepseek-r1:8b` / `qwen2.5` | **100% Free & Offline** | [Ollama.com](https://ollama.com/) |

### How to Configure Your API Key

1. Open QuickSnipe Sidepanel in Chrome by clicking the extension icon or pressing `Alt+Shift+S`.
2. Click the **⚙ (Settings)** button in the top right header.
3. Select your preferred **AI Provider** from the dropdown.
4. Paste your API key into the input field.
5. Choose your target model and click **Save Settings**.
6. The green checkmark will confirm successful connection.

> [!TIP]
> **No API Key? No Problem!**  
> If no cloud API key is configured, QuickSnipe automatically activates **Chrome Built-in AI (Gemini Nano)** when available, or seamlessly falls back to its **Smart Local Heuristic Engine**. All listing generators, calculators, and SEO tools function immediately out of the box with zero setup.

---

## 🔒 Privacy & Permissions Disclosures

QuickSnipe adheres strictly to Google Chrome Web Store Developer Policies and the principle of least privilege:

- **`storage`**: Saves your extension preferences, selected provider, API keys, and local swipe file snippets locally on your machine.
- **`activeTab`**: Reads public DOM text (titles, prices, bullets, reviews) from the active marketplace tab when you open the sidepanel or click an action button.
- **`sidePanel`**: Renders the multi-tab Creator Studio dashboard side-by-side with your listing workflow.
- **`scripting`**: Dispatches form values during 1-Click Form Autofill into your listing editor.
- **`tabs`**: Detects whether you are currently on Etsy, Amazon, eBay, Shopify, Poshmark, Depop, Mercari, Walmart, or Grailed to tailor tools in real time.
- **`alarms`**: Handles daily usage counter resets at midnight local time.
- **`contextMenus`**: Allows right-clicking any text on the web to "Save to QuickSnipe Swipe File".
- **`host_permissions`**: Allows direct HTTPS communication between your browser and official AI endpoints (`generativelanguage.googleapis.com`, `api.openai.com`, `api.groq.com`, `api.anthropic.com`, `api.deepseek.com`, `openrouter.ai`, or `localhost` for Ollama).

QuickSnipe **does not** collect personal identities, sell browsing history, or run remote tracking analytics.

---

## 🆘 Getting Support & Reporting Issues

If you run into an issue, check these resources before submitting a ticket:

1. Review [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for quick step-by-step diagnostic solutions.
2. Search existing [GitHub Issues](https://github.com/RadTome/QuickSnipe-support/issues) and [FAQ.md](FAQ.md).
3. If your issue is unresolved, choose the appropriate issue template:
   - [🐛 Bug Report](https://github.com/RadTome/QuickSnipe-support/issues/new?template=1_bug_report.yml)
   - [🛒 Marketplace Scraper Issue](https://github.com/RadTome/QuickSnipe-support/issues/new?template=3_marketplace_scraper_issue.yml) (Etsy, Amazon, eBay, Shopify, etc. changed their HTML)
   - [🔑 BYOK API / Model Issue](https://github.com/RadTome/QuickSnipe-support/issues/new?template=4_byok_api_issue.yml)
   - [💳 Billing & License Support](https://github.com/RadTome/QuickSnipe-support/issues/new?template=5_billing_license_support.yml)
   - [💡 Feature / Marketplace Request](https://github.com/RadTome/QuickSnipe-support/issues/new?template=2_feature_request.yml)

For complete support policies, response times, and billing inquiries, see [SUPPORT.md](SUPPORT.md).
