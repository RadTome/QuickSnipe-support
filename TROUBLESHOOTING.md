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
- [13. Direct developer feedback & feature requests (v1.4.0+)](#13-direct-developer-feedback--feature-requests-v140)
- [14. Mobile QR Photo Sync: Connection or Transfer Diagnostics](#14-mobile-qr-photo-sync-connection-or-transfer-diagnostics)
- [15. Cross-Lister: Batch Image ZIP Download Blocked or Incomplete](#15-cross-lister-batch-image-zip-download-blocked-or-incomplete)
- [16. Sourcing & Flip Tracker CRM: Data Backup & Schedule C CSV Export](#16-sourcing--flip-tracker-crm-data-backup--schedule-c-csv-export)
- [17. Barcode & UPC Scanner: Camera Permissions & Scan Diagnostics](#17-barcode--upc-scanner-camera-permissions--scan-diagnostics)

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
5. **Slow Generation Notice**: Because Gemini Nano executes on local CPU/RAM without cloud acceleration, generation typically takes 15–30 seconds. We strongly recommend getting a free API key for **Google Gemini** (`gemini-2.0-flash` / `gemini-3.6-flash`) from [Google AI Studio](https://aistudio.google.com/app/apikey) for instant sub-second generations.

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
3. QuickSnipe **v1.4.0** (and v1.3.3) includes unified dark slate typography (`#0f172a` / `#334155`), enhanced border visibility, and high-contrast notice banners throughout Light Glass mode.

---

### 13. Direct developer feedback & feature requests (v1.4.0+)

#### How It Works:
- QuickSnipe operates with zero remote telemetry, tracking servers, or analytics cookies.
- In **v1.4.0**, feedback and feature suggestions are submitted securely and directly to the developer via an encrypted Google Forms pipeline.
- An offline backup queue is automatically maintained in your local `chrome.storage.local.qs_user_feedbacks` so feedback is never lost if offline.
- To submit feedback or feature requests:
  1. Click **Feedback** in the sidepanel menu or use the **Feature Suggestions** form in **Settings ⚙**.
  2. Enter your category, thoughts, and optional email for direct follow-up.
  3. Click **Submit**—your submission is routed directly to the developer's roadmap.

---

### 14. Mobile QR Photo Sync: Connection or Transfer Diagnostics

#### Potential Issues & Symptoms:
- Phone camera opens `snap.html`, but status shows "Connecting..." or "Desktop session not found".
- Photo transfer sits at 0% or says "Negotiating P2P...".
- Camera permission prompt does not appear in mobile browser.

#### Solutions & Best Practices:
1. **Keep QuickSnipe Sidepanel Open on Desktop**:
   - The desktop sidepanel must remain actively open during QR generation and transfer. If you close the sidepanel or switch Chrome windows, the active WebRTC session will disconnect.
2. **Wi-Fi & VPN Configuration**:
   - For fastest peer-to-peer data channel transfer (<1s), ensure your mobile phone and PC are connected to the **same local Wi-Fi network**.
   - If either device has an active **VPN** (e.g. NordVPN, Mullvad, corporate VPN) or custom private DNS / ad-blocker enabled, disable it temporarily, as aggressive firewalls can block UDP WebRTC ICE candidates.
3. **Automated Cloudflare Bridge Fallback**:
   - If peer-to-peer WebRTC cannot traverse your router's NAT, QuickSnipe automatically falls back to an encrypted Cloudflare Worker Durable Object WebSocket bridge (`quicksnipe-bridge.radtome.com`). Look at the live status badge—once it turns green (`Desktop Ready`), transfers will complete seamlessly even across mobile cellular data (LTE/5G).
4. **Camera Permissions in Mobile Safari / Chrome**:
   - **iOS Safari**: Go to **Settings → Safari → Camera** and set to "Ask" or "Allow". If prompted on `snap.html`, tap **Allow**.
   - **Android Chrome**: Tap the lock/tune icon next to the address bar ➔ **Permissions → Camera** ➔ **Allow**.
   - **Gallery Alternative**: If you prefer not to use live camera view, tap **"Choose from Photos / Gallery"** to pick existing photos directly from your phone's photo library.
5. **Live Connection Diagnostics Console**:
   - At the bottom of `snap.html`, inspect the **Live Connection Diagnostics** panel.
   - If issues persist, tap **📋 Copy Log** to export the ICE candidate and DataChannel logs, then submit a [Bug Report](https://github.com/RadTome/QuickSnipe-support/issues/new?template=1_bug_report.yml).

---

### 15. Cross-Lister: Batch Image ZIP Download Blocked or Incomplete

#### Potential Causes:
- Chrome blocked multiple automatic file downloads or popups.
- The product listing page has not finished loading all high-resolution image assets.
- Third-party browser extensions (such as aggressive ad-blockers or download managers) intercepted the blob URL.

#### Solutions & Best Practices:
1. **Check Chrome Automatic Download Permissions**:
   - If a prompt appears in the address bar asking to allow downloads, click **Allow**.
   - You can verify settings in Chrome under `chrome://settings/content/automaticDownloads`.
2. **Client-Side Blob Generation**:
   - QuickSnipe downloads images directly from their CDN sources into local browser memory and bundles them using JSZip into a single `.zip` file on your device. Zero external image relay servers are used.
   - For listings with 15+ high-res images, allow 2–3 seconds for memory packaging before clicking away from the tab.
3. **Fallback Image Extraction**:
   - If a specific platform's CDN blocks direct blob fetching due to strict CORS headers, right-click the image on the page and select "Save image as...", or use QuickSnipe's **Mobile QR Photo Sync** (`snap.html`) to re-photograph or upload originals directly from your phone.

---

### 16. Sourcing & Flip Tracker CRM: Data Backup & Schedule C CSV Export

#### Potential Causes:
- Browser cache/history clearing unintentionally purged extension storage.
- Opening exported CSV in Excel shows corrupted characters or incorrect column wrapping.

#### Solutions & Best Practices:
1. **Local-First Storage Guarantee**:
   - All inventory entries, purchase receipts, COGS, sourcing locations, and tax records are stored 100% locally in `chrome.storage.local`. QuickSnipe never syncs your sensitive financial ledgers to any external cloud database.
2. **Preventing Accidental Data Loss**:
   - When clearing Chrome browsing data, **uncheck "Cookies and other site data" / "Hosted app data"** to avoid wiping extension local storage.
   - Regularly export a backup snapshot using **Settings ⚙ → Export / Import Backup** and save the JSON file to your local drive or cloud storage.
3. **IRS Schedule C CSV Formatting**:
   - The exported `.csv` file uses standard UTF-8 encoding with standard comma delimiters.
   - In **Microsoft Excel**: If currency columns format as plain text, select the column and format as `Currency ($)`. In **Google Sheets** or **Apple Numbers**, the file imports natively with complete formula headers.

---

### 17. Barcode & UPC Scanner: Camera Permissions & Scan Diagnostics

#### Potential Causes:
- Chrome camera permission is blocked or denied for extension views.
- Barcode is blurry, poorly lit, or reflecting harsh glare on glossy shrink-wrap.

#### Solutions & Best Practices:
1. **Camera Permission Grant**:
   - Ensure Chrome has operating system permission to access your webcam (Windows Settings → Privacy & Security → Camera).
   - If prompted by Chrome, click **Allow** for QuickSnipe camera access.
2. **Optimal Scanning Distance & Lighting**:
   - Hold the barcode parallel to your camera, approximately 4 to 8 inches away.
   - If scanning shiny packaging or cellophane wrap, tilt the box slightly (15–20 degrees) away from direct overhead light to avoid glare whitewashing the UPC barcode lines.
3. **Hardware Fallback**:
   - If your PC webcam lacks auto-focus, you can either enter the 12-digit UPC manually into the comp search bar or use **Mobile QR Photo Sync** on your phone to capture the barcode with your high-resolution phone camera.


