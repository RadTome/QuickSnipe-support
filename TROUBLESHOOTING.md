# 🛠️ QuickSnipe Troubleshooting & Diagnostic Guide

This guide provides targeted solutions for the most common technical issues, error codes, and edge cases encountered when using QuickSnipe.

---

## 📑 Quick Problem Index

- [1. Sidepanel displays "No listing detected" or stuck on "Reading..."](#1-sidepanel-displays-no-listing-detected-or-stuck-on-reading)
- [2. 1-Click Form Autofill does not populate the listing editor](#2-1-click-form-autofill-does-not-populate-the-listing-editor)
- [3. AI Generation Fails: `401 Unauthorized` / `Invalid API Key`](#3-ai-generation-fails-401-unauthorized--invalid-api-key)
- [4. AI Generation Fails: `429 Too Many Requests` (Rate Limited)](#4-ai-generation-fails-429-too-many-requests-rate-limited)
- [5. Competitor Sniper or Keyword Gap Matrix returns 0 listings](#5-competitor-sniper-or-keyword-gap-matrix-returns-0-listings)
- [6. Amazon Backend Terms byte meter turns red / exceeds 249 bytes](#6-amazon-backend-terms-byte-meter-turns-red--exceeds-249-bytes)
- [7. Ollama Local AI connection refused (`net::ERR_CONNECTION_REFUSED`)](#7-ollama-local-ai-connection-refused-neterr_connection_refused)
- [8. Upgraded to Pro but badge still says "FREE"](#8-upgraded-to-pro-but-badge-still-says-free)
- [9. Chrome Built-in AI (Gemini Nano) shows "Not Available" or "Model Needs Download"](#9-chrome-built-in-ai-gemini-nano-shows-not-available-or-model-needs-download)
- [10. Extension context invalidated / After extension update](#10-extension-context-invalidated--after-extension-update)
- [11. Floating QuickBar HUD positioning or dismissal](#11-floating-quickbar-hud-positioning-or-dismissal)
- [12. Light Glass Theme contrast or text legibility](#12-light-glass-theme-contrast-or-text-legibility)
- [13. Offline feedback recording & copying diagnostics](#13-offline-feedback-recording--copying-diagnostics)

---

### 1. Sidepanel displays "No listing detected" or stuck on "Reading..."

#### Potential Causes:
- The page is a Single Page Application (SPA) that loaded dynamically via client-side routing.
- The tab finished loading before the sidepanel connected to the content script.
- The URL is an account dashboard, home page, or unsupported sub-domain rather than a product or search page.

#### Solutions:
1. Click the **🔄 (Refresh)** button located in the top-right header of the QuickSnipe sidepanel.
2. Hard reload the active marketplace tab using `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac).
3. Ensure the active tab URL matches standard product or search URL patterns:
   - **Etsy**: `etsy.com/listing/...` or `etsy.com/search?q=...`
   - **Amazon**: `amazon.com/dp/...` or `amazon.com/gp/product/...` or `amazon.com/s?k=...`
   - **eBay**: `ebay.com/itm/...` or `ebay.com/sch/...`
   - **Shopify**: Any `/products/...` page.
   - **Poshmark**: `poshmark.com/listing/...`
   - **Depop**: `depop.com/products/...`
   - **Mercari**: `mercari.com/us/item/...`
   - **Walmart**: `walmart.com/ip/...`
   - **Grailed**: `grailed.com/listings/...`

---

### 2. 1-Click Form Autofill does not populate the listing editor

#### Potential Causes:
- The marketplace updated its internal form markup, classes, or test IDs.
- React, Vue, or Angular did not register standard DOM `.value` changes.
- Multiple browser windows or tabs are active and QuickSnipe targeted the wrong tab.

#### Solutions:
1. Click inside the active listing editor tab to make sure it has browser focus.
2. If using Etsy Shop Manager, ensure you are on the **Create/Edit Listing** page.
3. If using Amazon Seller Central, ensure you are on the **Add Products / Listing Edit** step.
4. **QuickBar Alternative**: Use the in-page **QuickBar HUD** floating on your editor page. Click `Autofill All` or click the field-specific paste icon.
5. **Fallback Option**: Every generated AI block has a **📋 Copy** button. If the platform is undergoing a major UI update, use 1-click clipboard copy to paste directly into the field while we push a selector patch.
6. Report the broken selector using our [Marketplace Scraper Issue Form](https://github.com/RadTome/QuickSnipe-support/issues/new?template=3_marketplace_scraper_issue.yml).

---

### 3. AI Generation Fails: `401 Unauthorized` / `Invalid API Key`

#### Potential Causes:
- Leading or trailing spaces were copied along with the API key.
- The API key was revoked, deleted, or entered under the wrong provider in Settings.

#### Solutions:
1. Open the QuickSnipe Sidepanel (`Alt+Q`) and click **⚙ (Settings)**.
2. Double-check that the **Provider** dropdown matches your key (e.g. do not paste a Groq key under OpenAI).
3. Delete the existing key, re-copy it freshly from your provider's developer console, and paste it back:
   - [Google AI Studio](https://aistudio.google.com/app/apikey)
   - [Groq Console](https://console.groq.com/keys)
   - [OpenAI Keys](https://platform.openai.com/api-keys)
   - [Anthropic Console](https://console.anthropic.com/settings/keys)
   - [DeepSeek Platform](https://platform.deepseek.com/api_keys)
   - [OpenRouter Keys](https://openrouter.ai/keys)
4. Click **Save Settings** and test generation again.

---

### 4. AI Generation Fails: `429 Too Many Requests` (Rate Limited)

#### Potential Causes:
- You exceeded the free tier rate limits (e.g., Google Gemini free tier allows 15 Requests/Minute; Groq allows 30 Requests/Minute).
- On paid providers (OpenAI, Anthropic, DeepSeek), your prepaid balance reached $0.00.

#### Solutions:
1. Wait 30–60 seconds for the provider rate window to reset, then retry.
2. In Settings, select a faster/lighter model (e.g., switch from preview models to `gemini-3.6-flash` or `gemini-2.0-flash`).
3. For OpenAI/Anthropic/DeepSeek, verify that your account has available balance on their billing settings page.

---

### 5. Competitor Sniper or Keyword Gap Matrix returns 0 listings

#### Potential Causes:
- The search page uses lazy-loading and competitor items haven't rendered into the DOM yet.
- The platform presented an interactive Cloudflare or Bot Captcha challenge.

#### Solutions:
1. Scroll down the search results page once so product cards render into view.
2. Ensure you have solved any marketplace captcha or verification prompt on the page.
3. Click the **🔄 (Refresh)** button in the QuickSnipe header and click **🎯 Snipe Search Page** again.

---

### 6. Amazon Backend Terms byte meter turns red / exceeds 249 bytes

#### Potential Causes:
- Amazon Seller Central strictly rejects backend search terms exceeding **249 UTF-8 bytes** (spaces and multi-byte characters count toward this limit).

#### Solutions:
1. In the QuickSnipe **Tools** tab under **Amazon Backend Search Terms**:
2. Click **🧹 Clean & Format (Auto-249B)**.
3. QuickSnipe will automatically:
   - Strip unnecessary stop words (`and`, `with`, `for`, `the`, etc.).
   - Remove punctuation and duplicate terms.
   - Truncate cleanly at the 249-byte UTF-8 boundary while preserving whole words.
4. Click **📋 Copy Search Terms** to paste into Amazon Seller Central.

---

### 7. Ollama Local AI connection refused (`net::ERR_CONNECTION_REFUSED`)

#### Potential Causes:
- The Ollama local server is not running on your computer.
- Ollama is blocking cross-origin requests from Chrome extensions.

#### Solutions:
1. Verify Ollama is installed and running in your terminal:
   ```bash
   ollama list
   ollama run llama3.3
   ```
2. Enable CORS in Ollama by setting the environment variable:
   - **Windows (PowerShell)**:
     ```powershell
     [System.Environment]::SetEnvironmentVariable('OLLAMA_ORIGINS', '*', 'User')
     ```
   - **Mac / Linux**:
     ```bash
     OLLAMA_ORIGINS="*" ollama serve
     ```
3. Restart the Ollama service and re-test in QuickSnipe.

---

### 8. Upgraded to Pro but badge still says "FREE"

#### Potential Causes:
- Chrome's background cache has not synced the recent Stripe/ExtensionPay webhook.

#### Solutions:
1. Open QuickSnipe Sidepanel and click **⚙ (Settings)**.
2. Scroll to the **Subscription & License** section.
3. Click **🔄 Refresh License Status** (or click **Manage Subscription**).
4. QuickSnipe will ping ExtensionPay and upgrade your local badge to **PRO** immediately.
5. If the issue persists, submit a [Billing & License Support Ticket](https://github.com/RadTome/QuickSnipe-support/issues/new?template=5_billing_license_support.yml) with your checkout email address.

---

### 9. Chrome Built-in AI (Gemini Nano) shows "Not Available" or "Model Needs Download"

#### Potential Causes:
- Browser version is older than Chrome 131.
- Gemini Nano on-device AI experimental flags are not enabled in `chrome://flags`.
- The on-device model has not finished downloading to your local machine (requires ~1.5–2 GB storage).

#### Solutions:
1. Check your Chrome version: Navigate to `chrome://settings/help` and verify you are running **Chrome 131 or newer**.
2. Enable experimental Prompt API flags in Chrome:
   - Go to `chrome://flags/#prompt-api-for-gemini-nano` and set to **Enabled**.
   - Go to `chrome://flags/#optimization-guide-on-device-model` and set to **Enabled BypassPerfRequirement**.
   - Relaunch Chrome.
3. Verify on-device model download status:
   - Navigate to `chrome://components`.
   - Locate **Optimization Guide On Device Model**.
   - Click **Check for update** and wait for the status to show **Up-to-date**.
4. If your device does not meet hardware requirements (requires minimum 4GB GPU / VRAM or 16GB system RAM), switch to **Google Gemini** in QuickSnipe Settings for free, instant cloud generation.

---

### 10. Extension context invalidated / After extension update

#### Potential Causes:
- Chrome auto-updated QuickSnipe in the background while listing tabs remained open.
- The content script on the existing page lost its active connection to the newly loaded background service worker.

#### Solutions:
1. Simply refresh the active marketplace tab (`F5` or `Ctrl+R`).
2. Re-open QuickSnipe using **`Alt+Q`** or click the extension icon.
3. Your previous session state (scraped items, mined reviews, draft copy) will automatically restore without data loss.

---

### 11. Floating QuickBar HUD positioning or dismissal

#### Potential Causes:
- The floating in-page QuickBar HUD is covering an editor field or button you need to click.

#### Solutions:
1. **Instant Minimize**: Press the **`Escape (Esc)`** key to immediately minimize the HUD into a compact unobtrusive floating badge.
2. **Reposition**: Click and drag the handle on the QuickBar to move it to any corner of your screen.
3. **Snooze**: Click the dropdown arrow on the QuickBar and select "Snooze for this site" to hide it during this session.
4. QuickBar state and positions are persisted strictly in isolated extension storage (`chrome.storage.local`) with zero footprint left on the host website.

---

### 12. Light Glass Theme contrast or text legibility

#### Potential Causes:
- Operating system high-contrast mode or browser zoom settings affecting frosted glass opacity.
- Using earlier versions before the WCAG AAA contrast tokens were unified.

#### Solutions:
1. In QuickSnipe, go to **Settings ⚙ → Appearance**.
2. If working in direct sunlight or bright display conditions, verify **Light Glass** mode is selected (or choose **Cyber Dark** for high contrast against white marketplace backdrops).
3. The upcoming **v1.3.2** update includes unified dark slate typography (`#0f172a` / `#334155`), enhanced border visibility, and high-contrast notice banners throughout Light Glass mode.

---

### 13. Offline feedback recording & copying diagnostics

#### How It Works:
- QuickSnipe operates with zero remote telemetry or tracking servers.
- Feedback submitted in the extension is saved strictly to local extension storage.
- To share feedback with the developer or request follow-up on a bug:
  1. Submit your rating and thoughts in the feedback modal.
  2. On the success screen, click **📋 Copy My Feedback**.
  3. Click **💬 Post on GitHub Discussions ↗** to paste your diagnostics directly into our community thread for direct assistance.

