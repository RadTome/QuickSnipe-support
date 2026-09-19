# ❓ QuickSnipe Frequently Asked Questions (FAQ)

Everything you need to know about QuickSnipe, safety, AI providers, marketplace compliance, and licensing.

---

## 📑 Category Index

- [🛡️ 1. Safety, Bans & Compliance](#-1-safety-bans--compliance)
- [🤖 2. Bring Your Own Key (BYOK) & AI Questions](#-2-bring-your-own-key-byok--ai-questions)
- [🛒 3. Marketplace Features & Tools](#-3-marketplace-features--tools)
- [⌨️ 4. Shortcuts, QuickBar & Themes](#-4-shortcuts-quickbar--themes)
- [💳 5. Plans, Licensing & Subscriptions](#-5-plans-licensing--subscriptions)
- [🚀 6. Release Updates (v1.3.2 Live & v1.3.3 Upcoming)](#-6-release-updates-v132-live--v133-upcoming)

---

## 🛡️ 1. Safety, Bans & Compliance

### Q: Is QuickSnipe safe to use with my Etsy, Amazon, or eBay seller account?
**A: Yes, 100% safe.**  
QuickSnipe operates strictly as a client-side productivity assistant in your local Google Chrome browser.
- It does **not** use automated headless bots, unauthorized API scrapers, or high-velocity requests.
- When you open the sidepanel or click a tool, it only inspects the public HTML elements already loaded on your screen.
- When you use **1-Click Form Autofill** or the **In-Page QuickBar**, it acts identically to a human user pasting text into the input fields.

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

### Q: How does Zero-Key Chrome Built-in AI (Gemini Nano) work?
**A:** If you are running Google Chrome 131+ with Chrome's native Prompt API enabled, QuickSnipe can leverage the local **Gemini Nano** model built right into your browser. It runs 100% on your machine with **zero API keys, zero internet required for generation, and complete privacy**.

### Q: Chrome Built-in AI vs. Cloud BYOK — What is the difference?
**A:**
- **Chrome Built-in AI (Gemini Nano)**: Zero setup, zero keys, 100% private and offline-capable. Runs locally on your CPU/RAM, which can be noticeably slow (~10–30s per generation).
- **Cloud BYOK (Google Gemini, Groq, Claude, OpenAI)**: Free or direct keys from cloud providers. **Blazing fast (<1 second inference)**. We strongly encourage all users to connect a free Google Gemini key from [Google AI Studio](https://aistudio.google.com/app/apikey) for 20x faster speed and superior strategic copy.

### Q: Can I use QuickSnipe 100% offline with Local AI?
**A: Yes.** QuickSnipe natively supports both **Chrome Built-in AI (Gemini Nano)** and **Ollama**. If you run Ollama locally on your computer (`http://localhost:11434`), you can generate listings and analyze text using models like `llama3.3`, `qwen2.5`, or `deepseek-r1:8b` completely offline with zero internet required for the AI engine.

### Q: What happens if I don't enter an API key?
**A:** QuickSnipe automatically checks if your browser has **Chrome Built-in AI (Gemini Nano)** available. If ready, it uses on-device AI out of the box with zero keys. If Chrome Built-in AI is not supported on your system, QuickSnipe seamlessly falls back to its deterministic **Smart Local Heuristic Engine** so all listing creators, profit calculators, SEO auditors, and text tools function immediately.

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
8. **Walmart** (Title formatting, key features, shelf keywords, reviews)
9. **Grailed** (Archive fashion, designer credentials, condition grading)

### Q: How does the Competitor Sales Velocity & Gross Revenue Estimator work?
**A:** When analyzing competing search results or product pages, QuickSnipe inspects review accumulation velocity, recent customer ratings, explicit buyer counts (such as Amazon's "bought in past month" badges), and platform sales signals. It calculates:
- Estimated monthly unit sales volume.
- Estimated gross monthly revenue run-rate.
- Velocity classification badges: **Unicorn 🦄**, **Fast Mover 🔥**, **Steady ⚡**, and **Emerging 🌱**.

### Q: What is the Listing Quality Scorecard (LQS)?
**A:** The LQS audits your draft listing before you hit publish. It scores attributes from **Grade S (Exceptional)** down to **Grade F**, inspecting:
- Platform title length constraints (e.g. Etsy 140c, eBay 80c, Amazon 200c).
- Missing marketplace tags or bullet points.
- Keyword gap coverage against top ranking search competitors.
- Price competitiveness relative to the active niche median price.
- It includes 1-click auto-fix buttons to immediately resolve identified gaps.

### Q: How does the Trademark Pre-Flight Guard work?
**A:** Before you publish or copy listing copy, QuickSnipe automatically scans your draft titles, bullet points, and tags against common registered trademarks and protected brand terms. If high-risk terms are detected, it alerts you with safe generic replacement suggestions to protect your seller account from intellectual property strikes.

### Q: How does the Omnichannel Cross-Market Sniper work?
**A:** When running a search snipe, you can toggle the **Omnichannel Multi-Market** switch to scrape competitor search results across Etsy, eBay, Poshmark, and Mercari simultaneously. QuickSnipe's smart category classifier automatically separates cross-category mismatched listings from pure competitor items so your pricing sweet-spot calculations remain accurate.

### Q: How does the Competitor Keyword Gap Matrix work?
**A:** When you are on a search result page, QuickSnipe extracts the top 24 organic ranking competitor listings, tokenizes their titles and tags, and compares them against your product. It highlights the high-value keywords that top sellers are using that you are currently missing, allowing you to click `⚡ Borrow Keywords` to immediately inject them into your listing.

### Q: What is the Amazon 249-Byte Rule?
**A:** Amazon Seller Central strictly enforces a limit of **249 bytes (UTF-8 encoded)** for backend generic keywords. If your backend search terms reach 250 bytes or more, Amazon's indexing system silently **discards the entire string**, causing your product to lose search visibility. QuickSnipe's **Amazon 249B Validator** strips stop words, deduplicates terms, and uses a native UTF-8 byte meter to ensure your terms are always 100% indexed.

### Q: How does 1-Click Form Autofill work?
**A:** When editing or creating a listing on Etsy, Amazon, eBay, Shopify, Poshmark, or Depop, click the **⚡ Autofill Form** button in QuickSnipe or in the floating **QuickBar**. QuickSnipe programmatically injects the generated Title, Description, Price, and Tags into the active editor form and dispatches synthetic input events so that React and Vue frameworks register the changes immediately.

---

## ⌨️ 4. Shortcuts, QuickBar & Themes

### Q: What keyboard shortcuts does QuickSnipe support?
- **`Alt+Q`** (Mac: `Alt+Q`): Instantly open or toggle the QuickSnipe Chrome Side Panel.
- **`Ctrl+Shift+S`** (Mac: `Cmd+Shift+S`): Save highlighted web text directly to your local QuickSnipe Swipe File.
- **`Escape (Esc)`**: Instantly minimize the floating in-page QuickBar HUD.

### Q: What is the floating QuickBar HUD?
**A:** The QuickBar is an unobtrusive, in-page floating toolbar that appears when you are editing listings on supported marketplace editors. It lets you inject draft copy, borrow keywords, or autofill fields directly without switching away from your editor. It runs within a sandboxed Shadow DOM to prevent CSS conflicts with host websites.

### Q: How do themes work?
**A:** QuickSnipe includes three visual display modes:
1. **Cyber Dark**: High-contrast dark mode tailored for late-night listing sessions.
2. **Light Glass**: Ultra-crisp frosted glass light theme.
3. **System Sync**: Automatically matches your operating system's light/dark appearance preference.
You can toggle themes in **Settings ⚙ → Appearance**.

---

## 💳 5. Plans, Licensing & Subscriptions

### Q: What is the difference between Free and Pro?
- **Free Plan**: Free forever. Gives you 3 full competitor snipes every day, a 4th limited snipe, and a 5th basic summary before daily reset at midnight local time. Includes access to listing generators, profit calculator, Amazon 249B validator, SEO auditor, and BYOK AI engine.
- **Pro Plan**: Unlimited daily generations, unrestricted competitor snipes, sales velocity & revenue run-rates, deep review objection miner, 1-click form autofill & QuickBar, priority scraper updates, and unlimited swipe file storage.

### Q: How does the free tier and daily snipe allowance work?
**A:** QuickSnipe provides an automatic daily free allowance for all sellers with zero credit card required:
- **Snipes 1 to 3**: 100% full, unrestricted competitor sales velocity, price corridors, and keyword gap analysis every day.
- **Snipe 4**: Limited competitor results with high-level velocity metrics.
- **Snipe 5**: Basic summary overview, after which generations pause until midnight local time.
- **Midnight Reset**: Your daily quota automatically resets every night at midnight local time.
- Upgrade to Pro anytime directly inside the extension if you need unlimited daily volume.

### Q: How much does QuickSnipe Pro cost?
**A:** QuickSnipe is designed with a pure-value pricing model that heavily undercuts traditional seller software ($20–$50/mo):
- **Pro Monthly**: **$7.99 / month** (includes 7-day free trial). Over 60% cheaper than legacy tools.
- **Pro Annual**: **$49 / year** (~$4.08/mo). Save nearly 50% compared to monthly.
- **Lifetime Deal**: **$69 one-time** (Limited Founder Offer). Pay once, keep Pro listing intelligence forever with zero ongoing server markups.

### Q: Can I use one Pro license on both my desktop and laptop?
**A: Yes.** Your Pro license is managed securely via ExtensionPay and linked to your email address. Simply enter the same email on any Chrome browser to activate your license.

### Q: How do I cancel or request a refund?
**A:** You can manage or cancel your subscription at any time by going to **Settings ⚙ → Manage Subscription**. If you need assistance or a refund within 14 days of purchase, please submit a [Billing & License Support Ticket](https://github.com/RadTome/QuickSnipe-support/issues/new?template=5_billing_license_support.yml).

---

## 🚀 6. Release Updates (v1.3.2 Live & v1.3.3 Upcoming)

### Q: What is coming in QuickSnipe v1.3.3 (Upcoming Release)?
**A:** QuickSnipe **v1.3.3** is the upcoming release currently staged and in review. It focuses on performance, background reliability, Pro experience polish, new accessible pricing, and interaction ergonomics:
- **New Value-First Pricing Stack**: Introduced $7.99/month, $49/year, and $69 one-time lifetime tiers that undercut traditional $20–$50/mo tools.
- **Pro Experience Polish**: Once QuickSnipe Pro is active, all promotional banners, upgrade buttons, and daily usage meters are cleanly hidden for an uncluttered workspace.
- **Lightweight Popup Boot**: Extracted a minimal site detector (`detect-site.js`, ~500B) replacing the 143KB parser bundle in popup context, accelerating popup opening by ~200ms.
- **Service Worker Keepalive & AI Timeout**: Added active keepalive port to prevent background worker termination during long AI generations, plus a 90-second client-side timeout wrapper.
- **QuickBar Security**: Eliminated `innerHTML` in in-page notifications, using safe DOM construction and `textContent` to prevent XSS.
- **W3C APG Accessibility**: Tab panels now include `tabindex="0"`, dynamic result containers include `aria-live="polite"`, and popup includes full screen reader progressbar roles.
- **Three-Way Theme Cycling**: Quick toggle now cycles smoothly through Dark, Light Glass, and System Auto with high-contrast light mode styling.
- **Conflict-Free Hotkey**: Changed swipe capture hotkey to `Alt+Shift+S` to prevent collisions with browser "Save As".
- **Swipe File Guidance**: Added helpful zero-state onboarding card when no snippets are saved.

### Q: What is the current live version in the Chrome Web Store?
**A:** QuickSnipe **v1.3.2** is the current stable release live on the [Chrome Web Store](https://chromewebstore.google.com/detail/quicksnipe-1-click-listing-reseller-assistant/aignalgmmlmnmofabamcdngdopabgkaa). It brought least-privilege security hardening (purging broad wildcard permissions), WCAG AAA high-contrast Light Glass mode, complete session state continuity, and W3C APG keyboard navigation.

### Q: Will updating from v1.3.2 to v1.3.3 erase my API keys, saved prompts, or swipes?
**A: No.** All user data, custom templates, API keys, and local swipe files persist safely in your browser's encrypted `chrome.storage.local`. Updates preserve your configuration seamlessly.

### Q: Where can I review the complete version history?
**A:** See the comprehensive [CHANGELOG.md](CHANGELOG.md) for detailed notes on all releases.

