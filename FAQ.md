# ❓ QuickSnipe Frequently Asked Questions (FAQ)

Everything you need to know about QuickSnipe, safety, AI providers, marketplace compliance, and licensing.

---

## 📑 Category Index

- [🛡️ 1. Safety, Bans & Compliance](#-1-safety-bans--compliance)
- [🤖 2. Bring Your Own Key (BYOK) & AI Questions](#-2-bring-your-own-key-byok--ai-questions)
- [🛒 3. Marketplace Features & Tools](#-3-marketplace-features--tools)
- [💳 4. Plans, Licensing & Subscriptions](#-4-plans-licensing--subscriptions)

---

## 🛡️ 1. Safety, Bans & Compliance

### Q: Is QuickSnipe safe to use with my Etsy, Amazon, or eBay seller account?
**A: Yes, 100% safe.**  
QuickSnipe operates strictly as a client-side productivity assistant in your local Google Chrome browser.
- It does **not** use automated headless bots, unauthorized API scrapers, or high-velocity requests.
- When you open the sidepanel or click a tool, it only inspects the public HTML elements already loaded on your screen.
- When you use **1-Click Form Autofill**, it acts identically to a human user pasting text into the input fields.

### Q: Does QuickSnipe store or see my seller account login credentials?
**A: Never.** QuickSnipe does not have access to passwords, credit card numbers, or session cookies. All actions run in-memory within Chrome.

### Q: Will using AI-generated descriptions get my listings flagged or penalized?
**A: No.** Modern search engines and e-commerce ranking algorithms (Etsy search, Amazon A9/A10, eBay Cassini, Google SEO) evaluate listing relevance, keyword density, readability, and customer conversion rates. QuickSnipe formats listings with proper capitalization, structured bullet points, and clean tag constraints that adhere strictly to platform guidelines.

---

## 🤖 2. Bring Your Own Key (BYOK) & AI Questions

### Q: What is "BYOK" (Bring Your Own Key)?
**A:** Traditional AI software charges you $30–$100/month just to pass your requests to OpenAI with huge profit markups. QuickSnipe uses a **BYOK architecture**: you connect your own free or direct API key (Google Gemini, Groq, OpenAI, Anthropic, DeepSeek, OpenRouter, or Ollama). You get unlimited speed, zero middleman markups, and complete control over your models.

### Q: What is the best FREE AI provider to start with?
**A:** We strongly recommend **Google Gemini**:
- Provides **15 free requests per minute** on `gemini-3.6-flash` and `gemini-2.0-flash`.
- No credit card required.
- Sign up in 30 seconds at [Google AI Studio](https://aistudio.google.com/app/apikey).

Another excellent free option is **Groq** ([console.groq.com](https://console.groq.com/keys)) for ultra-fast Llama 3.3 70B generation.

### Q: Where are my API keys stored?
**A:** Your API keys are stored exclusively in your local browser's encrypted `chrome.storage.local`. They never touch any developer server or third-party proxy.

### Q: Can I use QuickSnipe 100% offline with Local AI?
**A: Yes.** QuickSnipe natively supports **Ollama**. If you run Ollama locally on your computer (`http://localhost:11434`), you can generate listings and analyze text using models like `llama3.3`, `qwen2.5`, or `deepseek-r1:8b` completely offline with zero internet required for the AI engine.

### Q: What happens if I don't enter an API key?
**A:** QuickSnipe includes a built-in **Smart Local Heuristic Engine**. If no key is configured, the extension automatically falls back to deterministic rule-based generators so you can still use the listing creators, profit calculators, SEO auditors, and text tools immediately.

---

## 🛒 3. Marketplace Features & Tools

### Q: Which e-commerce platforms are supported?
**A:** QuickSnipe provides dedicated scrapers, listing generators, and fee calculators for:
1. **Etsy** (Handmade, vintage, digital items, shop manager)
2. **Amazon** (FBA & FBM product detail pages, backend search terms)
3. **eBay** (Cassini title optimization, item specifics)
4. **Shopify** (DTC storefronts, product JSON-LD parser)
5. **Poshmark** (Closet listings, brand extraction)
6. **Depop** (Streetwear/vintage hashtags and measurements)
7. **Mercari** (Product listings, condition tags, fast-sale hooks)

### Q: How does the Competitor Keyword Gap Matrix work?
**A:** When you are on a search result page, QuickSnipe extracts the top 24 organic ranking competitor listings, tokenizes their titles and tags, and compares them against your product. It highlights the high-value keywords that top sellers are using that you are currently missing, allowing you to click `⚡ Borrow Keywords` to immediately inject them into your listing.

### Q: What is the Amazon 249-Byte Rule?
**A:** Amazon Seller Central strictly enforces a limit of **249 bytes (UTF-8 encoded)** for backend generic keywords. If your backend search terms reach 250 bytes or more, Amazon's indexing system silently **discards the entire string**, causing your product to lose search visibility. QuickSnipe's **Amazon 249B Validator** strips stop words, deduplicates terms, and uses a native UTF-8 byte meter to ensure your terms are always 100% indexed.

### Q: How does 1-Click Form Autofill work?
**A:** When editing or creating a listing on Etsy, Amazon, eBay, Shopify, Poshmark, or Depop, click the **⚡ Autofill Form** button in QuickSnipe. QuickSnipe programmatically injects the generated Title, Description, Price, and Tags into the active editor form and dispatches synthetic input events so that React and Vue frameworks register the changes immediately.

---

## 💳 4. Plans, Licensing & Subscriptions

### Q: What is the difference between Free and Pro?
- **Free Plan**: Free forever. Access to listing generators (with standard daily generation quotas), profit calculator, Amazon 249B validator, SEO auditor, and BYOK AI engine.
- **Pro Plan**: Unlimited daily generations, multi-platform competitor snipes, deep review objection miner, 1-click form autofill, priority scraper updates, and unlimited swipe file storage.

### Q: How does the 7-day free trial work?
**A:** When you install QuickSnipe, you receive an automatic 7-day unrestricted trial of all Pro features. No credit card is required to try the standard features.

### Q: Can I use one Pro license on both my desktop and laptop?
**A: Yes.** Your Pro license is managed securely via ExtensionPay and linked to your email address. Simply enter the same email on any Chrome browser to activate your license.

### Q: How do I cancel or request a refund?
**A:** You can manage or cancel your subscription at any time by going to **Settings ⚙ → Manage Subscription**. If you need assistance or a refund within 14 days of purchase, please submit a [Billing & License Support Ticket](https://github.com/RadTome/quicksnipe-support/issues/new?template=5_billing_license_support.yml).
